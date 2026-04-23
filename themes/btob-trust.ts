/**
 * Theme: btob-trust (BtoB信頼系)
 *
 * 向いているクライアント: 士業、医療、建設、BtoB SaaS、金融
 * 狙い: 専門性、堅実、数値で裏打ちされた信頼、ミスのない印象
 *
 * ビジュアル言語: ネイビー/グレー基調、Sans-serif、厳密なグリッド、数値訴求
 */

import { fontFamilies } from "../tokens/typography";

export const btobTrust = {
  id: "btob-trust",
  displayName: "BtoB信頼系",

  colors: {
    // 主色: 深いネイビー
    primary: "#1E3A5F",
    primaryLight: "#2C5282",
    primaryDark: "#0F2340",

    // 副色: スチールグレー
    secondary: "#4A5568",

    // アクセント: シャープな青 (実績数値やCTA)
    accent: "#0075C9",

    // 背景: 白〜オフホワイト
    background: "#FFFFFF",
    backgroundAlt: "#F7F9FC",

    // テキスト
    textPrimary: "#1A202C",
    textSecondary: "#4A5568",
    textMuted: "#718096",

    // ニュートラル
    border: "#E2E8F0",
    divider: "#EDF2F7",

    // 実績数値の強調に
    success: "#2F7D5A",
    warning: "#C05621",
  },

  typography: {
    heading: fontFamilies.sansJa, // Noto Sans JP (太め運用)
    body: fontFamilies.sansJa,
    display: fontFamilies.sansJa,
  },

  principles: [
    "情報階層を厳密に。見出しサイズの段階を守る",
    "数字を大きく見せる (実績・導入社数・削減率)",
    "余白よりもグリッド揃えを優先",
    "写真を使う場合は、整理された什器・資料・握手などBtoB文脈の記号",
    "CTA周辺に信頼シグナル (導入企業ロゴ、資格マーク) を必ず配置",
  ],

  avoid: [
    "丸みのある柔らかい形状",
    "手書き風フォント",
    "ポップな配色",
    "装飾的なイラスト",
  ],
} as const;
