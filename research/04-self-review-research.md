# 公開前セルフレビューの調査メモ — AI が書き、一人が公開する体制でレビューを「避けられない」ものにする

- 作成: 2026-10-12
- 位置づけ: 一次調査メモ。publishing-hub の既存機構(媒体別 textlint、構造ポリシー、claims 検査、文書化済みだが未強制の編集手順)は前提とし、再提案しません
- 根拠水準の凡例: **[確認済]** = 一次資料の URL を本文で参照、**[二次]** = 二次資料のみ、**[推論]** = 本調査の推論、**[未確認]** = 探したが一次資料に当たれなかった

## 0. 要旨

既存機構が 12 の機械検査を通した 20 本の派生に根拠のない主張を残し、SNS 投稿 10 本中 9 本が「何の製品の話か」を言わず、章の執筆者が「0 エラー」と報告した後に事実レビューが 29 件の止める指摘を出した。この三つの失敗は性質が同じです。**機械検査は「形式」を見ており、「内容が原典に支えられているか」「初見の読者に伝わるか」は、別の読み手が原典と突き合わせるか、原典を知らない状態で読むかしないと出てきません**。新聞社の校閲がこの二つを「事実確認」と「素読み」として分業してきたこと、ソフトウェア検査の実証研究が「異なる視点の読者を混ぜると欠陥の発見範囲が広がる」ことを示していること、LLM 評価研究が「自分の出力を自分で評価すると甘くなる」ことを示していること、の三系統が同じ方向を指しています。

したがって本メモの提案は次の一文に収まります。**原稿と同じ場所に、原稿のハッシュに結びついた「レビュー記録」を置き、記録がない・古い・引用が原稿に実在しない・止める指摘が未処理、のどれかなら CI が公開フラグを拒む**。レビュー記録は執筆者と別のセッションが書き、所有者は記録から生成した 1 ページの要約と、描画済みスクリーンショットだけを見れば済むようにします。

---

## 1. 編集・ジャーナリズムの実務から学べること

### 1.1 事実確認は「逆向きの取材」であり、全部は確認できないと最初から認める

