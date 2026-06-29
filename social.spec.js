import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { FeedPage } from '../pages/feedPage.js';

test('FINAL PROJECT', async ({ page }) => {

  test.setTimeout(120000);

  const login = new LoginPage(page);
  const feed = new FeedPage(page);

  await login.open();
  await login.login("Akshidhaa");

  await page.waitForSelector('#feed');

  await feed.createPost(
    "First Post",
    "test-image.jpg",
    "29 June 2026"
  );

  await feed.createPost(
    "Second Post",
    "test-image1.jpg",
    "28 June 2026"
  );

  await feed.verifyPostCount(2);

  await page.waitForTimeout(10000);
});
