import dotenv from "dotenv";
import express from "express";

if (process.env.NODE_ENV !== "production") {
    console.log("Running in production mode");
    dotenv.config({ path: ".prod.env" });
  } else {
      console.log("Running in development mode");
      dotenv.config({ path: ".dev.env" });
}

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});