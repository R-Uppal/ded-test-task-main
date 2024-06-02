import { test, expect } from '@playwright/test';

test.describe('home', () => {
  test('Home page loads without errors; total investment is greater than 1bn.', async ({ page }) => {

    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    expect(errors).toHaveLength(0);

    const h2Element = page.locator('h2', { hasText: 'The Demilitarise Education Model' });
    await expect(h2Element).toHaveText('The Demilitarise Education Model');
  
    const investmentElement = page.locator('p.ded-total-investment');
    await expect(investmentElement).toContainText('£');
  
    const investmentText = await investmentElement.innerText();
    const valueString = investmentText.replace(/[^\d.]/g, '');
    const valueFloat = parseFloat(valueString);
    
    expect(valueFloat).toBeGreaterThan(1000000000); // 1bn
  });
});