import { test, expect } from "@playwright/test";

test("should navigate to the medals page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.click("text=Medals");

  await expect(page).toHaveURL("http://localhost:3000/medals");
});
