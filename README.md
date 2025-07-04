# Hangul

There's a lot of tools for learning hangul but I needed something very simple where you can just do drills. I'm not a big fan of mnemonics because they make you carry a lot of additional context, so I usually just brute-force it until I remember it. Gohoneko made an amazing kana trainer, which became inspiration for this one.

Pick any combination of the 4 groups (simple vowels, diphthongs, simple consonants, doubled consonants) and just grind to your heart's content! You get a score of correct / total answers, which you can aim to improve (gamification!), and if you're unsure about how to pronounce a letter, just click "Play sound".

## Developing

```bash
pnpm i
pnpm dev
```

## Building

```bash
pnpm run build
```

## To-Do

- [ ] Add more fonts
- [ ] Portable version
- [ ] Stroke order
- [ ] PWA
- [ ] Get all pronunciations from one consistent source

## Acknowledgements

- Romanization of Korean, National Institute of Korean Language - [National Institute of Korean Language](https://www.korean.go.kr/front_eng/roman/roman_01.do)
- [Hangul.fun](https://hangul.fun/)
- [gohoneko learn kana](https://gohoneko.neocities.org/learn/kana)
- All pronunciations except for the ones below are from [Forvo](https://forvo.com/)
- [ㅁ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Bilabial_nasal.ogg), [ㅂ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Voiceless_bilabial_plosive.ogg), [ㅅ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Voiceless_alveolar_sibilant.ogg), [ㅇ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Velar_nasal.ogg), [ㅌ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Voiceless_alveolar_plosive.ogg), [ㅜ](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Close_back_rounded_vowel.ogg) pronunciations are from Wikimedia
