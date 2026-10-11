// tokens/tokens.json(W3C Design Tokens 形式のサブセット)から、各環境向けの成果物を生成する。
//
//   node scripts/build-tokens.mjs            # dist/ を書く
//   node scripts/build-tokens.mjs --check    # 書かずに、dist/ が最新かだけ確かめる(CI 用)
//
// 生成物:
//   dist/tokens.flat.json   {"color.ai.700": "#1C2A44", ...} 平坦な辞書。描画器と検査が読む
//   dist/css/brand.css      :root { --kb-color-ai-700: #1C2A44; ... } とダークモードの上書き
//   dist/tailwind/preset.mjs  Tailwind の preset(theme.extend.colors / fontFamily)
//   dist/d2/theme.d2        D2 の vars(theme-overrides と classes)。図のソースから `...@theme` で読む
//
// 正本は tokens/tokens.json だけ。dist/ は生成物であり手で編集しない。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TOKENS = path.join(ROOT, 'tokens/tokens.json');
const DIST = path.join(ROOT, 'dist');

export function loadTokens() {
  return JSON.parse(fs.readFileSync(TOKENS, 'utf8'));
}

/** {a:{b:{$value:1}}} → {"a.b": 1}。$ で始まるキーはメタ情報 */
export function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('$')) continue;
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && '$value' in v) {
      out[key] = v.$value;
    } else if (v && typeof v === 'object') {
      flatten(v, key, out);
    }
  }
  return out;
}

/** "{color.ai.700}" のような参照を解決する */
export function resolveRefs(flat) {
  const out = { ...flat };
  const re = /^\{([^}]+)\}$/;
  let changed = true;
  let guard = 0;
  while (changed && guard++ < 20) {
    changed = false;
    for (const [k, v] of Object.entries(out)) {
      const m = typeof v === 'string' && re.exec(v);
      if (m) {
        if (!(m[1] in out)) throw new Error(`トークン ${k} の参照 {${m[1]}} が見つかりません`);
        out[k] = out[m[1]];
        changed = true;
      }
    }
  }
  return out;
}

const cssName = (key) => `--kb-${key.replace(/\./g, '-')}`;

export function toCss(flat, dark) {
  const lines = [':root {'];
  for (const [k, v] of Object.entries(flat)) {
    if (k.startsWith('dark.')) continue;
    lines.push(`  ${cssName(k)}: ${Array.isArray(v) ? v.join(', ') : v};`);
  }
  lines.push('}');
  if (dark && Object.keys(dark).length) {
    const block = Object.entries(dark).map(([k, v]) => `    ${cssName(k)}: ${v};`).join('\n');
    lines.push('', '@media (prefers-color-scheme: dark) {', '  :root:not([data-theme="light"]) {', block, '  }', '}', '', ':root[data-theme="dark"] {', block.replace(/^ {2}/gm, ''), '}');
  }
  return `/* 生成物。正本は tokens/tokens.json。scripts/build-tokens.mjs が書く */\n${lines.join('\n')}\n`;
}

export function toTailwind(flat) {
  const colors = {};
  for (const [k, v] of Object.entries(flat)) {
    if (!k.startsWith('color.')) continue;
    const parts = k.split('.').slice(1);
    let cur = colors;
    for (const p of parts.slice(0, -1)) cur = cur[p] ??= {};
    cur[parts.at(-1)] = v;
  }
  const fontFamily = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k.startsWith('font.family.')) fontFamily[k.split('.').pop()] = Array.isArray(v) ? v : [v];
  }
  return `// 生成物。正本は tokens/tokens.json。scripts/build-tokens.mjs が書く\nexport default ${JSON.stringify({ theme: { extend: { colors, fontFamily } } }, null, 2)};\n`;
}

export function toD2(flat) {
  // D2 のテーマ色の割り当て(docs: https://d2lang.com/tour/themes/ の theme-overrides)
  const map = {
    N1: flat['color.ink.900'],
    N2: flat['color.ink.700'],
    N3: flat['color.ink.500'],
    N4: flat['color.ink.300'],
    N5: flat['color.ink.200'],
    N6: flat['color.paper.200'],
    N7: flat['color.paper.100'],
    B1: flat['color.ai.900'],
    B2: flat['color.ai.700'],
    B3: flat['color.ai.300'],
    B4: flat['color.ai.200'],
    B5: flat['color.ai.100'],
    B6: flat['color.paper.100'],
    AA2: flat['color.human.600'],
    AA4: flat['color.human.300'],
    AA5: flat['color.human.100'],
    AB4: flat['color.growth.600'],
    AB5: flat['color.growth.100'],
  };
  const lines = ['# 生成物。正本は tokens/tokens.json。scripts/build-tokens.mjs が書く', 'vars: {', '  d2-config: {', '    theme-overrides: {'];
  for (const [k, v] of Object.entries(map)) if (v) lines.push(`      ${k}: "${v}"`);
  lines.push('    }', '  }', '}', '', 'classes: {');
  lines.push(`  human: { style: { fill: "${flat['color.human.600']}"; font-color: "${flat['color.paper.100']}"; stroke: "${flat['color.human.600']}"; bold: true } }`);
  lines.push(`  machine: { style: { fill: "${flat['color.ai.700']}"; font-color: "${flat['color.paper.100']}"; stroke: "${flat['color.ai.700']}" } }`);
  lines.push(`  soft: { style: { fill: "${flat['color.paper.200']}"; stroke: "${flat['color.ink.300']}"; stroke-width: 2; border-radius: 12 } }`);
  lines.push('}');
  return `${lines.join('\n')}\n`;
}

export function buildAll() {
  const tokens = loadTokens();
  const flat = resolveRefs(flatten(tokens));
  const dark = {};
  for (const [k, v] of Object.entries(flat)) if (k.startsWith('dark.')) dark[k.slice(5)] = v;
  const light = Object.fromEntries(Object.entries(flat).filter(([k]) => !k.startsWith('dark.')));
  return {
    'tokens.flat.json': `${JSON.stringify(flat, null, 2)}\n`,
    'css/brand.css': toCss(light, dark),
    'tailwind/preset.mjs': toTailwind(light),
    'd2/theme.d2': toD2(light),
  };
}

function main() {
  const check = process.argv.includes('--check');
  const outputs = buildAll();
  let stale = 0;
  for (const [rel, content] of Object.entries(outputs)) {
    const p = path.join(DIST, rel);
    const cur = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
    if (cur === content) continue;
    stale++;
    if (check) {
      console.error(`  dist/${rel} が tokens/tokens.json と一致しません。npm run build で生成し直してください`);
    } else {
      fs.mkdirSync(path.dirname(p), { recursive: true });
      fs.writeFileSync(p, content);
      console.log(`  書きました: dist/${rel}`);
    }
  }
  if (check) {
    console.log(stale ? `tokens: dist が古い(${stale} 件)` : 'tokens: dist は最新です');
    process.exit(stale ? 1 : 0);
  }
  console.log(stale ? `tokens: ${stale} 件を生成しました` : 'tokens: dist は最新です');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
