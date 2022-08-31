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


# Error in publishing

https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b

git checkout master # you can avoid this line if you are in master...

git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder

git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin

git branch -D gh-pages # delete the local gh-pages because you will need it: ref
