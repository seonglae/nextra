import qs from "querystring";
import { IS_NOT_PROD, absoluteUrl } from "@/utils";

import type { Browser } from "puppeteer";
import type { NextApiHandler } from "next";
import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer";

const handler: NextApiHandler = async (req, res) => {
  let browser: Browser = null;

  try {
    const title = req.query.title as string;
    const description = req.query.description as string;
    const path = req.query.path as string;

    const { origin } = absoluteUrl(req);
    const query = qs.stringify({ title, description, path });
    const url = `${origin}/social-image?${query}`;

    browser = await chrome.puppeteer.launch({
      args: IS_NOT_PROD ? [] : chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: IS_NOT_PROD
        ? puppeteer.executablePath()
        : await chrome.executablePath,
      headless: IS_NOT_PROD ? true : chrome.headless,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1024,
      height: 512,
    });

    await page.goto(url, {
      waitUntil: "load",
    });

    const screenshot = await page.screenshot({
      encoding: "binary",
    });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(screenshot);
  } catch (error: unknown) {
    res.status(500).json({ error });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export default handler;
