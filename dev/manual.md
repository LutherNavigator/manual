---
layout: page
title: Extending the Manual
---

The manual has been designed to be easily extensible for anyone with Markdown experience.

Relevant links:

- [Manual repository](https://github.com/LutherNavigator/manual)
- [Manual deployment](https://luthernavigator.github.io/manual/)

## How the Manual Works

The manual is created using [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/). Jekyll compiles our Markdown files to HTML and then serves the generated HTML on Pages. See [this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) for more information about Jekyll and GitHub Pages.

## Extending with Markdown

All Markdown files can be found in the repository. Existing Markdown files can be modified and new ones can be created. This works for subdirectories as well. Links to other Markdown pages can be made by using the relative path to the page for the URL, excluding `.md` in the path. Links can also be absolute, but must include `/manual` at the start of the path. As an example, a link from `/dev/deployment.md` to `/dev/scripts.md` could use the absolute path `/manual/dev/scripts`, or the relative path `./scripts`.

## Running Locally

See [this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) on testing a Jekyll site locally.
