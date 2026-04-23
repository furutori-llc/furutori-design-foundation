/**
 * Furutori Design Foundation - Typography Tokens
 *
 * 全テーマで参照される共通のタイポグラフィ定義。
 * テーマごとの具体的なフォント選択は themes/ 配下で上書きする。
 */

export const fontFamilies = {
  // 和文Sans (UI・本文向け)
  sansJa: `"Noto Sans JP", "Hiragino Sans", "Yu Gothic UI", sans-serif`,

  // 和文Serif (見出し・格式ある文脈)
  serifJa: `"Noto Serif JP", "Shippori Mincho", "Yu Mincho", serif`,

  // 表示用Sans (少しキャラのある和文)
  displayJa: `"Zen Kaku Gothic New", "Noto Sans JP", sans-serif`,

  // 和文丸ゴ (親しみ系)
  roundedJa: `"Zen Maru Gothic", "Hiragino Maru Gothic ProN", sans-serif`,

  // 等幅 (コード・数値)
  mono: `"JetBrains Mono", "Source Han Code JP", monospace`,
} as const;

export const fontSizes = {
  xs: "0.75rem",   // 12px
  sm: "0.875rem",  // 14px
  base: "1rem",    // 16px
  lg: "1.125rem",  // 18px
  xl: "1.25rem",   // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem",  // 36px
  "5xl": "3rem",     // 48px
  "6xl": "3.75rem",  // 60px
} as const;

export const lineHeights = {
  tight: 1.3,    // 見出し
  snug: 1.4,     // サブ見出し
  normal: 1.6,   // キャプション
  relaxed: 1.75, // 本文 (和文に最適)
  loose: 2,      // 長文読み物
} as const;

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
} as const;

export const letterSpacings = {
  tight: "-0.02em",   // 欧文見出し
  normal: "0",        // 和文デフォルト
  wide: "0.05em",     // 和文見出しで抜け感を出すとき
  wider: "0.1em",     // ラベル・CTA
} as const;
