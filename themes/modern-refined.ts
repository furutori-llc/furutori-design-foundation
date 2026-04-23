/**
 * Theme: modern-refined (洗練モダン系)
 *
 * 向いているクライアント: カフェ、デザイナーズホテル、D2Cブランド、ギャラリー
 * 狙い: 先進性、都会性、審美眼のあるターゲット、Editorial的な佇まい
 *
 * ビジュアル言語: モノトーン+差し色1、大胆な余白、Editorial的なタイポ
 */

import { fontFamilies } from "../tokens/typography";

export const modernRefined = {
  id: "modern-refined",
  displayName: "洗練モダン系",

  colors: {
    // 主色: ほぼ黒 (真っ黒は避ける)
    primary: "#0A0A0A",
    primaryLight: "#2D2D2D",
    primaryDark: "#000000",

    // 副色: オフホワイト
    secondary: "#F5F3F0",

    // アクセント: 1色だけ、ブランドごとに選択する想定。
    // デフォルトはテラコッタ (大人びた暖色)
    accent: "#B8644C",

    // 背景: 紙のような白
    background: "#FBFAF8",
    backgroundAlt: "#F0EDE8",

    // テキスト
    textPrimary: "#0A0A0A",
    textSecondary: "#5A5A5A",
    textMuted: "#8A8A8A",

    // ニュートラル
    border: "#1A1A1A",  // 細い濃い線で引き締める
    divider: "#E5E1DB",
  },

  typography: {
    heading: fontFamilies.serifJa,  // Serifで格調を
    body: fontFamilies.sansJa,
    display: fontFamilies.serifJa,
  },

  principles: [
    "余白を極端に大きく取る。1セクション1メッセージ",
    "見出しは大胆に大きく、本文は抑制された小さめサイズ",
    "横罫・縦罫を1px細線で効かせる (Editorial感)",
    "写真はモノクロ寄りの階調、影の表現を大切に",
    "動きはミニマルかつ洗練された緩急 (ease-out長め)",
  ],

  avoid: [
    "カラフルな配色",
    "カートゥーン的イラスト",
    "過剰なCTAやポップアップ",
    "情報の詰め込み",
    "丸ゴシック系フォント",
  ],
} as const;
