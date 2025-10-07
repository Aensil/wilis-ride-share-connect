import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { trackEvent, type TrackingEvent } from "@/lib/tracking";
import { Button, type ButtonSize, type ButtonVariant } from "@/ui/Button";

interface CtaLinkProps extends PropsWithChildren {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  fallbackHref?: string;
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  trackingEvent?: TrackingEvent;
}

export const CtaLink = ({
  href,
  variant = "hero",
  size = "xl",
  target = "_blank",
  rel = "noopener noreferrer",
  fallbackHref,
  className,
  children,
  onClick,
  trackingEvent,
}: CtaLinkProps) => {
  const resolvedHref = (href || fallbackHref || "").trim();
  const normalizedHref = resolvedHref.toLowerCase();
  const isExternal = normalizedHref.startsWith("http");
  const resolvedTarget = isExternal ? target : "_self";
  const resolvedRel = resolvedTarget === "_blank" ? rel : undefined;

  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    if (!href) {
      event.preventDefault();
      if (fallbackHref) {
        window.location.href = fallbackHref;
      }
    }
    if (trackingEvent) {
      trackEvent(trackingEvent);
    }
    onClick?.(event);
  };

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={resolvedHref || "#"} target={resolvedTarget} rel={resolvedRel} onClick={handleClick}>
        {children}
      </a>
    </Button>
  );
};
