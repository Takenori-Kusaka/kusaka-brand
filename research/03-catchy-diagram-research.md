# 03 「一目でわかる」図の設計と再現可能な生成 — 調査メモ

- 作成日: 2026-10-12
- 目的: 手法を一枚で説明する「キービジュアル / 概要図」の層を、既存の D2 スキーマ図とは別に設けるための設計原則・メタファー・媒体仕様・ツール選定を、出典付きで整理する
- 読み方: 本文中の「要確認」は、本調査で一次資料に当たれなかった、または資料間で食い違いがあった項目。採用前に併記 URL で裏を取ること
- 用語: 本メモでは「スキーマ図」= 構造を正確に伝える図(D2 で既に運用中)、「キービジュアル」= 3 秒で主張が伝わる一枚絵(新設する層)

---

## 0. 要旨

1. 参照図(モンスターラボの Scrum 図)が読みやすいのは、**要素数を 8 + 1 に絞り、横一列のタイムラインという単一の読み順を与え、色を 3 色に限定し、タイトルを画像内に置き、凡例を持たない**からである。人物アイコンや役割は描かれておらず、「3 ロール / 5 イベント / 3 成果物」のうちイベントと成果物だけを 1 本の線に乗せている。削ったものが多いことが強さになっている
2. 良い一枚絵に共通する文法は「**形がそのまま主張**」(Double Diamond の菱形 = 発散と収束、TPS の家 = 2 本柱で屋根を支える、Hill Chart の丘 = 不確実性の峠)である。形が主張を語らない図(SAFe Big Picture)は、情報として正しくても一枚絵としては機能しない
3. キービジュアルの作成規則 14 条を §2 に示す。要素は 5〜9 個(塊としては 4 個以下)、強調色は 1 色、ラベルは 4 語以内、読み順は 1 本、凡例を置かない、タイトルは画像内、余白は面積の 3 割以上
4. ピットストップは事実関係が豊富で、メタファーとして忠実に描ける。**約 20 名のクルーが車に触れるのはピットボックスの中だけ**、ピットレーンは 80 km/h 制限、停止は約 2 秒。§3 に構図案を 3 つ示す
5. 媒体仕様は 2:1(X・GitHub)、1.91:1(OGP・note・LinkedIn・Bluesky カード)、1:1、4:5、5:7(Zenn 本表紙)の 5 比率に集約できる。**2:1 のマスターを作り、中央 1.91:1 を安全域にする**と 1 枚から派生できる
6. ツールは「スキーマ図 = D2」「キービジュアル / OGP = Satori または手書き SVG テンプレート → resvg」「どうしても CSS の表現力が要る場合のみ Playwright」の 3 層に分ける。D2 は丸いループや自由配置ができないので、キービジュアルには向かない(§5a で根拠を示す)

---

## 1. 参照図と「一枚絵」の分析

### 1.1 モンスターラボ「スクラム」図(実物を取得して確認)

出典ページ: https://monstar-lab.com/dx/solution/about-scrum/ 、画像: https://monstar-lab.com/dx/wp-content/uploads/2020/05/scrum-min.jpg (1200×696 px、JPEG 約 33 KB)

ページ本文は「3 つの役割」「5 つのイベント」「3 つの成果物」を見出しで列挙する構成ですが、図そのものは次のように描かれています(画像を取得して目視確認)。

- **背景**: 濃いチャコール(ほぼ黒)。要素はすべて明色で、図/地の分離が強い
- **タイトル**: 左上に 2 段。小さく「アジャイル開発の 1 つ」、大きく太字で「スクラム」。画像単体で主題が分かる
- **主軸**: 画面下 1/3 に横一列のタイムライン。丸ノード 8 個(プロダクトバックログ → スプリント計画(1) → スプリント計画(2) → スプリントバックログ → スプリント → 出荷可能な開発単位 → スプリントレビュー → スプリント振り返り)。ラベルは各 2 行以内、1 行 7 文字以内
- **ループ**: 「スプリント」の上に小さな円弧を描き、頂点に「デイリースクラム」。繰り返しを形で示す。さらに画面最下部に右端から左へ戻る細い矢印(振り返り → 次の計画)
- **色分け**: 橙(計画・レビューなど人が集まる場)、黄(スプリント・バックログ等)、青(出荷可能な開発単位 = 到達点)の 3 色。凡例はない。青は 1 個だけで、ここが「ゴール」だと色だけで分かる
- **アイコン**: 積み重ねた横棒(バックログを表す)が 2 か所だけ。人物アイコンはない。**3 つの役割は図に描かれていない**
- **余白**: 面積の半分以上が無地。要素間の距離が均等

「効く」理由を整理すると次のとおりです。

| 観察 | 効果 | 原則(§2 の番号) |
|---|---|---|
| 要素 8 + 1 個 | 一瞥で数えられる上限内 | R1 |
| 横一列 + 1 つの円弧 | 読み順が 1 本。迷わない | R4 |
| 3 色、うち青は 1 個 | 「どこが到達点か」を色だけで示す | R5 |
| 凡例なし | ラベルと配置で意味が決まる | R7 |
| タイトルが画像内 | SNS でトリミングされても主題が残る | R8 |
| 役割を描かない | 「流れ」という 1 つの主張に絞っている | R2 |

弱点も記録しておきます。白文字の最小サイズが約 20 px(1200 px 幅)で、Zenn のスマホ表示(約 360 px 幅)に縮むと 6 px 相当になり読めません。参照図は PC 幅前提の設計です。

### 1.2 他の「一枚で手法を説明する図」

