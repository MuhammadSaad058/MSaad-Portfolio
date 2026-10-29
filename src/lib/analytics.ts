declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "resume_download"
  | "contact_whatsapp"
  | "contact_email"
  | "project_case_study_view"
  | "project_store_click"
  | "social_profile_click"
  | "cost_estimator_calculate";

export const trackEvent = (
  eventName: AnalyticsEvent | string,
  eventParams: Record<string, unknown> = {}
) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    } else if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, eventParams);
    }
  } catch {
    // Silently continue if blocked by ad-blocker
  }
};
