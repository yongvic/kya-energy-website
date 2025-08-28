import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.webp|sitemap.xml|robots.txt|.+\.avif|.+\.webp|.+\.png|.+\.ttf|.+\.png|.+\.js|.+\.mp4).*)",
  ],
};
