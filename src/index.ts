import { CommonRequest } from "servie/dist/common";
import { URL } from "url";

type URLCache = { url: string; URL: URL };
const map = new WeakMap<CommonRequest, URLCache>();

/**
 * Parse pathname from request url.
 */
function toURL(url: string) {
  return new URL(url, "http://localhost");
}

/**
 * Parse pathname from request instance.
 */
export function getURL(req: CommonRequest): URL {
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
