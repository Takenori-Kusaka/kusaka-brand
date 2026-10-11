# 07 運営 ── どこで管理し、どう配り、どう変えるか

## 1. 正本と複製

| 役割 | 場所 |
| --- | --- |
| 正本 | このリポジトリ `kusaka-brand`(公開。GitHub: Takenori-Kusaka/kusaka-brand) |
| 複製 | 利用側の `brand/` ディレクトリ。`scripts/brand-sync.mjs <正本のパス>` が `dist/`、`fonts/`、描画器、`tokens.json`、ライセンスを写し、`brand/manifest.json` に版・コミット・各ファイルのハッシュを書く |
| 乖離の検査 | 利用側の `npm run check` の `brand` 段階(`brand-sync.mjs --check`)。複製を手で編集すると止まる |

利用側(2026-10-12 時点):

| リポジトリ | 使うもの |
| --- | --- |
| publishing-hub | 図の描画器、D2 のテーマ、文章の規約(AGENTS.md から参照) |
| process-compass | 図(SVG のソースと PNG)、サイトの色(Starlight のカスタム CSS) |
| digital-garden | サイトの色と書体(`brand.css`、Tailwind の preset) |

submodule と npm の git 依存を採らなかった理由は `decisions/BDR-0001-repository-and-distribution.md`。

## 2. 版(semver)

| 変更 | 版 | 例 |
| --- | --- | --- |
| 見た目が変わる値の変更(色の値、書体の差し替え、段の明度) | **major** | 丹を鉛丹に変える |
| トークン・規則・テンプレートの追加、文書の加筆 | minor | 4:5 のマスターを足す |
| 誤記・リンク切れ・検査の修正 | patch | ── |
| トークンの削除・改名 | major(非推奨 → 移行 → 削除の 3 段階。猶予は 2 つの minor) | ── |

業界の慣行は「値変更は minor(ビルドが壊れないから)」ですが、個人ブランドの正本では**見た目が変わる変更は読者にとって破壊的**なので major にします(`research/01-brand-systems-survey.md` 5.3)。

利用側は `manifest.json` の `version` を見て、major が上がったら図を描き直し(`figures:svg --all`)、サイトを目で確かめます。

## 3. 変える手順

1. `research/` に根拠を集める(世の中がどうなっているかを踏まえない変更はしない)
2. 競合する案を 2 つ以上立て、`decisions/BDR-NNNN` に採った案と採らなかった案を書く
3. `tokens/tokens.json` か `brand/*.md` を変え、`npm run check`(dist の鮮度、コントラスト、テスト)を通す
4. `CHANGELOG.md` の冒頭に版と「見た目が変わるか」を書く
5. 利用側で `brand:sync` し、図を描き直し、`npm run check` を通す

採用済みの BDR の本文は書き換えません。決定の変更は新しい BDR で置き換えます(process-compass の ADR と同じ運用)。

## 4. 訂正台帳

公開した文章・図の誤りは、記事の末尾に訂正の注記を置き、利用側の `docs/corrections.yaml` に 1 行を足します(誤→正、原因、レビュー記録の `not_checked` に入っていたか、この訂正から足した規則)。訂正が検査規則に還流したかを追うためです。訂正は成果であり、隠しません。

## 5. 60 年のための条項

- **原則を正本にし、テンプレートを生成物にする**。テンプレートは古びる(IBM の Noyes)
- **加法的に増やす**。削る前に非推奨の期間を置く。変更のための変更をしない(Vignelli の Equity)
- **外部の基準に錨を置く**。WCAG、JLReq、公用文作成の考え方、OFL。流行でなく、変わりにくい基準に合わせる
- **時間を明示する**。この文書の判断は 2026-10-12 時点のもの。書体の入手性、ブラウザの対応、媒体の仕様は変わる
- **書体が失われたときの手順**: 同系(UD ゴシック + 同族の等幅)から選び直し、BDR で記録する。色と組版の規則はそのまま使える
- **本人以外が引き継ぐとき**: `brand/00-foundation.md` の「変えないもの」を守れば、残りは変えてよい
