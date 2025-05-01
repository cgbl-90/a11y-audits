import { test, expect } from "@chromatic-com/playwright";

test.describe("Check for https://www.msp.gob.do", () => {
  test("✅", async ({ page }) => {
    await page.goto("https://www.msp.gob.do", {
      waitUntil: "domcontentloaded",
    });
  });
});
