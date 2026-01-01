/**
 * Shared Button component.
 * Implements the Paycort green and white brand identity.
 */
import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes safely.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  className,
  onClick,
  ...props 
}: ButtonProps) {
  const variants = {
    // White text on brand green background
    primary: "bg-brand-green text-white hover:bg-brand-green-dark",
    // Green text on white background with green border
    outline: "border-2 border-brand-green bg-white text-brand-green hover:bg-zinc-50",
    // Minimalist style
    ghost: "bg-transparent text-brand-green hover:bg-zinc-50",
  };

  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-lg px-6 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:opacity-50",
        variants[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}