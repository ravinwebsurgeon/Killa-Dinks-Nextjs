

export async function GET(req) {
    try {
        // Define the API URL and token
        const apiUrl = `https://judge.me/api/v1/reviews?shop_domain=dourdinks.myshopify.com&api_token=${process.env.JUDGME_API_TOKEN}`;

        // Fetch data from the Judge.me API
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }

        // Parse the response to JSON
        const data = await response.json();

        // Return the reviews to the client
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // Handle any errors and send a response
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
