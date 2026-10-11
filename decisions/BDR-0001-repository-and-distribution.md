# BDR-0001: ブランドの正本を独立した公開リポジトリに置き、利用側へは複製で配る

## ステータス

採用(2026-10-12)

## コンテキスト

色・書体・語調・図の作法を、publishing-hub(発信)、process-compass(標準とサイト)、digital-garden(個人サイト)の 3 つで共有したい。いずれも GitHub Actions で検査・ビルドし、GitHub Pages へ公開する。私有リポジトリ `personal` には人物像の一次資料があるが、公開できない。

## 決定

- 正本は新しい公開リポジトリ `kusaka-brand` に置く。人物像から引いた属性は公開してよい形に言い換えて `brand/00-foundation.md` に書き、一次資料は `personal` に残す
- 利用側へは `scripts/brand-sync.mjs` で `brand/` ディレクトリへ**複製**し、`manifest.json`(版・コミット・各ファイルのハッシュ)で乖離を検査する
- `tokens/tokens.json` だけを手で編集し、`dist/` は生成する。`--check` で陳腐化を止める

## 検討した選択肢

| 案 | 採らなかった理由 |
| --- | --- |
| git submodule | GitHub Pages のビルドと Zenn の検査で recursive checkout を要し、clone した人が `submodule update` を忘れる。process-compass の `template/` で経験済みの負担 |
| npm の git 依存(`github:Takenori-Kusaka/kusaka-brand#v1`) | 正本が公開される前は CI が動かない。版の固定が package-lock に隠れ、manifest のような人が読める台帳にならない。フォント 26MB を `npm ci` のたびに取得する |
| `personal` の中に置く | 私有のため、利用側の CI から読めない。人物像の一次資料と規約が混ざる |
| process-compass の中に置く | 標準のリポジトリに個人ブランドが同居し、標準の中立性(他組織が従う規格)を損なう |

## 影響

- 利用側に `brand/` が 26MB 増える(フォント)。許容する。フォントを持たない利用側(process-compass)は、描画を publishing-hub で行い PNG と SVG とメタ情報だけを置く
- 正本の公開(GitHub へ push)は本人が行う。公開まではローカルのパスで同期する
