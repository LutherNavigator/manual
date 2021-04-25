# Project Design

[The project](https://github.com/LutherNavigator/LutherNavigator) has a very specific design which we expect future developers to understand and follow when making changes.

## Root

There are several important files in the root directory. The `.gitattributes` informs Git to ignore the local docs and coverage report in language statistics. The `Procfile` is what tells Heroku how to start the application. `jest.config.ts` contains the configuration information for Jest, where we specify where tests are (`testMatch`), what to do before running the tests (`globalSetup`), in what way to generate coverage reports, etc. `package.json` and `package-lock.json` are important for NPM, and, in most cases, should not be modified directly. `requirements.txt` is for Python's package manager, [pip](https://pypi.org/project/pip/), and contains information about each of the packages required to run [our scripts](/dev/scripts). The root `tsconfig.json` is there as a placeholder. The remaining files should be self-explanatory.

## Top-Level Miscellaneous

The `coverage` directory contains a copy of the generated coverage report. See more about our coverage reports [here](/dev/repos). The `screenshots` directory, if it exists, will contain screenshots of various pages of the site taken from different browsers across many emulated devices. See more about our emulation testing [here](/dev/repos). The `node_modules` directory is created and managed by NPM, and contains all project dependencies. Developers should never need to interact with this directory directly.

## Scripts

The `scripts` directory consists of several useful Python scripts. See more about them [here](/dev/scripts).

## Tests

The tests are briefly explained on [the scripts page](/dev/scripts). Extending the UI tests simply by looking at the existing tests should be very easy for developers. Extending the tests for the service layer is a bit more complicated. Modifying existing tests should be fairly simple. To add an entirely new test, create a new file in `/test/services` and call it `<testName>.test.ts`. The typical format for service test files is as follows:

```ts
import { getDBM, closeDBM } from "./util";

// Test <testName> service
test("<testName>", async () => {
  const dbm = await getDBM();

  // Your test code here

  await closeDBM(dbm);
});
```

For information on how to use Jest, read [the Jest docs](https://jestjs.io/docs/getting-started). The file `/test/services/util.ts` contains useful functions which can be used when testing. Developers are welcome to add to this file if needed. Developers are expected to check the coverage reports to ensure they are covering all testable functions, lines, and statements.

## Project Structure

The main part of the project, contained within the `src` directory, is organized into four layers: the views, the routing layer, the service layer, and the database. Somewhat independent of these layers are the files at the top-level of `/src`.

### Top-Level Files

`index.ts` is the entry point of the application. It configures the [Express](https://www.npmjs.com/package/express) server, the [Express Handlebars](https://www.npmjs.com/package/express-handlebars) view engine, configures routing, initializes the database, and finally starts the webserver.

`routes.ts` exports all routes from the `/src/routes` directory, which are used in `index.ts` to configure routing.

`services.ts` exports a class containing every available database service, and the ability to execute queries directly.

`dbinit.ts` contains the SQL code that initializes the database and all tables within it. In the event that developers need to make modifications to the database schema, this is the file where they would do so.

`db.ts` provides a wrapper around [the mysql NPM package](https://www.npmjs.com/package/mysql), making it easier to execute queries asynchronously.

`emailer.ts` contains functions which allow for sending emails. The `/src/emails` directory houses a series of text and HTML files which contain the content that will be sent to users via email. For each email that needs to be sent, we send both the text and HTML versions of the email so that if the user's email client supports HTML (which it should, given that this is the 21st century), that is what will be displayed. If HTML is not supported, it will simply display the text version of the email. The `sendFormattedEmail` function supports the use of named placeholders within the email body. See the function documentation for further details.

`asyncCatch.ts` exports a function which wraps an asynchronous function in a try/catch block. It is imperative that developers use this function when configuring routing, as Express does not have a way of catching errors that occur within asynchronous routes.

`config.ts` contains default values for the `Meta` database table.

`proxy.ts` exports a function which will essentially reroute a request to a different URL.

`helpers.ts` contains useful helper functions that can be used in the view layer.

### View Layer

The view layer is kept within the `/src/views` and `/src/static` directories. The views directory houses all HTML files used in the view layer. There are two subdirectories as well, both of which are necessary for our view engine, [Express Handlebars](https://www.npmjs.com/package/express-handlebars). `/src/views/layouts` has the one and only layout. Our view engine is configured to use `/src/views/layouts/default.html` as a template, and render the specified view (one of the HTML files within the views directory) in place of `{{{body}}}`. `/src/views/partials` contains partial templates, of which we have only the one we use for each page of the admin control panel. For information on the syntax Express Handlebars supports, see [the NPM page](https://www.npmjs.com/package/express-handlebars) or [the GitHub repo](https://github.com/express-handlebars/express-handlebars). The `/src/static` directory is served statically. As an example, `/src/static/css/main.css` is served as `/css/main.css`, and in a view you could link it like so:

```html
<link rel="stylesheet" type="text/css" href="/css/main.css" />
```

Our CSS and JavaScript are in their respective subdirectories within `/src/static`. Both `main.css` and `main.js` are included in every page on the site. The remaining files are exclusive to the pages they are associated with.

### Routing Layer

The routing layer is kept within the `/src/routes` directory. Each TypeScript file in this directory represents one set of subpages in the application. The format for a route is as follows:

```ts
/**
 * <routeName> routes.
 * @packageDocumentation
 */

import { Router } from "express";
import { renderPage } from "./util";
import wrapRoute from "../asyncCatch";
// Other imports

/**
 * The <routeName> router.
 */
export const routeNameRouter = Router();

// A page
routeNameRouter.get(
  "/",
  wrapRoute(async (req, res) => {
    await renderPage(req, res, "<viewName>");
  })
);

// Another page
routeNameRouter.get(
  "/other",
  wrapRoute(async (req, res) => {
    await renderPage(req, res, "<otherViewName>");
  })
);

// Other pages
```

The `wrapRoute` function must be used in order to ensure any errors that occur within the following block of code will be caught and handle appropriately. Additionally, the new router object, called `routeNameRouter` above, will need to be exported from `/src/routes.ts`:

```ts
export * from "./routes/<routeName>";
```

The new route can be used in `/src/index.ts`:

```ts
app.use("/<path>", routes.routeNameRouter);
```
