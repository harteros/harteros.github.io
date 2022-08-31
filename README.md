<h1 align="center">
  harteros.github.io
</h1>

![demo](https://harteros.github.io/website_thumbnail.png)

## Forking this repo

You are free to fork and use this repo as you wish for your personal website.

If you do please give me proper credit by linking back to my Github page
at [harteros.github.io](https://harteros.github.io/).

Leaving a 🌟 is also highly appreciated. Thanks!

## Installation & Set Up 🛠

1. Install dependencies

   ```sh
   npm install
   ```

2. Run dev server

   ```sh
   next dev
   ```
  
3. Alternatively use the commands in the `scripts` section from `packages.json` 

## Deploying to Github Pages 🚀

In `packages.json` run the corresponding command based on your operating system 

## For MacOS

```sh
"deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages"
```

## For Windows

```sh
"deploy": "next build && next export && type nul > out/.nojekyll && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages"
```

## Getting Started

Run the development server:

# Error in publishing

Check out this post:

https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b

### Steps 🩺

```sh
git checkout main # if not already there
```

```sh
git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
```

```sh
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
```

```sh
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
```

