export type Alphabet = AlphabetGroup[];

export type AlphabetGroup = {
	selected: boolean;
	letters: {
		letter: string;
		romanization: string[];
	}[];
};

export const alphabet: Alphabet = [
	{
		selected: true,
		letters: [
			{ letter: 'ㅏ', romanization: ['a'] },
			{ letter: 'ㅓ', romanization: ['eo'] },
			{ letter: 'ㅗ', romanization: ['o'] },
			{ letter: 'ㅜ', romanization: ['u'] },
			{ letter: 'ㅡ', romanization: ['eu'] },
			{ letter: 'ㅣ', romanization: ['i'] },
			{ letter: 'ㅐ', romanization: ['ae'] },
			{ letter: 'ㅔ', romanization: ['e'] },
			{ letter: 'ㅚ', romanization: ['oe'] },
			{ letter: 'ㅟ', romanization: ['wi'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㅑ', romanization: ['ya'] },
			{ letter: 'ㅕ', romanization: ['yeo'] },
			{ letter: 'ㅛ', romanization: ['yo'] },
			{ letter: 'ㅠ', romanization: ['yu'] },
			{ letter: 'ㅒ', romanization: ['yae'] },
			{ letter: 'ㅖ', romanization: ['ye'] },
			{ letter: 'ㅘ', romanization: ['wa'] },
			{ letter: 'ㅙ', romanization: ['wae'] },
			{ letter: 'ㅝ', romanization: ['wo'] },
			{ letter: 'ㅞ', romanization: ['we'] },
			{ letter: 'ㅢ', romanization: ['ui'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㄱ', romanization: ['g', 'k'] },
			{ letter: 'ㄲ', romanization: ['kk'] },
			{ letter: 'ㅋ', romanization: ['k'] },
			{ letter: 'ㄷ', romanization: ['d', 't'] },
			{ letter: 'ㄸ', romanization: ['tt'] },
			{ letter: 'ㅌ', romanization: ['t'] },
			{ letter: 'ㅂ', romanization: ['b', 'p'] },
			{ letter: 'ㅃ', romanization: ['pp'] },
			{ letter: 'ㅍ', romanization: ['p'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㅈ', romanization: ['j'] },
			{ letter: 'ㅉ', romanization: ['jj'] },
			{ letter: 'ㅊ', romanization: ['ch'] },
			{ letter: 'ㅅ', romanization: ['s'] },
			{ letter: 'ㅆ', romanization: ['ss'] },
			{ letter: 'ㅎ', romanization: ['h'] },
			{ letter: 'ㄴ', romanization: ['n'] },
			{ letter: 'ㅁ', romanization: ['m'] },
			{ letter: 'ㅇ', romanization: ['ng'] },
			{ letter: 'ㄹ', romanization: ['r', 'l'] }
		]
	}
];
