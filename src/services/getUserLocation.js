import axios from "axios";
import { receiver, receiver2 } from "./Web3Config";

export async function getUserCountry() {
  const API_KEY = import.meta.env.VITE_REACT_APP_IPDATA_API_KEY; // Replace with your ipdata API key
  const url = `https://api.ipdata.co/?api-key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const { country_name: country, country_code: countryCode } = response.data;
    return { country, countryCode };
  } catch (error) {
    console.error("Error fetching user country from ipdata.co:", error);
    return null;
  }
}

// Get the recipient address based on the user's country code
export async function getRecipientAddress() {
  const userCountryData = await getUserCountry();
  if (!userCountryData) {
    console.error("Failed to retrieve user country data");
    return null;
  }

  const { countryCode, country } = userCountryData;
  const specialCountries = ["NG", "US", "GB", "AE"]; // Nigeria, USA, UK,UAE country codes

  // Log the country name and code
  console.log(`User is from ${country} (${countryCode})`);

  // Return the address based on the user's country code
  const recipientAddress = specialCountries.includes(countryCode) ? receiver : receiver2;

  console.log("Recipient address:", recipientAddress);
  return recipientAddress;
}
