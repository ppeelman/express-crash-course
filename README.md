## What is Express?

Express is a fast, unopinionated and minimalist web framework for Node.js

Express is a **server-side** or **back-end** framework. It is not comparable to client-side frameworks like React, Angular or Vue. It can be used in combination with those frameworks to build full-stack applications.

## Why use Express?

- Make building web applications with Node much easier
- Used for both _server rendered apps_ as well as _API/Microservices_
- Extremely light, fast and **free**
- Full control of request and response
- By far the most popular Node framework
- Great to use with client-side frameworks, as its all JavaScript

```js
app.get("/", function(req, res) {
  // Fetch from database
  // Load pages
  // Return JSON
  // Full access to request & response
});
```

## Basic route handling

- Handling requests/routes is simple
- app.get(), app.post(), app.put(), app.delete() etc.
- Access to params, query strings, url parts etc.
- Express has a router so we can store routes in separate files and export
- We can parse incoming data with the body parser

## Express middleware

Middleware functions are functions that have access to the request and the response object. Express has built in middleware but middleware comes also from 3rd party packages as well as custom middleware.

- Execute any code
- Make changes to the request/response objects
- End response cycle
- Call next middleware in the stack

## Create a static web server that serves static files

```js
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
```

Documentation: https://expressjs.com/en/4x/api.html#express.static

## Create a simple CRUD API:

'CRUD':

- Create
- Read
- Update
- Delete

```js
// index.js
const express = require("express");

app.use("/api/members", require("./routes/api/members"));



// routes/api/members.js
const express = require("express");

const router = express.Router();

router.get(...);

router.post(...);

router.put(...);

router.delete(...);

module.exports = router;
```

Documentation: https://expressjs.com/en/4x/api.html#express.router

## Read body of a request

Documentation: https://expressjs.com/en/4x/api.html#req.body
