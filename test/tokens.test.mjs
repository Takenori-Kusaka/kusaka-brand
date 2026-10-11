import { test } from 'node:test';
import assert from 'node:assert';
import { flatten, resolveRefs, loadTokens, buildAll } from '../scripts/build-tokens.mjs';
import { hexToOklch, oklchToHex, contrast, ramp, RAMP_L } from '../scripts/color-math.mjs';
import { substitute, smallestFontSize } from '../scripts/render-svg.mjs';

test('flatten と参照の解決', () => {
  const flat = resolveRefs(flatten({ a: { b: { $value: '#fff' } }, c: { $value: '{a.b}' } }));
  assert.deepStrictEqual(flat, { 'a.b': '#fff', c: '#fff' });
  assert.throws(() => resolveRefs({ x: '{nope}' }));
});

test('tokens.json のすべての参照が解決し、dist が生成できる', () => {
  const flat = resolveRefs(flatten(loadTokens()));
  for (const [k, v] of Object.entries(flat)) assert.ok(!/^\{.*\}$/.test(String(v)), `${k} が未解決`);
  const out = buildAll();
  assert.ok(out['css/brand.css'].includes('--kb-color-ai-800: #253d73'));
  assert.ok(out['d2/theme.d2'].includes('AA2:'));
});

test('OKLCH の往復と段の明度', () => {
  const o = hexToOklch('#253d73');
  assert.ok(Math.abs(o.L - 0.371) < 0.01);
  const back = oklchToHex(o);
  assert.strictEqual(back, '#253d73');
  const r = ramp('#223a70');
  assert.ok(Math.abs(hexToOklch(r[700]).L - RAMP_L[700]) < 0.01);
});

test('段 600 以上は生成りの上で AA(4.5)、700 は 6 以上、800 以上は AAA(7)。全色相で共通', () => {
  const flat = resolveRefs(flatten(loadTokens()));
  for (const hue of ['ai', 'human', 'growth']) {
    assert.ok(contrast(flat[`color.${hue}.600`], flat['color.paper.100']) >= 4.5, `${hue}.600`);
    assert.ok(contrast(flat[`color.${hue}.700`], flat['color.paper.100']) >= 6, `${hue}.700`);
    assert.ok(contrast(flat[`color.${hue}.800`], flat['color.paper.100']) >= 7, `${hue}.800`);
  }
});

test('SVG の占位子の置換と、補助ラベルを除いた最小フォント', () => {
  const flat = { 'color.ai.800': '#253d73', 'font.family.heading': ['BIZ UDPGothic'] };
  const svg = substitute('<text fill="{{color.ai.800}}" font-family="{{font.heading}}" font-size="38">a</text><text data-tier="secondary" font-size="12">b</text>', flat);
  assert.ok(svg.includes('fill="#253d73"') && svg.includes('font-family="BIZ UDPGothic"'));
  assert.strictEqual(smallestFontSize(svg), 38);
  assert.throws(() => substitute('{{color.nope}}', flat));
});
