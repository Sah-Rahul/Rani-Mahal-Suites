import express from "express";
import clerkWebhooks from "../controllers/clerkWebhooks.js";
import getRawBody from "raw-body";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // get raw body for svix webhook verification
    const rawBody = await getRawBody(req);
    await clerkWebhooks(rawBody, req, res);
  } catch (error) {
    console.error("Webhook route error:", error);
    res.status(400).send("Invalid request");
  }
});

export default router;
