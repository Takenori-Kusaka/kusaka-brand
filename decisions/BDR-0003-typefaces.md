# BDR-0003: 書体を BIZ UDPGothic(見出し・図)、Noto Sans JP(本文)、UDEV Gothic(コード)とする

## ステータス

採用(2026-10-12)

## コンテキスト

図の文字はこれまでシステムフォント(Yu Gothic)に依存し、環境で字形が変わった。Web とサイトは Noto Sans JP。60 年使うには、入手性(OFL)、日本語の可読性、本文とコードの骨格の一致、画像への焼き込みの適法性が要る(`research/01-brand-systems-survey.md` 3 章)。

## 決定

- 見出しと図: **BIZ UDPGothic**(モリサワ、OFL 1.1)。UD 書体は「より多くの人に」読めることを狙い、似た英数字を区別しやすい。製造現場の帳票・掲示の系統で、ブランドの「現場から始める」と一致する
- 本文: **Noto Sans JP**(Google、OFL 1.1)。最も広く配布され、デジタル庁デザインシステムが採用。入手性が最も高い
- コード・識別子・数値の列: **UDEV Gothic**(yuru7、OFL 1.1)。BIZ UD ゴシックと JetBrains Mono の合成で、見出しと同じ骨格。全角スペースの可視化とスラッシュ付きゼロ
- 欧文に別書体を持たない。和文書体の欧文グリフを使う
- 3 書体の Regular / Bold を `fonts/` に同梱し、描画器は `loadSystemFonts: false` で OS に依存しない

## 検討した選択肢

| 案 | 採らなかった理由 |
| --- | --- |
| IBM Plex Sans JP + PlemolJP(+ Plex Serif / Math) | 同族で Sans / Mono / Serif / Math が揃い、60 年の媒体の増加に最も強い。しかし IBM のコーポレート書体で、企業の印象が付く。個人の「素朴で本物」に合わない。次点として記録する |
| Noto Sans JP + Noto Sans Mono(デジタル庁と同構成) | 入手性は最高だが、Noto Sans Mono は日本語グリフを持たず Noto Sans JP へ代替する。コードの中の日本語コメントで字形が切り替わる |
| LINE Seed JP | OFL だが企業色が強い |
| 游ゴシック(SmartHR の選択) | OS 同梱で Web フォントが要らないが、OFL でなく画像への焼き込み・同梱ができない。Linux の CI で使えない |

## 根拠の水準

- UD 書体の可読性の優位は、ディスレクシア・ロービジョン向けの設計意図として一次資料で確認。Noto Sans JP との定量比較は見つからず(暫定)
- OFL の画像埋め込み・Web 配信・同梱の適法性は OFL FAQ で確認

## 影響

- digital-garden と process-compass のサイトで Web フォントを配信するなら、サブセット化して名前を変える(Reserved Font Name)。配信しない選択(本文はシステムフォントに代替)も規約の範囲内
- 既存の図(D2)の `default_font_family` を BIZ UDPGothic に変える(publishing-hub の `lint/policies/diagrams.json`)
