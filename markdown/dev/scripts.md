# Scripts

The project repository contains a number of Python scripts which serve various purposes. All scripts are located in the `/scripts` directory. The majority of them use `argparse`, and will print a help message when the `-h` flag is used.

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
