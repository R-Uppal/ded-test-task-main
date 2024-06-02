import { test, expect } from '@playwright/test';

test.describe('treaty', () => {
  test('Can navigate to treaty page.', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('/');
  
    const anchorElement = page.locator('a[href="/how-we-do-it"]');
    await expect(anchorElement).toBeVisible();
    await expect(anchorElement).toHaveText('how we do it');
    await anchorElement.click();
    
    await expect(page).toHaveURL('/how-we-do-it');
    const treatyHeading = page.locator('h3', { hasText: 'treaty' });
    await expect(treatyHeading).toBeVisible();
    await treatyHeading.click();

    await expect(page).toHaveURL('/how-we-do-it/treaty');
  
    const specificH2Element = page.locator('h2', { hasText: 'The Demilitarise Education Treaty' });
    await expect(specificH2Element).toBeVisible();
    await expect(specificH2Element).toHaveText('The Demilitarise Education Treaty');
  });
});