The New Yorker の事実確認部門は、校了版を印刷し、ほぼすべての語に下線を引いて確認対象にし、記事中の情報源(匿名含む)にほぼ全員あたる、と報じられています。部門長は事実確認を「reporting in reverse(逆向きの取材)」と呼び、長い記事では**どの事実を先に確認するかの優先づけ**が仕事の一部だと述べています(Columbia Journalism Review の取材 https://www.cjr.org/behind_the_news/inside_the_worlds_largest_fact.php)[二次]。ここで持ち帰るべきことは二つです。一つは「全文に下線を引く」= 文単位ではなく**主張単位**に分解すること。もう一つは「優先づけが仕事」= **何を確認しなかったかを明記する**ことが誠実さの要件だということです。これは後述のレビュー記録の `not_checked` 欄の根拠になります。

IFCN(国際ファクトチェックネットワーク)の行動規範は、ファクトチェック組織の 5 つの約束として「非党派性と公正」「情報源の透明性」「資金・組織の透明性」「方法論の透明性」「公開かつ誠実な訂正」を掲げ、31 の基準で審査します(https://ifcncodeofprinciples.poynter.org/the-commitments)[確認済]。個人ブランドの発信がこれに加盟するわけではありませんが、「読者が自分で検証し直せるように情報源を示す」「方法論を公開する」「訂正を公開する」の三つは、そのまま本件の設計要件になります。

### 1.2 訂正の運用: 三つの重さに分ける

Reuters Handbook of Journalism は誤りを三種に分け、それぞれ別の手続きを定めています。意味や信頼性を変える実質的な誤りは **CORRECTED** として公開訂正、読者を無用に驚かせない軽微な誤りは **REFILE** で静かに直す、情報源が誤情報を渡した場合は **official correction** として出所を明示する、という区分です(ハンドブック PDF https://www.mediareform.org.uk/wp-content/uploads/2015/12/Reuters_Handbook_of_Journalism.pdf、CJR の解説 https://www.cjr.org/behind_the_news/reuters_opens_its_kimono.php)[確認済、ただし 2008 年版]。「十の絶対原則」の一つが "Always correct an error openly" です。

The Guardian は訂正を**該当ページの脚注として追記し、さらに一覧ページに集約**します。読者編集者(readers' editor)は「訂正」と「補足(clarification)」の区別を、被害の重さ・誤解された場合の帰結・緊急性・掲載時の目立ち方・法的要素・放置時の評判リスクの 6 観点で判断すると述べています(iMediaEthics の報告 https://www.imediaethics.org/?p=18189、同 https://www.imediaethics.org/guardian-announces-accuracy-and-standards-page/)[二次]。The New York Times は事実誤認はほぼ例外なく訂正し、重大な場合は記事末尾ではなく**先頭にラベルを置く Editors' Note** を使います(CJR https://www.cjr.org/public_editor/nyt-correction-factual-errors-editors-note.php、iMediaEthics https://www.imediaethics.org/new-york-times-adds-editors-note-correct-gina-haspel-thailand-prison-claim/)[二次]。

国内では日本新聞協会の新聞倫理綱領(2000 年)が「報道を誤ったときはすみやかに訂正し」と定め(https://www.pressnet.or.jp/outline/ethics)[確認済]、共同通信の「記者活動の指針」は「記事や写真、図解に誤りがあった場合は速やかに訂正する」と**図解まで訂正対象に含め**、さらに「インターネット情報は、公的機関などの信頼できる情報以外は直接引用しない」と情報源の等級づけを明記しています(https://www.kyodonews.jp/guide.html)[確認済]。朝日新聞は「訂正して、おわびします」という固定見出しで、日付・面・誤→正を定型で掲載しています(例 https://www.asahi.com/articles/DA3S16368278.html)[確認済、方針文書そのものは未確認]。

### 1.3 校正と校閲の分業: 素読み・事実確認・突き合わせ・読み合わせ

国内の出版実務は作業を明確に分けています。**素読み**は事実確認をせずに読み、誤字脱字・表記ゆれ・内容の矛盾を見つける作業、**事実確認**は固有名詞・数値・年号を資料で裏付ける作業、**突き合わせ**は前の版と今の版を一字ずつ比べる作業(文末から逆向きに読んで「意味を取らずに字だけを見る」流派もある)、**読み合わせ**は二人一組で一人が読み上げ一人が追う作業、**赤字照合**は前回の修正指示が反映されたかだけを見る作業です(毎日新聞校閲センターの実演動画 https://www.youtube.com/watch?v=6mmbS7WcUKw、鴎来堂講座の受講記 https://www.synergy-marketing.co.jp/blog/calibration-basic-course、解説記事 https://fungry.co.jp/cnaps/blog/kousei-kouetsu)[二次]。また校閲者は「疑問出し」として**根拠資料を添えて**指摘し、採否は編集者・著者が決めます(https://shingakunet.com/journal/career/20170327180244)[二次]。

本件への対応は明快です。

| 出版実務 | 本件の対応物 | 既存か |
|---|---|---|
| 事実確認(資料で裏付け) | fact reviewer セッション(原典+前後の原稿を読む) | 既存・未強制 |
| 素読み(資料を見ずに読む) | cold reader セッション(原稿本文のみ) | 既存・未強制 |
| 突き合わせ(前版と字単位で比較) | 原稿と派生の決定的 diff、claims 検査 | 既存 |
| 赤字照合(修正指示の反映確認) | 採否表の「直し方」が実際に反映されたかの検査 | **未整備** |
| 疑問出し(根拠を添えて指摘、採否は著者) | 止める/直す/任意 + 引用 + 採否表 | 既存・未強制 |

「赤字照合」に当たるものが無いことが、「0 エラー」と報告した後に 29 件が出た構造の一因です[推論]。レビュー記録の採否表は、「直すと決めた」だけでなく「直したあとの原稿で引用箇所が消えた/変わった」を機械的に確かめる必要があります(5 章)。

### 1.4 見出しと冒頭: 五秒テスト

UX 分野の five-second test は「5 秒だけ見せて隠し、何の話だったか・誰向けか・何が主な印象かを答えさせる」第一印象の測定法で、使い勝手の測定ではないこと、5 秒という長さ自体は経験則であることが明記されています(Lyssna のガイド https://www.lyssna.com/guides/five-second-testing/、Smashing Magazine の事例研究 https://www.smashingmagazine.com/2023/12/five-second-testing-case-study/)[確認済]。SNS 投稿 10 本中 9 本が製品名を言わなかった失敗は、cold reader の質問「最初の数行で主題が分かるか」が**書かれているだけで実行されていなかった**ことの結果であり、この質問を「冒頭 N 文字だけを渡し、主題を答えさせる」という別の入力で実装すれば五秒テストの等価物になります(5 章の cold-read 仕様)。

### 1.5 読みやすさ指標の限界(日本語)

英語圏の Hemingway や Flesch 系の指標は音節数・単語数に依存し、日本語には移植できません。日本語では李在鎬の読解難易度回帰式(平均文長・漢語率・和語率・動詞率・助詞率から 6 段階判定、R² = 0.896)を実装した jReadability があります(論文 https://jhlee.sakura.ne.jp/papers/lee2016.pdf、システム https://jreadability.net/sys)[確認済]。ただしシステム自身が「評価中の回帰式を含み、結果は実験的」と断っており、対象は日本語学習者向けの読解教材です。技術記事の「分かりやすさ」をこれで**ゲートにしてはいけません**。textlint の preset-ja-technical-writing が「1 文 100 文字以下(v3.0.0 以降。厳しめなら 90)」「読点は 1 文 3 つまで」を既定にしているのも、読みにくさの**代理指標**にすぎません(https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)[確認済]。指標は「長すぎる文を機械的に拾う」用途に留め、「伝わるか」は cold reader に任せる、という役割分担が妥当です。

---

## 2. ソフトウェア・ドキュメント実務から学べること

### 2.1 Diátaxis の「機能的品質」と「深い品質」

Diátaxis は文書の品質を二層に分けます。正確さ・完全さ・一貫性・有用さ・精密さなどの**機能的品質**は客観的に測れ、しかも互いに独立で「正確で完全で一貫していて、それでも役に立たない文書」が成立する、と述べています。**深い品質**(読んで気持ちがよい、人の必要に合う、使い方を先回りする)は機能的品質を前提にしつつ、人に対してしか評価できません(https://www.diataxis.fr/quality/)[確認済]。既存の 12 の機械検査はすべて機能的品質の一部、fact reviewer は機能的品質の「正確さ」、cold reader だけが深い品質を見ている、と整理できます。深い品質を機械化しようとせず、**人(または人を模した別セッション)の読みを記録として残す**方向が正しいことの理論的裏づけになります。

### 2.2 docs-as-code の検査ゲートと PR チェックリストの強制

既存の textlint に加えて一般的なのは Vale(https://vale.sh/)、markdownlint-cli2(https://github.com/DavidAnson/markdownlint-cli2)、リンク切れ検査の lychee(GitHub Action、`fail: true` で失敗化、`.lycheeignore` と結果キャッシュを持つ https://github.com/lycheeverse/lychee-action、CI レシピ https://lychee.cli.rs/continuous-integration/github)[確認済]です。リンク検査は執筆時だけでなく**公開後の定期実行**(6 章)にも使えます。

PR 本文のチェックボックスを強制する仕組みは複数あります。Shopify/task-list-checker は未完了項目があるとステータスを pending にしてマージを塞ぎ、本文のみを見てコメントは無視します(https://github.com/shopify/task-list-checker)。phtech/github-task-list-completed(https://github.com/phtech/github-task-list-completed)、require-checklist-action(コメントも対象)も同系です。Owncast は `REQUIRED-CHECKLIST:START/END` マーカー間だけを検査し、組織メンバーと Dependabot を除外しています[確認済]。いずれも**ブランチ保護(ruleset)の required status check に登録しないと実効性がありません**(GitHub Docs https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)[確認済]。Danger JS は `fail()` で PR を落とす任意ルールを JS で書けるので、「公開フラグが立った原稿にレビュー記録が無い」のような**リポジトリ固有の規則**をコメント付きで出すのに向きます(https://danger.systems/js)[確認済]。

ただし本件の失敗はチェックボックスの未記入ではなく、**チェックを付けた内容が空だった**ことです。チェックボックス強制は「箱に印があるか」しか見ません。印の裏にある証拠(引用、ハッシュ、採否)を検査しないと、同じ失敗が再発します[推論]。

### 2.3 検査法の実証研究: 視点を分けた読み(Perspective-Based Reading)

Fagan のインスペクション(1976)以降、読み方を規定する検査法が研究され、Basili らの Perspective-Based Reading(PBR)は、要求文書をレビュワーごとに「テスター」「設計者」「利用者」のどれかの**役割の手順書に沿って**読ませ、NASA ゴダード宇宙飛行センターの統制実験で、有意差が出た条件では各人が普段の読み方をするより欠陥の検出が多かったと報告しています。前提は「視点を混ぜれば同じ人数でも文書の網羅範囲が広がる」ことです(Basili, Green, Laitenberger, Lanubile, Shull, Sørumgård, Zelkowitz, *Empirical Software Engineering* 1(2), 1996、https://drum.lib.umd.edu/handle/1903/7537)[確認済]。

本件の fact reviewer と cold reader は、まさに視点の異なる二人の読者です。PBR の知見はこれを支持すると同時に、**第三の視点**を示唆します。たとえば「記事に名前が出る製品・組織・人物の立場で読む(不利益・誤記・権利)」「掲載媒体の規約担当の立場で読む(宣伝・引用・画像の権利)」です。全記事に課す必要はなく、言及先が実在の組織・人物であるときだけ発動する条件付き視点として設計できます[推論]。

### 2.4 事前検死、黙読会、二重承認

Klein の pre-mortem(HBR 2007、https://hbr.org/2007/09/performing-a-project-premortem)は「すでに失敗したと仮定し、理由を列挙する」方法です[二次]。公開物では「この記事が訂正記事を出す羽目になったとして、何が原因か」を 3 行で書かせる欄として実装でき、fact reviewer の優先づけ(1.1)の入力になります。Amazon の 6 ページ文書は会議の冒頭 30 分を黙読に使い、「箇条書きは雑な思考を隠せるが、文章は隠せない」という理由で物語形式を要求します(Bezos の発言、CNBC https://www.cnbc.com/2018/04/23/what-jeff-bezos-learned-from-requiring-6-page-memos-at-amazon.html)[二次]。「bar raiser」は Amazon では採用面接の役職名であり、文書レビューの役割として確認できませんでした[未確認]。Google のコードレビューは「ディレクトリの所有者の承認」と「その言語の readability 保持者の承認」の**二つの独立した承認**を要求します(*Software Engineering at Google* 第 9 章 https://abseil.io/resources/swe-book/html/ch09.html)[確認済]。本件に写すと「内容の所有者(= オーナー)の承認」と「媒体の readability(= その媒体の読者として読める人・セッション)の承認」の二重化になります。

---

## 3. AI 生成コンテンツの品質保証: 自己レビューの限界と、検証可能な証拠の作り方

### 3.1 なぜ執筆したセッションに自己レビューさせてはいけないか

- **位置・冗長・自己高揚のバイアス**: Zheng らは LLM を審判に使うとき、提示順に左右される position bias、長い回答を好む verbosity bias、自分の生成物を好む self-enhancement bias があることを示しました(arXiv:2306.05685, NeurIPS 2023 https://arxiv.org/abs/2306.05685)[確認済]。Wang らも位置バイアスで評価が覆ることを報告しています(arXiv:2305.17926 https://arxiv.org/abs/2305.17926)[確認済、本文未読]。
- **自己認識が自己選好を生む**: Panickssery らは、LLM が自分の出力を 50% 超の精度で見分け、自己認識能力と自己選好の強さが線形相関し、統制実験で因果関係が示唆されることを報告しました(arXiv:2404.13076, NeurIPS 2024 https://arxiv.org/abs/2404.13076)[確認済]。**執筆者と同じモデル・同じ文脈で評価させると、自分の文章を甘く見る**ことの直接の根拠です。
- **外部フィードバックなしの自己修正は効かない**: Huang らは、外部からのフィードバックなしに LLM に自己修正させても改善せず、むしろ悪化することがあり、過去の肯定的な報告は正解ラベルの混入や初期プロンプトの不備に起因すると論じました(arXiv:2310.01798, ICLR 2024 https://arxiv.org/abs/2310.01798)[確認済]。「章の執筆者が 0 エラーと報告した」現象はこの知見と一致します。
- **批評と修正は訓練手法であって品質保証ではない**: Constitutional AI(Bai ら 2022, arXiv:2212.08073 https://arxiv.org/abs/2212.08073)は原則に照らした自己批評・修正を**訓練データ生成**に使う手法です。推論時に同じことをさせれば検証になる、という保証はありません[確認済、評価は推論]。
- **複数の独立した読みを集約する**: Self-consistency(Wang ら 2022, arXiv:2203.11171 https://arxiv.org/abs/2203.11171)は複数の推論経路を独立にサンプリングして多数決を取ると精度が上がることを示しました[確認済、本調査では再検索せず]。レビューに写せば「同じレビューを文脈を共有しない複数セッションで走らせ、一致した指摘を優先する」ことになりますが、コストが線形に増えるので、止める判定が割れたときの第三者判定に限定するのが現実的です[推論]。

なぜ**文脈の少ない** cold reader が、**文脈の多い** fact reviewer と違う欠陥を見つけるのか。fact reviewer は原典を持っているので「原典に無いこと」は見つけられますが、原典を知っているがゆえに「原典を知らない読者にはこの一文が理解できない」ことには気づきにくい。これは PBR の「視点を混ぜる」(2.3)と Diátaxis の二層(2.1)の交点であり、LLM 固有の問題ではなく、人間の校閲が素読みと事実確認を分けてきた理由と同じです[推論]。

### 3.2 主張を原典の文字列に紐づける(claim → source span)

長文の事実性評価は、文章を**原子的な主張に分解し、一つずつ根拠と照合する**方向に収斂しています。FActScore(Min ら 2023, arXiv:2305.14251 https://arxiv.org/abs/2305.14251)は伝記文を原子事実に分解して知識源で支持されるかを判定し、SAFE(Wei ら 2024, Google DeepMind, arXiv:2403.18802 https://arxiv.org/abs/2403.18802)は LLM で個別事実に分解し、検索を使って多段階で判定し、精度と再現率の F1 で集約します[確認済]。Attributed QA(Bohnet ら 2022, arXiv:2212.08037 https://arxiv.org/abs/2212.08037)は回答に出典の文字列を必ず添えさせる枠組みです[確認済、本調査では再検索せず]。

本件では「知識源」は検索結果ではなく**正典(canonical)の本文**なので、話はもっと単純で、もっと厳格にできます。

1. 派生原稿を主張単位に分解する(事実レビューの `claims[]`)
2. 各主張に、**正典の中の逐語引用**(`source_quote`)を付ける。引用できなければ `unsupported` と宣言する
3. CI は `source_quote` が正典ファイルに**逐語で実在する**ことを文字列照合で検査する。実在しない引用は捏造として即失敗
4. `unsupported` の主張は、採否表で「削る」「正典に追記する」「暫定と明記して残す」のどれかに落とす。未処理なら失敗

これが「quote or delete(引用せよ、さもなくば削れ)」の機械化です。既存の claims 検査(派生が正典と矛盾しないか)は「矛盾の検出」であり、これは「支持の証明」なので役割が異なります。**20 本の派生が全検査を通りながら根拠のない主張を含んだ**のは、矛盾検査は「正典に書かれていないこと」を矛盾とみなさないからです[推論]。

### 3.3 エージェントに検証可能な証拠を出させる

- **引用は逐語・位置つき**: `quote` と、照合に使った `file` を必須にする。行番号は編集で動くので主キーにせず、照合は文字列で行う
- **構造化レポート(YAML/JSON)**: 所見ごとに `severity`(止める/直す/任意)、`quote`、`reason`、`rule`(根拠にした規則の ID)を持つ。自由文の総評は末尾に 1 段落だけ許す
- **読んだものの宣言**: レビュワーが読める入力を `inputs[]` にハッシュつきで列挙させ、cold reader の `inputs[]` には原稿本文だけが入っていることを CI が確かめる
- **確認しなかったことの宣言**: `not_checked[]` を必須欄にする(1.1 の優先づけの思想)
- **前後の決定的 diff**: 採否表の「直し方」を適用した後、原稿の diff をレビュワーではなく CI が生成し、採否表の各行に対応する変更があるかを人が目で確かめられる形にする

---

## 4. 図版・図解の公開前レビュー

### 4.1 公開されている基準

- **W3C WAI 画像チュートリアルの alt 決定木**(2024-05-13 更新)は、情報を持つ画像・機能を持つ画像・装飾画像・文字を含む画像・複雑な画像(グラフ等)で alt の書き方を分け、複雑な画像は**本文側に説明を置き alt は短い識別に留める**よう案内します(https://www.w3.org/WAI/tutorials/images/decision-tree/)[確認済]
- **GOV.UK のコンテンツデザイン指針**は現行版で「情報を持つ画像は alt 欄を空にし、説明を本文に書く」「画像が無いものとして読める本文にする」「装飾画像に alt を付けない」としており、2022 年版の「短い alt か本文説明のどちらか」から方針転換しています(https://www.gov.uk/guidance/content-design/images、改訂の背景 https://insidegovuk.blog.gov.uk/2023/08/10/making-it-easier-to-add-images-on-gov-uk/)[確認済]
- **Datawrapper** に公式の公開前チェックリストは見つかりませんでした[未確認]。同社のアカデミーは「公開するまで非公開」「編集後は再公開が必要」を述べるに留まります(https://www.datawrapper.de/academy/how-to-unpublish-your-visualizations)。ジャーナリズム講座の受講者が挙げる項目(数値の再確認、見出し、軸の説明、単位、y 軸の原点、意識的な配色、出典、色覚多様性プレビューが公開時に変わるので再確認)は実務的に有用です(https://mij22.jmg.gu.se/datawrapper-assignment/)[二次]
- **Financial Times の Visual Vocabulary** は「データのどの関係を見せたいか」(偏差・相関・順位・分布・時系列・部分と全体・規模・空間・流れ)からグラフ型を選ぶ一覧で、日本語版ポスターもあります(https://github.com/Financial-Times/chart-doctor/blob/main/visual-vocabulary/README.md)[確認済]。「図の型が主張に合っているか」の照合先になります
- **OG カード**: 1200×630 px、タイムラインでは縮小表示されるので文字は大きく少なく、媒体によって切り抜き位置が異なるため重要情報は中央に、という助言はベンダー記事レベルの根拠です(https://www.samune-ai.jp/blog/ogp-image-ai-jidou-seisei)[二次、弱い]。「squint test(目を細めて見る)」「5 秒で主題が分かるか」は実務の慣習で、一次資料は見つかりませんでした[未確認]

### 4.2 図版レビューのチェックリスト(提案)

視点 A: 読める(機能的品質)

- [ ] 想定表示幅(記事本文の幅、SNS カードの幅 ≒ 300〜500 px)に縮小したとき、すべてのラベルが読める。切り捨て(…)が無い
- [ ] 色だけで区別していない(形・ラベル・線種を併用)。色覚多様性シミュレータで判別できる
- [ ] 本文と図の用語・表記が一致している(正典の語彙表と照合。図内の語を OCR または作図ソースから抽出して照合可能)
- [ ] 数値・年・単位・出典が図中か直後の本文にある
- [ ] alt は決定木に従う。情報を持つ図は本文に説明があり、alt は識別に留める

視点 B: 伝わる(深い品質)

- [ ] 図だけを 5 秒見せたとき、主題と「何が増えた/減った/違う」が答えられる(cold reader に図だけを渡して答えさせる)
- [ ] 図の型が示したい関係に合っている(Visual Vocabulary で照合)
- [ ] 記事なしで OG カードとして流れたとき、製品名・主張が一つ読める

視点 C: 権利・体裁

- [ ] 他者のロゴ・スクリーンショット・データの出典と利用条件が記録されている
- [ ] 媒体ごとのアスペクト比・容量の制約を満たす

---

## 5. レビューを「避けられない」ものにする機構の設計

### 5.1 記録の置き場所の比較

| 置き場所 | 原稿ハッシュとの結合 | 古さの検出 | 執筆者の偽装耐性 | 所有者の一覧性 | 判定 |
|---|---|---|---|---|---|
| 原稿の隣の記録ファイル `<id>.review.yaml` | 強(ファイル内にハッシュ) | CI で原稿を再ハッシュして比較 | 中(別コミット要件+引用実在検査で補強) | 中(要約生成で補う) | **主** |
| コミットトレーラー(`Reviewed-by:` 等) | 弱(コミット単位、ファイル単位でない) | 原稿の後続コミットで無効化を検出可 | 弱(誰でも書ける。Linux の `Reviewed-by` も「意見の表明」であり証明ではない https://gerrit.googlesource.com/gerrit/+/v2.9/Documentation/user-signedoffby.txt) | 低 | 補助(記録ハッシュへの参照のみ) |
| PR テンプレートのチェックボックス | 無 | 無 | 弱(箱に印をつけるだけ) | 高 | 補助(記録から**生成**した要約を貼る。手書き禁止) |
| GitHub Issue | 無(リポジトリ外) | 無 | 弱 | 中 | 不採用。訂正台帳の受付窓口には使える |

結論: **記録ファイルを正とし、トレーラーと PR 本文はそこから機械生成した参照・要約だけを持つ**。手書きの箱を増やすと「0 エラー」の再演になります。

### 5.2 レビュー記録のスキーマ(提案)

```yaml
# content/zenn/2026-10-pitin-intro.review.yaml
schema: review-record/1
subject:
  path: content/zenn/2026-10-pitin-intro.md
  sha256: "…"                     # 正規化後(LF、末尾空白除去、frontmatter 含む)の本文ハッシュ
  medium: zenn
canonical:
  - path: canonical/pitin/overview.md
    sha256: "…"
reviewer:
  kind: agent                      # agent | human
  session_id: "run-2026-10-12T03:21Z-7f3a"   # 執筆セッションと別であること
  writer_session_id: "run-2026-10-11T22:05Z-c91d"
  allowed_inputs:                  # レビュワーが読んでよかったもの。cold には subject のみ
    fact: [subject, canonical, previous_version]
    cold: [subject_body_only]
  persona_cold: "Zenn を流し読みする、PIT-IN を知らないバックエンド開発者"
premortem: |
  この記事が訂正を出すとしたら: (1) 所要時間の数値が出典なし (2) 他社製品名の表記 (3) 図2の年号
fact_review:
  claims:
    - id: C01
      quote: "レビューは平均 12 分で終わる"          # 派生原稿の逐語引用(CI が実在を照合)
      status: unsupported                            # supported | unsupported | contradicts
      source_quote: null
      severity: 止める
      reason: "正典に所要時間の記述がない"
      rule: POLICY-CLAIMS-02
    - id: C02
      quote: "決められた場所では必ず人間が触る"
      status: supported
      source_quote: "決められた場所では必ず人間が触る"   # 正典の逐語引用(CI が実在を照合)
      source: canonical/pitin/overview.md
  not_checked:
    - "外部リンク先の最新版との差分(リンク切れ検査のみ実施)"
cold_read:
  first_lines_given: 3             # 冒頭何行だけを先に渡したか
  subject_identified: "AI 協調型の開発プロセス PIT-IN の紹介"   # 空や誤答なら失敗
  subject_is_named_in_first_lines: true
  unintelligible:
    - quote: "ゲート G2 の前段で"
      why: "G2 が何か本文に定義がない"
  bounce_points:
    - quote: "次に、本標準の 5.7.3 では"
      why: "節番号の羅列で読者が離脱する"
  ending_natural: false
  ending_note: "最後の一文が CTA ではなく定義で終わる"
adoption:                          # 指摘→採否→根拠にした規則→直し方
  - finding: C01
    decision: 直す
    rule: POLICY-CLAIMS-02
    fix: "数値を削除し『短時間で終わる設計』に置換"
    fixed_in_sha256: "…"           # 直した後の原稿ハッシュ(赤字照合)
  - finding: cold.unintelligible[0]
    decision: 直す
    rule: STYLE-ZENN-05
    fix: "初出で『G2(実装前の人間確認点)』と補う"
summary:
  verdict: no-go                   # go | go-with-fixes | no-go
  top_risks: ["未支持の数値 1 件", "未定義語 2 件", "結びが弱い"]
  reviewed_at: 2026-10-12T03:40:00Z
```

### 5.3 CI が検査すること(`npm run review:check`)

公開フラグ(`published: true` / `private: false` / `ready`)が立った原稿ごとに、次を**すべて**満たさないと失敗させ、このジョブを ruleset の required status check に登録します。

1. **記録の存在**: `<path>.review.yaml` がある
2. **鮮度**: `subject.sha256` と `canonical[].sha256` が現在のファイルの正規化ハッシュに一致する。不一致なら「レビュー後に原稿が変わった」として失敗。採否表の `fixed_in_sha256` が現在のハッシュに一致する場合だけ、修正適用後の状態として通す(差分レビューの連鎖)
3. **引用の実在**: `fact_review.claims[].quote` が原稿本文に、`source_quote` が指定の正典ファイルに、**逐語で**存在する。存在しなければ捏造として失敗。これは LLM が引用をでっち上げる失敗に対する唯一の機械的な防御です
4. **未支持の処理**: `status: unsupported|contradicts` の主張は `adoption` に `決定 ≠ 保留` の行がある。`止める` の指摘で `decision` が無いものがあれば失敗
5. **cold read の実質**: `subject_identified` が空でなく、原稿 frontmatter の主題語(製品名など)と一致する。`subject_is_named_in_first_lines` が false なら失敗(SNS 10 本中 9 本の失敗の直接の再発防止)。`unintelligible[].quote` も原稿内に実在すること
6. **独立性**: `reviewer.session_id ≠ reviewer.writer_session_id`。記録ファイルを追加・更新したコミットが**原稿本体を変更していない**(`git log --name-only` で検査)。cold の `allowed_inputs` に正典が含まれていない
7. **要約の生成**: 検査が通ったら `npm run review:summary` が 1 ページの Markdown を生成し、PR 本文のマーカー間に貼り、描画スクリーンショット(5.5)を添付する。人が手で書いた要約は無効

### 5.4 執筆エージェントによる偽装をどこまで防げるか

正直に言えば、一人の所有者がすべての鍵を持つリポジトリで、偽装を**完全に**防ぐことはできません。できるのは「偽装するほうが正しくレビューするより手間がかかる」状態にすることです。層を重ねます。

- **方針(規約)**: レビュワーは原稿を編集しない。執筆者は記録を書かない。CLAUDE.md 相当に明記
- **別プロセス**: `npm run review -- <path>` が新しいセッションを起動し、`allowed_inputs` 以外のファイルを渡さない。run id を記録に書く
- **入力ハッシュと引用実在検査**: 記録が参照するものすべてにハッシュ、すべての引用に逐語照合。「それらしい記録」を一括生成しても、引用が一致しなければ落ちる
- **コミット分離**: 記録と原稿を同一コミットで変更できない
- **署名つき証明(任意・強い)**: GitHub Artifact Attestations は、特定のワークフロー実行が特定のダイジェストの成果物を生成したことを Sigstore 署名で証明し、`gh attestation verify` で検証できます。ただし Free/Pro/Team プランでは**公開リポジトリのみ**です(https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations)[確認済]。レビュー記録を CI 上のレビュージョブで生成し、その成果物に証明を付ければ「ローカルで執筆者が手書きした記録」を区別できます。リポジトリが非公開なら、代替として記録に CI の `run_id` を書き、CI 側で自分の run id と一致することを確かめる弱い版にします

### 5.5 所有者が Markdown ではなく描画結果を見るために

- **Zenn**: `npx zenn preview` でローカルサーバが立ちます(https://zenn.dev/zenn/articles/zenn-cli-guide)[確認済]。CI でこれを起動し、Playwright で記事 URL の全画面スクリーンショット(デスクトップ幅と 390 px 幅の 2 枚)を撮り、ワークフロー成果物として保存して PR にリンクします
- **Qiita**: `npx qiita preview` が公式に用意されています(https://qiita.com/Qiita/items/666e190490d0af90a92b)[確認済]。同じ手順でスクリーンショットを取れますが、プレビュー起動時に投稿済み記事をダウンロードするためトークンが必要です。CI では読み取り専用トークンを secrets に置きます
- **note**: 公式の CLI・プレビュー API は見つかりませんでした[未確認]。代替として、note の本文幅・フォントサイズに近づけた HTML テンプレートで描画し「近似プレビュー」と明記します。コード・表の禁止は既存の構造ポリシーで機械的に止めているので、見た目の近似で十分と判断します[推論]
- **SNS カード**: 1200×630 の OG 画像と、投稿本文を 300 px 幅で描いたモックを生成し、「製品名が見えるか」を所有者が一目で確かめられるようにします
- 所有者の 5 分の使い方: (1) 要約の go/no-go と上位リスク、(2) 確認しなかった項目、(3) スクリーンショット 2〜4 枚、(4) 採否表で「任意」を却下した行だけ

---

## 6. 公開後の信号と訂正台帳

### 6.1 戻すべき信号

- **読者の質問・コメント**: 「それはどういう意味か」という質問は cold reader の見逃しです。質問が出た箇所の引用を次回の cold persona の注意点に加える
- **発行した訂正**: 件数、重さの区分、公開から訂正までの時間。fact review の `not_checked` に入っていた領域から出た訂正は「確認範囲の設計ミス」、入っていなかった領域から出たものは「レビュワーの見逃し」として分けて数える
- **離脱**: Zenn・Qiita・note は閲覧数や「いいね」は出しますが、記事内の離脱位置は提供していません[未確認]。自サイト(GitHub Pages)の記事では計測可能です。媒体横断で揃うのは「反応数 / 閲覧数」程度と割り切ります
- **リンク切れ**: lychee を定期実行し、公開済み原稿のリンク切れを Issue 化する(lychee-action の Create Issue From File 連携 https://github.com/marketplace/actions/lychee-broken-link-checker)[確認済]

### 6.2 訂正台帳の形式(提案)

新聞社の運用(Reuters の三区分、Guardian の該当ページ脚注+一覧、NYT の重大時は先頭ラベル、朝日の定型「誤→正」)を一人の発信に写すと次の形になります。

```yaml
# corrections/2026.yaml
- id: COR-2026-0007
  date: 2026-10-20
  article: content/zenn/2026-10-pitin-intro.md
  medium: [zenn, bluesky]
  class: corrected            # corrected(意味を変える) | refile(軽微) | editors-note(重大・先頭表示)
  wrong: "平均 12 分で終わる"
  right: "所要時間は計測していない"
  cause: unsupported-claim    # unsupported-claim | typo | source-error | outdated | misreading
  found_by: reader            # reader | self | fact-review-rerun | link-check
  review_record: content/zenn/2026-10-pitin-intro.review.yaml
  was_in_not_checked: false   # 記録の not_checked に含まれていたか
  fixed_in: "commit sha"
  public_note: true           # 該当記事の末尾に訂正注記を追記したか
  rule_added: POLICY-CLAIMS-07  # この訂正から新設・強化した規則(無ければ null)
```

台帳は公開ページとして一覧化し(Guardian 型)、各記事の末尾にも注記を置きます(脚注型)。`rule_added` を必須に近い欄にすることで、訂正が検査規則に**還流**したかを追えます。これが「訂正は成果である」を運用に落とす形です。

---

## 7. チェックリスト(実装用)

### 7.1 fact reviewer(原典+前後の原稿を読む)

1. 事前検死を 3 行書く(訂正を出すとしたら何が原因か)
2. 原稿を主張単位に分解し、数値・固有名詞・年・比較・因果・引用の 6 種を必ず拾う
3. 各主張に正典の逐語引用を付ける。付けられなければ `unsupported`
4. 正典と**矛盾**する主張は `contradicts` にし、両方の引用を置く
5. 止める/直す/任意を付け、根拠規則 ID を書く
6. 確認しなかった範囲を書く
7. 原稿を編集しない

### 7.2 cold reader(原稿本文のみ、与えられたペルソナで読む)

1. 冒頭 3 行(SNS なら全文)だけを読み、主題を一語で答える。製品名が言えなければそう書く
2. 全文を読み、理解できなかった語・文を逐語で引用する
3. 読むのをやめたくなる箇所を引用する
4. 結びが自然か、最後の一文が何をさせたいかを答える
5. 記事に図があれば図だけを先に見て主題を答える
6. 正典・前版・他媒体版を読まない。読めない状態で起動されていることを確認する

### 7.3 公開ゲート(CI)

5.3 の 7 項目。加えて、媒体別の描画スクリーンショットが成果物として存在すること。

---

## 8. 本調査で確認できなかったこと

- AP Stylebook の事実確認指針、共同通信『記者ハンドブック』の校閲手順の原文(書籍のため未読)
- The New Yorker の手順は部門長が取材を断っており、二次資料のみ
- Datawrapper の公式公開前チェックリスト(存在を確認できず)
- 「squint test」「5 秒理解テスト」の一次資料
- note のプレビュー API・CLI
- Amazon の文書レビューにおける「bar raiser」の役割(採用面接の用語としてのみ確認)
- Zenn・Qiita・note の記事内離脱計測の有無

## 9. 参照一覧(本文で引いたもの)

- IFCN Code of Principles https://ifcncodeofprinciples.poynter.org/the-commitments
- Reuters Handbook of Journalism(2008 年版 PDF) https://www.mediareform.org.uk/wp-content/uploads/2015/12/Reuters_Handbook_of_Journalism.pdf
- CJR, Inside the world's largest fact-checking operation https://www.cjr.org/behind_the_news/inside_the_worlds_largest_fact.php
- 日本新聞協会 新聞倫理綱領 https://www.pressnet.or.jp/outline/ethics
- 共同通信 編集綱領・記者活動の指針 https://www.kyodonews.jp/guide.html
- 毎日新聞校閲センター 校閲実演(素読み編) https://www.youtube.com/watch?v=6mmbS7WcUKw
- 李在鎬(2016)日本語教育のための文章難易度に関する研究 https://jhlee.sakura.ne.jp/papers/lee2016.pdf / jReadability https://jreadability.net/sys
- textlint-rule-preset-ja-technical-writing https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing
- Lyssna, Five second testing guide https://www.lyssna.com/guides/five-second-testing/
- Diátaxis, Towards a theory of quality in documentation https://www.diataxis.fr/quality/
- Basili et al. (1996) The Empirical Investigation of Perspective-Based Reading https://drum.lib.umd.edu/handle/1903/7537
- Klein (2007) Performing a Project Premortem https://hbr.org/2007/09/performing-a-project-premortem
- Software Engineering at Google, Ch.9 Code Review https://abseil.io/resources/swe-book/html/ch09.html
- Shopify/task-list-checker https://github.com/shopify/task-list-checker / Danger JS https://danger.systems/js
- GitHub Docs, Available rules for rulesets https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets
- GitHub Docs, Use artifact attestations https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations
- lychee-action https://github.com/lycheeverse/lychee-action
- Zheng et al. (2023) Judging LLM-as-a-Judge https://arxiv.org/abs/2306.05685
- Wang et al. (2023) Large Language Models are not Fair Evaluators https://arxiv.org/abs/2305.17926
- Panickssery et al. (2024) LLM Evaluators Recognize and Favor Their Own Generations https://arxiv.org/abs/2404.13076
- Huang et al. (2023) Large Language Models Cannot Self-Correct Reasoning Yet https://arxiv.org/abs/2310.01798
- Bai et al. (2022) Constitutional AI https://arxiv.org/abs/2212.08073
- Wang et al. (2022) Self-Consistency https://arxiv.org/abs/2203.11171
- Min et al. (2023) FActScore https://arxiv.org/abs/2305.14251
- Wei et al. (2024) Long-form factuality in LLMs (SAFE) https://arxiv.org/abs/2403.18802
- Bohnet et al. (2022) Attributed Question Answering https://arxiv.org/abs/2212.08037
- W3C WAI, An alt Decision Tree https://www.w3.org/WAI/tutorials/images/decision-tree/
- GOV.UK, Content design: images https://www.gov.uk/guidance/content-design/images
- Financial Times, Visual Vocabulary https://github.com/Financial-Times/chart-doctor/blob/main/visual-vocabulary/README.md
- Zenn CLI ガイド https://zenn.dev/zenn/articles/zenn-cli-guide / Qiita CLI https://qiita.com/Qiita/items/666e190490d0af90a92b
- Guardian の訂正運用(iMediaEthics) https://www.imediaethics.org/?p=18189 / NYT の Editors' Note(CJR) https://www.cjr.org/public_editor/nyt-correction-factual-errors-editors-note.php
- 朝日新聞「訂正して、おわびします」の例 https://www.asahi.com/articles/DA3S16368278.html
