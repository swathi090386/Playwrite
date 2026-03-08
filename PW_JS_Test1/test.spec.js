//basic hello world program in playwrite

/*import { test, expect } from '@playwright/test';

test('Hello World test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
*/


//basic hello world program in playwrite


const { test, expect } = require('@playwright/test');

test('Hello World test', async ({ page }) => {
  console.log('Hello World');
  await page.goto('https://example.com');
 // await expect(page.locator('h1')).toHaveText('Example Domain');
 const heading = page.locator('h1');
await expect(heading).toHaveText('Example Domain');
});