---
layout: page
title: Scripts
---

The project repository contains several Python scripts which serve various purposes. All scripts are located in the `/scripts` directory. The majority of them use `argparse`, and will print a help message when the `-h` flag is used. Many of the scripts rely on the `.env` file in the root of the repository in order to execute as intended.

## Admin

The admin script, `admin.py`, has three purposes: list all site admins, make a user an admin, and remove a user's admin status.

### Listing Admins

The following command can be used to list all site admins:

```console
$ python3 scripts/admin.py --list
```

### Making Admins

To make a user an admin, the user's email address must be used in the command below:

```console
$ python3 scripts/admin.py --add <email>
```

### Removing Admins

Removing a user's admin status is nearly the same process. Again, the user's email address must be known and used in the following command:

```console
$ python3 scripts/admin.py --remove <email>
```

## Database

The database script, `db.py`, allows developers to interact with the application's MySQL database directly through the command line. No arguments are required to run this script:

```console
$ python3 scripts/db.py
```

Please note that, again, this is the application's one and only database, and any potentially destructive SQL code should be executed in a controlled setting (i.e. a transaction).

## Environment Variables

This script, `env.py`, is not meant to be used by itself. It reads the contents of the `.env` file in the root of the project repository and provides the data in a more Python-friendly format. The script is used by other scripts, specifically the ones that need access to sensitive environment variables such as the database URL.

## Test

The test script, `test.py`, should be run after any change to the application at the service layer or when any automated tests have been changed. There are two main modes to this script: backend mode and emulation mode.

### Backend Testing

Running the script in backend mode will run all tests in `/test/services`. The backend tests are designed to check every method in the service layer, while also generating coverage numbers and a coverage report. Backend tests can be run using the command:

```console
$ python3 scripts/test.py --backend
```

### Emulation Testing

Running the script in emulation mode will test the frontend on several browsers and across a variety of devices using the tests in `/test/ui`. Screenshots of each page tested per browser per device will be generated and saved to `/screenshots`. Emulation tests can be run using the command:

```console
$ python3 scripts/test.py --emulation
```

## CSV

The CSV script, `to_csv.py`, will export specified tables from the database into CSV format. It can be used with the following command:

```console
$ python3 scripts/to_csv.py --out <output path> --table <table name> --fields <column names>
```

Column names are optional. If column names are not provided, all columns in the table will be exported.
