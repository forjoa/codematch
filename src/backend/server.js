import express from "express";
import cors from "cors";
import db from "./database/database.js";
import path from "path";
import multer from "multer";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// multer config to upload files
const storage = multer.diskStorage({
  destination: path.join("../assets/", "uploads"),
  filename: (req, file, cb) => {
    const uniqueNameFile = `${Date.now()}-${file.originalname}`;
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
  const photoId = req.file.filename

  const query =
    "INSERT INTO developers (name, email, pwd, programming_lang, description, photo) values(?,?,?,?,?,?)";

  db.query(
    query,
    [name + " " + surname, email, pwd, languages, description, photoId],
    (err, result) => {
      if (err) {
        console.error("error al registrar nuevo dev ", err);
        res.status(500).send("error al registrar nuevo dev");
        return;
      } else {
        console.log("dev correctamente guardado");
      }

      res.json({ message: "nuevo dev insertado correctamente" });
    }
  );
});

// listener
app.listen(port, () => {
  console.log(`server en port: ${port}`);
});
