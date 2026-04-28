import { BUSINESS_INFO } from "../config/constants";

export function getCanonicalUrl(pathname: string): string {
  const siteUrl = BUSINESS_INFO.website.replace(/\/$/, "");
  const cleanPath = pathname.split(/[?#]/)[0] || "/";

  if (cleanPath === "/") {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${cleanPath.replace(/\/$/, "")}/`;
}
