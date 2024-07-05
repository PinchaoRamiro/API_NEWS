import express from "express";
import dotenv from "dotenv";
import articlesRouter from "./routes/articles.js";
import breackingEventsRouter from "./routes/breakingEvents.js";
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const app = express();

// Obtener el directorio actual en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;

app.use("/api", articlesRouter);
app.use("/api", breackingEventsRouter);

app.listen(PORT, () => {
  console.clear();
  console.log("Server running on port: " + PORT);
});
