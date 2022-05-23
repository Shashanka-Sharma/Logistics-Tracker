# Design Decisions
- When creating a new inventory item, the default warehouse each item is assigned to is ShopifyHQ
- Inventory can only be assigned to warehouses that exist.
- Users can only input positive numbers for "Add" and "Drop". 
- Users can only add/drop to inventory items that exist in the database.
- Users can only delete inventory items that exist in the database.
- Attempting to drop more than the inventory that exists simply changes the quantity of the inventory to 0.
- Reload the page to view the status of the database in real time after modifiying the database using the buttons.
- The repl uses the url of logistics-tracker in order to host the back-end server, in the local github repo we use localhost 4000.
- The front-end/back-end script files may vary slightly on the repls to accomodate for the aforementioned url change.

