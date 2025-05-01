import { test, expect } from "@chromatic-com/playwright";

test.describe("Check for https://www.gob.do", () => {
  test("✅", async ({ page }) => {
    await page.goto("https://www.gob.do", {
      waitUntil: "domcontentloaded",
    });
  });
});
