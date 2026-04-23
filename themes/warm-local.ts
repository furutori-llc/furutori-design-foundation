/**
 * Theme: warm-local (地域温かみ系)
 *
 * 向いているクライアント: 飲食店、観光、地場産業、農家、旅館
 * 狙い: 昔ながらの温かみ、土地の匂い、信頼感、四季の美しさ
 *
 * ビジュアル言語: アースカラー、Serif見出し、手書き風アクセント、自然光の写真
 */

import { fontFamilies } from "../tokens/typography";

export const warmLocal = {
  id: "warm-local",
  displayName: "地域温かみ系",

  colors: {
    // 主色: 土 (濃い茶)
    primary: "#5C3A21",
    primaryLight: "#8B6142",
    primaryDark: "#3A2513",

    // 副色: 藍 (和の差し色)
    secondary: "#2C4A6B",

    // アクセント: 朱 (暖色の差し)
    accent: "#B84A3F",

    // 背景: 生成り (和紙をイメージ)
    background: "#FAF6EF",
    backgroundAlt: "#F0E9DB",

    // テキスト
    textPrimary: "#2A1F14",
    textSecondary: "#6B5842",
    textMuted: "#9A8770",

    // ニュートラル
    border: "#D9CFB8",
    divider: "#E8DFC9",
  },

  typography: {
    heading: fontFamilies.serifJa, // Noto Serif JP
    body: fontFamilies.sansJa,
    display: fontFamilies.serifJa,
  },

  // このテーマの原則
  principles: [
    "写真は自然光、人の手が映り込む構図を優先",
    "見出しは明朝体、本文もやや縦長気味のゴシック",
    "余白に和の間 (ま) を意識。詰めすぎない",
    "直線よりもわずかな揺らぎ・手描き線を取り入れる",
    "日本語縦書きの活用も検討",
  ],

  // 避けるもの
  avoid: [
    "ビビッドな原色",
    "シャープなジオメトリックパターン",
    "欧文のみの見出し",
    "過度にモダンなミニマリズム",
  ],
} as const;