| 図 | 形がそのまま主張しているか | 要素数 | 学ぶ点 / 反面教師 |
|---|---|---|---|
| Scrum.org「Scrum Framework」ポスター https://www.scrum.org/resources/scrum-framework-poster | ループ(スプリント)を中央に、左にプロダクトバックログ、右にインクリメント。イベント 5・成果物 3・責任 3 を 1 枚に収める | 11 前後 | 要確認: 本調査ではページ本文を取得できなかった。構図は筆者の記憶に基づく。Scrum Guide の構成(https://scrumguides.org/scrum-guide.html)と整合する |
| SAFe Big Picture https://framework.scaledagile.com | 層(ポートフォリオ / ラージソリューション / ART / チーム)を積む。形は「組織の階層」を語るが、1 枚に 100 要素超 | 100 超 | **反面教師**。The Liberators も「quite big and complicated」と評する https://medium.com/the-liberators/in-depth-is-safe-really-that-bad-ed5c5c706e42 。地図であって一枚絵ではない |
| Shape Up「Hill Chart」 https://basecamp.com/shapeup/3.4-chapter-13 | 丘の形 = 登り(不確実)と下り(実行)。点の位置が状態 | 1 形 + n 点 | 形が主張そのもの。「動かない点 = 挙手」という読み方まで形に埋め込む |
| DORA Four Keys https://dora.dev/guides/dora-metrics/ | 速度 2 指標 × 安定性 2 指標の 2×2 | 4 | 4 個で止める勇気。Google Cloud の解説 https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance |
| Team Topologies https://teamtopologies.com/key-concepts | チーム 4 種を形と色で、相互作用 3 種を線で表す記号体系 | 4 + 3 | 「4 種と 3 種で足りる」という制約自体が主張(Fowler の bliki が記号集に言及 https://martinfowler.com/bliki/TeamTopologies.html) |
| TPS の家 https://lean.org/lexicon-terms/toyota-production-system/ | 屋根(品質・コスト・リードタイム)を JIT と自働化の 2 本柱が支え、土台が安定 | 5 前後 | 建築メタファー。「柱を 1 本抜けば屋根が落ちる」が形で分かる |
| PDCA(Deming wheel) https://www.lean.org/lexicon-terms/pdca/ | 4 分割の円。Deming は 1950 年に「坂を登る車輪」として提示 https://thinkinsights.net/consulting/pdca-cycle/ | 4 | 円 = 繰り返し。4 象限は最小の循環 |
| OODA ループ https://en.wikipedia.org/wiki/OODA_loop | 4 段の輪。ただし Boyd 原図は多方向のフィードバックを持つ https://strategyu.co/ooda-loop/ | 4 | 教科書版は簡略化されている。「正しさ」より「伝わる形」が流布する例 |
| Double Diamond https://www.designcouncil.org.uk/our-resources/framework-for-innovation/ | 菱形 2 つ = 発散 → 収束を 2 回 | 4 段階 | 形(幅の広がり)が思考の広がりを表す。2004 年発表、最も引用される手法図の一つ |
| Cynefin https://en.wikipedia.org/wiki/Cynefin_framework | 曲線で区切った 5 領域、中央に「混乱」。右が秩序、左が無秩序 | 5 | 領域の境界が「曲線」で、硬い分類でないことを形で示す |
| Wardley Map https://agilebrandguide.com/wiki/models/wardley-mapping/ | 縦軸 = 可視性、横軸 = 進化(Genesis → Custom → Product → Commodity) | 軸 2 + 点 n | 地図の文法(位置に意味)。一枚絵ではなく思考道具 |
| C4 モデル https://www.infoq.com/articles/C4-architecture-model/ | 記法非依存。ただし「必ず凡例を置く」「色と形を取り除いても意味が通る図にする」 | — | **スキーマ図の規範**。キービジュアルとは目的が違うことを明示する根拠 |
| Hohpe「Architect Elevator」 https://architectelevator.com/transformation/mighty-metaphor/ | エレベーター = 経営層と現場を往復する役割。メタファー 1 個で役割定義を伝える | 1 | 「メタファーは聴き手の世界へ問題を翻訳し、聴き手が自分で推論できるようにする」という同記事の主張が本件の根拠 |

Hohpe はまた、7 要素の図を 2 要素に「ズームアウト」しても本質は失われないと述べています https://architectelevator.com/architecture/architects-zoom 。キービジュアルは「ズームアウト済み」の図であり、スキーマ図の縮小版ではない、という位置づけが整理できます。

### 1.3 良い一枚絵が共有する視覚文法

1. **形が主張**: 円 = 繰り返し、菱形 = 発散収束、家 = 支える、丘 = 不確実性。形を見れば主張が分かり、ラベルは確認に使う
2. **要素数は一桁**: 4 個(DORA、PDCA、OODA、Double Diamond)か、5〜8 個(Cynefin、Scrum 図)。Team Topologies は 4 + 3
3. **読み順が 1 本**: 左 → 右、上 → 下、あるいは時計回り。分岐は 1 か所まで
4. **色は意味にだけ使う**: Scrum 図の青 1 個、Team Topologies のチーム種別色
5. **凡例を要らなくする**: ラベルを要素に直接付ける。C4 が凡例を必須にするのはスキーマ図だから
6. **タイトルが図の内部にある**: SNS の切り抜きや引用で本文から切り離されても成立する

---

## 2. 原則とチェックリスト

### 2.1 根拠となる知見

