# テーマ選定ガイド

案件のクライアント特性から、4テーマのどれを使うか判断するためのガイド。

## 判定フロー

```
Q1. クライアントは法人向け (BtoB) か個人向け (BtoC) か
  ├─ BtoB → Q2へ
  └─ BtoC → Q3へ

Q2. 業種は?
  ├─ 士業・医療・建設・金融・SaaS → btob-trust
  └─ クリエイティブ系BtoB (代理店・制作会社) → modern-refined

Q3. ターゲット年齢層と地域性は?
  ├─ 30-60代 + 地域密着 (飲食・観光・地場産業) → warm-local
  ├─ 20-40代 + 親しみやすさ重視 (美容・子育て・小売) → friendly-pop
  └─ 20-40代 + 審美眼の高い層 (カフェ・D2C・ホテル) → modern-refined
```

## 各テーマの詳細

### warm-local (地域温かみ系)

- ファイル: [`warm-local.ts`](./warm-local.ts)
- キーカラー: 土色 #5C3A21 / 藍 #2C4A6B / 朱 #B84A3F
- フォント: Noto Serif JP 見出し × Noto Sans JP 本文
- 典型例: 地元の蕎麦屋LP、温泉旅館サイト、地場野菜農家のSNS

### btob-trust (BtoB信頼系)

- ファイル: [`btob-trust.ts`](./btob-trust.ts)
- キーカラー: ネイビー #1E3A5F / グレー #4A5568 / 青 #0075C9
- フォント: Noto Sans JP (全体)
- 典型例: 司法書士事務所サイト、製造業のBtoB提案資料、医療クリニック

### friendly-pop (親しみポップ系)

- ファイル: [`friendly-pop.ts`](./friendly-pop.ts)
- キーカラー: コーラル #F47B6E / レモン #FFC94B / ミント #6DC9A4
- フォント: Zen Maru Gothic 見出し × Noto Sans JP 本文
- 典型例: 美容室の予約サイト、保育園パンフ、雑貨店のInstagramバナー

### modern-refined (洗練モダン系)

- ファイル: [`modern-refined.ts`](./modern-refined.ts)
- キーカラー: ほぼ黒 #0A0A0A / オフ白 #F5F3F0 / テラコッタ #B8644C (ブランドで可変)
- フォント: Noto Serif JP 見出し × Noto Sans JP 本文
- 典型例: スペシャルティコーヒー店、D2Cアパレル、ギャラリーの展示情報

## 複数テーマの併用

ひとつのクライアントで複数テーマを組み合わせるのはNG。  
ただし「同じクライアントの中で媒体ごとに分ける」のはアリ。

例: 司法書士事務所
- 公式サイト → `btob-trust` (固い層向け)
- 相続相談の集客LP → `warm-local` (個人の高齢者向けに柔らかく)
