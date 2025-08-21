import User from "../models/user.model.js";
import { Webhook } from "svix";

const clerkWebhooks = async (rawBody, req, res) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET not set");
    }

    const whook = new Webhook(webhookSecret);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify webhook signature with raw body
    const evt = await whook.verify(rawBody.toString(), headers);
    const { data, type } = evt;

    const userData = {
      clerkId: data.id,
      email: data.email_addresses[0].email_address,
      fullname: data.first_name + " " + data.last_name,
      image: data.image_url,
      role: "user",
      recentSearchedCities: [],
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findOneAndUpdate({ clerkId: data.id }, userData, { new: true });
        break;

      case "user.deleted":
        await User.findOneAndDelete({ clerkId: data.id });
        break;

      default:
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
