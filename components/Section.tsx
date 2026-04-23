/**
 * Section component
 *
 * ページの基本単位。max-widthとpaddingを統一する。
 */

import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  as?: "section" | "div" | "article" | "header" | "footer";
  maxWidth?: "narrow" | "default" | "wide" | "full";
  paddingY?: "none" | "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

const maxWidthClasses = {
  narrow: "max-w-[720px]",
  default: "max-w-[1080px]",
  wide: "max-w-[1280px]",
  full: "max-w-none",
};

const paddingYClasses = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-20",
  lg: "py-20 md:py-32",
};

export function Section({
  children,
  as: Tag = "section",
  maxWidth = "default",
  paddingY = "md",
  className = "",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={["w-full px-4 md:px-8", paddingYClasses[paddingY], className].join(" ")}>
      <div className={["mx-auto", maxWidthClasses[maxWidth]].join(" ")}>
        {children}
      </div>
    </Tag>
  );
}
