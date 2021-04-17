# Extending the Manual

The manual has been designed to be easily extensible for anyone with Markdown experience.

Relevant links:

- [Manual repository](https://github.com/LutherNavigator/manual)
- [Manual deployment](https://luther-navigator-manual.herokuapp.com/)

## How the Manual Works

The manual is run using a very basic HTTP server in `/index.js`. In order to ensure that the application can start up quickly, we have significantly limited our dependencies. The only NPM package we are using is [remarkable](https://www.npmjs.com/package/remarkable), which we use to compile Markdown to HTML. `/index.js` will treat `/static/main.html` as a template, replacing the `{}` characters with the compiled HTML of the requested Markdown page. If the requested URL does not correspond to a Markdown page, the application will check the `/static` directory to see if the requested resource exists there. In the event that no resource is found for a URL, `/static/main.html` is rendered with `/static/404.html`. The only exception to this is if `/` is requested, in which case the request is rerouted to `/manual`.

## Extending with Markdown

All Markdown files can be found in the `/markdown` directory. Existing Markdown files can be modified and new ones can be created. This works for subdirectories within `/markdown` as well. Links to other Markdown pages can be made by using the relative path to the page for the URL, excluding `/markdown` and `.md` in the path. As an example, a link to a page at `/markdown/dev/manual.md` would use the URL `/dev/manual`. Local links (i.e. links to other Markdown pages) will open normally, while all links to external websites will open in a new tab. This is done using some code in `/static/main.js`.

## Running Locally

Beyond cloning the repository and running `npm install`, the only other thing needed is `.env`. Simply create a file in the root of your local repo and call it `.env`. The contents of the file should read `PORT=3000`. Once this is done you can run the project using `heroku local web`, assuming you have [the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed. When the log says that the app is running, it can be viewed at [localhost:3000](http://localhost:3000/) in your browser.
