import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./src/config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhookRoutes from "./src/routes/clerkWebhook.routes.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();
const app = express();

app.use(cors());


app.use("/api/clerk", clerkWebhookRoutes);


app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running ✅ ...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  ConnectDB();
  console.log(`server running on port ${PORT}`);
});
