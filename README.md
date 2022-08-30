This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## For MacOS

"deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages"

## For Windows

"deploy": "next build && next export && type nul > out/.nojekyll && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages"

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
