import { test, expect } from '@playwright/test';

test.describe('navigation from home to tech shopping page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('body');
  });

  test('has banner', async ({ page }) => {
    await expect(page.getByTestId('banner-home')).toBeVisible();
    await expect(page.getByTestId('banner-link')).toBeVisible();
  });

  test('go from home to tech shopping page', async ({ page }) => {
    await page.getByTestId('banner-link').click();
    await expect(page.getByText('Tech Shopping')).toBeVisible();
  });

});

test.describe('navigation from tech shopping to home page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/tech-shopping');
    await page.waitForSelector('body');
  });

  test('has header', async ({ page }) => {
    await expect(page.getByTestId('header-tech-shopping')).toBeVisible();
    await expect(page.getByTestId('ArrowBackIcon')).toBeVisible();
  });

  test('go from tech shopping to home page', async ({ page }) => {
    await page.getByTestId('back-button').click();
    await expect(page.getByText('Shopping')).toBeVisible();
  });

});