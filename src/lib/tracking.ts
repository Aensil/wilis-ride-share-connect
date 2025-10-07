export interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __wilisTrackingStub?: boolean;
  }
}

export const trackEvent = (event: TrackingEvent) => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<TrackingEvent>("wilis:track", {
      detail: event,
    }),
  );
};

export const setupTrackingStub = () => {
  if (typeof window === "undefined" || window.__wilisTrackingStub) {
    return;
  }

  window.addEventListener("wilis:track", (evt) => {
    const detail = (evt as CustomEvent<TrackingEvent>).detail;

    if (typeof window.gtag === "function") {
      window.gtag("event", detail.action, {
        event_category: detail.category,
        event_label: detail.label,
      });
      return;
    }

    if (typeof console !== "undefined" && typeof console.info === "function") {
      console.info("[WILIS tracking stub]", detail);
    }
  });

  window.__wilisTrackingStub = true;
};