- **認知容量**: Miller の 7±2 (1956) は「修辞的な概数」で、Cowan (2001) は注意の焦点に保持できる塊は約 4 と再評価しています https://pubmed.ncbi.nlm.nih.gov/11515286/ 。瞬間的に数えられる(subitizing)上限も約 4 です https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two 。設計上の含意: 要素は 9 個まで置けるが、**塊(色・囲み・位置で束ねた群)は 4 個以下**にする
- **ゲシュタルト**: 近接・類同・連続・閉合・図地・共通領域・対称と秩序(プレグナンツ) https://ixdf.org/literature/topics/gestalt-principles 。図では「近接 = 余白で群を作る」「共通領域 = 囲みで群を作る」「連続 = 線で読み順を作る」「図地 = 背景を無地にして主役を浮かせる」として使う
- **Tufte**: データインク比と chartjunk の概念 https://www.edwardtufte.com/tufte/books_vdqi 。『Visual Explanations』(1997) https://www.edwardtufte.com/tufte/books_visex 。装飾を削る規律は、スキーマ図ではそのまま適用する
- **装飾は害か**: Bateman ら(CHI 2010)「Useful Junk?」は、Holmes 風の装飾チャートが理解精度で劣らず、長期記憶で優れたと報告 https://sites.stat.columbia.edu/gelman/communication/Bateman2010.pdf 。ただし Few は「被験者 20 名、装飾がデータと一体化した事例に限る」と範囲を限定しています https://www.perceptualedge.com/articles/visual_business_intelligence/the_chartjunk_debate.pdf 。設計上の含意: **主張と一体化したメタファー(ピットストップ)は許容、主張と無関係な飾りは不可**
- **Cairo**: 『The Functional Art』は「機能が先、美はその後」、『The Truthful Art』は truthful / functional / beautiful / insightful / enlightening の 5 性質 https://www.albertocairo.com 、要約 https://www.rootstrap.com/blog/data-visualization-and-truthful-art
- **Duarte「Slidedocs」**: 読むために作る視覚文書。拾い読みできる構成を重視 https://www.duarte.com/resources/books/slidedocs/ 。キービジュアルは Slidedoc の 1 ページに相当する
- **Dan Roam「Back of the Napkin」**: 見方 6 種(誰/何・どれだけ・どこ・いつ・どう・なぜ)と対応する 6 図形(肖像・チャート・地図・時間線・フローチャート・多変量図)、SQVID の 5 軸 https://readingraphics.com/book-summary-the-back-of-the-napkin/ 。「プロセス」は「どう」= フローチャート、「繰り返し」は「いつ」= 時間線。ピットイン図は「どう」と「いつ」の重ね合わせ
- **McCloud『Understanding Comics』**: 写実より記号的(iconic)な図の方が、単純さゆえに注意を引く https://en.wikipedia.org/wiki/Understanding_Comics 。アイコンは線画で統一する根拠
- **日本の図解文化**: 櫻田潤『図で考える。シンプルになる。』は「7 つの図」の型で情報を整理する https://diamond.jp/category/s-zudekanngaeru 、著者インタビュー https://goodpatch.com/blog/interview-think-using-diagrams 。要確認: 7 型の正確な名称は書籍で確認すること。NHK・日経のインフォグラフィック慣行は本調査では一次資料に当たれなかった(要確認)
- **GOV.UK の図解指針**: 「通常の読み方向に従う」「コネクタ線を交差させない」「単純な形を少種類」「開始点を明示」「色より白黒」「図の内容を本文でも説明する」 https://www.gov.uk/guidance/content-design/images 。公共機関の指針として、誠実さと可読性の最低線になる

### 2.2 キービジュアル作成規則(14 条)

| # | 規則 | 根拠 |
|---|---|---|
| R1 | 要素は **5〜9 個**、束ねた塊は **4 個以下** | Miller / Cowan |
| R2 | **1 枚 1 主張**。主張を一文で書けない図は作らない。副次情報は別図へ | Hohpe のズームアウト、Scrum 図が役割を省いた事実 |
| R3 | **形が主張を語る**。円・丘・家・レーンなど、形だけで言いたいことの半分が伝わる構図を選ぶ | §1.3 |
| R4 | **読み順は 1 本**。左→右、上→下、時計回りのいずれか。分岐は 1 か所まで | ゲシュタルト(連続)、GOV.UK |
| R5 | **強調色は 1 色**、それ以外は無彩色 + ブランド基調色。強調色は「ここが要点」にだけ使う | Scrum 図の青 1 個、Tufte |
| R6 | **ラベルは 4 語(日本語 8 文字 × 2 行)以内**。説明文を図に入れない | 参照図の実測(1 行 7 文字) |
| R7 | **凡例を置かない設計**にする。凡例が要る図はスキーマ図として作る | C4 との役割分担 |
| R8 | **タイトルを画像内**に置く。短い主題 + 一文の要約 | SNS 切り抜き耐性 |
| R9 | **アイコンは 1 セット・1 線幅**で統一。写実イラストと線画を混ぜない | McCloud、§5 ライセンス |
| R10 | **余白は面積の 3 割以上**。要素間隔は要素の高さ以上 | ゲシュタルト(近接) |
| R11 | **最小文字サイズは表示幅の 1/25 以上**(360 px 表示なら 14 px 相当)。縮小先で測る | §4 の Zenn 制約 |
| R12 | **色を抜いても意味が通る**ことを白黒で確認する。色は補助 | C4(Brown)、GOV.UK |
| R13 | **メタファーは主張と一体化**しているものだけ使う。飾りの絵は入れない | Bateman / Few |
| R14 | **alt テキストと本文の長い説明**を図と同時に書く。図だけで情報を持たせない | W3C WAI、GOV.UK(§6) |

---

## 3. メタファー: F1 ピットストップ

### 3.1 事実(図を忠実に描くための台帳)

| 項目 | 事実 | 出典 |
|---|---|---|
| ピットレーン | メインストレートと並走し、両端でコースに接続する。ガレージが並び、作業はガレージ前の**ピットボックス**で行う | https://en.wikipedia.org/wiki/Pit_stop |
| ファストレーンと作業レーン | ピットレーンは走行用の fast lane と、停止作業用の working lane に分かれる | https://www.f1-fansite.com/glossary/pit-lane/ |
| 速度制限 | **80 km/h**(FIA 2025 競技規則 34.7)。モナコ等の狭いピットでは 60 km/h。練習中の超過は 1 km/h あたり 100 ユーロ(上限 1,000)、決勝中は 5 秒加算 | https://www.fia.com/sites/default/files/fia_2025_formula_1_sporting_regulations_-_issue_1_-_2024-07-31.pdf 、https://www.formula1.com/en/latest/article/explained-why-are-there-pit-lane-speed-limits-in-f1-and-how-are-they-measured.jc4jiWVsfbRhb62QomSf0 |
| クルー人数 | 約 20 名 | Wikipedia、https://www.formula1.com/en/latest/article/anatomy-of-a-pit-stop-how-do-f1-teams-service-their-cars-in-less-than-two.5p9LNdd8XJdvP4mRsXoGsB |
| 車に触れる役割 | ホイールガンナー 4(各輪 1)、タイヤ係 8(各輪 2: 外す係・付ける係)、スタビライザー 2(左右)、フロントジャッキ・リアジャッキ各 1、フロントウイング係 | Wikipedia |
| 触れない役割 | 消火器係、クルーチーフ(信号)、ピットウォールの戦略担当 | Wikipedia、formula1.com |
| 時間 | 車が止まる前にガンが掛かり、約 0.6 秒で 4 輪が外れる。記録は 1.80 秒(マクラーレン、2023 カタール)。通常 2〜3 秒 | formula1.com(Anatomy)、Wikipedia |
| ドライバーの役割 | ボックス内の停止位置が数 cm ずれるとクルー全員の位置が狂う | https://www.youtube.com/watch?v=E__Yxf21EV8 (Fasterclass) |
| ピットウォール | ピットレーンとコースの間の壁際に設けられた戦略・エンジニアの席。規則上「ピットウォールに立てる人員」が制限される(2025 競技規則 43.13) | FIA 規則、f1-fansite 用語集 |

