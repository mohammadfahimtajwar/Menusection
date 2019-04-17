# Menusection
An SQLite-persistence Node.js Web RESTful API Backend for Restaurant Menus

This is the code for a RESTful API used for updating, deleting, viewing, searching and editing menus, written using Node.js.
The IDE achieves its functionality from data persistence through a built-in SQLite database.
Please kindly download the code into any suitable Javascript IDE (Webstorm preferred), maintaining the file structure.

The IDE needs to be equipped with node for the code to run.
The code also uses two other important dependencies: express and sqlite.
The best way to directly install all dependencies is to run "npm install" after downloading all the files into an IDE project.
This should set up the program and make the API ready for use.

On a side note, express can be individually installed by typing "npm install express --save" on the IDE terminal.
Similarly, Sqlite is readily installed instantly by running "npm install sqlite --save" on the IDE.

When everything is set, please kindly run the file "server.js" by running "node server.js" on terminal.
This launches the API, which can be used directly by visiting "http://localhost:3000" on any web browser.

The API has five functionalities: add, all, search, delete and edit.
Initially, the API is equipped with an empty database to store the menu.

The database is a table with two columns, ID and Name, corresponding to the IDs and names of the menu items.

Any new item is directly added into the table by visiting "http://localhost:3000/add/item_id/item_name".
For example, "http://localhost:3000/add/1/chicken" adds a menu item with ID=1 and Name='chicken'.
The add function can be used multiple times to quickly populate the menu.

The current menu is displayed at the console anytime by navigating to "http://localhost:3000/all".
This function instantly prints the present situation of the menu on the terminal console of the IDE.

The search function searches a menu item by ID and can be executed by visiting "http://localhost:3000/search/item_id".
If any item exists with the given ID, the item ID and name would be displayed on the console.
For example, after adding chicken with ID=1, going to "http://localhost:3000/search/1", would deliver the menu item on console.

The delete function deletes a menu item by ID and can be executed by going to "http://localhost:3000/delete/item_id".
For example, after adding chicken with ID=1, going to "http://localhost:3000/delete/1" deletes chicken off the menu database.

Finally, the edit function can be used to change the name of a menu item through "http://localhost:3000/edit/previous/new".
For example, if the menu has chicken, visiting "http://localhost:3000/edit/chicken/lamb" changes the item from chicken to lamb.

These are the five functionalities of the API and it has been designed to be as user-friendly as possible.
