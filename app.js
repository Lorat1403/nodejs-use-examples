import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"; // Ensure environment variables are loaded

import router from "./routes/api/contacts.js";

const contactsRouter = router;

const app = express();
// Налаштування логування
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const logger = morgan(formatsLogger);

app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.send("Hello from App!");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Експорт об'єкта `app` як дефолтний
export default app;
