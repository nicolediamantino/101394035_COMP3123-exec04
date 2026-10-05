const express = require("express");

const app = express();
const PORT = 3000;

// Allows Express to read JSON from the request body
app.use(express.json());

// Serves files from the public folder
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});
// GET /user - Query Parameters
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";

  res.json({
    firstname: firstname,
    lastname: lastname
  });
});
// POST /user - Path Parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const firstname = req.params.firstname;
  const lastname = req.params.lastname;

  res.json({
    firstname: firstname,
    lastname: lastname
  });
});
// POST /users - Body Parameter
app.post("/users", (req, res) => {
  const users = req.body;

  res.json(users);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});