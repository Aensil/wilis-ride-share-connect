import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "hero" | "heroSecondary";
export type ButtonSize = "default" | "sm" | "lg" | "xl" | "icon";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl",
  ghost: "bg-transparent text-foreground hover:bg-muted/60",
  outline: "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
  hero: "bg-primary text-primary-foreground hover:scale-105 shadow-xl hover:shadow-2xl",
  heroSecondary: "bg-background/10 text-foreground border-2 border-foreground/20 backdrop-blur-sm hover:bg-background/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-8 text-base",
  xl: "h-14 px-10 text-[length:var(--font-size-button)] rounded-lg",
  icon: "h-10 w-10",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", type = "button", asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
