# Admin Manual

The control panel allows admins to monitor and control various parts of the site. We advise that the control panel be used in a desktop environment, rather than on a mobile device.

## Admin Control Panel

### Statistics

The stats page shows the number of total users, posts, user sessions, and suspended users in the database. Each user session is equivalent to one user logged in on one device.

Like several of the other subpages within the control panel, there is a refresh button which updates all data on the subpage. The pages are also set up to automatically update every minute.

Below the statistics section is a list of all users and all posts in the database. There is an option to delete user accounts and user posts, which should only be used in extreme cases. Once deleted, accounts and posts _cannot_ be recovered, so please be certain. Deleting a user's account will cause all of their posts to be removed as well. Upon deleting an account or post, admins are prompted for a reason for the deletion, which will be sent in an email to the user or post creator. The posts section of the page also allows admins to favorite posts, which will show up in the CGL favorites area of the site.

### Variables

The variables page contains a list of values stored within the database. These values should only be changed by those who fully understand the purpose of the variable. Each variable's purpose is listed below:

- **Google Analytics ID**: permits the monitoring of traffic through the site.
- **Images per post**: the upper limit on the number of images per post.
- **Nav message**: the message displayed when clicking on the logo in the navbar.
- **Password reset age**: the amount of time in seconds before password reset requests expire.
- **Salt rounds**: the number of salt rounds to use when hashing user passwords (ask a developer).
- **Session age**: the amount of time in seconds before sessions expire.
- **Verify age**: the amount of time in seconds before account verification requests expire.
- **Version**: the site version.

There is also an option to reset each of the variables to their original values.

### Registration Approval

Upon creating an account, users will receive an email containing a link to verify their account. Once verified, they will wait for their account to be approved by an admin. On the registration approval page, admins will see a list of users who are waiting to be verified. Admins should check the details shown to confirm that the user has entered valid information. There are buttons provided which permit admins to approve or deny each account. In either case, an email will be sent to the user alerting them about their account. If an account is denied, admins will be prompted for a reason, which will be sent in the email.

### Post Approval

After creating a post, users will notice that the only people who can view the post are themselves and admins. This will continue to be the case until the post has been approved by an admin. The process for reviewing posts is essentially the same as the process for reviewing user accounts. The page provides several pieces of information about each post, but admins should view the post itself. The first field shown is the post ID, which, for convenience, is also a link to the post. Like with account verification, an email will be sent to the post creator, and a reason will be requested if the post is not approved.

### Programs

The programs page is where admins can add, rename, and remove programs. Once a program is associated with any posts, the program cannot be deleted. Please note that renaming a program will cause all posts associated with the program to reflect this name change.

### User Status Change

Although uncommon, it is possible that users need to change their status. An example of this would be a graduating seinor who needs to change their user status from "Student" to "Alum". The user would request a status change via their profile and await admin approval. Admins can view the status change request and determine if the change would be appropriate. In either case, an email will be sent to the user who requested the change in status. Once again, admins will be prompted for a reason in the event that they deny the request.

### Account Suspension

The suspension page lets admins suspend user accounts. When suspended, users will immediately be logged out and will not be able to log back in for the duration of the suspension. To suspend a user, an admin must find the ID of the user, which can be done by searching the stats page and noting the ID of the user. The ID can be put in the user ID box, and a suspension duration must be selected. Once suspended, the user will show up in the table below. Admins are able to end a user's suspension early. Users will be notified via email that their account has been suspended and the duration of the suspension.
