import { Request } from "servie";
import { getURL } from "./index";

describe("servie url", () => {
  it("should parse url from request", () => {
    const req = new Request("/test");
    const URL = getURL(req);

    expect(URL.host).toEqual("localhost");
    expect(URL.pathname).toEqual("/test");
  });

  it("should reuse cache when request already parsed", () => {
    const req = new Request("/test");
    const URL = getURL(req);

    expect(URL.host).toEqual("localhost");
    expect(URL.pathname).toEqual("/test");

    const URL2 = getURL(req);

    expect(URL2).toBe(URL);
  });

  it("should invalidate cache", () => {
    const req = new Request("/test");
    const URL = getURL(req);

    expect(URL.host).toEqual("localhost");
    expect(URL.pathname).toEqual("/test");

    req.url = "/foo"; // Change `url` from under cache.

    const URL2 = getURL(req);

    expect(URL2).not.toBe(URL);
    expect(URL2.host).toEqual("localhost");
    expect(URL2.pathname).toEqual("/foo");
  });

  it("should support full urls", () => {
    const req = new Request("https://example.com/test");
    const URL = getURL(req);

    expect(URL.host).toEqual("example.com");
    expect(URL.pathname).toEqual("/test");
  });
});
