# Repositories

We have [an organization](https://github.com/LutherNavigator) for all of our repositories on GitHub, including one for [the project itself](https://github.com/LutherNavigator/LutherNavigator).

## The Main Project

The main project is called LutherNavigator. It contains the code that runs the application hosted at [luthernavigator.com](https://www.luthernavigator.com/).

### Getting Access to the Repository

In order to gain access to this repository or any other in the organization, you will need to contact one of the organization's members and they can send you an invite.

### Branches

The repo contains a `main` branch, the code for which is deployed to Heroku. We do not make changes directly to this branch. The other permanent branch is `dev`. When changes need to be made, we create a new branch out of `dev`, make the necessary changes in the new branch, and create a pull request into `dev`. It is always a good idea to have another developer review your code before merging it. In `dev`, all recent changes can be tested together to ensure there are no issues. Once ready, `dev` can be merged into `main`, and Heroku will automatically rebuild the site with the new changes.

Although we cannot enforce it, we advise that future developers keep to this process when making changes to the application.

### Releases

Releases can be viewed on [the releases page](https://github.com/LutherNavigator/LutherNavigator/releases) of the repo. When new changes are pushed to the `main` branch, we create a new release on GitHub, labeling it appropriately. As an example, let's assume the current version is `1.2.3`. If small changes are made, such as bug fixes, the next version should be labeled `1.2.4`. If significant changes are made, such as feature additions, the next version should instead be labeled `1.3.0`.

### Actions

GitHub Actions has been configured for the repo. This means that our automated backend tests will run everytime a new commit is pushed to `dev` or `main`, and when a pull request into either branch is created. If the tests fail, you can check the test details and see exactly where the error occurred. In the event of a test failure in a pull request, the code in question should be fixed before being merged. Developers should wait for all tests to pass before merging any pull request.

### Other

Issues, pull requests, projects, etc. are fairly self-explanatory, so we will not bother explaining them here. We expect developers to use these when necessary.

## Error Pages

The [error pages repository](https://github.com/LutherNavigator/error-pages) contains the code for the pages that will be displayed in the event of an error or site maintenance. The Heroku project is configured to display the page hosted at [`/error`](https://luther-navigator-error-pages.herokuapp.com/error) of the error page deployment when an uncaught error occurs in the main application. Heroku has an option to enable site maintenance, at which point it will display the page hosted at [`/maintenance`](https://luther-navigator-error-pages.herokuapp.com/maintenance).

### Extending the Error Pages

We do not expect developers will need to extend this part of the application, but we will explain the architecture of this project regardless. `index.js` runs contains the logic that runs the application. It uses no external packages. We have designed it to run without any packages so that it can be cloned and start up on Heroku as quickly as possible. For any requested path, the application will first check the `/pages` directory to see if an HTML file with the same name as the path exists. If it does, the HTML content will be sent. If not, the application will then check if the `/static` directory contains the requested resource. If it does, the resource will be sent. In the event of a 404, an empty response will be returned.

Changes can be made to the existing HTML pages and CSS styling. In order to add a new page, a developer can simply add a new HTML file in `/pages`, and the new page will be available at `/HTMLFileNameWithoutExtension`. As an example, an HTML file at `/pages/hello.html` would be available at `/hello`. CSS and JavaScript files can be placed in the `/static` directory and referenced in HTML at `/CSSOrJSFileName`. For example, an HTML file in `/pages` could link a CSS file at `/static/style.css` and JavaScript file at `/static/script.js` with:

```html
<link rel="stylesheet" type="text/css" href="/style.css" />
<script type="text/javascript" src="/script.js"></script>
```

### Running Locally

Like with all of our repos that deploy to Heroku, this application can be run locally with the command:

```console
$ heroku local web
```

## Docs

All of our backend, specifically the service layer, is documented using comments for every function, class, interface, and top-level variable. We are using the NPM package [TypeDoc](https://www.npmjs.com/package/typedoc) to compile these comments into a series of HTML pages. The idea is that developers can check the purpose and usage of any class, interface, etc. when needed. We have configured the main application to recompile the documentation when changes are pushed to the main repository, and push the updated documentation to [the docs repository](https://github.com/LutherNavigator/docs). The docs are deployed using GitHub pages at [luthernavigator.github.io/docs](https://luthernavigator.github.io/docs/). If all works as intended, developers should not need to interact with this repository or the code within it.

We expect developers to properly document code they write which extends any part of the backend. Information about comment format can be found [here](https://typedoc.org/guides/doccomments/). Further information can be found on [the TypeDoc website](https://typedoc.org/) or [the TypeDoc GitHub page](https://github.com/TypeStrong/TypeDoc).

## Coverage

We are testing our service layer in full using [Jest](https://jestjs.io/). These tests are located in `/test/services`, and they test every method of every service class. We have also set Jest up to generate a code coverage report, which is useful in showing exactly which lines of code we are hitting using our tests. Like with the docs, our code coverage report will be automatically regenerated when changes are pushed to the main repository. The new coverage report will be pushed to [the coverage repository](https://github.com/LutherNavigator/coverage), and is deployed using GitHub pages at [luthernavigator.github.io/coverage](https://luthernavigator.github.io/coverage/). If all works as intended, developers should not need to interact with this repository or the code within it.

We realize that there are a few lines in the service layer which we are not reaching in our tests. There is a good reason for this. Each of the lines we are not testing are lines which start asynchronous tasks in the background. Specifically, these lines call functions that eventually call the JavaScript `setTimeout` function, which we use to prune records from the database after a certain period of time. The `setTimeout` function is what begins these asynchronous background tasks. If there are any asynchronous tasks still running when our tests finish, Jest will not exit correctly. So we cannot test these lines that start asynchronous tasks.

## Manual

This manual should only need to be changed when significant changes are made to the application. In the event that a change to the Luther Navigator project causes the manual to be inaccurate or incomplete in any way, the manual should be appropriately updated. The process for extending the manual is explained on [another page](/dev/manual).
