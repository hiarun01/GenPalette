import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/palette.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mode = process.env.MODE;

if (mode === "dev") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );
} else if (mode === "prod") {
  app.use(
    cors({
      origin: "https://gen-palette.vercel.app",
      credentials: true,
    })
  );
}

app.use(bodyParser.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
