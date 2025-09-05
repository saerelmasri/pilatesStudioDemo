// utils/gotoSection.ts
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function gotoSection(
  sectionId: string,
  router?: AppRouterInstance,
  route?: string
) {
  if (route && router) {
    router.push(`${route}#${sectionId}`);
    return;
  }
  if (typeof window === "undefined") return;
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}
