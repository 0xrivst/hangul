import { expect, test } from '@playwright/test';

test('current letter is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.letter')).toBeVisible();
});

test('letter is counted correctly', async ({ page }) => {
	await page.goto('/');
	const romanization = await page.locator('.romanization').innerHTML();
	await page.locator("[name='letter']").fill(romanization);
	const score = await page.locator('.score').innerText();
	expect(score).toBe('1 / 1');
});
