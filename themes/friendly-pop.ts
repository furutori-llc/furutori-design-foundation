/**
 * Theme: friendly-pop (親しみポップ系)
 *
 * 向いているクライアント: 美容、子育て、教育、小売、カフェ、習い事
 * 狙い: 共感、等身大、親しみ、ワクワク感、気軽さ
 *
 * ビジュアル言語: 明度高めの2〜3色、丸みのある形状、フレンドリーなコピー
 */

import { fontFamilies } from "../tokens/typography";

export const friendlyPop = {
  id: "friendly-pop",
  displayName: "親しみポップ系",

  colors: {
    // 主色: コーラルピンク (柔らかい暖色)
    primary: "#F47B6E",
    primaryLight: "#F9A89E",
    primaryDark: "#D85A4D",

    // 副色: レモンイエロー
    secondary: "#FFC94B",

    // アクセント: ミントグリーン
    accent: "#6DC9A4",

    // 背景: 柔らかいクリーム
    background: "#FFFBF5",
    backgroundAlt: "#FFF3E8",

    // テキスト (真っ黒を避けて柔らかく)
    textPrimary: "#3D3228",
    textSecondary: "#6B5A4B",
    textMuted: "#A8988A",

    // ニュートラル
    border: "#F5E8D7",
    divider: "#FAEEDB",
  },

  typography: {
    heading: fontFamilies.roundedJa, // Zen Maru Gothic (丸ゴ)
    body: fontFamilies.sansJa,
    display: fontFamilies.roundedJa,
  },

  principles: [
    "角丸は大きめ (16px以上)。カードやボタンの柔らかさを最優先",
    "イラスト・アイコンは手描き風、線の太さに揺らぎを持たせる",
    "コピーは話し言葉・?や!も使う",
    "写真は明るめ、自然光、人物の表情が見える構図",
    "ボタンは押したくなる形。drop shadowで少し浮かせる",
  ],

  avoid: [
    "ネイビー/グレー基調",
    "シャープな直線と直角のみの構成",
    "敬語過多のコピー (親しみが消える)",
    "情報密度の高いダッシュボード的レイアウト",
  ],
} as const;
