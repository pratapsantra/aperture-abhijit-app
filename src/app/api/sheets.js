import { google } from "googleapis";
import keys from "./virtual-guru-466708-g6-cc95577d946b.json";

export default async function handler(req, res) {
  try {
    const auth = await google.auth.getClient({
      projectId: keys.project_id,
      credentials: {
        type: "service_account",
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
        universe_domain: "googleapis.com",
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
  
    const sheets = google.sheets({ version: "v4", auth });
  
    // copy your spreadshset id here
    // and update the range based on the sheet name and colums used
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "1U0_haunCSz53KGJAU4ji5j9aSj9HiKJoB0rrXyVqaR0",
      range: "Sheet1!A:D",
    });

    // here we'll work with the data
     
    return res.status(200);
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Error getting spreadsheet data', success: false });
  }
}