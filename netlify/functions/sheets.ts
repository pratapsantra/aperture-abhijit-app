// netlify/functions/sheets.ts for Single sheet
import { Handler } from '@netlify/functions';
const { google } = require('googleapis');
import keys from '../../virtual-guru-466708-g6-cc95577d946b.json';

export const handler: Handler = async (event, context) => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  const sheetName = event.queryStringParameters?.sheet || 'homeCarousel';
  const rangeParam = event.queryStringParameters?.range || 'A:Z';

  try {
    const auth = await google.auth.getClient({
      credentials: {
        type: 'service_account',
        private_key: keys.private_key,
        client_email: keys.client_email,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1U0_haunCSz53KGJAU4ji5j9aSj9HiKJoB0rrXyVqaR0',
      range: `${sheetName}!${rangeParam}`,
    });

    const [headers, ...rows]: string[][] = response.data.values;

    // ✅ Parse and normalize inside the backend
    const parsedData = rows.map((row) =>
      headers.reduce((obj: Record<string, any>, header, i) => {
        let value: any = row[i] ?? '';
        const normalized = String(value).trim().toLowerCase();

        if (normalized === 'true') value = true;
        else if (normalized === 'false') value = false;
        else if (!isNaN(Number(value)) && value !== '') value = Number(value);

        obj[header] = value;
        return obj;
      }, {})
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: parsedData }),
    };
  } catch (err: any) {
    console.error('Sheets API Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: err.message }),
    };
  }
};

export default handler;


//All Sheet// range: 'homeCarousel!A:Z',

/* import { Handler } from '@netlify/functions';
const { google } = require('googleapis');
import keys from '../../virtual-guru-466708-g6-cc95577d946b.json';

export const handler: Handler = async () => {
  try {
    const auth = await google.auth.getClient({
      credentials: {
        type: 'service_account',
        private_key: keys.private_key,
        client_email: keys.client_email,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheetsApi = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1U0_haunCSz53KGJAU4ji5j9aSj9HiKJoB0rrXyVqaR0';

    const sheetsMeta = await sheetsApi.spreadsheets.get({ spreadsheetId });

    const sheetData = await Promise.all(
      sheetsMeta.data.sheets?.map(async (sheet: any) => {
        const title = sheet.properties.title;
        const res = await sheetsApi.spreadsheets.values.get({
          spreadsheetId,
          range: `${title}!A:Z`,
        });

        return { title, values: res.data.values };
      }) || []
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: sheetData }),
    };
  } catch (err: any) {
    console.error('Sheets API Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: err.message }),
    };
  }
};

export default handler; */

