import { test } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.click("//a[@href='01-xpath-register-page.html']");
  await page.locator("//input[@id='username']").fill("Aa123456");
  await page.locator("//input[@id='email']").fill("Aa@gmail.com");
  await page.locator("//input[@id='female']").check();
  await page.locator("//input[@id='reading']").check();
  await page.click("//select[@id='country']");
  const countryList = await page.locator("//select[@id='country']");
  await countryList.selectOption("canada");
  await page.locator("//input[@id='dob']").fill("2024-02-08");
//   const locatorFile = await page.locator("//input[@id='profile']");
//   await locatorFile.click();
//   await locatorFile.setInputFiles("restAPI.png");
  await page
    .locator("//textarea[@id='bio']")
    .fill("Đã nhập văn bản thành công");
  await page.locator("//input[@id='rating']").fill("7");
  await page.locator("//input[@id='favcolor']").fill("#302c2c");
  await page.locator("//input[@id='newsletter']").check();
  await page.click("//button[@type='submit']");
});
