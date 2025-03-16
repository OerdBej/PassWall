import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;


//recipents will be user email that sign up for
export const client = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

export const sender = {
  email: "oerd@demomailtrap.co",
  name: "Oerd Bej",
};


