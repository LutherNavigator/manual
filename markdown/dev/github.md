# GitHub

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
