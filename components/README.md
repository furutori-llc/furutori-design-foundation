# Components

テーマに依存しない最小限の共通コンポーネント群。  
色・余白・角丸はCSS変数経由でテーマから注入される想定。

## 初期コンポーネント

- `Button.tsx` — primary / secondary / ghost の3バリアント
- `Section.tsx` — ページの基本単位 (max-width + padding)

## 追加するとき

以下が揃ってから追加する：

1. 4テーマすべてで自然に機能するか検証済み
2. Tailwind CSSのarbitrary valuesで `var(--color-*)` を参照している
3. スマホ (375px) で破綻しない

テーマ固有のコンポーネント (例: warm-localだけの和紙風カード) は  
`themes/warm-local/components/` のような場所に分離する予定。
