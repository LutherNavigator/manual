# Admin Manual

The main feature that admins have access to is the control panel. There are also a couple of admin-related features which are not built into the control panel as well.

## [Admin Control Panel](/admin/control-panel)

The control panel allows admins to monitor and control various parts of the site. We advise that the control panel be used in a desktop environment, rather than on a mobile device.

## Adding Admins

The process of actually making a user an admin is somewhat less straightforward than it would seem. We do have a feature which allows you to list the site admins, promote a user an admin, and remove a user's admin status. For security purposes, this feature was not put into the admin control panel. To access any part of this feature (i.e. make a user an admin), ask a developer. The feature is documented for developers on [this page](/dev/scripts).

## Changing Featured Programs

For technical reasons, the process of altering the list of featured programs is difficult. The issue is as follows: we have to have an image associated with each featured program, otherwise things will display incorrectly. However, if we allowed admins to change featured programs, they could easily add a program that does not have an image associated with it, and so things will begin displaying in an incorrect manner on the site. To avoid this, we have made the list of featured programs static, built into the code of the application itself. If the list of featured programs needs to be changed, ask a developer to look into it.
