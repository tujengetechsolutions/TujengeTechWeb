import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "brand-yellow" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Button = ({
  className = "",
  variant = "brand-yellow",
  size = "md",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 text-xs tracking-wide focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants = {
    "brand-yellow":
      "bg-[var(--color-brand-yellow)] text-[var(--color-foreground)] font-semibold hover:bg-[var(--color-brand-yellow-hover)] shadow-xs",
    outline: "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
    ghost:
      "bg-transparent text-[var(--color-muted-text)] hover:text-[var(--color-foreground)]",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-5 py-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
};
