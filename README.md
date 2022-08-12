### How to run this application?

1. Clone this repository or download ZIP to you local machine
2. Run npm install on the server folder (not root) to install dependencies
3. npm start to start the server on your local machine
4. Got to the client folder and run npm install to install frontend dependencies
5. From the client folder run npm start to start the application on your local machine.

### All requests

http://localhost:5000/api/v1/books

1. GET request to get all books from the database, and also number of books
2. POST request to add the book to the database (must have a valid body with title, publish date, unique issn and category.)

http://localhost:5000/api/v1/books/:id (must be a valid id from the database)

1. GET request to specific book with that id
2. PATCH request to update book from the database (must have a valid body)
3. DELETE request to delete book from the database
