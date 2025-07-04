import { alphabet } from '../src/lib/alphabet';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

test.describe('Hangul', () => {
	let page: Page;

	test.beforeEach(async ({ page: testPage }) => {
		page = testPage;
		await page.goto('/');
	});

	const getScore = async () => {
		return await page.locator('.score').innerText();
	};

	const getLetterLocator = () => {
		return page.locator('.letter');
	};

	const getRomanization = async () => {
		await getLetterLocator().hover();
		return await page.locator('.romanization').innerText();
	};

	const fillAnswer = async (value: string) => {
		await page.locator("[name='letter']").fill(value);
	};

	const fillCorrectAnswer = async () => {
		await fillAnswer(await getRomanization());
	};

	const toggleSettings = async () => {
		await page.getByRole('button', { name: 'show/hide content' }).click();
	};

	test('should display the current letter', async () => {
		await expect(getLetterLocator()).toBeVisible();
	});

	test('should count a correct answer', async () => {
		fillCorrectAnswer();
		const score = await getScore();
		expect(score).toBe('1 / 1');
	});

	test('should handle incorrect answer', async () => {
		await fillAnswer('x'); // non-existing romanization
		const romanization = await getRomanization();
		const letter = await getLetterLocator().textContent();
		await expect(page.locator('.correction')).toHaveText(`${letter} = ${romanization}`);
	});

	test('should handle consecutive errors correctly', async () => {
		await fillAnswer('x');
		await fillAnswer('z');
		await fillCorrectAnswer();
		const score = await getScore();
		expect(score).toBe('0 / 1');
	});

	test('should always keep the first group checked', async () => {
		await toggleSettings();
		const simpleVowels = page.locator('input[name="simpleVowels"]');

		await expect(simpleVowels.uncheck()).rejects.toThrow(
			'Clicking the checkbox did not change its state'
		);
	});

	test('should fall back to first group if others are unchecked', async () => {
		await toggleSettings();
		const simpleVowels = page.locator('input[name="simpleVowels"]');
		const doubledConsonants = page.locator('input[name="doubledConsonants"]');

		await doubledConsonants.check();
		await expect(simpleVowels).toBeChecked(); // should auto-check simpleVowels
	});

	test('should change the letter when switching groups', async () => {
		await toggleSettings();
		const simpleVowels = alphabet.find((group) => group.name === 'simpleVowels');
		const doubledConsonants = alphabet.find((group) => group.name === 'doubledConsonants');

		if (!simpleVowels || !doubledConsonants) {
			throw new Error('Could not find groups');
		}

		const letterText = await getLetterLocator().textContent();
		expect(simpleVowels.letters.map((l) => l.letter)).toContain(letterText);

		await page.locator('input[name="doubledConsonants"]').check();
		await page.locator('input[name="simpleVowels"]').uncheck();

		const newLetterText = await getLetterLocator().textContent();
		expect(doubledConsonants.letters.map((l) => l.letter)).toContain(newLetterText);
	});
});
