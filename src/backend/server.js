import express from "express";
import cors from "cors";
import db from "./database/database.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// show developers
app.get("/api/developers", (req, res) => {
  db.query("SELECT * FROM developers", (err, results) => {
    if (err) {
      console.error("error en la consulta");
      res.status(500).send("error en la consulta");
      return;
    }

    res.json(results);
  });
});

// insert doubts from contact section
app.post("/doubts", (req, res) => {
  const { name, email, message } = req.body;

  const query = "INSERT INTO doubts (name, email, message) values (?, ?, ?)";

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("error al enviar mensaje", err);
      res.status(500).send("error al enviar mensaje");
      return;
    }

    res.json({ message: "mensaje enviado correctamente" });
  });
});

// listener
app.listen(port, () => {
  console.log(`server en port: ${port}`);
});
