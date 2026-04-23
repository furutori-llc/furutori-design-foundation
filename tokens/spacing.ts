/**
 * Furutori Design Foundation - Spacing & Sizing Tokens
 *
 * 8px基準のスケール。モバイルファーストで設計。
 */

export const spacing = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
  32: "8rem",    // 128px
} as const;

export const radii = {
  none: "0",
  sm: "0.25rem",   // 4px  - タグ・バッジ
  base: "0.5rem",  // 8px  - ボタン・カード
  md: "0.75rem",   // 12px - やや柔らかめ
  lg: "1rem",      // 16px - ポップ系で使用
  xl: "1.5rem",    // 24px - 親しみ系の強調要素
  full: "9999px",  // ピル型
} as const;

export const breakpoints = {
  sm: "375px",   // iPhone SE以上 (基準)
  md: "768px",   // タブレット
  lg: "1024px", // 小型PC
  xl: "1280px", // デスクトップ
  "2xl": "1536px", // 大画面
} as const;

export const containerMaxWidth = {
  narrow: "720px",   // 読み物・記事
  default: "1080px", // 標準LP
  wide: "1280px",    // ダッシュボード
  full: "100%",
} as const;

export const shadows = {
  // 使うなら1種類に統一する原則
  none: "none",
  subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  soft: "0 4px 12px -2px rgb(0 0 0 / 0.08)",
  medium: "0 8px 24px -4px rgb(0 0 0 / 0.12)",
  strong: "0 16px 40px -8px rgb(0 0 0 / 0.16)",
} as const;
