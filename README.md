# harteros.github.io

![demo](https://harteros.github.io/thumbnail.png)

Managing a portfolio website and its content can often be challenging and time-consuming, 
especially when it comes to keeping it in sync with one's latest professional profile. 
To address this, I created this project to effortlessly handle everything from content editing to deployment, 
making it easier than ever to keep my portfolio website (and possibly yours) up-to-date.

The project is built using [Nuxt.js](https://nuxtjs.org/), [Nuxt Content](https://content.nuxt.com/), and [Nuxt Studio](https://nuxt.studio/). 
It serves as a simple and clean personal website template that can be used to build and maintain your own personal website with ease. 
It is hosted on GitHub Pages, leveraging the power of Nuxt Studio for easy content management and deployment.

## Table of Contents

- [Forking this Repo](#forking-this-repo)
- [Installation & Set Up 🛠](#installation--set-up-)
- [Using Nuxt Studio](#using-nuxt-studio)
- [Deploying to GitHub Pages](#deploying-to-github-pages)

## Forking this Repo

You are free to fork and use this repo as you wish for your personal website. 
If you do, please give me proper credit by linking back to my GitHub page at [harteros.github.io](https://harteros.github.io/). 

Leaving a 🌟 is also highly appreciated. Thanks!

When forking the repo, in order to be able to use it for your own personal website, you need to rename it.
To do that, during the `Create new fork` process, you should set the repository name from `harteros.github.io` to `<your-github-username>.github.io`.

## Installation & Set Up 🛠

To get started with this project, after cloning the newly forked repo you need to follow these steps:

1. **Install Dependencies**

   ```sh
   pnpm install
   ```

2. **Run Dev Server**

   ```sh
   nuxt dev
   ```

And that's it! You're ready to go! 🚀 You can now view your website at `http://localhost:3000`.

## Using Nuxt Studio

Nuxt Studio is a powerful tool that allows you to manage your website's content with ease. 
You can access it by visiting [Nuxt Studio](https://nuxt.studio) and logging in with your GitHub account.

After setting up Nuxt Studio with your GitHub account, in order to get started you need to set up the forked repository in Nuxt Studio. To do that:

1. Click on the `New Project` button.
2. Select `Import a Nuxt Project`.
3. Select the forked repository from the list of your repositories. If you don't see it, you may need to enable it from GitHub.
4. Select the root (`.`) of the repository as the project location.
5. Click on the `Import Repository` button.

Once your project is imported, you can start editing your content under the `Content` tab.

## Deploying to GitHub Pages

Once your project is set up in Nuxt Studio, you can deploy it to GitHub Pages by following these steps:

1. Navigate to the `Deploy` tab in Nuxt Studio.
2. Select the `GitHub Pages` tab and click on the `Deploy` button.
3. After the initial deployment is done and deployed on the Nuxt Studio default URL, you should toggle the `Use custom domain` switch and enter your GitHub Pages URL (e.g., `https://<your-github-username>.github.io`).

And that's it! Your website is now live on GitHub Pages! 🎉

**Note**: When you deploy using Nuxt Studio, the GitHub Action of the repo will be overwritten by Nuxt Studio's deployment action. 
This probably will not be a problem, as the only difference is the `nuxt build` command in the action file 
which was replaced to use `nuxt generate` due to some issues with Nuxt Icons and the pre-rendering output. 
If you experience the same issue, you should replace the following lines in the `studio.yml` file:

```yml
# Nuxt Studio generated GitHub Action
- name: Generate
  run: npx nuxi build --preset github_pages
  env:
     NUXT_PUBLIC_STUDIO_API_URL: https://api.nuxt.studio
```

with:

```yml
# Original GitHub Action for deploying to GitHub Pages
- name: Generate
  run: ${{ steps.pkgman.outputs.package_manager }} nuxi generate
  env:
     NUXT_PUBLIC_STUDIO_API_URL: https://api.nuxt.studio

- name: Add .nojekyll file
  run: touch .output/public/.nojekyll
```
