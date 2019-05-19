import { Request } from "servie";
import { URL } from "url";

type URLCache = { url: string; URL: URL };
const map = new WeakMap<Request, URLCache>();

/**
 * Parse pathname from request url.
 */
function toURL(url: string) {
  return new URL(url, "http://localhost");
}

/**
 * Parse pathname from request instance.
 */
export function getURL(req: Request): URL {
  const { url } = req;
  const cache = map.get(req);

  if (!cache) {
    const URL = toURL(url);
    map.set(req, { url, URL });
    return URL;
  }

  if (cache.url === req.url) return cache.URL;

  const URL = toURL(url);
  map.set(req, { URL, url });
  return URL;
}
