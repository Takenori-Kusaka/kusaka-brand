// トークンの意味的な組み合わせが WCAG 2.x のコントラスト比を満たすかを検査する(brand/01-color.md 3 節)。
//
//   node scripts/check-contrast.mjs
//
// 検査する組:
//   本文        text.primary / surface.page      ≥ 7.0 (AAA)
//   補助文      text.secondary / surface.page    ≥ 4.5 (AA)
//   リンク      text.link / surface.page         ≥ 4.5
//   見出し      brand.primary / surface.page     ≥ 4.5
//   合図の文字  brand.accentText / surface.page  ≥ 4.5
//   合図の面    brand.accent / surface.page      ≥ 3.0 (非文字)
//   面の上の文字 text.inverse / surface.machine  ≥ 4.5、text.inverse / surface.human ≥ 3.0(太字 24px 以上に限る)
//   採用        state.success / surface.page     ≥ 4.5
//   暫定        state.warningText / state.warningBg ≥ 4.5
//   却下の文字  state.dangerText / surface.page  ≥ 4.5
//   ダーク      dark.* の同じ組

import { contrast } from './color-math.mjs';
import { loadTokens, flatten, resolveRefs } from './build-tokens.mjs';

const flat = resolveRefs(flatten(loadTokens()));
const get = (k) => {
  if (!(k in flat)) throw new Error(`トークン ${k} がありません`);
  return flat[k];
};

const PAIRS = [
  ['color.text.primary', 'color.surface.page', 7],
  ['color.text.secondary', 'color.surface.page', 4.5],
  ['color.text.link', 'color.surface.page', 4.5],
  ['color.brand.primary', 'color.surface.page', 4.5],
  ['color.brand.accentText', 'color.surface.page', 4.5],
  ['color.brand.accent', 'color.surface.page', 3],
  ['color.text.inverse', 'color.surface.machine', 4.5],
  ['color.text.inverse', 'color.surface.human', 3],
  ['color.state.success', 'color.surface.page', 4.5],
  ['color.state.warningText', 'color.state.warningBg', 4.5],
  ['color.state.dangerText', 'color.surface.page', 4.5],
  ['dark.color.text.primary', 'dark.color.surface.page', 7],
  ['dark.color.text.secondary', 'dark.color.surface.page', 4.5],
  ['dark.color.text.link', 'dark.color.surface.page', 4.5],
  ['dark.color.brand.accent', 'dark.color.surface.page', 4.5],
  ['dark.color.state.success', 'dark.color.surface.page', 4.5],
];

let failed = 0;
for (const [fg, bg, min] of PAIRS) {
  const c = contrast(get(fg), get(bg));
  const ok = c >= min;
  if (!ok) failed++;
  console.log(`  ${ok ? '✓' : '✖'} ${fg} / ${bg}  ${c.toFixed(2)} (≥ ${min})`);
}
console.log(failed ? `contrast: ${failed} 組が下限を下回ります` : `contrast: ${PAIRS.length} 組すべて合格`);
process.exit(failed ? 1 : 0);
