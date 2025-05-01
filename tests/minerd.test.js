import { test, expect } from "@chromatic-com/playwright";

test.describe("Check for https://www.minerd.gob.do", () => {
  test("✅", async ({ page }) => {
    await page.goto("https://www.minerd.gob.do", {
      waitUntil: "domcontentloaded",
    });
  });
});
