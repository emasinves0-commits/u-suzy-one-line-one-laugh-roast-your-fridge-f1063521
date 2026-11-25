# One Line, One Laugh: Roast Your Fridge

[![bounty](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/emasinves0-commits/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/rank.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/emasinves0-commits/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/reward.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

> My phone cleared 200GB for GTA VI, overheated by the opening credits, and died at 4%—the $3.79 billion launch, experienced entirely through a charger cable.

## What it does

`main.ts` holds the roast as a constant, validates it (1–200 characters counted as code points, not only whitespace, no trailing newline), and writes it to `entry.txt` in `/output` (or `$MAKEFUN_OUTPUT_DIR` when set).

## Run

```sh
node main.ts
```

Requires Node 22+ (native TypeScript type stripping). Output: `/output/entry.txt`, 156 characters.

## License

MIT
