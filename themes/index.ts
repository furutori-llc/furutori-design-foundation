import { warmLocal } from "./warm-local";
import { btobTrust } from "./btob-trust";
import { friendlyPop } from "./friendly-pop";
import { modernRefined } from "./modern-refined";

export { warmLocal, btobTrust, friendlyPop, modernRefined };

export const themes = {
  "warm-local": warmLocal,
  "btob-trust": btobTrust,
  "friendly-pop": friendlyPop,
  "modern-refined": modernRefined,
} as const;

export type ThemeId = keyof typeof themes;
export type Theme = (typeof themes)[ThemeId];
