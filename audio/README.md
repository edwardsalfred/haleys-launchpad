# Narration audio goes here

One folder per mission, one MP3 per screen/question:

```
audio/math-u1-m1/s1.mp3        ← lesson screen s1
audio/math-u1-m1/quiz-q3.mp3   ← quiz question q3
```

Run `node scripts/narration-manifest.mjs` from the project root to generate
`docs/narration-scripts.md` — the full list of filenames with the exact
script to read for each one.
