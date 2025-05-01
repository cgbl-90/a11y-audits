import { test, expect } from "@chromatic-com/playwright";

test.describe("Check for https://www.presidencia.gob.do", () => {
  test("✅", async ({ page }) => {
    await page.goto("https://www.presidencia.gob.do", {
      waitUntil: "domcontentloaded",
    });
  });
});
