import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT || 6000, () => {
  console.log.apply(`Server started on port ${process.env.PORT}`);
});
