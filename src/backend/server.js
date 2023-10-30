import express from "express";
import cors from "cors";
import db from "./database/database.js";
import path, { dirname } from "path";
import multer from "multer";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.port ?? 3000;

app.use(cors());
app.use(express.json());
// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Error interno del servidor");
});

let uniqueNameFile = '';

// multer config to upload files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "assets", "uploads"),
  filename: (req, file, cb) => {
    uniqueNameFile = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueNameFile);
  },
});

const upload = multer({ storage });

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
      console.error("error al enviar mensaje ", err);
      res.status(500).send("error al enviar mensaje");
      return;
    }

    res.json({ message: "mensaje enviado correctamente" });
  });
});

// insert new developers
app.post("/register", upload.single("photo"), (req, res) => {
  const { name, surname, email, pwd, languages, description } = req.body;

  const query =
    "INSERT INTO developers (name, email, pwd, programming_lang, description, photo) values(?,?,?,?,?,?)";

  db.query(
    query,
    [name + " " + surname, email, pwd, languages, description, uniqueNameFile],
    (err, result) => {
      if (err) {
        console.error("error al registrar nuevo dev ", err);
        next(err);
      } else {
        console.log("dev correctamente guardado");
        res.status(200).send("bien");
      }

    }
  );
});

// listener
app.listen(port, () => {
  console.log(`server en port: ${port}`);
});
