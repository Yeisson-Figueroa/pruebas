import { test, expect } from '@playwright/test';

test('loads example.com and shows heading', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
});