メタファーの対応表(「ピットイン方式」の語彙へ):

| F1 | 本標準 |
|---|---|
| コース(車が走る) | AI が実装・自動検証を回す高速ループ |
| ピットレーン(80 km/h に減速) | 人が触る区間へ入るための減速 = 仕様承認・独立レビューの待ち行列 |
| ピットボックス(クルーが触れる唯一の場所) | **人間が必ず触るゲート**。ここ以外で人は車を触らない |
| 約 20 名が 2 秒 | 判定者は 1 人だが、支える検証は多い。「作成者は承認しない」= 走ったドライバーはタイヤを替えない |
| ピットウォール(触らず判断) | 事業判断の外周リング(G-4 / G-5 等) |
| 速度超過は 5 秒加算 | ゲートを飛ばすと後で払う |

### 3.2 構図案

共通して必ず入れるもの: (a) 画像内タイトル「ピットイン方式」と一文要約「マシンは人間より速い。それでも、決められた場所では必ず人間が触る」、(b) 2 層(外周 = 事業判断の遅いゲート、内周 = 仕様承認(人) → AI 実装 → 自動検証(機械) → 独立レビュー(人) の速いループ)、(c) 3 原則「判定者は 1 人 / 作成者は承認しない / AI は結果責任を持てない」、(d) 省略不可ゲート **G-4 / G-5** を強調色で。

**案 A「サーキット + ピットレーン」**(推奨。形が主張を語る)

- 中央に横長のオーバル(コース)。コース上に「AI 実装」「自動検証」の 2 ステーション。車のピクトグラムが走る
- オーバルの下辺に沿ってピットレーンを並走させ、レーン上にピットボックスを 2 つ: 入口側「仕様承認(人)」、出口側「独立レビュー(人)」。ボックスだけ強調色で塗る。**人物アイコンはボックス内にのみ描く**
- オーバルの外側、上辺に沿って細い外周リング。G-1 … G-8 を小さな目盛で、G-4・G-5 だけ強調色の大きな目盛。「事業判断(遅い)」と 1 ラベル
- 下端に 3 原則を 3 枠で横一列
- 要素数: ステーション 2 + ボックス 2 + 外周 1 + 強調ゲート 2 + 原則 3 = 10。原則 3 枠を 1 塊とみなせば塊は 4(コース、ピット、外周、原則)
- 読み順: 時計回り 1 周 + 下段 1 行
- 弱点: 横長なので 360 px 幅では文字が小さい。スマホ用に縦積み版(§4 の 4:5)を別に作る

**案 B「二重リング」**(抽象度が高く、OGP の正方形・4:5 にも収まる)

- 同心円。外周リング = 事業判断(遅い)、内周リング = AI ループ(速い)
- 内周に 4 ステーションを 90 度ごとに配置。人のステーション 2 つだけを「ピットボックス」の形(角丸長方形 + 人物アイコン)にして、リングから外へ少し飛び出させる
- 外周に G-4 / G-5 を強調色の太い目盛で。他ゲートは細い目盛
- 中央に一文要約
- 要素数: ステーション 4 + 強調ゲート 2 + リング 2 + 要約 1 = 9
- 読み順: 時計回り。開始点は 12 時の「仕様承認」に矢印で明示(GOV.UK「開始点を明示」)
- 弱点: 「ピット」の空間的な意味(コースから分岐する)が弱まり、F1 を知らない読者にはメタファーが伝わりにくい

**案 C「レーン図(縦積み)」**(スマホ最優先の版)

- 3 レーンを縦に積む: 上「人」、中「AI」、下「機械」。工程を左から右へ: 仕様承認(人) → AI 実装(AI) → 自動検証(機械) → 独立レビュー(人)。右端から左端へ戻る矢印で「1 周 = 1 変更」
- 人レーンの 2 工程だけをピットボックスの形で強調。「人は 2 か所だけ触る」が一目で分かる
- 上部に細い帯で外周リングの代わり: 「事業判断 G-1 … G-8(G-4, G-5 は省略不可)」
- 弱点: 形としての「ループ」が弱い(戻り矢印だけ)。F1 メタファーは薄まる。ただし 4:5 や 1:1 で文字が最も大きく取れる

推奨: **案 A をマスター(2:1)として作り、案 C を縦型派生(4:5)として同じトークン・同じアイコンで作る**。案 B は OGP の正方形トリミング用の候補として保留。

---

## 4. 媒体の画像仕様(2026-10 時点)

### 4.1 媒体別の仕様

