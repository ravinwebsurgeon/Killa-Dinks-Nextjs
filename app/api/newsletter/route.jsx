import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

  const payload = await request.json();
  const { email } = payload;

  try {
    const response = await fetch(
      `https://dourdinks.myshopify.com/admin/api/2024-01/customers.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': ACCESS_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer: {
            email: email,
            email_marketing_consent: {
              state: 'subscribed',
              opt_in_level: 'single_opt_in'
            }
          }
        })
      }
    );
    const result = await response.json();

    return new NextResponse(JSON.stringify({ result }), {
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error }), {
      status: 500
    });
  }
};