import { test } from "@playwright/test";

test("test 2", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.click("//a[@href='02-xpath-product-page.html']");

  // Sản phẩm 1: 2 sản phẩm
  await page.locator("//button[@data-product-id='1']").click({
    clickCount: 2,
  });

  //Sản phẩm 2: 3 sản phẩm
  await page.locator("//button[@data-product-id='2']").click({
    clickCount: 2,
  });

  // Sản phẩm 3: 1 sản phẩm
  await page.locator("//button[@data-product-id='3']").click({
    clickCount: 1,
  });
});
