# 世界水準のブランド/デザインシステム・コンテンツスタイルガイド調査 — 構造と決定事項

- 調査日: 2026-10-12
- 目的: 日本語で書く技術者・著者の個人ブランドガイドを、公開されている一流のブランド/デザイン/コンテンツシステムと同じ厳密さで組むための一次調査
- 方針: 60 年使う前提で、流行より耐久性のある原則を優先する。各主張には出典 URL を付す。確認できなかった事項は **【未確認】** と明記する
- 読み方: 第 1 章が構造比較、第 2 章が声とトーン、第 3 章が和欧混植のタイポグラフィ、第 4 章が意味別の体裁(事実・意見・コード等)、第 5 章がトークン運用、第 6 章が長寿の原則。末尾に「個人ブランドガイドへの持ち込み案」をまとめる

---

## 1. 構造 — 一流ガイドは何を章立てしているか

### 1.1 調査対象と各ガイドの章構成

**Mailchimp Content Style Guide**(https://styleguide.mailchimp.com/)は 17 章で、Writing Goals and Principles / Voice and Tone / Writing about Mailchimp / Writing About People / Grammar and Mechanics / Web Elements / Educational Content / Legal Content / Email Newsletters / Social Media / Accessibility / Translation / Structured Content / Copyright and Trademarks / Word List / Further Reading / TL;DR という並びです。「書く目的 → 声 → 対象(自社・人) → 文法 → 媒体別 → 配慮(A11y・翻訳) → 語彙」の順序は、以下の多くのガイドにも共通する骨格です。

**GOV.UK Design System**(https://design-system.service.gov.uk/)は Styles(layout, typography, colour, images)/ Components / Patterns / Community / Accessibility を柱とし、文章規約は別サイトの **GOV.UK style guide A to Z**(https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)へ分離しています。デザインシステムと文章規約を別の正本に分け、片方から片方を参照する構造です。

**Atlassian Design System** は Content を Foundations の一部として置き、Inclusive language / Style, grammar, and punctuation / Voice and tone / Date and time / Designing messages の 5 ページで構成します(https://atlassian.design/foundations/content/)。声とトーンは 6 原則(Inform to build trust / Empower / Encourage / Motivate / Satisfy / Delight)で定義されています(https://atlassian.design/content/voice-and-tone-principles/)。

**IBM Design Language**(https://www.ibm.com/design/language/)は Philosophy(Point of view, Principles)/ Typography(Typeface, Type basics, Type scale)/ Color / 2x Grid / IBM logos(8-Bar, Rebus)/ Iconography / Illustration / Photography / Data visualization / Infographics / Layout / Animation / Resources / What's new を持ちます。実装層は **Carbon Design System** が担い、タイプセットを Productive(製品 UI 向け、`-01`)と Expressive(編集・マーケ向け、`-02`)に分けています(https://carbondesignsystem.com/guidelines/typography/overview/)。「ブランドの言語(Design Language)」と「実装(Carbon)」を 2 層に分ける構造は、個人ブランドでも「原則の正本」と「生成物(CSS 等)」を分ける根拠になります。

**Shopify Polaris** のコンテンツ規約は現在 shopify.dev 配下に移っており、Voice and tone / Product content / Grammar and mechanics の 3 本です(https://shopify.dev/docs/apps/design/content)。旧 polaris.shopify.com/content/* はリダイレクトされます。

**Google Material 3** の Typography は display / headline / title / body / label の 5 ロールで型スケールを定義し、2025 年 5 月の M3 Expressive 更新で 15 の基本スタイルに 15 の emphasized スタイルが追加されました(https://m3.material.io/styles/typography/overview)。Color は roles(primary / secondary / tertiary / error / surface 等)で定義されています(https://m3.material.io/styles/color/roles)。

**Apple Human Interface Guidelines — Typography** は、system が定義する text styles(Large Title, Title 1〜3, Headline, Body, Callout, Subhead, Footnote, Caption)で階層を作り、Dynamic Type で可変にすることを推奨しています(https://developer.apple.com/design/human-interface-guidelines/typography)。

**Microsoft Writing Style Guide**(https://learn.microsoft.com/en-us/style-guide/welcome/)は「warm and relaxed / crisp and clear / ready to lend a hand」の 3 原則を声とし(https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human)、Bias-free communication(https://learn.microsoft.com/en-us/style-guide/bias-free-communication)、UI・コードの体裁表(https://learn.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions)を持ちます。

**Monzo Tone of Voice**(https://monzo.com/tone-of-voice/)は Straightforward kindness / Everyday magic / Warm wit の 3 原則と、チャネル別に 3 原則の強度を変える表(後述)を持ちます。

**Intuit Content Design**(https://contentdesign.intuit.com/)は Foundations / Voice & tone(ブランド別: Intuit, Mailchimp, QuickBooks, TurboTax)/ Accessibility & inclusion / Style & usage(Emoji, Formatting, Numbers, Punctuation, Product names)/ Word list / Talking to customers(Bad news, Celebrations, Consent...)/ Product & UI / Marketing / AI(Voice attributes, Tone, Writing about AI)/ Content patterns と、2026 年時点で最も網羅的な章立てです。「AI の声」を独立章にしている点は新しい論点です。

**Linear**(https://linear.app/brand)は Naming / Usage / Wordmark / Logo / Icon / Colors(Mercury White #F4F5F8、Nordic Gray #222326)/ Downloads のみで、タイポグラフィ規約はありません。「外部に守らせる最小限」だけを公開する例です。**Stripe** と **Anthropic** の公式ブランドページは **【未確認】**(検索では公式ページを確認できず。Anthropic は GitHub の skills リポジトリにブランド配色・書体を記した skill があるとの二次情報のみ)。

**デジタル庁デザインシステム(DADS)**(https://design.digital.go.jp/dads/)は、はじめに / ガイダンス / 基本デザイン / コンポーネント / リソース / お知らせの 6 区分です。タイポグラフィは Noto Sans JP + Noto Sans Mono(https://design.digital.go.jp/foundations/typography/)、カラーはキーカラー・コモンカラー・機能カラー・セマンティックカラーの 4 区分でコントラスト基準(4.5:1 / 3:1)を明記しています(https://design.digital.go.jp/foundations/color/)。文章・表記のガイドライン節は **【未確認】**(サイト上で見つからず)。

**SmartHR Design System**(https://smarthr.design/)は、はじめに / 基本原則 / 基本要素 / アクセシビリティ / プロダクト / コミュニケーションの 6 区分で、プロダクト配下に「ライティング」があり、基本的な考え方(https://smarthr.design/products/contents/writing-style/)と用字用語(漢字とひらがな、カタカナ語、数字・数え、記号、SmartHR の用語、操作を表す用語、コンポーネントの呼び方)を持ちます。**日本語の用字用語を体系化している公開デザインシステムとしては、調査範囲で最も詳細**でした。

その他の日本の公開例: Ameba「Spindle」は 2023 年グッドデザイン賞受賞(https://www.cyberagent.co.jp/techinfo/news/detail/id=32732)。LINE のデザインシステムは 2019 年の DevDay 報告があるのみで、公開サイトは **【未確認】**(https://dev.classmethod.jp/articles/line-design-system-report/)。LINE ヤフーはコーポレートフォント LINE Seed JP を OFL 1.1 で Google Fonts に提供しています(https://www.lycorp.co.jp/ja/news/release/020040/)。NHK・朝日新聞の表記基準は書籍のみで、公開版は確認できませんでした(共同通信『記者ハンドブック』第 14 版 2022 年、「数字の書き方」「外来語」「差別語・不快語」章を持つことは確認。https://ndlsearch.ndl.go.jp/books/R100000002-I032007148)。

### 1.2 比較表 — どの節がどれだけのガイドに現れるか

凡例: ● 独立章あり / ○ 他章内で扱う / − なし / ? 未確認

| 節 | Mailchimp | GOV.UK | Atlassian | IBM/Carbon | Polaris | Material 3 | Apple HIG | Microsoft | Monzo | Intuit | デジタル庁 | SmartHR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voice & Tone | ● | ○ | ● | − | ● | − | − | ● | ● | ● | − | ○(パーソナリティ) |
| 文法・表記(mechanics) | ● | ● | ● | − | ● | − | − | ● | ○ | ● | ? | ● |
| 語彙リスト・用語 | ● | ●(A–Z) | ○ | − | ○ | − | − | ●(A–Z) | − | ● | − | ● |
| 包摂的表現 | ●(About People) | ○ | ● | − | − | − | − | ● | ○ | ● | − | ○ |
| アクセシビリティ | ● | ● | ○ | ○ | ○ | ○ | ● | ● | − | ● | ●(JIS X 8341-3 / WCAG 2.2) | ● |
| カラー | − | ● | ● | ● | ● | ● | ○ | − | − | − | ● | ● |
| タイポグラフィ | − | ● | ● | ● | ● | ● | ● | − | − | − | ● | ● |
| ロゴ | − | ○ | ● | ● | − | − | − | − | − | − | ○ | ● |
| アイコン | − | ○ | ● | ● | ● | ● | ●(SF Symbols) | − | − | − | ●(リソース) | ● |
| イラスト・写真 | − | ●(images) | ● | ● | − | − | − | − | − | − | ●(リソース) | ● |
| データ可視化 | − | − | ● | ● | − | − | − | − | − | − | − | − |
| モーション | − | − | ● | ●(Animation) | − | ● | ○ | − | − | − | − | − |
| 日付・数値 | ○ | ● | ● | − | ● | − | − | ● | − | ● | − | ● |
| ガバナンス・版管理 | ○ | ●(roadmap, what's new) | ○ | ●(What's new) | ○ | ●(更新履歴) | ○ | ○ | − | ○ | ●(お知らせ、v2.18.0) | ○ |

読み取れること:

1. **声とトーン、表記規約、語彙リスト、包摂的表現の 4 点は「コンテンツ系」ガイドにほぼ必ずある**。逆に IBM Design Language / Material / Apple HIG のような「ビジュアル系」は声を持たず、別の文章ガイドに委ねている
2. **アクセシビリティは唯一、両系統に横断して現れる**。「配慮事項」ではなく、色・文字・文章の各節の判断基準として埋め込まれている(DADS のコントラスト比、GOV.UK の italics 禁止など)
3. 日本の公開システムは「色・文字・コンポーネント」が中心で、**声とトーンを章として持つ例は確認できなかった**。SmartHR が「誠実・ポジティブ・わかりやすい・親しみやすい」をパーソナリティとして掲げるのが最も近い(https://smarthr.design/products/contents/writing-style/)
4. ガバナンスは「変更履歴」の形で露出するが、semver や非推奨化の手順まで公開しているガイドは少ない(第 5 章)

---

## 2. 声(Voice)とトーン(Tone)— 定数と変数の分離

### 2.1 定義の共通形

ほぼ全ガイドが「声は常に同じ、トーンは状況で変わる」と定義します。Mailchimp は "You have the same voice all the time, but your tone changes" と書き(https://styleguide.mailchimp.com/voice-and-tone/)、Microsoft は "our voice is constant regardless of who we're talking to… we adapt our tone—from serious to empathetic to lighthearted—to fit the context and the customer's state of mind" としています(https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human)。Shopify も同じ定義で、エラー時はオンボーディングより直接的なトーンにすると例示します(https://shopify.dev/docs/apps/design/content)。

### 2.2 声の定義フレームワーク

**(a) 属性 + 反対側の制約**(「X だが Y ではない」)。Shopify の 4 組が最も明快です: *Real, but not too tough or overly familiar / Proactive, but not needy or pushy / Dynamic, but not scattered or impulsive / Guide, but don't handhold or prescribe*(https://shopify.dev/docs/apps/design/content/voice-and-tone)。Mailchimp は Plainspoken / Genuine / Translator / Dry humor の 4 属性で、"We prefer the subtle over the noisy" と総括します(https://styleguide.mailchimp.com/voice-and-tone/)。なお、よく引用される Mailchimp の「fun but not silly」という句は、現行ページには **存在しません【要注意】**。

**(b) Nielsen Norman Group の 4 次元**。Formal–Casual / Serious–Funny / Respectful–Irreverent / Matter-of-fact–Enthusiastic の 4 軸で位置を決め、少数のトーン語と「アンチトーン語(避ける語)」を選び、ユーザーテストで知覚を検証し、ブランド人格を固定しつつ話題と読者の感情でトーンを調整する、という手順を推奨しています(https://www.nngroup.com/articles/tone-of-voice-dimensions/)。

**(c) 原則の束**。Microsoft の 3 原則(warm and relaxed / crisp and clear / ready to lend a hand)、Atlassian の 6 原則、Monzo の 3 原則。

### 2.3 トーンを状況で変える仕組み(トーン行列)

**Monzo のチャネル別強度表**が最も実装的です。3 原則(kindness / magic / wit)の強度をチャネルごとに定め、Operational comms は kindness 最大・magic 低・wit なし、Customer service は 高/低/なし、Marketing は 高/中/中、Campaigns と Paid social は 高/高/高、Organic social は 高/高/最大、とします。要約すると「メッセージが深刻・否定的であるほど人格を薄くし、販促的・社交的であるほど濃くする」(https://monzo.com/tone-of-voice/)。

**Atlassian の感情起点の分岐**は、読者が overwhelmed / unsure / hesitant / stressed のときは実務的に、successful / joy / proud / relief のときだけ "wink" を加えると定めます(https://atlassian.design/content/voice-and-tone-principles/)。

**Shopify の状況別 8 類型**(Everyday tasks / Learning / Simple errors / Acknowledging completion / Motivating action / Serious problems / Announcing features / Celebrations)は、各状況で「やること・やらないこと」を列挙します。たとえば Celebrations は「本当に重要な節目にだけ、まれに使い、読者の成功を自分の手柄にしない」(https://shopify.dev/docs/apps/design/content/voice-and-tone)。

**Intuit** は状況別(Bad news / Celebrations / Consent and permission)、チャネル別(Mobile, Notifications)、ブランド別、AI 別にトーンページを分けています(https://contentdesign.intuit.com/)。

### 2.4 個別論点の扱い

| 論点 | 各ガイドの決定 |
|---|---|
| 一人称 | Mailchimp: 自社は "we"、企業・製品は "it"(https://styleguide.mailchimp.com/grammar-and-mechanics/)。Shopify: 初出は固有名、同一セクション内の 2 回目以降は "we" 可(https://shopify.dev/docs/apps/design/content)。Atlassian: 代名詞を最小化、"Your projects" であって "My projects" ではない(https://atlassian.design/foundations/content/language-and-grammar)。**個人の "I/私" を扱う企業ガイドは調査範囲になし【ギャップ】** |
| 意見と事実 | Shopify: "every / all / most" のような成功を一般化する語、保証を匂わせる表現を避ける。Monzo: 「自分に責任がないニュースで謝らない」(https://monzo.com/tone-of-voice/)。**事実と意見の体裁上の区別を定めるガイドは見つからず**(第 4 章で代替を示す) |
| 断定と留保(hedging) | Google: "simply / It's easy / quickly / Please note / at this time" のような埋め草を避ける(https://developers.google.com/style/tone)。GOV.UK: 25 語超の文は分割、セミコロン回避(https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)。textlint `ja-no-weak-phrase` は「〜かもしれない」等の弱い表現を検出する(https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)。留保の度合いを**段階化**するガイドは IPCC のみ(第 4 章) |
| ユーモア | Mailchimp: 「無理な冗談は冗談なしより悪い。迷ったら真顔」。Monzo: 「調味料のように控えめに、読者は冗談の内側にいて、標的ではない」。Google: "cutesy, wacky, zany, goofy, pop-culture references" を避ける |
| 感嘆符 | GOV.UK: 言及なし(italics は全面禁止)。Google: 原則避ける。Shopify: 1 ページ 1 個まで、本当に喜ばしいことだけ(https://shopify.dev/docs/apps/design/content/grammar-and-mechanics)。Atlassian: UI では避け、マーケでも 1 ページ 1 個(https://atlassian.design/foundations/content/language-and-grammar)。Mailchimp: 控えめに、連続禁止、失敗メッセージには絶対に使わない。textlint は `no-exclamation-question-mark` で既定検出 |
| 絵文字 | Intuit: 挨拶・雑談向き、悪いニュース・語の置換・冗談の補強・複数連投には使わない、文末に置き直後に句読点を打たない、既定の黄色肌、スクリーンリーダーの読み上げを確認(https://contentdesign.intuit.com/style-and-usage/emoji/)。Mailchimp: まれに、意図的に。Monzo: 「魔法の杖の絵文字は魔法を損なう」 |
| 短縮形・口語 | Mailchimp / Atlassian / Microsoft: 短縮形を使う。GOV.UK: 否定の短縮形(can't, don't)と複雑な短縮形(should've)を避ける。Google: スラング・ネット略語(tl;dr, ymmv)を避ける |
| "please" | Google: 手順で "please" は丁寧の過剰 |

---

## 3. 和欧混植の技術文書タイポグラフィ

### 3.1 日本の公開システムの書体選定

| システム | 本文/見出し | コード | 選定理由(公開されているもの) |
|---|---|---|---|
| デジタル庁 DADS | Noto Sans JP(400/700 の 2 段) | Noto Sans Mono | 高い可読性・視認性、OFL 1.1、Web フォント提供あり。OS 標準フォント代替を妨げない。書体に依存しない情報伝達を求める(https://design.digital.go.jp/foundations/typography/) |
| SmartHR | 游ゴシック体(M・B 推奨) | 規定なし | 字面が小さく字間が広いので判別しやすく長文に向く、丸みが柔らかい、macOS/Windows 同梱で全社員が使える。Web フォントは体験を左右する箔所だけに限定(https://smarthr.design/basics/typography/) |

デジタル庁は本文 16px 以上、14px は例外、14px 未満は原則不可。行送りは本文で 1.5 倍以上、トークンは 100%〜175%、密な管理画面は 120〜130%。字間は Standard で 45px→0、約 26〜36px→1%、26px 以下→2%。**斜体は「日本語フォントは本来イタリックを持たず、ブラウザが合成する擬似斜体は読みにくいので、必要でなければ避ける」**と明記(同上)。

### 3.2 候補書体の比較(本文用)

| 書体 | 設計の性格 | ライセンス | 根拠 |
|---|---|---|---|
| Noto Sans JP | 汎用、ウェイト 9 段、CJK 全域を同設計で網羅 | OFL 1.1 | デジタル庁採用(上記)。Noto Sans Mono と同系で対になる |
| BIZ UDPGothic / BIZ UDGothic | 字面が大きく、ふところが広く、似た英数字を区別しやすい。「誰にでも」でなく「より多くの人に」。ディスレクシアやロービジョンの読みにくさに焦点を当てつつ多数派の可読性を損なわない(https://www.jcp.or.jp/akahata/?p=2657) | OFL 1.1(https://forest.watch.impress.co.jp/docs/news/1397795.html) | 厚労省の帳票設計では BIZ UDゴシックを基本フォント候補に(https://www.mhlw.go.jp/content/12401000/001152222.pdf)。**Noto Sans JP との可読性の定量比較研究は見つからず【未確認】** |
| IBM Plex Sans JP | Plex ファミリーの一員。Plex Mono / Plex Serif / Plex Math と同一の設計思想で揃う | OFL 1.1(https://github.com/IBM/plex) | 「技術者のブランド」として Mono/Serif/Sans/Math が同族で揃う唯一の選択肢 |
| LINE Seed JP | コーポレートフォントの公開 | OFL 1.1(https://www.lycorp.co.jp/ja/news/release/020040/) | 2026-01-22 に Google Fonts 提供開始。企業色が強い |
| Zen Kaku Gothic / M PLUS | Google Fonts 提供の OFL 書体 | OFL(Google Fonts) | 本調査では一次資料未取得【未確認】 |

### 3.3 等幅(コード)書体 — 日本語グリフを持つもの

| 書体 | 構成 | 特徴 | ライセンス |
|---|---|---|---|
| UDEV Gothic | BIZ UDゴシック + JetBrains Mono | 半角:全角 1:2(既定)と 3:5(35 版)、JPDOC 版は矢印・四角など日本語文書で頻出の記号を全角に、LG(リガチャ)、NF(Nerd Fonts)、全角スペース可視化が既定、スラッシュゼロ(https://github.com/yuru7/udev-gothic) | OFL 1.1 |
| PlemolJP | IBM Plex Mono + IBM Plex Sans JP | 2025-01 に 3 年ぶりのメジャー更新(https://forest.watch.impress.co.jp/docs/news/1617092.html) | OFL 1.1 |
| HackGen(白源) | Hack + 源柔ゴシック | 1:2 と 3:5 の両版(https://forest.watch.impress.co.jp/docs/review/1574553.html) | OFL 1.1 |
| Moralerspace | Monaspace + IBM Plex Sans JP 等 | 日本語混在時のバランス、全角空白の可視化(https://forest.watch.impress.co.jp/docs/news/1397795.html) | OFL 1.1 |
| Noto Sans Mono | Noto 系 | デジタル庁がコード用に指定。ただし日本語グリフは Noto Sans JP に依存(フォールバック) | OFL 1.1 |
| Source Han Code JP | Source Code Pro + 源ノ角ゴシック | Adobe 製(https://github.com/adobe-fonts/source-han-code-jp) | OFL 1.1 |

**ペアリングの含意**: 本文を IBM Plex Sans JP にするなら、コードは PlemolJP(Plex Mono 基盤)で**骨格が一致**する。本文を BIZ UDPGothic にするなら UDEV Gothic が同じ理由で揃う。Noto Sans JP なら Noto Sans Mono(デジタル庁と同構成)。「本文とコードを同一ファミリー由来で揃える」のが、3 系統とも成立する耐久的な方針です。

### 3.4 ライセンス(SIL OFL)— 図版への埋め込みと Web 配信

OFL FAQ によれば、PDF や画像への埋め込みは「全体でもサブセットでも可」、OFL フォントで作ったアートワークは OFL の対象外、`@font-face` による Web 配信は「推奨」で配布扱い、商用利用は追加許諾不要。制約は「フォント単体での販売禁止」と「改変版は Reserved Font Name を使えない(サブセット化した Web フォントも改変扱い)」(https://openfontlicense.org/ofl-faq/)。したがって **PNG 図版への焼き込み、Web 配信、リポジトリ同梱はいずれも適法**。サブセット化して配布する場合はフォント名を変える必要がある点だけ注意。

### 3.5 和欧混植の組版規則

- **和欧間のアキ**: W3C「日本語組版処理の要件」(JLReq)3.2.6 は、欧字・アラビア数字と平仮名・片仮名・漢字の字間を**四分アキ**とし、注記で「欧文書体と和文書体は設計原理が違うため、ベタ組にすると詰まって見える」と理由を述べます(https://www.w3.org/TR/jlreq/)。一方 SmartHR は「日本語と英単語・数字の前後に半角スペースを入れない(例: PDFファイル、2020年)」と定めます(https://smarthr.design/products/contents/idiomatic-usage/symbol/)。両者は矛盾しません。**アキは組版エンジン側で付け、原稿には空白文字を打たない**のが正しい読み方です。Chrome は CSS `text-autospace` を Chrome 120 でフラグ付き実装し、既定で有効化する計画を示しています(https://developer.chrome.com/blog/css-i18n-features)。2026 年時点の既定有効化は **【未確認】**
- **行間**: JLReq は数値を定めません。デジタル庁は本文 1.5 倍以上・快適な本文で 175%。「1.7〜2.0」を推奨する一次資料は見つからず、国内の実務記事(1.4〜1.8、1.5〜1.75)にとどまります **【根拠薄】**。群馬大学の心理実験(電子情報通信学会 2014)は「最適行間/文字高は文字サイズが大きくなるほど減る」と示しており(https://ken.ieice.org/ken/paper/20140926UBRh/)、本文サイズに応じて変える設計が妥当です
- **斜体**: デジタル庁は上記のとおり回避。GOV.UK は英語でも「italics を使わない。文書名等は単引用符で」(https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)。JLReq 3.3.9 は強調の手段として圏点(横組は BULLET •、親文字の 1/2 サイズ、句読点・括弧には付けない)を規定し、注記で「書体変更(ゴシック体)、色、括弧でくくる、傍線・下線」を列挙します。英語で書名に使うイタリックは、日本語訳では『』(縦横)または “ ”(横組)で示すのが慣行(https://lists.w3.org/Archives/Public/public-i18n-archive/2021OctDec/0003.html)
- **太字**: GOV.UK は「手順の UI 要素だけ。強調には使わず、文頭に要点を置く・見出し・箇条書きで代える」。Google は「UI 要素と run-in heading だけ。強調に bold を使わない」(https://developers.google.com/style/text-formatting)。Atlassian は「UI 要素を bold。見出し内で bold/italic を使わない。多用しない」
- **数字**: 公用文作成の考え方(文化審議会建議 2022-01-07)は「横書きでは算用数字」「四桁以上は三桁ごとにコンマ」「兆・億・万は漢字(5兆 100億 30万円)」「**全角・半角は文書内で統一**」「概数は漢数字(二十余人)」「語を構成する数は漢数字(二者択一、一つ)」「横書きは『3か所』『7か月』」(https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf)。SmartHR は「数えられるものは半角算用数字、固有名詞・慣用句は漢数字、桁区切りは半角カンマ、日付は 2025/01/01 を基本、時刻は 24 時間制 hh:mm:ss、ファイルサイズは 5GB のように単位との間を空けない」(https://smarthr.design/products/contents/idiomatic-usage/count/)
- **句読点**: 公用文作成の考え方は約 70 年ぶりに**横書きの読点を「，」から「、」へ**改め、「、」「。」を原則、横書きでは事情に応じて「，」も可、ただし文書内で統一、句点の「．」は学術的・専門的に必要な場合を除き用いない(https://www.hituzi.co.jp/hituzigusa/2022/11/10/punc10)。textlint は `ja-no-mixed-period` で句点を「。」に統一
- **括弧**: 公用文は（）と「」を基本、入れ子もそのまま重ねる、『』は「」の中、【】は項目・強調。SmartHR は（）補足・「」ファイル名/画面メッセージ/入力値/強調・［］設定項目名/タブ名/ボタン名・【】ユーザー命名オブジェクト・{ } 変数(半角)・バッククォートはコード/URL/メール/API、“ ” と『』は使わない。区切り符(・｜：／)・句読点・括弧・つなぎ符(―…〜)は全角で前後にスペースなし。単独の！？は全角で直後に全角スペース、組み合わせ(!?)は半角。半角の例外は通貨記号・%・桁区切りカンマ・階層区切り(/ >)・変数(https://smarthr.design/products/contents/idiomatic-usage/symbol/)
- **カタカナ語**: SmartHR は -er/-or/-ar は長音(ユーザー、フィルター)、-y は長音なし(セキュリティ)、例外 ブラウザ・フォルダ。Web は「ウェブ」、固有名詞中の Web は英字のまま。他社製品は正式名(Microsoft Excel)で TM を付けない(https://smarthr.design/products/contents/idiomatic-usage/katakana/)。公用文は「外来語の表記」(平成 3 年内閣告示)の第 1 表を基本とし、専門用語・外来語を「むやみに用いない」。SmartHR の基本方針も「先に漢字語での言い換えを検討。カタカナ語は人によって意味の幅が広い」(https://smarthr.design/products/contents/writing-style/)
- **漢字**: 公用文は常用漢字表に基づき、解説・広報等では読み手に配慮して仮名書きや振り仮名、送り仮名を省かない書き方を認める。SmartHR は表外読み(想い→思い、旧い→古い)をアプリ上で使わない。textlint は漢字の連続 6 文字超を検出
- **文体**: 公用文は「対外的な文書では『です・ます』体を基本として簡潔に敬意を表す」「漢語・名詞的表現は距離を生み、和語・動詞的表現は親しみを増す」(https://t28.dev/blog/notes-on-document-for-governmental-use-1)。textlint preset は本文=ですます、箇条書き=である を既定(https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)。これは本リポジトリ(process-compass)の執筆規約と一致します

---

## 4. 意味別の体裁 — 事実・意見・引用・注意・コード・UI・外来語

### 4.1 コードと UI ラベル(確立している)

Google developer documentation style guide は、コードフォントを「読者が**そのまま入力する**テキストであることと、その**境界**を示す」ものと定義し、属性名・クラス名・メソッド名・コマンド・出力・データ型・環境変数・ファイル名・パス・HTTP ステータス・ポート番号・プレースホルダ・ユーザー入力に使い、ドメイン名・製品名・組織名・ブラウザで訪れる URL には使わない、コードを引用符で囲まない、コード要素を複数形・所有格・動詞化しない、と定めます(https://developers.google.com/style/code-in-text)。体裁全般では、太字は UI 要素と run-in heading のみ、イタリックは新語の導入・語としての語・作品名・数式変数、下線はリンク専用、強調に bold を使わない(https://developers.google.com/style/text-formatting)。

Microsoft は要素別の表で、UI 要素名(ボタン・メニュー・タブ・ダイアログ)は **bold**、コマンドラインとオプションは `code`、エラーメッセージは引用符、新語の初出はイタリック、数学定数・変数はイタリック、プレースホルダは UI 文脈ならイタリック・コード文脈なら角括弧、キー名は bold、URL は全小文字、と決めています。さらに「UI やブログでは bold/italic を避け、ラベルを文で区別するか、引用符か、bold のどれかを一貫して選ぶ」と、文脈別の切替まで規定します(https://learn.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions)。

GOV.UK は「bold は手順中の UI 要素だけ、italics は使わない、文書名・スキーム名は単引用符、直接引用のみ二重引用符、長い引用は block quote」(https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)。SmartHR は上記のとおり「」「［］」「【】」「バッククォート」で UI・ファイル名・ユーザー命名・コードを**括弧の種類で区別**しており、イタリックや太字に依存しない日本語向けの解法になっています。

### 4.2 規範の強さ(shall / should / may)

ISO/IEC Directives Part 2 の動詞形は、要求=shall、推奨=should、許可=may、可能性/能力=can で、"must" は使わない、というものです(https://www.iso.org/sites/directives/current/part2/index.xhtml — 本調査では直接取得に失敗、**【一次資料未取得】**)。日本では JIS Z 8301「規格票の様式及び作成方法」が対応し、JSA の資料は 2019 年改正で ISO/IEC Directives Part 2 と構成(箇条番号)を同一にしたこと、附属書(参考)でも要求・推奨・許容の表現は使えるが参考要素として扱われること、本文の「注記」は要求事項を含まないことを示します(https://webdesk.jsa.or.jp/pdf/dev/md_4077.pdf、https://webdesk.jsa.or.jp/preview/pre_jis_z_08301_000_000_2019_j_ed10_ch.pdf)。日本語の対応は通例「しなければならない」「することが望ましい」「してもよい」「することができる」ですが、JIS 本文の該当表は有償で **【本文未確認】**。

### 4.3 不確かさの段階(事実と意見を分ける最良の先例)

**事実と意見の体裁を分けるデザインシステムは見つかりませんでした**。最も厳密な先例は IPCC の「不確かさの扱いに関するガイダンスノート」で、(1) 確信度(confidence)を証拠(limited / medium / robust)と一致度(low / medium / high)の組合せから very low〜very high の 5 段階で定性的に示し、(2) 定量化できる場合は尤度(likelihood)を 7 段階で示します: virtually certain 99–100% / very likely 90–100% / likely 66–100% / about as likely as not 33–66% / unlikely 0–33% / very unlikely 0–10% / exceptionally unlikely 0–1%。さらに「圧倒的な証拠がある知見は不確かさ修飾語なしの事実として述べる」「low / very low confidence の提示は重大な懸念領域に限り理由を説明する」と、**修飾語を付けない=事実、付ける=評価**という運用を定めています(https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf)。

Google は時制で事実を守る規則も持ちます。"currently / as of this writing / new / latest / soon / in the future" を避け、"new" を使うなら日付や版で基準点を示す(例: "The January 14, 2021 release of BigQuery…")。時間語はブログ・リリースノートでのみ可(https://developers.google.com/style/timeless-documentation)。これは本リポジトリの「YYYY-MM-DD 時点」規約と同じ発想です。

放送分野では BBC 編集ガイドラインが impartiality 節に "Personal View Content" を置き、個人見解番組は視聴者に明示する旨を定めている、と Leveson 証拠資料(https://discoverleveson.com/evidence/Exhibit_LP3c/9188/media)と Ofcom 文書(https://www.ofcom.org.uk/__data/assets/pdf_file/0020/215444/Newsnight,-BBC-2,-26-May-2020,-2245.pdf)が示しますが、現行文言は **【未確認】**(bbc.co.uk へ到達不可)。

### 4.4 外来語・固有名詞・数値と単位

- 固有名詞: SmartHR「他社製品は正式名、TM 不要」、Microsoft「製品名はトレードマーク一覧の大文字小文字に従う」、Mailchimp「ブランド語と料金プラン名は大文字、機能の一般名(email, landing pages)は小文字」(https://styleguide.mailchimp.com/grammar-and-mechanics/)
- 略語: GOV.UK「初出でフルスペル、`<abbr>` でホバー表示、ピリオドなし(BBC)」。Atlassian「e.g. / i.e. / etc. / & は翻訳と支援技術に不利なので避ける」
- 単位: Shopify「数字と単位の間にスペース、単位は複数形にしない、通貨は後置($10,000 USD)、寸法は ×」(https://shopify.dev/docs/apps/design/content/grammar-and-mechanics)。SmartHR「5GB は空けない、byte 単独はカタカナ(2バイト)」。公用文「72％」「電話：03‐5253‐…」のように全角記号を用いつつ文書内統一を求める

### 4.5 持ち込める「意味別マーク」の設計案(著者の既存慣行との接続)

本リポジトリには既に `:::caution[暫定 EV-NNNN / 見直し YYYY-MM]`(根拠水準)、`<!-- impl IMPL-NNNN -->`(実装到達度)、見出しへの `(適用: …)` 併記(適用範囲)があります。上記の調査から、これらと同じ発想で次の層を**マークで**表すのが一貫します(体裁は括弧・コールアウト・ラベルで表し、斜体・太字に依存しない — 3.5 節の結論)。

| 意味 | 体裁(日本語) | 先例 |
|---|---|---|
| 事実(出典あり) | 平文 + 出典リンク。修飾語なし | IPCC「圧倒的証拠は事実として述べる」、Google 時制中立 |
| 著者の解釈・意見 | 冒頭の定型文「本節は著者の解釈です」+ 根拠水準マーク。留保語は段階語彙から選ぶ | IPCC 確信度/尤度、BBC personal view の明示 |
| 規範の強さ | しなければならない / することが望ましい / してもよい / することができる を使い分け、「べき」を規範語として使わない | ISO Directives Part 2、JIS Z 8301 |
| 引用 | 「」または block quote。出典必須。イタリックは使わない | GOV.UK、JLReq |
| 注意・警告 | コールアウト(caution 等)。感嘆符は使わない | Mailchimp「失敗メッセージに感嘆符を使わない」 |
| コード・ファイル名・コマンド | バッククォート。引用符で囲まない。複数形・動詞化しない | Google code-in-text、SmartHR |
| UI ラベル | ［］で囲む(日本語)。英語文脈なら bold | SmartHR、Microsoft/Google |
| 外来語 | 第 1 表の表記、-er/-or/-ar 長音、固有名詞は英字正式名 | 公用文、SmartHR |
| 強調 | 原則しない。必要なら「」か圏点。太字は UI 専用に温存 | GOV.UK、JLReq 3.3.9 |

---

## 5. ガバナンスとツール — トークンをコードとして管理する

### 5.1 標準フォーマット

W3C Design Tokens Community Group(DTCG)は 2025-10-28 に**初の安定版 2025.10** を公開しました。テーマ・マルチブランド(ライト/ダーク、A11y 変種、ブランド別)、Display P3 / Oklch / CSS Color Module 4 の色空間、継承・エイリアス・コンポーネント参照、単一ファイルから iOS / Android / Web / Flutter への出力、マルチファイル対応を含みます。参照実装は Style Dictionary、Tokens Studio、Terrazzo。Penpot、Figma、Sketch、Framer、Knapsack、Supernova、zeroheight など 10 超のツールが対応中とされます。版は「年.月」で表します(https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/、https://www.designtokens.org/)。DTCG FAQ は「W3C 標準化トラックには載っていないが、コアフォーマットは本番利用に安定」と述べています(https://www.designtokens.org/faq/)。

### 5.2 ツールの対応状況(2026-10 時点で確認できたもの)

- **Style Dictionary**: v4 で DTCG(`$value` / `$type` / `$description`)を一級サポート。2025.10 版への完全対応は v5 で作業中(https://styledictionary.com/info/dtcg/)
- **Tokens Studio**: 2025-12-11 の変更履歴で DTCG を既定フォーマットに(https://feedback.tokens.studio/changelog)。Figma の variables / styles へ書き出し、一部型(複合型、AUTO、% を含む値、5,000 超の variables)はスキップ(https://docs.tokens.studio/figma/export/variables-skipped)
- **Figma**: DTCG 発表文では対応ツールに名前が挙がるが、**ネイティブの DTCG インポート/エクスポートの公式文書は確認できず【未確認】**。Variables REST API は Enterprise 限定との第三者記述あり(https://terrazzo.app/docs/guides/import-from-figma)

### 5.3 版管理(semver)の実務

- トークン追加=minor、値変更=minor(ビルドは壊れないが見た目が変わる)、削除・改名=major、という整理が一般的(https://platform.plainconcepts.com/docs/releases)。一方 Nord は削除を含む版を major にしています(https://arielsalminen.com/work/nord-design-system/changelog/tokens/)
- 公開 API の定義にトークン名・意味、生成 CSS カスタムプロパティ、対応テーマ、A11y 挙動まで含めるべき、という主張(https://stevekinney.com/courses/enterprise-ui/versioning-and-release-management)
- 非推奨化は deprecate → migrate → remove の 3 段階で、削除までの猶予は 2〜4 か月が目安(https://designtokens.substack.com/p/how-to-manage-breaking-changes-in)
- Adobe Spectrum Tokens は npm の `latest` と `next` タグを使い分け、旧版(v11)をアーカイブパッケージとして残す(https://classic.yarnpkg.com/en/package/@adobe/spectrum-tokens)。Ocean Tokens は semantic-release でコミット接頭辞から版を導出(https://npmjs.com/package/@useblu/ocean-tokens)

**60 年の視点での含意**: 値変更を minor にする流儀は「ツールが壊れない」ことを基準にしています。個人ブランドの正本では**「見た目が変わる」変更は読者にとって破壊的**なので、色・書体の値変更は major、追加だけを minor、誤記修正を patch にする方が履歴の意味が長持ちします(著者の判断。先例は分かれている)。

### 5.4 配布の形

- **npm パッケージ**(Spectrum, Ocean, Nord)
- **JSR パッケージ + 署名付きビルド + manifest**: `@bounded-systems/brand` は `tokens/tokens.json` だけを手で編集し、`tokens.css`、Style Dictionary 出力(SCSS/JS/JSON/Swift/XML)、`dist/` を生成。`--check` で生成物の陳腐化を CI で検出(exit 1)。`manifest.json` が各出力の IANA メディアタイプと SHA-256、パッケージ版、ソースコミットを記録。`mark/`(ロゴ SVG + 1024px PNG)、`avatar/`、`lockup/`(1200×630、SNS カードは PNG 推奨: SVG の OG 画像を描けないプラットフォームが多い)、`favicon-32.png`、`css/fonts.css`(自前ホストの woff2、OFL、latin サブセット)、`css/base.css`(https://jsr.io/@bounded-systems/brand)
- **git submodule**: 本リポジトリの `template/` 運用が先例(正本をこちら側に置き、`npm run template:kb` で複製を生成、乖離を `npm run check` で検出)。npm 配布と同じ「正本 → 生成 → 乖離検査」の構造
- **生成先**: CSS カスタムプロパティ、Tailwind 設定、Mermaid/D2 テーマは Style Dictionary のカスタム format で出せる。DTCG 発表文が「1 ファイルから複数プラットフォームへ」を謳うのはこの用途(https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

### 5.5 個人のブランドブック

公開された「個人のブランドブック」の良質な事例は見つかりませんでした **【ギャップ】**。見つかった助言は「配色は primary 1 + neutral 1〜2 + accent 1 に絞る」「個人ブランドでは図形ロゴより清潔なワードマークが効く」「書体はブランドの立ち位置に合わせる(幾何学サンセリフ=現代的、セリフ=編集的、ヒューマニストサンセリフ=温かみ)」「書体はあらゆる文書に現れるので、他のどの要素よりブランドの仕事をする」といった二次情報です(https://madegooddesigns.com/?p=4505)。Linear のように**外部に守らせる最小限(名称・ロゴ・余白・色)**だけを公開し、文章規約や判断基準は内部正本に置く構成が、個人にも適用できる現実的な形です。

### 5.6 ブランドリポジトリの最小ファイル集(調査からの帰結)

```
README.md                 — 目的、正本の所在、更新手順(Mailchimp の TL;DR 章に相当)
PRINCIPLES.md             — 声の属性(X だが Y ではない)、トーン行列、長寿原則
tokens/tokens.json        — DTCG 2025.10。唯一の手編集ファイル
tokens/build.mjs          — Style Dictionary 設定。--check で陳腐化検出
dist/                     — 生成物(CSS vars, Tailwind, Mermaid/D2 theme)。gitignore
fonts/                    — OFL woff2 + OFL.txt + 元フォント名(RFN)の記録
logo/                     — mark.svg, wordmark.svg, lockup-1200x630.png, favicon
writing/                  — 用字用語(漢字・カタカナ・数字・記号)、意味別マーク表、.textlintrc
templates/                — 記事・スライド・README の雛形
CHANGELOG.md              — semver。値変更の扱いを冒頭に明記
docs/adr/                 — 変えにくい決定の記録(書体選定、配色、版管理方針)
```

---

## 6. 長寿 — 数十年持つブランドシステムの原則

### 6.1 事例

- **IBM(1956〜)**: Thomas J. Watson Jr. が 1956 年に Eliot Noyes を企業デザイン計画の責任者に招き、建築・グラフィック・働き方まで統一。Noyes は**「固定のビジュアルテンプレートは古びる」と考え、"the best in modern design" という単純な指針で統一した**。Paul Rand がロゴを設計し長年顧問を務めた。Watson の "good design is good business" は Wharton での講演(https://www.ibm.com/history/design-program)。1990 年代に外注化で弱まり、2012 年ごろに再興、現在 3,000 人超のデザイナー。**衰退と再興を経ても同じ書体思想(Plex)と 8-Bar ロゴで戻れたのは「原則が残っていた」から**
- **Vignelli / Unimark(1970 NYC 地下鉄)**: 1970 年の NYCTA Graphics Standards Manual は 2014 年に Kickstarter で復刻され、いまも「明快さ・論理・一貫性のモダニズムの傑作」と評され、路線色は 10 色の Pantone 指定(https://www.untappedcities.com/10-fun-facts-about-the-nyc-transit-authority-graphics-standard/)。ただし当初の書体は Helvetica でなく Standard Medium だった可能性があり、資料は一致しない【出典間で矛盾】。実際の運用は「緩やかに従われた」との記述も(https://www.core77.com/posts/27612)
- **Vignelli Canon(2010)**: 原則は Semantics / Syntactics / Pragmatics / Discipline / Appropriateness / Design is One / Visual Power / Intellectual Elegance / **Timelessness**(一時的な流行に反対し、明快・単純・持続する仕事をする)/ Responsibility / **Equity**(過去のデザインの確立された価値と同一性を尊重し、変更のための変更をしない)。印刷物では文字サイズを 2 種まで、という数値制約も(https://productandrew.substack.com/p/product-88)。書籍は Lars Müller 刊、RIT Vignelli Center が販売(https://www.rit.edu/shopone/product/vignelli-canon)。公式無料 PDF は確認できず【未確認】
- **Dieter Rams / Braun**: 1970 年代後半に定めた 10 原則のうち「Good design is long-lasting」「Good design is as little design as possible」が直接の根拠。原則は規則ではなく判断基準として示された(https://designexplained.substack.com/p/dieter-rams-and-ten-principles-for)
- **無印良品(1980〜)**: 「素材の選択・工程の点検・包装の簡略化」の 3 原則は今も変わらず。「これがいい」ではなく「これでいい」という理性的な満足を目指す。簡潔さは「スタイルとしてのミニマリズムではなく『空っぽの器』」であり、空白だからこそ多様な人の思いを受け入れる。「思想の根幹は誕生当時と変わらず、北をさす方位磁石のように、生活の『基本』と『普遍』を指し続けている」(https://www.muji.com/jp/about/)
- **中川政七商店(1716〜)**: 享保元年創業、奈良晒から。ビジョン「日本の工芸を元気にする！」は「100 年後も人々の生活とともにある」ことを目標に置く(https://www.nakagawa-masashichi.jp/company/)。ブランドブックの公開は確認できず【未確認】
- **Google の timeless documentation**: 「現在の版を記述し、変化ではなく今どう動くかに集中する」ことで保守を減らす(https://developers.google.com/style/timeless-documentation)
- **DTCG の版名「2025.10」**: 日付を版にすることで「いつの合意か」が永続的に読める(https://github.com/design-tokens/community-group)

### 6.2 抽出した耐久原則(8 項目)

1. **原則を正本にし、テンプレートを生成物にする**。IBM の Noyes は「テンプレートは古びる」と見た。トークン運用の「tokens.json だけ手編集、他は生成」はその現代形
2. **抑制 — 要素数を少なく固定する**。Vignelli の文字サイズ 2 種、個人ブランドの色 1+1〜2+1、Rams の "as little design as possible"。足すのは容易で、減らすのは難しい
3. **書体を同一性の主柱にする**。IBM Plex、LINE Seed、Noto 採用のデジタル庁。書体はあらゆる文書に現れるため、ロゴより露出が多い。Plex のように Sans/Mono/Serif/Math が同族で揃う書体を選べば、60 年の間に増える媒体(数式、コード、縦組)にも同じ骨格で対応できる
4. **グリッドと組版規則を装飾より優先する**。JLReq の四分アキ、デジタル庁の行送りトークン、Carbon の type token。規則は媒体を越えて移植でき、装飾は媒体に縛られる
5. **アクセシビリティを判断基準に埋め込む**。DADS のコントラスト 4.5:1/3:1、GOV.UK の italics 禁止、BIZ UD の「より多くの人に」。A11y は流行で変わらない唯一の外部基準
6. **流行を追わない。ただし変化を拒まない**。Vignelli の Equity(変更のための変更をしない)と、Material 3 が 15 スタイルを削らず「emphasized 15 を追加」した事実は両立する。**加法的に増やし、破壊的変更は版で告げる**
7. **時間を明示する**。Google の時制中立、本リポジトリの「YYYY-MM-DD 時点」、DTCG の 2025.10。60 年後の読者は「新しい」が何を指すか知らない
8. **「これでいい」を目標にする**。無印良品の理性的な満足。個人ブランドは「これがいい」という自己主張に傾きやすいが、長く読まれる文章の体裁は読者の思いを受け入れる「空っぽの器」であるべき

---

## 7. 個人ブランドガイドへの持ち込み案(要約)

1. **章立て**は Mailchimp 型(目的 → 声 → 表記 → 媒体 → 配慮 → 語彙 → TL;DR)を基本に、ビジュアル節(色・書体・ロゴ・図版)を IBM/DADS 型で足す。声とトーンを持つ日本語の公開例がないので、ここが差別化点になる
2. **声**は Shopify 型「X だが Y ではない」4 組で定義し、トーンは Monzo 型の行列(媒体: 記事 / 書籍 / README / SNS / 登壇 × 強度)で変える。NN/g の 4 軸で位置を 1 回だけ決めて記録する
3. **一人称・意見・留保**は企業ガイドに先例がない。IPCC の段階語彙と ISO の動詞形を日本語化し、既存の `:::caution[暫定 EV-NNNN]` と「本節は著者の解釈です」に接続する(4.5 節の表)
4. **書体**は「本文とコードを同族で揃える」方針を先に決め、Noto Sans JP + Noto Sans Mono / IBM Plex Sans JP + PlemolJP / BIZ UDPGothic + UDEV Gothic の 3 系統から ADR で選ぶ。いずれも OFL で図版焼き込み・Web 配信・同梱が可能
5. **組版**は斜体を使わない、太字は UI 専用、強調は「」か圏点、和欧間に空白文字を打たない(エンジンに任せる)、横書きは算用数字半角、「、」「。」、括弧は全角（）「」+ UI は［］+ コードはバッククォート、で確定する。textlint preset-ja-technical-writing を既定のまま採用し、本文ですます・箇条書きであるを維持
6. **トークン**は DTCG 2025.10 で `tokens.json` を正本にし、Style Dictionary で CSS / Tailwind / Mermaid・D2 テーマを生成、`--check` を CI に置く。版は semver、見た目が変わる値変更は major と CHANGELOG 冒頭で宣言
7. **長寿**のため、ガイド本文に「変えてよいもの(トーン、媒体別雛形)」と「変えないもの(声の属性、書体系統、色の数、意味別マークの体系)」を分けて書く。変えないものの変更は新 ADR で置き換える(本リポジトリの ADR 運用と同じ)

---

## 付録 A. 未確認・ギャップ一覧

- Stripe / Anthropic の公式ブランドページ(公開の有無)
- デジタル庁デザインシステムの文章・表記ガイドラインの有無
- LINE / Yahoo / KDDI の公開デザインシステムの有無
- NHK・朝日新聞の表記基準の公開版
- Noto Sans JP と BIZ UD の可読性の定量比較
- 日本語本文行間 1.7〜2.0 の一次根拠
- Chrome `text-autospace` の既定有効化時期
- Figma のネイティブ DTCG 入出力
- ISO/IEC Directives Part 2 動詞形の本文(取得失敗)、JIS Z 8301 の表現表(有償)
- BBC Editorial Guidelines "Personal View" の現行文言(到達不可)
- Vignelli Canon の公式無料 PDF、中川政七商店のブランドブック
- 公開された個人ブランドブックの良質な事例

## 付録 B. 主要出典(本文で引用した URL の再掲、分野別)

- コンテンツ: Mailchimp https://styleguide.mailchimp.com/ / GOV.UK A–Z https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/ / Atlassian https://atlassian.design/foundations/content/ / Shopify https://shopify.dev/docs/apps/design/content / Microsoft https://learn.microsoft.com/en-us/style-guide/welcome/ / Google https://developers.google.com/style/ / Monzo https://monzo.com/tone-of-voice/ / Intuit https://contentdesign.intuit.com/ / NN/g https://www.nngroup.com/articles/tone-of-voice-dimensions/
- ビジュアル: IBM https://www.ibm.com/design/language/ / Carbon https://carbondesignsystem.com/guidelines/typography/overview/ / Material 3 https://m3.material.io/styles/typography/overview / Apple https://developer.apple.com/design/human-interface-guidelines/typography / Linear https://linear.app/brand
- 日本: デジタル庁 https://design.digital.go.jp/foundations/typography/ , https://design.digital.go.jp/foundations/color/ / SmartHR https://smarthr.design/products/contents/writing-style/ , https://smarthr.design/products/contents/idiomatic-usage/symbol/ , https://smarthr.design/products/contents/idiomatic-usage/count/ , https://smarthr.design/products/contents/idiomatic-usage/katakana/ / 公用文作成の考え方 https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf / JLReq https://www.w3.org/TR/jlreq/ / textlint https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing
- 書体: UDEV Gothic https://github.com/yuru7/udev-gothic / IBM Plex https://github.com/IBM/plex / LINE Seed JP https://www.lycorp.co.jp/ja/news/release/020040/ / OFL FAQ https://openfontlicense.org/ofl-faq/ / Chrome CSS i18n https://developer.chrome.com/blog/css-i18n-features
- 規範・不確かさ: IPCC https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf / JSA https://webdesk.jsa.or.jp/pdf/dev/md_4077.pdf
- トークン: DTCG https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/ / Style Dictionary https://styledictionary.com/info/dtcg/ / Tokens Studio https://feedback.tokens.studio/changelog / bounded-systems/brand https://jsr.io/@bounded-systems/brand
- 長寿: IBM history https://www.ibm.com/history/design-program / Vignelli https://productandrew.substack.com/p/product-88 / Rams https://designexplained.substack.com/p/dieter-rams-and-ten-principles-for / 無印良品 https://www.muji.com/jp/about/ / 中川政七商店 https://www.nakagawa-masashichi.jp/company/ / NYCTA manual https://www.untappedcities.com/10-fun-facts-about-the-nyc-transit-authority-graphics-standard/ / Google timeless https://developers.google.com/style/timeless-documentation
