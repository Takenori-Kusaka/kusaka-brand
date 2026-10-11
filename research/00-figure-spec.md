# 図版の仕様(ピットイン方式の概要 — 作業メモ)

2026-10-12。記事・派生物・process-compass で使う図の一覧と、媒体ごとの派生の設計。
ブランド(色・フォント)は research/01〜03 の結果で確定する。ここでは「何を」「どの寸法で」「何を見せるか」だけを決める。

## 読めるサイズの規則(Zenn の縮小から逆算)

- Zenn の本文幅: PC 約 700px、幅 390px の電話で約 360px(publishing-hub docs/diagrams.md の実測)
- 自然幅 1200px のキービジュアルは、電話で 0.30 倍。**ラベルは 36px 以上、題は 56px 以上**(電話で 11px / 17px)
- 自然幅 720px の節図は、電話で 0.50 倍。**ラベルは 24px 以上**(電話で 12px)
- 原則: ラベルの最小フォントサイズ ≥ 自然幅 / 32

## 階層(tier)

| tier | 目的 | 作り方 | 寸法 |
| --- | --- | --- | --- |
| keyvisual | 一目でわかる。OGP・SNS・記事冒頭 | 手書き SVG テンプレート(ブランドトークン) → resvg | 1200×675(16:9) ほか派生 |
| section | 記事の節・標準の章に 1 枚 | 手書き SVG テンプレート | 720×(540〜900) |
| schematic | 構成図・コンポーネント図 | D2 + TALA(既存) | 自然幅 ≤ 480 |

## 図の一覧

| id | 内容 | tier | 使う場所 |
| --- | --- | --- | --- |
| kv-overview | 二層(外殻=低頻度の事業判断、内側=速い AI 協調ループ)。内側のループ上に「人が触る」ピット(仕様承認・独立レビュー)を朱で置く。題と一文の要約を図の中に置く | keyvisual | Zenn 記事冒頭、LinkedIn 画像、Bluesky 画像、note 見出し画像、process-compass index |
| kv-overview-og | kv-overview の 1200×630(OGP / LinkedIn カード)版 | keyvisual | OGP |
| kv-overview-square | 1080×1080 版(LinkedIn / Bluesky の縦長表示) | keyvisual | SNS |
| kv-overview-note | 1280×670 版(note の見出し画像) | keyvisual | note |
| fig-bandwidth | 生成が速くなる→変更単位が増える→判定の回数が増える→判定者の帯域が飽和→印を押す操作へ縮退 | section | 記事 2 節 |
| fig-two-layer | 外殻と内側。内側の 4 工程(仕様承認(人)→AI 実装→自動検証(機械)→独立レビュー(人)) | section | 記事 3 節、標準 第2章 |
| fig-gates | 8 ゲートをピットレーンに並べる。G-4・G-5 を「省略不可」で強調。判定者を添える | section | 記事 4 節、標準 第4章 |
| fig-roles | 6 つの席と、実行(R)だけを担う AI | section | 記事 5 節、標準 第3章 |
| fig-principles | 判定者は1人 / 作成者は承認しない / AI は結果責任を持てない | section | 記事 6 節 |
| fig-ratchet | L1〜L3 と、引き上げ=判定、引き下げ=自動の非対称(ラチェット) | section | 記事 7 節、標準 第5章 |
| fig-start | 3 ステップ(テンプレート → /process-init → /pit) | section | 記事 11 節、Qiita |

## 媒体別の粒度

| 媒体 | 図 | 粒度 |
| --- | --- | --- |
| Zenn 記事 | kv + section 全部 | 体系(全体→節) |
| Zenn 本 | 既存の Mermaid を kv-overview で補う(第1章・第6章) | 全体 |
| Qiita | fig-start + fig-gates(省略可否つき) | 手順 |
| note | kv-overview-note のみ(本文に図の記法は置けない) | 比喩 |
| LinkedIn | kv-overview(1200×627 相当) | 構造 1 枚 |
| Bluesky | kv-overview-square + alt | 1 枚 |
| process-compass | kv-overview(index)、fig-two-layer(第2章)、fig-gates(第4章)、fig-roles(第3章)、fig-ratchet(第5章) | 章ごと |

## キービジュアルの構図(案)

1. 画面左上: 肩「AI が実装する時代の開発プロセス」+ 題「ピットイン方式」
2. 中央: 角丸の長円のサーキット(内側の速いループ)。上辺に「AI 実装」「自動検証(機械)」、下辺にピットレーン。ピットレーンの中に朱の箱で「仕様承認(人)」「独立レビュー(人)」
3. 外周: 細い環(外殻)。「企画承認」「ステージ移行」「リリース決裁」の 3 点を小さく置き、「低頻度・既存の稟議」と添える
4. 下部: 一文の要約「マシンは人間より速い。それでも、決められた場所では必ず人間が触る。」
5. 右下: 小さく「PIT-IN / process-compass」の署名

色の役割(確定はブランドで): 機械=藍、人の判定=朱、外殻=墨の細線、地=和紙。
