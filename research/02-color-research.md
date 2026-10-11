# 02 色彩調査メモ — 60年もつ個人ブランド配色のための根拠集

作成日: 2026-10-12 / 作成: deep-research agent(Claude) / 状態: 一次調査(清書前)

## 0. この文書の読み方

この文書は、配色を「決める」前に「世の中がどうなっているか」を集めたものです。断定を避け、根拠の水準を各所で次の印で区別します。

- **[確認]** 一次資料(論文・規格・公式ドキュメント・権威サイト)を本セッションで直接読んで確認した
- **[二次]** 二次資料(解説記事・まとめサイト)にのみ依拠している
- **[未確認]** 記憶や推測に基づき、本セッションで裏取りできていない

数値計算(OKLCH 変換、WCAG 2 コントラスト比、APCA Lc、色覚シミュレーション)は、Ottosson の公開式と APCA リポジトリの公開定数、Machado ら(2009)の行列を自作スクリプトで実装して算出しました。認証されたツールの出力ではないので、採用前に oklch.com や Leonardo で再検証してください(第4章)。

---

## 1. 色彩心理の実証 — 何がどこまで言えるか

### 1.1 大規模な異文化データが支持すること

**Jonauskaite ら(2020, *Psychological Science*)[確認]** は 30 か国・22 言語・4,598 人に 12 の色名と 20 の感情概念を結びつけさせ、国ごとの連想パターンの平均類似度 r = .88 という高い普遍性を報告しています。同時に、言語的・地理的に近い国ほど類似度が高く、機械学習で国を 34.4% の精度(偶然よりかなり高い)で当てられる程度の「ローカルな差」も確認されました(https://pubmed.ncbi.nlm.nih.gov/32900287 、https://www.academia.edu/81098457/ )。著者らによる一般向け解説(https://www.psychologytoday.com/us/blog/color-psychology/202202/why-links-between-colors-and-emotions-may-be-universal )によると、

- 赤は全ての国で「喜び/快」と「怒り」の両方に結びつき、価値の方向(良い/悪い)が最も割れる色
- 黄は「喜び・楽しさ」。赤道に近い国ほど弱い
- 黒は最も「悲しい」色。黒・茶・灰だけが主に負の感情に結びつく
- 紫は国ごとの一致度が最も低い(=文化的に不安定)
- 著者の別の発言(APA のポッドキャスト https://www.apa.org/news/podcasts/speaking-of-psychology/color-emotion )では、「feel blue(青=悲しい)」は英語固有の比喩で、他言語では青は**静けさ・満足・リラックス**という肯定的な感情に結びつく

**Adams & Osgood(1973)[確認:二次資料経由]** は 23 の言語文化圏で SD 法を用い、赤が最も「強く・活動的」、黒・灰は「悪い」、白・青・緑は「良い」、明るさは肯定評価と相関、という構造が繰り返し現れることを示しました(https://globalcolormeaning.org/entries/gcmd-c04.html )。半世紀前の研究ですが、後続研究の基準点です。

**Palmer & Schloss(2010, *PNAS*)の生態学的価値理論(EVT)[確認]** は、色の好みは「その色を持つ物への平均的な感情反応」で説明できるとし(青=澄んだ空と水、茶=腐敗物)、他の3理論より少ないパラメータで好みを予測できたと報告しています(https://www.pnas.org/doi/10.1073/pnas.0906172107 )。日米比較(Yokosawa, Schloss, Asano & Palmer 2016, *Cognitive Science*)[確認:抄録] では、両国とも青付近に好みのピーク、暗い黄に谷がある一方、**日本人参加者は米国人より暗い色を好まない**傾向が報告されています(https://pubmed.ncbi.nlm.nih.gov/26400420 )。この点は「墨・鉄紺を主役にする」判断への注意材料です。

### 1.2 ブランド文脈

**Labrecque & Milne(2012, *JAMS*)「Exciting red and competent blue」[確認:抄録のみ]** は 4 つの研究で色相をブランドパーソナリティ次元に対応づけ(研究1)、彩度と明度がその印象を増幅すること(研究2)、色で購買意図やブランドの好意度が動くこと(研究3・4)を示しています(https://laurenlabrecque.com/home/research 、https://www.proquest.com/docview/1030089315 )。題名が示す「赤=興奮、青=有能」以上の対応表は本セッションで本文を読めておらず **[未確認]** です。二次解説(https://www.deepmarketing.it/en/blog/color-science-marketing-evidence-2026 )は「色そのものより、色とブランド人格の一貫性が効く」と要約しており、これは「青なら信頼される」という安易な読みへの歯止めになります。

### 1.3 注意すべき点(効果量と再現性)

- **Elliot & Maier(2014, *Annual Review of Psychology*)[確認:抄録]** は色心理学を総説し、「この分野はまだ初期段階(nascent stage)にあり、相当な作業が必要」と明記しています(https://pubmed.ncbi.nlm.nih.gov/23808916 )。同著者の color-in-context 理論は「色の効果は文脈依存」を前提に置きます(https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.00368/full )。
- 「赤は魅力を高める」系の有名な効果は、事前登録された追試(Lehmann & Calin-Jageman 2017)で再現されず、メタ分析(Lehmann, Elliot & Calin-Jageman 2018)でも効果は小さく縮小傾向と報告されています(https://thenewstatistics.com/itns/2017/08/21/red-romance-and-replication 、https://pmc.ncbi.nlm.nih.gov/articles/PMC10480976 )。色が行動を直接動かすという主張は、連想研究よりはるかに弱い証拠しかありません。
- Jonauskaite らの別研究(i-Perception 2020)[確認] は、色票と色名で連想パターンがほぼ同じであること、ただし焦点色から大きく外れた色では**色相より明度・彩度が効く**可能性を指摘しています(https://pmc.ncbi.nlm.nih.gov/articles/PMC7027086 )。暗い藍と明るい藍は同じ「青」ではない、ということです。

### 1.4 この調査の結論(第1章)

| 連想 | 普遍性 | 根拠 |
|---|---|---|
| 青 = 静けさ・満足・信頼 | 高い(英語圏の「青=悲しい」は例外) | Jonauskaite 2020、Adams & Osgood、EVT |
| 赤 = 覚醒・注意(快/不快は割れる) | 高い | Jonauskaite 2020、Adams & Osgood |
| 緑 = 自然・成長 | 高い(EVT の説明と整合)。ただし Jonauskaite の解説記事には緑の個別結果なし | EVT |
| 黒・灰・茶 = 負の感情 | 高い | Jonauskaite 2020 |
| 紫 | 低い(文化で割れる) | Jonauskaite 2020 |
| 白 | 本セッションで異文化データを確認できず **[未確認]**(東アジアの喪の白は通説だが一次資料未読) | — |
| 黄 = 喜び | 高いが緯度で変動 | Jonauskaite 2020 |

「藍を主役にする」判断は、現在の証拠と矛盾しません。ただし信頼は色から生じるのではなく、色と人格の一貫性から生じる(1.2)。60 年使うなら、色より**使い方の規則**が本体です。

---

## 2. 日本の伝統色 — 値と意味

### 2.1 重要な前提: 伝統色に「正しい hex」は存在しない

同じ色名でも出典ごとに値が大きく違います。例: 藍色は和色大辞典 #165e83、JIS 慣用色名の近似 #2E4B71、DIC 日本の伝統色 N889 RGB(0,106,149)=#006a95、伝統色のいろは #004C71。JIS Z 8102:2001 は 269 色をマンセル値で規定しており、Wikipedia の hex は「あくまで参考」と明記されています(https://ja.wikipedia.org/wiki/JIS%E6%85%A3%E7%94%A8%E8%89%B2%E5%90%8D 、規格本文 https://kikakurui.com/z8/Z8102-2001-01.html 、JSA 解説 https://webdesk.jsa.or.jp/common/W10K0620?id=1338 )[確認]。したがって、**値は一つの出典から取り、出典名とともに記録する**のが唯一の誠実なやり方です。本メモでは Web 用の主値を和色大辞典(colordic.org、465 色)から取り、印刷指定の参照値として DIC 番号を併記します。

### 2.2 候補色の値(和色大辞典 https://www.colordic.org/w [確認] / JIS 近似 [確認] / DIC: https://www.i-iro.com/dic-nippon [二次] )

| 色名 | 和色大辞典 hex | OKLCH(算出) | JIS Z 8102 マンセル / 近似hex | DIC 日本の伝統色 |
|---|---|---|---|---|
| 藍色 | #165e83 | 45.8% 0.090 236.8 | 2PB 3/5 / #2E4B71 | N889 (0,106,149) |
| 紺色 | #223a70 | 36.0% 0.098 264.1 | 6PB 2.5/4 / #333C5E | N899 (42,48,92) |
| 褐色(かちいろ)=勝色 | #4d4c61 | 42.6% 0.035 287.0 | 勝色 7PB 2.5/3 / #383C57 | — (いろは: #181B39) |
| 鉄紺 | #17184b | 24.5% 0.092 276.3 | 7.5PB 1.5/2 / #232538 | N898 (13,50,70) |
| 瑠璃色 | #1e50a2 | 44.6% 0.143 259.9 | 6PB 3.5/11 / #3451A4 | N891 (42,87,154) |
| 群青色 | #4c6cb3 | 54.1% 0.118 264.5 | 7.5PB 3.5/11 / #414FA3 | N892 (34,59,128) |
| 墨 | #595857 | 46.1% 0.002 — | N2 / #313131 | N960 (46,47,49) |
| 消炭色 | #524e4d | 42.7% 0.006 — | — | N958 (57,60,65) |
| 利休鼠 | #888e7e | 63.7% 0.024 123.9 | 2.5G 5/1 / #787C7A | N953 (134,144,132) |
| 銀鼠 | #afafb0 | 75.4% 0.001 — | N6.5 / #A0A0A0 | N947 (190,189,185) |
| 藍鼠 | #6c848d | 59.8% 0.031 222.6 | 7.5B 4.5/2.5 / #5E7184 | N901 (93,109,122) |
| 生成り色 | #fbfaf5 | 98.4% 0.007 97.3 | 10YR 9/1 / #F0E2E0 | — |
| 胡粉色 | #fffffc | 99.9% 0.004 — | 2.5Y 9.2/0.5 / #F2E8EC | — |
| 白練 | #f3f3f2 | 96.4% 0.001 — | — | — |
| 象牙色 | #f8f4e6 | 96.6% 0.019 93.7 | 2.5Y 8.5/1.5 / #E3D4CA | — |
| 練色 / 灰白色 | #ede4cd / #e9e4d4 | 92.0% / 91.8% | — | — |
| 朱色 | #eb6101 | 65.9% 0.189 44.7 | 6R 5.5/14 / #ED514E | N731 (223,72,64) |
| 丹色 | #e45e32 | 64.7% 0.177 38.0 | — | — |
| 緋色 | #d3381c | 57.4% 0.196 32.4 | — (紅緋 6.8R 5.5/14) | N723 (229,72,72) |
| 鉛丹色 | #ec6d51 | 68.3% 0.163 33.9 | 7.5R 5/12 / #D3503C | — |
| 弁柄色 | #8f2e14 | 44.3% 0.136 35.4 | 8R 3.5/7 / #8A4031 | N753 (142,80,64) |
| 松葉色 | #839b5c | 65.5% 0.091 125.8 | 7.5GY 5/4 / #6E815C | N851 (81,113,62) |
| 常磐色 | #007b43 | 51.2% 0.128 154.3 | 3G 4.5/7 / #357C4C | N847 (46,121,45) |
| 老竹色 | #769164 | 62.4% 0.072 133.3 | — | N821 (133,141,112) |
| 苔色 | #69821b | 56.7% 0.128 122.8 | — | N837 (109,115,39) |
| 千歳緑 | #316745 | 46.7% 0.080 154.2 | 4G 4/3.5 / #4A6956 | N853 (53,83,58) |
| 木賊色 | #3b7960 | 52.7% 0.076 165.1 | — | — |
| 山吹色 | #f8b500 | 81.4% 0.168 81.7 | 10YR 7.5/13 / #FFA500 | N793 (255,168,38) |
| 黄金 | #e6b422 | 79.4% 0.155 87.3 | — | — |
| 金茶 | #f39800 | 75.5% 0.166 68.0 | 9YR 5.5/10 / #C47600 | N748 (172,101,37) |
| 琥珀色 | #bf783a | 63.7% 0.118 59.2 | 8YR 5.5/6.5 / #C67400 | N747 (210,123,34) |

注記: 「杉」を名乗る伝統色名は和色大辞典・JIS・DIC のいずれにも見当たりませんでした **[確認:不在]**。杉の緑を表すなら千歳緑・木賊色・老竹色・松葉色から選ぶのが筋です。JIS の hex は Wikipedia による近似で、金色はマンセル値なし。DIC 値は i-iro の転載で、DIC 公式アプリ(https://www.dic-graphics.co.jp/products/dcguide )で要再確認。

### 2.3 文化的な意味

- **藍 = ジャパンブルー** [確認]: 1874 年(明治7)に来日したお雇い外国人ロバート・W・アトキンソンが、藍染の衣服を着る日本人の多さに驚き「ジャパン・ブルー」と表現した、とされます(ミツカン水の文化センター機関誌 https://www.mizu.gr.jp/kikanshi/no55/02.html 、国土交通省多言語解説 https://www.mlit.go.jp/tagengo-db/en/R2-01794.html )。同記事によれば、当時のヨーロッパでは天然藍染がすでに失われていたことも驚きの背景です。阿波(徳島)の吉野川流域の蒅(すくも)は質量ともに秀で「阿波藍」として全国に出荷され、2019 年に日本遺産「藍のふるさと 阿波」に認定(https://kimono-nagami.com/aizome )。藍は「甕覗き」の淡さから黒に見える濃紺まで連続した階調を持ち、**職人の発酵・重ね染めの技術そのもの**を指す色です。なお「伝統色のいろは」は、純粋な深い青を藍色と呼ぶのは江戸以降で、平安期の藍色は黄蘗や刈安を掛けた緑を指したと注記しています(https://irocore.com/ai-iro/ )。
- **勝色(褐色、かちいろ)** [確認]: 紺よりさらに濃く黒に見えるほどの藍。藍を濃く染み込ませるため布を搗(か)つことが語源で、鎌倉期に武士が「勝」の字を当てて縁起色とし、日清・日露戦争の軍服の紺も「軍勝色」と呼ばれた(https://irocore.com/kachiiro 、RGB 24,27,56 = #181B39)。質実剛健・勝負事の色で、「煽り」とは正反対の静かな闘志を帯びます。
- **朱・丹 = 魔除けと神域の境界** [確認]: 丹は辰砂(硫化水銀)を砕いた顔料で、縄文期から祭祀と魔除けに用いられ、古墳の石室や棺にも塗られました(丹生都比売神社 https://niutsuhime.or.jp/worship/yakuyoke/ni )。環境省の資料は、赤色顔料として主にベンガラ(酸化第二鉄)と水銀朱が使われ、後に鉛丹(四酸化三鉛)も加わったこと、辰砂は鉄鉱石より産出が限られるため水銀朱は高級で、鳥居や漆器・朱肉などに用いられたことを記しています(https://www.env.go.jp/chemi/tmms/husigi/hg_husigi_09.pdf )。伏見稲荷大社の公式 FAQ は、朱の原材料は水銀=丹で、木材の防腐剤として使われてきたと説明し(https://inari.jp/about/faq )、月桂冠の解説は「鳥居の朱色は生命力を表し、魔力に対抗する色」と書いています(https://www.gekkeikan.co.jp/enjoy/bunko/inari-momoyama/fushimiinari.html )。**鳥居の朱に単一の hex はありません**。顔料は水銀朱(真朱)・ベンガラ・鉛丹と時代と社格で異なり、現代は鉛丹系の専用塗料も流通します(塗料会社の例 http://www.ooedo-toryo.com/shuiro/shuiro.html [二次])。Web で「鳥居の朱」を表すなら、鉛丹色 #ec6d51 〜 丹色 #e45e32 〜 朱色 #eb6101 の黄みの赤が近く、ベンガラの沈んだ赤(弁柄色 #8f2e14)も正統です。
- **四十八茶百鼠と侘び寂び** [確認:二次]: 江戸幕府の奢侈禁止令で庶民に許された色が茶・鼠・藍に限られ、その制限の中で多数の茶と鼠が生まれた、というのが通説です(https://mag.japaaan.com/archives/47639 、https://irocore.com/tags/48cha100.html )。一方で、植物染料と灰媒染では元々茶と灰しか出にくく、この語は幕府への風刺だったのではという異論もあります(https://karashimaaya.com/48cha100nezumi )。どちらにせよ、**鼠系は「制約の中の洗練」の色**であり、利休鼠・藍鼠・銀鼠は「素朴で本物」「余力を残す」という価値に合います。
- 禊・渓谷・御神木の緑については、色名に直接対応する一次資料を本セッションでは確認していません **[未確認]**。千歳緑(ちとせみどり)は常緑樹の変わらぬ緑を意味する色名であること、木賊色・老竹色が植物名由来であることは和色大辞典の名から読めますが、意味づけは二次情報です。

### 2.4 「誠実・職人・静けさ・本物」を連想させる色(本章の結論)

- 誠実・静けさ: 藍〜紺の暗い青(第1章の青=静けさと整合)、ただし黒に近づけすぎない(日本人は暗い色を好まない傾向、1.1)
- 職人・本物: 藍そのもの(発酵と重ね染めの技術)、ベンガラ(土と鉄の赤)、生成り・象牙(漂白しない布と紙)
- 余力・素朴: 鼠系(四十八茶百鼠)、老竹・松葉の灰みの緑
- 「決められた場所で人が触る」: 朱・丹(境界と魔除けの記号) — ただし**販促の赤ではなく、神域の境界線としての赤**という使い方の規則が要る

---

## 3. アクセシビリティ科学

### 3.1 WCAG 2.2(現行の法的・契約上の基準)[確認]

- **1.4.3 Contrast (Minimum), AA**: 通常テキスト 4.5:1 以上、大きなテキスト(18pt 以上または 14pt 太字以上)3:1 以上。ロゴ・装飾は対象外(https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html )
- **1.4.6 Contrast (Enhanced), AAA**: 7:1 / 大きなテキスト 4.5:1
- **1.4.11 Non-text Contrast, AA**: UI 部品と意味のある図形は隣接色に対し 3:1(https://www.getstark.co/wcag-explained/perceivable/distinguishable/contrast-minimum )
- W3C の解説は、3:1 が ISO 9241-3 等の標準視力向けの最低値で、4.5:1 は低視力・色覚特性・加齢によるコントラスト感度低下を見込んだ値だと説明しています。

### 3.2 APCA(知覚ベースの新算法)[確認]

APCA は明度コントラストを Lc 0〜±106 で表し、文字サイズ・太さと組み合わせて判定します。公式の簡易ガイド(https://git.apcacontrast.com/documentation/APCAeasyIntro.html )では、

- **Lc 90**: 本文(14px/400 以上)の推奨水準
- **Lc 75**: 本文の最低水準(18px/400 以上)。「読ませる文字」の下限と考える
- **Lc 60**: 本文以外の読む文字の最低(24px/400 または 16px/700)
- **Lc 45**: 大きな見出しなど、**Lc 15**: 多くの人に見えなくなる点(細線・境界線の限界)

W3C Silver タスクフォースの比較表では、明るい背景なら Lc 60 ≈ WCAG 4.5:1、Lc 75 ≈ 7:1、Lc 45 ≈ 3:1 に相当します(https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup )。

### 3.3 どちらを使うか(2026 年 10 月時点の判断)

**WCAG 2.2 を適合の下限、APCA を設計の指針**にします。理由は次のとおりです。

- WCAG 3.0 は 2026 年 10 月時点でも Working Draft で、本文に「WCAG 3 で使うコントラスト算法は未決定(yet to be determined)」と書かれています(https://www.w3.org/TR/wcag-3.0 )[確認]。
- Adrian Roselli は 2026 年 4 月の記事で、APCA を「WCAG 3 の算法」と呼ぶ宣伝が誤りで、WCAG 2 の算法を捨てる根拠にならないと指摘し、APCA 作者自身も「草案段階の指針で最終標準ではない」とコメントしています(http://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html )[確認]。Eric Eggert の記事も、作業部会共同議長の補足として「APCA は現在の草案に含まれていない」と更新されています(https://yatil.net/blog/wcag-3-is-not-ready-yet )[確認]。
- したがって、**契約・監査で問われるのは WCAG 2.x の比率**です。ただし WCAG 2 の算法は暗い背景で甘く、細字で辛い既知の偏りがあるため、本文は「4.5:1 を満たし、かつ Lc 75 以上(できれば 90)」の両取りにします。

### 3.4 色覚特性(CVD)

- 有病率: 先天性の赤緑色覚特性は男性の約 8%(1/12)、女性の約 0.5%(1/200)(Colour Blind Awareness https://www.colourblindawareness.org/colour-blindness 、Wikipedia https://en.wikipedia.org/wiki/Color_blindness )[確認]。北欧系で最も高く、プロタン(1型)は欧州男性の約 1%、デュータン(2型)がより多い(https://pmc.ncbi.nlm.nih.gov/articles/PMC12385717 )。製造業の現場向けに作るなら、**男性比率が高い職場では読者の 5〜8% に効く**設計要件です。
- **Okabe–Ito(Color Universal Design)パレット** [確認]: 黒 #000000、橙 #E69F00、空色 #56B4E9、青緑 #009E73、黄 #F0E442、青 #0072B2、朱 #D55E00、赤紫 #CC79A7(https://vizcept.com/blog/okabe-ito-palette-guide 、https://emitanaka.org/blog/2022-02-20-color-considerations/color-considerations.html )。原典の CUD ページ(https://jfly.uni-koeln.de/color/ )[確認]は、赤には純赤でなく**朱(vermilion)**を、赤や茶と対比する緑には**青みの緑**を使うこと、色相だけで区別せず明度・彩度を変えること、線種・記号・ハッチングで冗長に符号化し、白黒印刷でも読めるか確認することを勧めています。
- **Paul Tol のスキーム(SRON 技術ノート issue 3.2, 2021)** [確認:原典 PDF https://sronpersonalpages.nl/~pault/data/colourschemes.pdf ]:
  - bright: #4477AA 青, #EE6677 赤, #228833 緑, #CCBB44 黄, #66CCEE 水, #AA3377 紫, #BBBBBB 灰
  - vibrant: #EE7733 橙, #0077BB 青, #33BBEE 水, #EE3377 赤紫, #CC3311 赤, #009988 青緑, #BBBBBB 灰
  - muted: #CC6677 rose, #332288 indigo, #DDCC77 sand, #117733 green, #88CCEE cyan, #882255 wine, #44AA99 teal, #999933 olive, #AA4499 purple, #DDDDDD 灰
  - bright・vibrant・muted は色覚特性に安全。質的スキームは補間せず、最大色数(bright 7、muted 9)まで(https://cran.r-project.org/web/packages/khroma/vignettes/tol.html )
- **本メモでの検証**: Machado ら(2009)の行列(重症度 1.0)[未確認:行列値は記憶に依拠] で候補色を変換し、OKLab 空間のユークリッド距離 ΔE で分離度を測りました。結果、**朱系アクセントと緑系の対はプロタン(1型)で最も近づく**ことが一貫して出ました。Okabe–Ito の朱 #D55E00 と青緑 #009E73 でさえプロタン下の ΔE は 0.130 で、これが「実用上の合格ライン」の目安です。明度差(OKLCH の L)を 0.18 以上とった対(鉛丹 L 0.68 × 千歳緑 L 0.47)はこの水準に達し、明度が近い対(丹 × 老竹、L 差 0.02)は ΔE 0.078 まで落ちます。
- **赤/緑を安全にする規則**(本章の結論): (1) 赤は朱・鉛丹の黄みの赤、緑は青みの緑か灰みの緑にする、(2) 両者の OKLCH L の差を 0.15〜0.20 以上とる、(3) 形(記号・線種・下線)を必ず併用する、(4) 「成功/危険」のような意味を色だけに載せない。
- ツール: Coblis(色覚シミュレータ)、Viz Palette(Elijah Meeks & Susie Lu)、Adobe Color のアクセシビリティ機能は広く使われますが、本セッションでは各ツールの URL を直接確認していません **[未確認]**。Leonardo(Adobe、https://leonardocolor.io )は色覚シミュレーションを内蔵していることを公式に確認しました [確認]。

---

## 4. 色空間とツール

### 4.1 OKLab / OKLCH の利点 [確認]

Björn Ottosson が 2020 年 12 月に公開した OKLab は、CAM16 の明度・彩度データと IPT の色相データで当てはめた知覚的に均等な空間で、CIELAB にあった青の色相ずれを解消し、数値的に単純で安定しています(原典 https://bottosson.github.io/posts/oklab 、https://en.wikipedia.org/wiki/Oklab_color_space 、作者インタビュー https://www.smashingmagazine.com/2024/10/interview-bjorn-ottosson-creator-oklab-color-space )。その極座標表現が OKLCH(L 明度 0〜1、C 彩度 0〜約 0.37、H 色相 0〜360)。Evil Martians の解説(https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl )は、HSL の「同じ L でも色相で明るさが違う」問題を解決するため **darken() 的な操作やパレット生成の結果が予測できる**こと、P3 広色域を同じ構文で扱えること、人間が読める数値であることを利点に挙げています。

### 4.2 ブラウザ対応 [確認]

CSS Color Module Level 4 は 2022 年 7 月に Candidate Recommendation となり、以後も CR Draft が更新中です(https://www.w3.org/standards/history/css-color-4 )。`oklch()` は Chrome 111+、Safari 15.4+、Firefox 113+ で対応(https://caniuse.com/css-oklch 、https://stevekinney.com/courses/tailwind/oklch-colors )。相対色構文 `oklch(from var(--base) calc(l - 0.15) c h)` も主要ブラウザで利用可能(MDN https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch 、CSS Color 5 https://www.w3.org/TR/css-color-5 )。Tailwind CSS v4.0 は既定パレット全体を rgb から oklch に移行しました(https://tailwindcss.com/blog/tailwindcss-v4 )。古い環境向けには PostCSS の oklab 関数ポリフィルがあります(https://github.com/evilmartians/harmony )。

### 4.3 10 段階トーンランプの作り方(本メモでの実装)

Material Design 3 は HCT 空間でトーン 0〜100 を 10 刻み(+95/98/99)で持ち、トーン差でコントラストを保証します(https://m3.material.io/styles/color/system/how-the-system-works )[確認]。Radix Colors は 12 段を「背景 / 操作部品 / 境界線 / 単色 / 文字」の用途別に固定し、文字段は背景段に対し目標コントラストを保証します(https://www.radix-ui.com/colors )[確認]。USWDS の「magic number」は段番号の差 50 で 4.5:1 を保証する設計です(https://mattstromawn.com/writing/generating-color-palettes )[二次]。

本メモの手順(スクリプトで実装済み):

1. ブランド色相 H とピーク彩度 C を基準色から取る
2. L を 50→950 の 11 段に固定: 0.975, 0.945, 0.89, 0.81, 0.72, 0.62, 0.53, 0.45, 0.37, 0.29, 0.22
3. 彩度は基準色の L 付近で最大、両端で 12% まで絞る包絡線で与える
4. 各段を sRGB に戻し、範囲外なら**色相と明度を固定したまま彩度だけ二分探索で落とす**(Evil Martians が勧める OKLCH でのガマットマッピング。RGB クリップは色相が変わるため不可)
5. 段 600 以上を生成り(#fbfaf5)上の文字に、段 300 以下を背景に、という用途を固定する

紺 #223a70 を基準にした出力(生成り上の WCAG 比 / 白文字を載せた比):

| 段 | hex | OKLCH | 生成り上 | 白文字 |
|---|---|---|---|---|
| 50 | #f3f7ff | 97.5% 0.012 264 | 1.03 | — |
| 100 | #e9edf5 | 94.5% 0.012 264 | 1.12 | — |
| 200 | #d6dbe5 | 89.0% 0.015 264 | 1.33 | — |
| 300 | #b8c1d3 | 81.0% 0.027 264 | 1.73 | — |
| 400 | #98a5bf | 72.0% 0.042 264 | 2.37 | 2.48 |
| 500 | #7586a9 | 62.0% 0.057 264 | 3.50 | 3.66 |
| 600 | #576b96 | 53.0% 0.071 264 | 5.09 | 5.32 |
| 700 | #3d5484 | 45.0% 0.084 264 | 7.18 | 7.50 |
| 800 | #253d72 | 37.0% 0.096 264 | 10.1 | 10.6 |
| 900 | #142856 | 29.0% 0.087 264 | 13.7 | 14.3 |
| 950 | #08173d | 22.0% 0.076 264 | 16.7 | 17.5 |

この L 列は色相を問わずほぼ同じ比率を返す(鉄御納戸・丹・弁柄・生成り系中性色でも 600 段 ≈ 5.0、700 段 ≈ 7.1)ので、**「600 以上は本文可、700 以上は AAA」という規則を全色相で共通化**できます。

### 4.4 セマンティックトークン(プリミティブの上に置く層)

| トークン | 役割 | 既定(案A) | 根拠 |
|---|---|---|---|
| `text.primary` | 本文 | ink #2a2f3a | 12.8:1 / Lc 96.8 |
| `text.secondary` | 補助文・出典 | slate #6b7280 | 4.63:1 / Lc 70.5(本文には使わない) |
| `surface.paper` | 紙 | 生成り #fbfaf5 | 和紙系オフホワイト |
| `surface.code` | コード | 中性色 100 #ededea | 色相を持たせない |
| `border.line` | 罫線 | #e3ddd1 | Lc 14(境界線の最低 Lc 15 に近い。太さ 1.5px 以上を推奨) |
| `brand.primary` | 見出し・リンク下線・「解釈」の帯 | 紺 800 #253d72 / #223a70 | 10.5:1 |
| `accent.gate` | **人が触る場所(ピットイン)** | 丹 #e45e32(面・大文字)/ 丹 600 #b1441f(文字・線) | 3.4:1 非文字可 / 5.4:1 |
| `state.success` | 成功・採用 | 千歳緑 #316745 | 6.4:1 |
| `state.warning` | 暫定・未検証(EV マーク) | 黄土 dark #8a6a2a 文字 + 山吹 50 系の淡い地 | 4.8:1 |
| `state.danger` | 却下・禁止 | 緋 #d3381c(4.6:1、大文字/図形向け)/ 弁柄 #8f2e14(7.8:1、文字向け) | — |
| `link` | リンク | 瑠璃紺 #19448e(8.9:1)または既存 #24548c(7.4:1)。**下線必須** | 下線なしなら地の文字と 3:1 が要る |

内容の種別への対応: **事実**=ink のみ、装飾なし。**解釈**=紺 300 の左罫 + 紺 700 の見出し。**注意(暫定)**=warning。**コード**=`surface.code` + 等幅、色相なし。**リンク**=`link` + 下線。**人が決める場所**=`accent.gate` + 固定の記号(例: 六角の停止マーク)。朱を「人が触る所」に限定し、販促・強調には**使わない**ことを規則にします。

### 4.5 ツール [確認]

- oklch.com(Evil Martians の OKLCH ピッカー、sRGB/P3 のガマット境界を表示 https://oklch.com )
- Harmonizer / apcach / Polychrom(OKLCH × APCA でパレット生成・検証 https://github.com/evilmartians/harmonizer 、https://evilmartians.com/chronicles/exploring-the-oklch-ecosystem-and-its-tools )
- Leonardo(Adobe、目標コントラスト比から段を生成、CVD シミュレーション内蔵 https://leonardocolor.io 、https://github.com/adobe/leonardo )
- Huetone は「APCA 対応のパレットツール」として知られますが、本セッションでは未確認 **[未確認]**

---

## 5. パレットの規模と運用規則

- **主色1 + アクセント1 + 中性色**: 「60-30-10」はインテリアデザイン由来の経験則で(https://www.housebeautiful.com/design-inspiration/a73512287/designer-60-30-10-color-rule )、実証研究ではありません **[二次:経験則]**。ただし Material(https://m2.material.io/design/color/dark-theme.html )や Radix の設計も「大面積は中性色、色は少量」という同じ構造で、ブランド実務の合意として扱って差し支えありません。
- **データ可視化の色数**: Datawrapper(Lisa Charlotte Muth)は「多くの色を使わない」ことを体系的に勧め、重要でない系列を灰にし、同一色相の濃淡で分ける方法を示しています(https://www.datawrapper.de/blog/10-ways-to-use-fewer-colors-in-your-data-visualizations 、https://www.datawrapper.de/blog/emphasize-with-color-in-data-visualizations )[確認]。Tol の bright は最大 7、Okabe–Ito は 8(黒含む)。**カテゴリ色は 6〜7 を上限**とし、それを超えるなら灰 + 強調 1〜2 色に落とす、が業界の実務です。
- **ダークモード** [確認]: Material は純黒ではなく #121212 の暗い灰を推奨し、理由として明るい文字との過剰コントラストによる眼精疲労と、影による高さ表現が効かなくなることを挙げます。彩度の高い色は暗い地で「振動」するので明るめ・低彩度の変種を使い、高さはオーバーレイの明るさで表現します(https://m2.material.io/design/color/dark-theme.html 、https://codelabs.developers.google.com/codelabs/design-material-darktheme )。atmos の解説は Material 3 の実例から「ダークでは彩度をおよそ 20 ポイント下げる」と要約しています(https://atmos.style/blog/dark-mode-ui-best-practices )[二次]。本メモの試算: 地 #16181d(紺の色相、L 0.20)、文字 #e8e6df(14.2:1)、丹 400 #f2805c(6.8:1、Lc −50)、紺 300 #b8c1d3(9.8:1)、松葉 #839b5c(5.8:1)。丹 500 のままだと 5.0:1 で Lc −38 に落ちるので、**ダークではアクセントを 1 段明るく**します。
- **印刷** [確認]: sRGB の鮮やかな青・橙は CMYK の色域外で、変換時に沈み、青はマゼンタ過多で紫に転びやすい(https://www.vistaprint.com/hub/correct-file-formats-rgb-and-cmyk 、https://www.printful.com/blog/rgb-vs-cmyk-guide-to-color-systems )。日本の印刷標準は Japan Color 2001 Coated(条件不明時の無難な選択)で、紙と印刷方式が分かれば 2011 Coated や Uncoated を使う(https://www.blog.photoretouch-office.jp/cmyk-profile 、https://japancolor.jp/ )。名刺・書籍で色を守るなら、**DIC 日本の伝統色の番号で特色指定**するのが最も確実です(例: 紺色 N899、藍色 N889、朱 N731、弁柄 N753、千歳緑 N853、松葉 N851、利休鼠 N953、墨 N960、消炭 N958)。DIC の CMYK 参考値では紺色 C97 M100 Y38 K20、朱 C0 M83 Y76 K0 と、どちらもプロセス 4 色で近似可能な範囲にあります(https://www.i-iro.com/dic-nippon )[二次]。

---

## 6. 候補パレット 3 案

共通の設計規則: 主色は藍〜紺系、アクセントは朱系で「人が触る場所」専用、緑は成長・現場の色、紙は和紙系オフホワイト、墨は純黒を避ける。各値は和色大辞典を主、派生値(ランプ生成)は「派生」と明記。コントラストは自作スクリプトの算出値(要再検証)。

### 案A「藍丹(あいに)」— 阿波藍の紺と鳥居の丹

本人の既存色(ink #1f2937 / blue #24548c / green #3a7d5c / paper #f8f5ef)に最も近く、移行コストが低い案。翻訳者・アーキテクトとしての落ち着き(紺)と、ピットインの合図(丹)を最も素直に対比させます。

| 役割 | 色名 | hex | OKLCH | 生成り上 WCAG / Lc |
|---|---|---|---|---|
| primary | 紺色 | #223a70 | 36.0% 0.098 264 | 10.5 / 92 |
| accent(面・大文字) | 丹色 | #e45e32 | 64.7% 0.177 38 | 3.38 / 59(非文字 OK、本文 NG) |
| accent(文字・線) | 丹 600(派生) | #b1441f | 53% 0.151 38 | 5.4 / — |
| secondary(成長) | 千歳緑 | #316745 | 46.7% 0.080 154 | 6.4 / 80 |
| paper | 生成り色 | #fbfaf5 | 98.4% 0.007 97 | — |
| ink | 派生(紺の色相を 2% 含む墨) | #2a2f3a | 30.5% 0.021 266 | 12.8 / 97 |
| line | 既存 | #e3ddd1 | 89.9% 0.017 85 | 1.29 / 14 |
| muted | 既存 slate | #6b7280 | 55.1% 0.023 264 | 4.6 / 70 |

白文字を紺に載せると 11.0:1、丹に載せると 3.5:1(大文字のみ)。CVD: 紺×丹は 3 型すべてで ΔE 0.27 以上と安全。**丹×千歳緑はプロタンで 0.092**(Okabe–Ito 基準 0.13 を下回る)なので、丹と緑を並べる図では必ず形を併用します。緑を老竹(L 0.62)にすると 0.078 まで落ちるため、緑は暗い千歳緑を採ります。

### 案B「勝色(かちいろ)」— 武家の質実剛健と鉛丹

最も暗く静かな案。「100% を言わない」「煽らない」姿勢を、黒に見えるほどの藍で表します。鉛丹(鳥居の実用顔料)を合図に使います。

| 役割 | 色名 | hex | OKLCH | 白練上 WCAG / Lc |
|---|---|---|---|---|
| primary | 勝色(派生: JIS 7PB 2.5/3 の近似 #383C57 と いろは #181B39 の中間を OKLCH L 0.32 に置いた) | #2b2f52 | 31.9% 0.062 277 | 11.6 / 92 |
| accent(面) | 鉛丹色 | #ec6d51 | 68.3% 0.163 34 | **2.75 / 50(非文字 3:1 も不可)** |
| accent(文字・線・枠) | 鉛丹 dark(派生) | #b5452c | 53.9% 0.151 34 | 4.9 / 69 |
| secondary | 千歳緑 | #316745 | 46.7% 0.080 154 | 6.0 / 76 |
| paper | 白練 | #f3f3f2 | 96.4% 0.001 — | — |
| ink | 墨(DIC N960 46,47,49) | #2e2f31 | ≈30% 0.004 — | 12.2 / 93 |
| line | 派生 | #d9d8d4 | 88.2% 0.006 95 | 1.28 / 13 |
| muted | 派生 | #6f6f72 | 54.3% 0.005 286 | 4.5 / 68 |

CVD は 3 案中で最も安全(鉛丹×千歳緑: プロタン 0.121、デュータン 0.241、トリタン 0.349。勝色×鉛丹 0.31 以上)。欠点は、鉛丹が明るすぎて白練の上では UI 部品の 3:1 を満たさない点です。鉛丹は「文字を載せる面」(白文字 3.06:1 で大文字のみ)か、暗い地のアクセントに限定し、線や小さな記号は派生の #b5452c を使う規則が要ります。また第1章の「日本人は暗い色を好まない」傾向に照らすと、主色の重さは意図的な選択として記録すべきです。

### 案C「藍鼠(あいねず)と弁柄」— 四十八茶百鼠と湯治宿

彩度を最も抑えた侘び寂びの案。「余力(バッファ)」と「ひなびた湯治宿」の静けさに最も近く、長期間見ても飽きにくい反面、ブランドの識別性は最も弱い。

| 役割 | 色名 | hex | OKLCH | 象牙上 WCAG / Lc |
|---|---|---|---|---|
| primary | 鉄御納戸 | #455765 | 44.7% 0.032 242 | 6.8 / 79 |
| accent(文字も可) | 弁柄色 | #8f2e14 | 44.3% 0.136 35 | 7.4 / 81 |
| secondary(面) | 松葉色 | #839b5c | 65.5% 0.091 126 | **2.95(非文字 3:1 にわずかに不足)** |
| secondary(文字・線) | 木賊色 | #3b7960 | 52.7% 0.076 165 | 4.9 / 72 |
| paper | 象牙色 | #f8f4e6 | 96.6% 0.019 94 | — |
| ink | 羊羹色 | #383c3c | 35.2% 0.005 — | 10.2 / 89 |
| line | 派生 | #e0d9c8 | 88.6% 0.024 88 | 1.28 / 13 |
| muted | 鉄御納戸 600(派生) | #5e6e7b | 53% 0.028 242 | 5.0 / — |

白文字は主色に 7.5:1、弁柄に 8.2:1 と、**両方に本文を載せられる**のが長所。CVD: 弁柄×松葉は明度が逆転している(弁柄が暗く松葉が明るい)ため 3 案中で最も分離がよい(プロタン 0.29、デュータン 0.205)。一方、主色と弁柄は明度がほぼ同じ(1.09:1)で、互いの上には絶対に載せられず、プロタン下の ΔE も 0.124 と弱めです。山鳩色 #767c6b(3.9:1)や利休鼠 #888e7e(3.2:1)を補助文字に使いたくなりますが、AA を満たさないので大文字専用です。

### 6.4 三案の比較(本章の結論)

| 観点 | A 藍丹 | B 勝色 | C 藍鼠と弁柄 |
|---|---|---|---|
| 既存サイトからの連続性 | 高 | 中 | 低 |
| 「煽らない」印象 | 中 | 高 | 最高 |
| ブランド識別性 | 高 | 中 | 低 |
| アクセントの文字使用 | 派生色で可 | 派生色で可 | そのまま可 |
| CVD(朱×緑) | 要形併用 | 良 | 最良 |
| ダークモード移植 | 容易 | 容易 | 彩度が低く地と溶けやすい |
| 印刷(DIC 特色) | N899/N731 | 勝色は DIC 伝統色に無し(N898 鉄紺で代替) | N753/N851 |

推奨は**案A を骨格に、案C の中性色(象牙・羊羹・山鳩)を補助として取り込む**構成です。理由は、本人の既存資産と連続しつつ、「人が触る場所」の合図(丹)が最も明瞭で、規則化が容易だからです。案B は「暗さ」が 1.1 の知見と緊張するため、採るなら根拠水準マーク付きで記録します。

---

## 7. 既存色との突合

| 既存 | hex | OKLCH | 近い伝統色 | 備考 |
|---|---|---|---|---|
| ink | #1f2937 | 27.8% 0.030 257 | 紺の 900 段相当 | 生成り上 14.1:1。十分 |
| slate | #6b7280 | 55.1% 0.023 264 | 藍鼠より青寄り | 4.63:1 で AA ぎりぎり。補助文のみ |
| line | #e3ddd1 | 89.9% 0.017 85 | 灰白色寄り | Lc 14。境界線は太さで補う |
| paper | #f8f5ef | 97.1% 0.009 85 | 生成り〜象牙の間 | 継続可 |
| blue | #24548c | 44.2% 0.106 254 | 青藍(#274a78)と瑠璃紺の間 | 7.4:1。リンク色として継続可 |
| green | #3a7d5c | 53.6% 0.087 160 | 木賊色(#3b7960)とほぼ同一 | 4.7:1。丹とのプロタン ΔE 0.055 で弱い → 暗い千歳緑へ寄せる余地 |

avatar「kokorokagami」の indigo/cyber 変種は本セッションでは値を確認していません **[未確認]**。

---

## 8. 未検証事項(次の調査で潰すもの)

1. Labrecque & Milne(2012)本文: 色相→人格次元の対応表と効果量(抄録のみ確認)
2. 白の異文化連想(東アジアの喪)の一次データ
3. 禊・御神木・渓谷に対応する色名の一次資料(現状は連想にとどまる)
4. DIC 日本の伝統色の RGB(i-iro 転載。公式アプリで照合)
5. Machado 2009 の行列値(記憶依拠)と、認証ツール(Coblis 等)でのシミュレーション再現
6. Huetone、Viz Palette、Coblis の URL と現況
7. 自作スクリプトの WCAG/APCA 値を oklch.com・Leonardo・APCA 公式計算機で再計算
8. 「鳥居の朱」の顔料別 Lab 実測値(文献は顔料種のみで数値なし)

## 9. 主な出典(本文中に URL を併記したものの一覧)

心理: Jonauskaite et al. 2020 (https://pubmed.ncbi.nlm.nih.gov/32900287); Adams & Osgood 1973 via GCMD (https://globalcolormeaning.org/entries/gcmd-c04.html); Palmer & Schloss 2010 (https://www.pnas.org/doi/10.1073/pnas.0906172107); Yokosawa et al. 2016 (https://pubmed.ncbi.nlm.nih.gov/26400420); Elliot & Maier 2014 (https://pubmed.ncbi.nlm.nih.gov/23808916); Lehmann et al. 2018 (https://pmc.ncbi.nlm.nih.gov/articles/PMC10480976); Labrecque & Milne 2012 (https://laurenlabrecque.com/home/research)
伝統色: 和色大辞典 (https://www.colordic.org/w); JIS Z 8102 (https://kikakurui.com/z8/Z8102-2001-01.html, https://ja.wikipedia.org/wiki/JIS慣用色名); DIC 日本の伝統色 via i-iro (https://www.i-iro.com/dic-nippon); 伝統色のいろは (https://irocore.com/kachiiro, https://irocore.com/ai-iro/, https://irocore.com/shu-iro/); ジャパンブルー (https://www.mizu.gr.jp/kikanshi/no55/02.html); 丹 (https://niutsuhime.or.jp/worship/yakuyoke/ni, https://www.env.go.jp/chemi/tmms/husigi/hg_husigi_09.pdf, https://inari.jp/about/faq)
アクセシビリティ: WCAG 2.2 (https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html); APCA (https://git.apcacontrast.com/documentation/APCAeasyIntro.html, http://apcaw3.myndex.com); WCAG 3 (https://www.w3.org/TR/wcag-3.0, http://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html); CUD (https://jfly.uni-koeln.de/color/); Tol (https://sronpersonalpages.nl/~pault/data/colourschemes.pdf); CVD 有病率 (https://www.colourblindawareness.org/colour-blindness)
色空間・ツール: Oklab (https://bottosson.github.io/posts/oklab); Evil Martians (https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl); caniuse (https://caniuse.com/css-oklch); Tailwind v4 (https://tailwindcss.com/blog/tailwindcss-v4); Leonardo (https://leonardocolor.io); Radix (https://www.radix-ui.com/colors); Material 3 (https://m3.material.io/styles/color/system/how-the-system-works); Material dark (https://m2.material.io/design/color/dark-theme.html); Datawrapper (https://www.datawrapper.de/blog/10-ways-to-use-fewer-colors-in-your-data-visualizations); 印刷 (https://www.vistaprint.com/hub/correct-file-formats-rgb-and-cmyk, https://www.blog.photoretouch-office.jp/cmyk-profile)
