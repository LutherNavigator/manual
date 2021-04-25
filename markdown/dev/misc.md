# Miscellaneous

There are a few miscellaneous things that developers should be aware of.

## Changing the Featured Programs

On the home page exists a section labeled "Popular Luther Programs". The list of these programs can be found in `/src/routes/index.ts`. It has been hardcoded for a reason. Each featured program must be associated with an image in order to be displayed properly. This means that in order to make the list of featured programs dynamic and editable via the admin control panel, we would need an image for each and every existing program. The issue with this is that the programs themselves are dynamic and editable in the control panel.

A possible solution to this would be to require admins upload an image when marking a program as a featured program. This would require a new database table to keep track of all featured programs and their image IDs. The addition of this feature would not be terribly difficult to add, though unfortunately we ran out of time before we could implement it. So for now we have our list of featured programs in hardcoded form. We leave solving this problem as a getting-used-to-the-project assignment for future developers.

Until this issue is solved, developers must change the featured programs manually. To add a new featured program, add a new object in the `featuredPrograms` list in `/src/routes/index.ts`. The object must contain a `programID` field which corresponds to the desired program's ID in the database, and an `imageName` field which corresponds to the name of the program's JPG image in `/src/static/img/programs`. To delete a featured program, simply remove its object from the `featuredPrograms` list.
