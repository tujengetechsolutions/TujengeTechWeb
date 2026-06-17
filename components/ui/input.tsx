import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
    className = "",
    type = "text",
    label,
    error,
    ...props
}: InputProps) => {
    return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-[var(--color-foreground)] tracking-wide">{label}</label>}
      <input
        type={type}
        className={`w-full px-3 py-2 text-xs rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-400 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-all ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};