| 媒体 | 用途 | 推奨サイズ | 比率 | 上限 | 切り抜きの注意 | 出典・確度 |
|---|---|---|---|---|---|---|
| Zenn 本 | 表紙 | **500×700** | 5:7 | — | 他サイズは自動で 500×700 にリサイズ | 公式 https://zenn.dev/zenn/articles/zenn-cli-guide (確定) |
| Zenn 記事 | 本文画像 | 自然幅 ≤ 480 px 相当で設計(筆者計測: PC 約 700 px、スマホ約 360 px) | 任意 | 要確認(公式記載なし) | `=250x` で表示幅指定可。背景は `#FFF` 固定(透過 PNG はダークモードでも白地) | 公式 https://zenn.dev/zenn/articles/markdown-guide 、幅の数値は筆者計測 |
| Zenn 記事 | OGP | 自動生成(タイトル + 著者) | 1.91:1 | — | 記事ごとの独自 OGP は設定不可(要確認) | 要確認。第三者記述 https://zenn.dev/rikei_ocojo/scraps/6ef8e5e3093a59 |
| Qiita | OGP / 本文画像 | OGP は自動生成。本文画像の幅は要確認 | — | — | — | 要確認。公式一次資料なし |
| note | 見出し画像 | **1280×670** | 1.91:1 | 10 MB | クリエイターページ / マガジンでは中央 216 px だけ表示。高さ超過は下が切れる | 公式ヘルプ https://www.help-note.com/hc/ja/articles/360000231642 、公式告知 https://note.com/info/n/nc0abb0bcf97f |
| note | 本文画像 | 表示幅 620 px、解像度上限 1200 px(第三者) | — | 10 MB | — | 要確認 https://blog.acworks.co.jp/note-image-recommended-size |
| LinkedIn | 投稿画像 | 1200×627(横)、1080×1080、1080×1350 | 1.91:1 / 1:1 / 4:5 | 5 MB | リンクカードは 1.91:1 で中央トリミング | 第三者複数一致 https://www.sendible.com/insights/linkedin-post-size 、https://okzest.com/blog/image-size-for-linkedin-posts |
| LinkedIn | 記事カバー | 1200×627(多数)/ 1920×1080(一部) | 1.91:1 / 16:9 | — | 資料間で食い違い | 要確認 |
| Bluesky | 投稿画像 | 最大 4 枚、`aspectRatio` を付ける | 任意 | **1,000,000 バイト**(公式解説)/ 2,000,000(第三者) | 比率未指定だとレイアウトが崩れる | 公式 https://bsky.network/docs/about-bluesky-content/posts 。上限は要確認(lexicon の現行値を見る) |
| Bluesky | リンクカード | 1200×630 | 1.91:1 | 1 MB(第三者) | OGP から取得 | 要確認 https://mediasizes.com/bluesky-image-size |
| X | summary_large_image | 1200×600(公式比率)/ 1200×675 も可 | **2:1** | 5 MB、最小 300×157、最大 4096×4096 | 2:1 で中央トリミング | X 開発者フォーラムの公式回答 https://devcommunity.x.com/t/twitter-card-summary-large-image/144086/2 |
| X | summary | 400×400 以上 | 1:1 | 同上 | 正方形に切られる | 同上 |
| GitHub | リポジトリ social preview | **1280×640** 推奨(最小 640×320) | **2:1** | 1 MB、PNG/JPG/GIF | 透過 PNG 可(ダークモード配慮)。公式は無地背景を推奨 | 公式 https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview |
| Facebook / 汎用 OGP | og:image | 1200×630 | 1.91:1 | 8 MB | — | https://imageflux.sakura.ad.jp/column/ogp-images |

### 4.2 マスター比率の決定

5 比率に集約できます。

| マスター | 画素 | 派生先 |
|---|---|---|
| **2:1** | 1600×800(2 倍解像度は 2400×1200) | X 大カード、GitHub(1280×640) |
| **1.91:1** | 1200×630 / 1280×670 | OGP 汎用、note 見出し、LinkedIn 横、Bluesky カード |
| 1:1 | 1080×1080 | LinkedIn 正方形、X summary、Bluesky |
| 4:5 | 1080×1350 | LinkedIn 縦、Bluesky 縦、スマホ向け(案 C) |
| 5:7 | 500×700 | Zenn 本表紙のみ |

運用規則:

1. **2:1 をマスター**にし、上下 2.3% ずつ(1280×640 なら各 15 px)を切れば 1.91:1 になる。つまり 2:1 と 1.91:1 は同じ原稿で済む
2. **安全域は中央 80%**(縦横とも)。X は 2:1 中央トリミング、note は上下が切れる、Bluesky は比率未指定で崩れる。すべての切り抜きに耐えるのは中央 80% だけ
3. 1:1 と 4:5 は別原稿(案 B または案 C)。横長を縦に再配置する
4. Zenn 本文用は**表示幅 480 px を上限として 2 倍の 960 px で書き出す**。文字は 960 px 原稿で 28 px 以上(360 px 表示で約 10.5 px、R11 の下限ぎりぎり)。したがって本文用はラベルを 6 文字以内に詰める
5. OGP 内の文字は画像高さの 10〜15%(1200×630 なら 63〜95 px)が目安 https://imageflux.sakura.ad.jp/column/ogp-images

---

## 5. ツール: 日本語テキストとブランドパレットで再現可能に作る

### 5a. D2 でどこまでできるか

