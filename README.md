# Furniture Store API

A RESTful API built with Node.js and Express for managing a furniture store's inventory.

## Architecture & Design Decisions
To ensure the codebase remains scalable, maintainable, and professional, I structured this project using a standard **MVC (Model-View-Controller)** approach, separating the logic into distinct modules:

* **`server.js`**: Serves solely as the application entry point, keeping configuration and middleware clean.
* **`routes/`**: Handles the routing layer. Using `express.Router()` allows endpoints to be mapped to their logic without cluttering the main server file.
* **`controllers/`**: Contains the core business logic for handling requests, updating the mock data, and sending JSON responses.
* **`data/`**: Acts as the mock data layer, holding the initial state of the 10 furniture products.

## API Endpoints

* **Live Deployment Link:** - "[https://furniture-api-eqjf.onrender.com]"

* **`GET /api/products`** - Retrieve the list of all products.
* **`POST /api/products`** - Add a new product (requires `name` and `price` validation).
* **`PUT /api/products/:id`** - Update an existing product by its ID.
