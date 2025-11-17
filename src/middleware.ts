import type { APIContext, MiddlewareNext } from "astro";

export function onRequest(context: APIContext, next: MiddlewareNext) {
  const lower = context.url.pathname.toLowerCase();
  if (lower === "/manami" && context.url.pathname !== "/manami") {
    return context.redirect("/manami", 301);
  }
  return next();
}
