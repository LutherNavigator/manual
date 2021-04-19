# Deployment

The application is deployed to [Heroku](https://heroku.com/). We do not assume devs are familiar with Heroku, but experience with it will certainly speed things up. Devs will need [the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

## Getting Access to the Project

The project is hosted using [Heroku Teams](https://devcenter.heroku.com/articles/heroku-teams). In order to get access to the project, you will need to be invited as a collaborator. The account that owns the Heroku Team is `global@luther.edu`. This Heroku account is used by Jon Lund, so any requests to be granted access to the project will need to go through him.

## The Project

The project is called `luther-navigator`, and can be accessed at [luther-navigator.herokuapp.com](https://luther-navigator.herokuapp.com/), although users will end up using the custom URL [luthernavigator.com](https://www.luthernavigator.com/).

### Dynos

We are using the $7.00 dyno tier, meaning that the website is kept up even when web traffic is minimal and SSL is managed automatically. We do not expect this to need to change in the forseeable future.

### Addons

The only addon the project uses is [ClearDB](https://elements.heroku.com/addons/cleardb), which provides us our MySQL. We are using the $9.99 tier, as it is relatively cheap and (hopefully) gives us enough space for what we need. If the database begins to fill up, it may need to be upgraded.

### Deployment Method

The app is connected to [the GitHub repo](https://github.com/LutherNavigator/LutherNavigator). Automatic deployments are enabled on the `main` branch, meaning that whenever new commits are pushed to `main`, the app will be redeployed with the new changes.

### Config Variables

The config variables can be viewed and changed in app settings. It is _very important_ that these variables remain hidden, as they give access to the database, app email address, etc.

## Checking the Logs

A useful tool in debugging is checking the logs on the remote machine running the app. This can be done with the command:

```console
$ heroku logs --tail -a luther-navigator
```

This can be used for any Heroku app, replacing `luther-navigator` with the app name.

## Accessing the Database

Another helpful tool is our database script, which gives devs access to the database via the command line using the following command:

```console
$ python3 scripts/db.py
```

See [the scripts page](/dev/scripts) for more on this and other scripts.

## Running the Project

You can run the application locally using:

```console
$ heroku local web
```

This is assuming you have the `/.env` file. `/.env` contains the contents of the config variables found in the app settings. The contents of the file must be kept hidden, which is why the file is not stored in the remote repository. The file can be acquired from Jon Lund.

## App Boot Timeout

When deploying, Heroku needs to clone the repository, install all dependencies, compile the backend TypeScript code to JavaScript, and finally start the application. This process usually takes a minute or two, but it can take longer. Heroku will detect after two minutes that the application has not yet completed the startup process. Heroku calls this an app boot timeout. After the first timeout, it will stop and try a second time. If this also fails, the app will go down. This is certainly not ideal, as the site will not be accessible to anyone. The only thing that can be done in this instance is to force Heroku to restart the dynos and try to start the application again. This can be done with the following command:

```console
$ heroku restart -a luther-navigator
```

If the app continues to timeout while booting, you can [try increasing the boot timeout](https://tools.heroku.support/limits/boot_timeout).
