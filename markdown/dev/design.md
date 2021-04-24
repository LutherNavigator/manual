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
