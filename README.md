# 🦅 Hello Iqbal

> The world's most advanced* pedagogical superintelligence — lovingly built to look
> teachers in the eye and tell them to **use their brain, solve their own problem, and
> make their earning halal.**

**Hello Iqbal** is a single-page parody web app. It is a loving, sarcastic mock of the
real AI teaching-assistant product [hellorumi.ai](https://hellorumi.ai). Where Rumi
promises to *help* educators, Iqbal promises only to *humble* them — in flawless
Allama-Iqbal-flavoured poetry, a swirl of Urdu and English, complete with a fake
"deep reasoning" loading animation that builds suspense for a response you will not enjoy.

\* nothing on this site is true, advanced, or an actual AI.

---

## What it does

- **Elegant landing page** that mimics a slick, all-knowing AI startup (hero, capabilities,
  "trust & safety" stats, pricing tiers — `Mureed`, `Shaheen`, `Khudi Enterprise`).
- **Live demo chat** — ask anything. The "AI" replies from a large bank of sarcastic,
  poetic burns. Keyword-aware (ask about *grading*, *salary*, *lesson plans*, being *tired*…
  and Iqbal targets you specifically).
- **Artificial loading** — every reply runs through a multi-stage fake "superintelligence
  reasoning" loader ("Consulting the Library of Things You Could Have Googled…") to imply
  enormous computation before delivering contempt.
- **100% static.** No backend, no API, no real AI, no dignity returned.

## Run locally

It's a static site — just open it, or serve it:

```bash
# Option A: open directly
open index.html

# Option B: serve (recommended, so fonts/scripts load cleanly)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deploys the
site automatically on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

Your site will be live at `https://<your-username>.github.io/<repo-name>/` and accessible
to anyone.

## Project structure

```
hello-iqbal/
├── index.html        # landing page + demo chat markup
├── styles.css        # the fancy, elegant theme
├── responses.js      # the response bank + fake "thinking" stages
├── app.js            # chat logic, artificial loader, animations
├── .nojekyll         # tell Pages to serve files as-is
└── .github/workflows/deploy.yml
```

## Disclaimer

This is satire. It is **not affiliated with, endorsed by, or connected to**
hellorumi.ai in any way. All "wisdom" is fictional and dispensed purely for laughs.
No teachers were genuinely insulted in production — only theatrically.

> خودی کو کر بلند اتنا کہ ہر سوال سے پہلے
> — *Raise your selfhood so high that, before each question… you simply Google it yourself.*
