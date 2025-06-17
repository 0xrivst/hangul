export type Alphabet = AlphabetGroup[];

export type AlphabetGroup = {
	selected: boolean;
	letters: { letter: string; romanization: string[] }[];
};

export const alphabet: Alphabet = [
	{
		selected: true,
		letters: [
			{ letter: 'ㅏ', romanization: ['a'] },
			{ letter: 'ㅓ', romanization: ['eo'] },
			{ letter: 'ㅑ', romanization: ['ya'] },
			{ letter: 'ㅕ', romanization: ['yeo'] },
			{ letter: 'ㅣ', romanization: ['i'] },
			{ letter: 'ㅡ', romanization: ['eu'] },
			{ letter: 'ㅗ', romanization: ['o'] },
			{ letter: 'ㅜ', romanization: ['u'] },
			{ letter: 'ㅛ', romanization: ['yo'] },
			{ letter: 'ㅠ', romanization: ['yu'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㅐ', romanization: ['ae'] },
			{ letter: 'ㅒ', romanization: ['yae'] },
			{ letter: 'ㅔ', romanization: ['e'] },
			{ letter: 'ㅖ', romanization: ['ye'] },
			{ letter: 'ㅘ', romanization: ['wa'] },
			{ letter: 'ㅙ', romanization: ['wae'] },
			{ letter: 'ㅚ', romanization: ['oe'] },
			{ letter: 'ㅝ', romanization: ['wo'] },
			{ letter: 'ㅞ', romanization: ['we'] },
			{ letter: 'ㅟ', romanization: ['wi'] },
			{ letter: 'ㅢ', romanization: ['ui'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㄱ', romanization: ['g', 'k'] },
			{ letter: 'ㄴ', romanization: ['n'] },
			{ letter: 'ㄷ', romanization: ['d', 't'] },
			{ letter: 'ㄹ', romanization: ['r', 'l'] },
			{ letter: 'ㅁ', romanization: ['m'] },
			{ letter: 'ㅂ', romanization: ['b', 'p'] },
			{ letter: 'ㅅ', romanization: ['s'] },
			{ letter: 'ㅇ', romanization: ['ng'] },
			{ letter: 'ㅈ', romanization: ['j'] },
			{ letter: 'ㅊ', romanization: ['ch'] },
			{ letter: 'ㅋ', romanization: ['k'] },
			{ letter: 'ㅌ', romanization: ['t'] },
			{ letter: 'ㅍ', romanization: ['p'] },
			{ letter: 'ㅎ', romanization: ['h'] }
		]
	},
	{
		selected: false,
		letters: [
			{ letter: 'ㄲ', romanization: ['kk'] },
			{ letter: 'ㄸ', romanization: ['tt'] },
			{ letter: 'ㅃ', romanization: ['pp'] },
			{ letter: 'ㅆ', romanization: ['ss'] },
			{ letter: 'ㅉ', romanization: ['jj'] }
		]
	}
];
