# Game Hub

A collection of browser games hosted on Cloudflare Workers.

**Live:** `https://game-hub.kiishiogunbiyi.workers.dev`

## Games

| Game | URL |
|---|---|
| Flags of the World | https://flags-of-the-world.kiishiogunbiyi.workers.dev |
| Spelling Challenge | `game-hub-spelling.kiishiogunbiyi.workers.dev` |
| Car Logo Quiz | `game-hub-car-logo.kiishiogunbiyi.workers.dev` |
| Speed Math | `game-hub-speed-math.kiishiogunbiyi.workers.dev` |
| Word Meaning | `game-hub-word-meaning.kiishiogunbiyi.workers.dev` |
| Crossword Puzzle | `game-hub-crossword.kiishiogunbiyi.workers.dev` |

## Structure

```
game-hub/
├── hub/                  # Landing page Worker
├── games/
│   ├── spelling/         # Spelling Challenge
│   ├── car-logo/         # Car Logo Quiz
│   ├── speed-math/       # Speed Math
│   ├── word-meaning/     # Word Meaning
│   └── crossword/        # Crossword Puzzle
└── .github/workflows/    # CI/CD
```

## Local Development

```bash
# Hub
cd hub && npx wrangler dev

# Any game
cd games/spelling && npx wrangler dev
```

## Deployment

Deployments happen automatically via GitHub Actions on push to `main`.

For manual deploy:
```bash
cd hub && npx wrangler deploy
cd games/spelling && npx wrangler deploy
# etc.
```

## Adding a New Game

1. Create `games/your-game/` with a `wrangler.jsonc`, `src/index.ts`, and `public/`
2. Add a card to `hub/public/index.html`
3. Open a PR — a preview deploy will be posted automatically
4. Merge to main to go live

## Contributing

- Never commit `.dev.vars` or any API tokens
- Use GitHub Secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) for CI
- Each game is independent — changes to one don't affect others
