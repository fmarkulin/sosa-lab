import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

app.get("/new-transaction", (req, res) => {
  res.send("Hello World!");
});

// POST endpoint
app.post("/new-transaction", (req, res) => {
  console.log(`POST /new-transaction body`, req.body);

  if (req.body.type === "success") {
    res.json("Transaction successful");
  } else if (req.body.type === "canceled") {
    res.json("Transaction canceled");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
