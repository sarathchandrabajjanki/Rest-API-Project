## REST-Project

Simple RESTful API built with Express and Mongoose, exposing CRUD endpoints for two resources: `books` and `products`. It connects to MongoDB via Mongoose and uses JSON request bodies. CORS is enabled.

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB (via Mongoose)
- **Dev**: nodemon, dotenv, CORS

### Project Structure
```
Controllers/
  - book-controller.js
  - product-controller.js
DataBase/
  - db.js
Model/
  - book-schema.js
  - Products-schema.js
Route/
  - book-route.js
  - product-route.js
index.js
```

### Prerequisites
- Node.js 18+
- MongoDB instance (local or cloud)

### Environment Variables
Create a `.env` file in the project root with:
```
MONGO_URL=<your-mongodb-connection-string>
PORT=9999  # optional; defaults to 9999 if not set
```

### Install & Run
```bash
npm install
npm start
```
This runs `nodemon index.js` and starts the server on `http://localhost:9999` by default.

### Data Models
- `BookData` (`Model/book-schema.js`)
  - `title: String`
  - `price: Number`
  - `author: String`
  - `isActive: Boolean`

- `products` (`Model/Products-schema.js`)
  - `productName: String`
  - `Metal: String`
  - `price: Number`
  - `isActive: Boolean`

### Base URLs
- Books: `http://localhost:9999/books`
- Products: `http://localhost:9999/products`

### Books API
- GET `/books/`
  - Returns all books.
  - Response: `200/201` JSON array of books.

- GET `/books/:id`
  - Returns a single book by id.
  - Response: `201` JSON book document.

- POST `/books/add`
  - Body (JSON):
    ```json
    {
      "title": "string",
      "price": 100,
      "author": "string",
      "isActive": true
    }
    ```
  - Response: `201` with created book (controller currently logs to console; adjust as needed).

- PUT `/books/update/:id`
  - Body: partial or full book fields to update.
  - Response: `201` with updated document.

- DELETE `/books/delete/:id`
  - Response: `201` with deleted document.

### Products API
- GET `/products/`
  - Returns all products.
  - Response: `200` JSON array of products.

- GET `/products/:id`
  - Returns a single product by id.
  - Response: `200` JSON product document.

- POST `/products/add`
  - Body (JSON):
    ```json
    {
      "productName": "string",
      "Metal": "string",
      "price": 100,
      "isActive": true
    }
    ```
  - Response: `201` with created product.

- PUT `/products/update/:id`
  - Body: partial or full product fields to update.
  - Response: `200` with updated document; `404` on failure.

- DELETE `/products/delete/:id`
  - Response: `200` with deleted document; `404` on failure.

### Notes
- Middleware: `express.json()` for JSON bodies, `cors()` for cross-origin requests.
- DB connection: `DataBase/db.js` reads `MONGO_URL` from `.env` and logs connection status.
- The books POST handler currently logs the created doc to console instead of returning it; you may update it to return JSON consistently.

### Example Requests
Using curl:
```bash
curl http://localhost:9999/books/
curl http://localhost:9999/books/<id>
curl -X POST http://localhost:9999/books/add \
  -H "Content-Type: application/json" \
  -d '{"title":"Foo","price":100,"author":"Bar","isActive":true}'

curl http://localhost:9999/products/
curl -X POST http://localhost:9999/products/add \
  -H "Content-Type: application/json" \
  -d '{"productName":"Ring","Metal":"Gold","price":999,"isActive":true}'
```

### License
ISC


