import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border border-border bg-card text-card-foreground shadow-md", className)}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
