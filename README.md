# kusaka-brand ── 日下武紀の個人ブランド基盤

色・書体・語調・図の作法を、**設計トークンと描画器**として配布するリポジトリです。文章・図・サイト・スライド・名刺まで、日下武紀の名で出すものはここを正本にします。2026 年に定め、以後 60 年、加法的に育てます(破壊的な変更は版で告げます)。

> これでいい、と理性で納得できるものを、静かに、長く。

## 何が入っているか

| 置き場 | 内容 | 正本か生成物か |
| --- | --- | --- |
| `brand/` | ブランドブック(基盤・色・書体・語調・用字用語・図・名乗り・運営) | 正本 |
| `tokens/tokens.json` | 設計トークン(W3C Design Tokens 形式のサブセット)。色・書体・寸法 | 正本。唯一の手編集ファイル |
| `dist/` | トークンの生成物(平坦な JSON、CSS カスタムプロパティ、Tailwind の preset、D2 のテーマ) | 生成物。`npm run build` |
| `fonts/` | 同梱する書体(BIZ UDPGothic、Noto Sans JP、UDEV Gothic。すべて OFL 1.1) | 正本(外部由来) |
| `scripts/` | トークンの生成、SVG テンプレートの描画、色の数学、コントラストの検査 | 正本 |
| `decisions/` | ブランド決定記録(BDR)。採らなかった案も残す | 正本 |
| `research/` | 一次調査メモ(ブランド体系・色彩・図・セルフレビュー)。決定の根拠 | 記録 |

## 使い方(利用側のリポジトリ)

利用側は `brand/` ディレクトリへ**複製**して使います(git の依存や submodule に頼らず CI で動かすため)。複製の台帳 `brand/manifest.json` と正本の乖離は利用側の検査が止めます。

```bash
# publishing-hub / process-compass / digital-garden で
node scripts/brand-sync.mjs ../kusaka-brand   # 複製
node scripts/brand-sync.mjs --check           # 乖離の検査(npm run check に含める)
```

複製したあとに使えるもの:

- `brand/dist/css/brand.css` ── `--kb-color-ai-800` のような CSS カスタムプロパティ(ライト/ダーク)
- `brand/dist/tailwind/preset.mjs` ── Tailwind の `presets` に渡す
- `brand/dist/d2/theme.d2` ── D2 の図で `...@brand/dist/d2/theme.d2` として読み込む(theme-overrides と human / machine / soft のクラス)
- `brand/scripts/render-svg.mjs` ── `{{color.ai.800}}` の占位子を持つ SVG テンプレートを、同梱フォントで決定的に PNG へ描く

## このリポジトリで

```bash
npm install
npm run build     # tokens.json → dist/
npm run check     # dist の鮮度、コントラスト、テスト
```

## 版

semver。**見た目が変わる値の変更(色・書体)は major**、追加は minor、誤記の修正は patch(brand/07-governance.md)。利用側は `manifest.json` の `version` で複製した版を知ります。

## ライセンス

文書は CC BY 4.0、コードは MIT、書体は各 LICENSE(OFL 1.1)。名乗り(氏名・ワードマーク)は流用できません。`LICENSE.md`。
