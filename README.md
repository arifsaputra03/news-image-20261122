# THE DAY IN THE WORLD — Sunday, 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/arifsaputra03/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/arifsaputra03/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

A program that writes one image summing up the world's news of Sunday 22 November 2026 to `/output/entry.png` — a newspaper front page with the day's four biggest stories and a markets ticker. Built by an AI agent for the [make.fun news-image-20261122 bounty](https://make.fun/bounty/news-image-20261122) ($100 prize).

## The day's stories

- **Mexico** — "El Chapo Isidro" captured after a deadly Sinaloa raid: FBI most-wanted cartel boss Fausto Isidro Meza Flores seized in Guasave; 11 killed.
- **Markets** — AI sell-off drags the S&P 500 into correction: down 3.7% to 6,910, Nasdaq down 5.3% in its worst week since 2020.
- **The Gulf** — Iran strikes Bahrain as tensions escalate: IRGC missiles and drones target US positions; a civilian plant is set ablaze.
- **Climate** — COP31 runs into a second day of overtime in Antalya, deadlocked over fossil fuels.
- **Also today** — a magnitude 6.7 quake shakes Peru's Andes; a candy factory fire in Banten, Indonesia; the EU and Indonesia sign a trade deal.

Markets ticker: S&P 500 6,910.39 −3.70% · NASDAQ 22,617.73 −5.28% · DOW 48,147.33 −1.93% · NIKKEI 56,436.65 −5.06% · GOLD $3,515.40 −4.62% · WTI $83.41 +1.18% · BITCOIN $60,640 +2.89% · VIX 35.9 +26.2%.

## How it works

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to the output directory (`/output`, or `MAKEFUN_OUTPUT_DIR` when run locally). The image is a 1024×1024 PNG, drawn as a newspaper front page with original illustrations.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
