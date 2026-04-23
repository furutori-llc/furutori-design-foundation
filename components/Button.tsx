/**
 * Button component
 *
 * 4テーマすべてに対応するベースボタン。
 * テーマ切り替えはCSS variables (--color-primary 等) で行う前提。
 */

import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
  secondary:
    "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-background-alt)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-[var(--radius-base)] font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
