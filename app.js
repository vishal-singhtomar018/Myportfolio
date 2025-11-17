  import express from "express";
  import path from "path";
  import { fileURLToPath } from "url";
  import ejsMate from "ejs-mate";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const app = express();

  app.engine("ejs", ejsMate);
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static("public"));
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.render("index");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
