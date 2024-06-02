import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('University search on home page yields expected results.', async ({ page }) => {
    const searchText = "bri";
    const targetName = "University of the West of England, Bristol";
    const targetPath = "/data/university/2";
    const expectedLinkText = [
      "policies",
      "financial partnerships",
      "research partnerships",
      "academic partnerships",
      "FOI requests",
      "actions",
    ];
  
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('/');
  
    await page.locator("input.ded-input-search-university").fill(searchText);
  
    const container = page.locator("div.ded-university-search-result-container");
    const searchResultButton = container.locator('> button', { hasText: targetName });
    await searchResultButton.click();
  
    await expect(page).toHaveURL(new RegExp(targetPath)); // Allows the URL assertion to check for a partial match, similar to how Cypress's cy.url().should('include', targetPath); works.
    const h2Element =  page.locator('h2', { hasText: targetName })
    await expect(h2Element).toHaveText(targetName);
  
    expectedLinkText.forEach((linkText) => {
      page.locator('a', { hasText: linkText })
    });
  });
});