**スタイル(公式 https://d2lang.com/tour/style/)**: `opacity`(0〜1)、`stroke` / `fill`(CSS 色名・16 進・一部グラデーション)、`fill-pattern`(dots / lines / grain)、`stroke-width`(1〜15)、`stroke-dash`(0〜10)、`border-radius`(0〜20。接続線は ELK 等の直角系のみ)、`shadow`、`3d`(矩形のみ)、`multiple`、`double-border`、`font`(**`mono` のみ**。「More coming soon」)、`font-size`(**8〜100**)、`font-color`、`bold` / `italic` / `underline`、`text-transform`、`animated`。ルートにも `fill` / `stroke` 等を置ける。

**クラスと変数**: `classes` でスタイル束を定義し複数要素へ適用、`vars` と `${}` 置換、`...${x}` スプレッド https://d2lang.com/tour/vars/ 。

**テーマ上書き**: `vars: { d2-config: { theme-overrides: {...}, dark-theme-overrides: {...} } }` https://d2lang.com/tour/themes/ 。スロット名はソース https://raw.githubusercontent.com/terrastruct/d2/master/d2themes/d2themes.go で確認: `N1`〜`N7`(neutrals: 文字・線・背景の段階)、`B1`〜`B6`(「Base Colors: used for containers」)、`AA2` / `AA4` / `AA5`(Alternative A)、`AB4` / `AB5`(Alternative B)。**どの要素がどのスロットを使うかの対応表は文章化されておらず、Themes ページの色コード画像のみ**(要確認: 実際に上書きして確かめる)。フラグ・環境変数が `d2-config` より優先。

**アイコン**: 任意の URL。CLI ではローカルパス `icon: ./x.png` 可。`shape: image` で単体アイコン。配置は自動で、`near` で指定可 https://d2lang.com/tour/icons/ 。無料アイコン集 https://icons.d2lang.com 。要確認: `@d2lang/d2`(WASM)でローカルファイルや `data:` URI の SVG を icon に渡せるか。README には記載がない https://github.com/terrastruct/d2/blob/master/d2js/js/README.md 。

**形**: 既定は rectangle。`circle` と `square` は 1:1 固定。他に oval、hexagon、cylinder、cloud、person 等 https://d2lang.com/tour/shapes/ (要確認: 全形一覧は同ページ)。

**位置**: `near` の定数は `top-left` / `top-center` / `top-right` / `center-left` / `center-right` / `bottom-left` / `bottom-center` / `bottom-right`。**タイトルや注記はこれで置ける**。`near: <他要素の ID>`、`top` / `left` の絶対座標、コンテナ単位の `direction` は **TALA のみ** https://d2lang.com/tour/positions/ 、https://d2lang.com/tour/layouts/ 。

**グリッド**: `grid-rows` / `grid-columns`、`width` / `height`。セル間の接続は中心同士の直線で経路探索なし。グリッド内グリッドのみ入れ子可。見えない要素で位置合わせする技法 https://d2lang.com/tour/grid-diagrams/ 。

**レイアウト**: dagre / ELK / TALA。**TALA は 2026 年にオープンソース化**(要確認: 日付。ブログ https://d2lang.com/blog/tala-is-open-source )。`@d2lang/d2` の `layout` は `'dagre' | 'elk' | 'tala'`、既定 dagre。ELK は階層的で対称性を考慮しない https://d2lang.com/tour/elk/ 。

**フォント**: 同梱は Source Sans Pro(本文)、Source Code Pro(コード)、Architect's Daughter + Fuzzy Bubbles(sketch)。CLI は `--font-regular` / `--font-italic` / `--font-bold` / `--font-semibold`(`.ttf` を指す)、mono 用も同様 https://d2lang.com/tour/fonts/ 。`@d2lang/d2` は `fontRegular` / `fontItalic` / `fontBold` / `fontSemibold` に「.ttf のバイト配列」を渡す(README)。**CJK への言及はどこにもない**。要確認 2 点: (1) Noto Sans JP の TTF(Google Fonts 配布版)を渡して日本語が埋め込まれるか、(2) 「none か all」の指針どおり 4 書体すべてを渡す必要があるか(欠けた書体は Source Sans Pro に戻る)。現状の「システムフォント頼み」は resvg 側で解決しているはずで、D2 の SVG は `font-family` 名だけを書くか、フォントを埋め込むか、要確認。

**sketch**: `--sketch` で手描き風 https://d2lang.com/tour/sketch/ 。`pad` 既定 100、`scale` で拡縮(README)。

**結論(正直な評価)**: D2 は「整ったスキーマ図」までは高品質に作れます。`classes` + `theme-overrides` + `grid` + `near`(タイトル / 注記)+ `icon` で、ブランド色と一貫した見た目にできます。しかし次ができません。

- 円環・オーバル・丘などの**自由形状**(矩形・楕円・六角形等の定型のみ)
- **曲線のループ配置**(接続は直交か直線。レイアウトは DAG か TALA の直交配置)
- **自由座標**(TALA の `top` / `left` はあるが、曲線や重なりの意図的配置には足りない)
- 文字サイズ上限 100、`font` は `mono` 以外なし。見出し用ウェイトや字間の制御なし

したがって**キービジュアルを D2 で作ろうとすると「きれいな箱と線」止まり**になります。D2 の役割はスキーマ図に限定し、キービジュアルは別の道具で作るべきです。

### 5b. 手書き SVG + resvg

**resvg-js のオプション**(型定義 https://github.com/thx/resvg-js/blob/master/index.d.ts ): `font.loadSystemFonts`(既定 true。false の方が速い)、`font.fontFiles: string[]`、`font.fontDirs: string[]`、`font.fontBuffers: Uint8Array[]`(WASM 2.5.0+)、`font.defaultFontFamily`、`font.defaultFontSize`(既定 12)、`serifFamily` / `sansSerifFamily` / `monospaceFamily` 等、`dpi`、`languages`、`shapeRendering` / `textRendering` / `imageRendering`、`fitTo: { mode: 'width' | 'height' | 'zoom' | 'original', value }`、`background`、`crop` 。

**日本語**: `fontFiles` に Noto Sans JP 等を渡し、`loadSystemFonts: false` にすれば **OS に依存しない**。CI(Linux)でも同じ字形になる。これが「決定的出力」の前提。

**制約(要確認、resvg の非対応一覧 https://github.com/linebender/resvg/blob/main/docs/unsupported.md )**: SVG に自動折り返しはないので、日本語は `<tspan>` で手動改行する。`<foreignObject>`(HTML 埋め込み)は非対応。`<style>` は単純なセレクタのみで、**CSS カスタムプロパティ(`var(--brand)`)は非対応の可能性が高い**。したがってブランドトークンは**レンダリング前にテンプレート置換**で色を埋める(`{{color.accent}}` → `#xxxxxx`)。`<use>` とシンボル定義は使える(要確認: `<symbol>` + `<use>` の対応は resvg 公式に明記)。

**再現性**: 同じ SVG 文字列 + 同じフォントファイル + 同じ resvg-js バージョンなら、出力 PNG はバイト一致が期待できる(要確認: CI でハッシュ検査を 2 回実行して確かめる)。これは Playwright にはない利点。

### 5c. HTML/CSS → PNG(Playwright)

- **利点**: flexbox / grid、`@font-face` でローカルフォント、**日本語の自動折り返し**、CSS 変数でトークン直結、`deviceScaleFactor: 2` で 2 倍解像度
- **欠点**: 描画は OS・ブラウザ版・ヘッドレス有無で変わる。Playwright 公式も「host OS, version, settings, hardware, power source, headless mode」で差が出ると明記(https://diffy.website/blog/playwright-visual-regression-testing に引用)。対策は **公式 Docker イメージ `mcr.microsoft.com/playwright` で基準画像も生成し、`document.fonts.ready` を待ち、アニメーションを止める** https://argos-ci.com/blog/playwright-visual-regression-testing-ci 。Chromium 同梱で約 300 MB(ZENSHIN の比較表 https://zenn.dev/zenshin/articles/2026-08-11-astro-og-image)
- **位置づけ**: バイト一致を諦め、`maxDiffPixelRatio` で許容する運用になる。ハッシュ検査が目的なら不向き

### 5d. その他

- **Satori(Vercel)** https://github.com/vercel/satori : JSX(または HTML ライク)→ SVG。レイアウトは Taffy で **flexbox と grid**(subgrid / masonry 以外)。`satori(element, { width, height, fonts: [{ name, data, weight, style }], embedFont, debug, loadAdditionalAsset })`。**テキスト折り返しあり**。フォントは TTF / OTF / WOFF(WOFF2 不可)で、文字を描くなら必ず渡す。既定で文字を `<path>` 化(`embedFont: true`)するので **PNG 化時にフォント環境に依存しない**。`loadAdditionalAsset(code, segment)` は絵文字や未対応言語の区間で呼ばれ、`lang="ja-JP"` で言語指定。非対応: `<style>`、`<link>`、`display: table`、`<input>`。PNG 化は公式例では sharp、実務では `@resvg/resvg-js` や `@resvg/resvg-wasm` が多い(要確認: @vercel/og の実装)。**日本語フォントは 1 ウェイト 1.5〜2 MB**(https://notes.ideamans.com/posts/2026/japanese-webfont-optimization.html)なので、サブセット化して同梱する https://blog.datsukan.me/vercel-og-image-japanese-fonts 。**OGP・キービジュアル用途の第一候補**。弱点は SVG 的な自由形状(オーバル・曲線矢印)を JSX で書きにくいこと。曲線部分は `<svg>` 要素をインラインで混ぜる(要確認: Satori は `<svg>` 子要素を画像として扱う)
- **Excalidraw**: `exportToSvg` は DOM 前提で Node 単体では動かない(公式ドキュメントの実行例自体が `'requestAnimationFrame' is not defined` で落ちている https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils/export )。回避策は Playwright 経由の CLI https://github.com/realazthat/excalidraw-brute-export-cli か、node-canvas で再実装した excalirender(要確認: 日本語フォント対応)。手描き風は D2 の `--sketch` で代替できる
- **Typst**: `typst compile --format png|svg`、`--ppi`(既定 144)、`--font-path`、`--ignore-system-fonts`、`#set page(fill: none)` で透過 https://typst.app/docs/reference/png/ 、https://man.archlinux.org/man/extra/typst/typst-compile.1.en 。組版は強いが図形言語としては冗長。日本語組版の品質は高い(要確認: ルビ・禁則)。「文字主体の一枚絵(原則 3 枠など)」には候補になる
- **Mermaid / PlantUML / Graphviz**: 自動レイアウトで形を制御できず、キービジュアルには不向き。Kroki https://kroki.io はこれらの HTTP ラッパーで、本件では採用理由がない
- **Vega / Observable Plot**: データ可視化用。本件の図はデータを持たないので対象外
- **Penpot / Figma**: コードではないので再現性要件を満たさない。下書きには使える

### 5e. 推奨アーキテクチャ

```
tokens/brand.json ──┐
                    ├─> templates/schematic/*.d2  ──(@d2lang/d2 wasm, tala)──> svg ─┐
icons/*.svg  ───────┤                                                              ├─> @resvg/resvg-js (fontFiles=Noto Sans JP subset, loadSystemFonts=false)
fonts/*.ttf  ───────┤                                                              │        └─> out/<name>.<ratio>.png + out/<name>.meta.json
                    └─> templates/keyvisual/*.tsx (Satori) or *.svg.tpl ──> svg ───┘
```

| 層 | 道具 | 理由 |
|---|---|---|
| スキーマ図 | D2 + TALA、`classes` と `theme-overrides` をトークンから生成 | 既存運用。箱と線の正確さ |
| キービジュアル / OGP | **Satori**(文字主体・折り返しが要る)または **手書き SVG テンプレート**(曲線・オーバルが主役)→ resvg | 決定的出力、フォント同梱、日本語 |
| 例外 | Playwright | CSS でしか作れない表現があるときだけ。Docker 固定 |

メタデータ(`meta.json`)には、テンプレート・トークン・フォント・アイコンの SHA-256、ツールのバージョン、出力 PNG の SHA-256、alt テキスト、長い説明の参照先を書きます。CI は同じ入力で再生成し、PNG のハッシュ一致を検査します(Playwright 経由の画像だけは差分率で検査)。

**アイコンのライセンス**(画像への埋め込みは「配布」に当たるので確認が必要):

| セット | ライセンス | 埋め込み時の義務 | 出典 |
|---|---|---|---|
| Lucide | ISC(Feather 由来分は MIT) | 著作権表示とライセンス文をソースに同梱。画像内表示は不要 | https://lucide.dev/license |
| Tabler Icons | MIT | 同上 | https://composables.com/icons/icon-libraries/lucide (一覧) |
| Phosphor | MIT | 同上 | https://phosphoricons.com |
| Heroicons | MIT | 同上 | 同一覧 |
| Material Symbols | Apache 2.0 | 同上 + NOTICE があれば同梱 | 同一覧、https://dev.to/usapopopooon/what-i-didnt-know-about-icon-library-licenses-and-you-might-not-either-30of |

運用: リポジトリに `THIRD_PARTY_LICENSES.md` を置き、使用セットは **1 つに固定**(R9)。線幅 2 px 系(Lucide / Tabler)か、ウェイト可変(Phosphor)かをブランド側で決める。

---

## 6. キャッチーさと誠実さ

### 6.1 指針

- **Cairo**: 機能が先、美はその後。「真実で、機能的で、美しく、洞察があり、啓発的」の順に満たす
- **Tufte**: 装飾は削る。ただし Bateman 2010 は「主張と一体の装飾は害がなく記憶に残る」と示した。Few の限定(装飾がデータそのものを形作っている場合に限る)を採る
- **GOV.UK**: 「装飾のための画像を使わない」「画像内に文字を置かない」が原則 https://design-system.service.gov.uk/styles/images/ 。本件はこの原則と**意図的に衝突**する(タイトルを画像内に置く R8)。衝突を解消するのが R14: 画像内の文字をすべて本文か長い説明に重複させ、画像が無くても情報が欠けない状態にする
- **メタファーの誠実さ**: ピットストップの事実(§3.1)から逸脱しない。「クルーが 2 秒で車を直す」を「人が 2 秒で承認する」と読ませてはいけない。図の中では**人が触る場所**だけを借り、速さの数値は借りない。一文要約も「速い」のは AI であって人ではない、と明示している
- **誇張の禁止**(著者方針)との整合: 数値・順位・比較を図に入れない。入れるなら根拠水準マーク付きの本文に置く。図は「構造」と「原則」だけを描く

### 6.2 概念図の alt テキストと長い説明

W3C WAI の「Complex Images」は**2 部構成**を求めます https://www.w3.org/WAI/tutorials/images/complex/ 。

1. **短い alt**: 画像を識別し、長い説明の場所を示す(1〜2 文)。GOV.UK も「2 文以内」 https://design-system.service.gov.uk/styles/images/
2. **長い説明**: 画像が伝える本質情報の文章版。配置の意味(色の順、ループの向き)が重要なら構成も書く。`<figure>` + `<figcaption>` で画像と結び付け、**目の見える読者にも見える場所**に置く

ピットイン図の書き方の例:

- alt: 「ピットイン方式の概要図。AI が回す速い実装ループの周りに、人が必ず触る 2 つのピットボックス(仕様承認、独立レビュー)と、事業判断の遅い外周ゲートを配置した図。詳細は図の下の説明を参照」
- 長い説明(本文): 「図は 2 層からなる。内側のループは時計回りに、仕様承認(人)、AI 実装、自動検証(機械)、独立レビュー(人)の 4 工程を回る。人が関わる 2 工程はピットボックスの形で強調されている。外側のリングは事業判断のゲート G-1 から G-8 で、G-4 と G-5 は省略できないため強調色で描かれている。図の下部に 3 原則、判定者は 1 人、作成者は承認しない、AI は結果責任を持てない、を並べる」

Zenn の Markdown は `![alt](url)` の alt と、直下の `*キャプション*` に対応します https://zenn.dev/zenn/articles/markdown-guide 。長い説明はキャプションではなく本文段落に書きます。

---

## 7. 未検証・要確認の一覧

| # | 項目 | 確認先 |
|---|---|---|
| 1 | Scrum.org ポスターの構図(本調査ではページ本文を取得できず) | https://www.scrum.org/resources/scrum-framework-poster |
| 2 | D2 の theme-overrides で各スロットがどの要素に効くか | https://d2lang.com/tour/themes/ の色コード画像、実機で上書き試験 |
| 3 | `@d2lang/d2` の `fontRegular` 等に Noto Sans JP(TTF)を渡して日本語が埋め込まれるか。4 書体すべて必要か | https://github.com/terrastruct/d2/blob/master/d2js/js/README.md 、https://d2lang.com/tour/fonts/ |
| 4 | WASM 版 D2 で `icon` にローカル / data URI の SVG を使えるか | 同 README |
| 5 | TALA オープンソース化の日付とライセンス | https://d2lang.com/blog/tala-is-open-source |
| 6 | resvg の `<style>`、CSS 変数、`<symbol>` / `<use>`、`<foreignObject>` の対応範囲 | https://github.com/linebender/resvg/blob/main/docs/unsupported.md |
| 7 | resvg-js 出力のバイト一致(同一入力・同一版) | CI でハッシュを 2 回比較 |
| 8 | Satori でインライン `<svg>` 子要素を扱えるか、`@vercel/og` の PNG 化実装 | https://github.com/vercel/satori 、https://github.com/vercel/next.js/tree/canary/packages/next/src/server/og |
| 9 | Zenn 記事 OGP が自動生成のみで独自画像を設定できないこと。本文画像の最大表示幅の公式値 | Zenn 公式 FAQ / ヘルプ |
| 10 | Qiita の OGP 自動生成と本文画像幅 | Qiita ヘルプ |
| 11 | Bluesky 画像上限が 1,000,000 か 2,000,000 バイトか | `app.bsky.embed.images` lexicon https://github.com/bluesky-social/atproto/tree/main/lexicons/app/bsky/embed |
| 12 | LinkedIn 記事カバーの現行推奨(1200×627 か 1920×1080 か) | LinkedIn ヘルプ |
| 13 | note 本文画像の表示幅 620 px / 上限 1200 px | note ヘルプ |
| 14 | 櫻田潤「7 つの図」の正式な型名 | 書籍本体 |
| 15 | excalirender の日本語フォント対応 | 当該リポジトリ |
| 16 | Typst の日本語組版(禁則・ルビ)の品質 | https://typst.app/docs/ |

---

## 参考文献(本文で引用したもの以外の主要資料)

- Miller, G. A. (1956). The magical number seven, plus or minus two. Psychological Review 63(2). https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two
- Cowan, N. (2001). The magical number 4 in short-term memory. Behavioral and Brain Sciences 24(1). https://pubmed.ncbi.nlm.nih.gov/11515286/
- Bateman, S. et al. (2010). Useful Junk? CHI 2010. https://sites.stat.columbia.edu/gelman/communication/Bateman2010.pdf
- Few, S. (2011). The Chartjunk Debate. https://www.perceptualedge.com/articles/visual_business_intelligence/the_chartjunk_debate.pdf
- Cairo, A. The Functional Art (2013) / The Truthful Art (2016). https://www.albertocairo.com
- Duarte, N. Slidedocs. https://www.duarte.com/resources/books/slidedocs/
- Roam, D. The Back of the Napkin. https://readingraphics.com/book-summary-the-back-of-the-napkin/
- Hohpe, G. The Mighty Metaphor. https://architectelevator.com/transformation/mighty-metaphor/
- Brown, S. The C4 model. https://www.infoq.com/articles/C4-architecture-model/
- W3C WAI. Complex Images. https://www.w3.org/WAI/tutorials/images/complex/
- GOV.UK. Images(content design)。 https://www.gov.uk/guidance/content-design/images
- FIA. 2025 Formula One Sporting Regulations. https://www.fia.com/sites/default/files/fia_2025_formula_1_sporting_regulations_-_issue_1_-_2024-07-31.pdf
- Formula1.com. Anatomy of a pit stop. https://www.formula1.com/en/latest/article/anatomy-of-a-pit-stop-how-do-f1-teams-service-their-cars-in-less-than-two.5p9LNdd8XJdvP4mRsXoGsB
- Wikipedia. Pit stop. https://en.wikipedia.org/wiki/Pit_stop
