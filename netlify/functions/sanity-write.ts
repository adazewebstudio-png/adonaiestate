// Netlify Function v2 - Secure proxy for Sanity write operations
// Types are provided by the Netlify runtime at deploy time

export default async (req: Request) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const body = await req.json();

        // Input validation: only allow specific document types
        const ALLOWED_TYPES = ['review', 'comment', 'sellRequest'];
        if (!body._type || !ALLOWED_TYPES.includes(body._type)) {
            return new Response(JSON.stringify({ error: "Invalid document type" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Force approved to false for user-generated content
        if (body._type === 'review' || body._type === 'comment') {
            body.approved = false;
        }

        const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID || "w50u4jfs";
        const SANITY_DATASET = process.env.SANITY_DATASET || "production";
        const SANITY_TOKEN = process.env.SANITY_TOKEN;

        if (!SANITY_TOKEN) {
            console.error("SANITY_TOKEN is missing in environment variables");
            return new Response(JSON.stringify({ error: "Server configuration error" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-05-03/data/mutate/${SANITY_DATASET}`;

        const mutation = {
            mutations: [
                {
                    create: body
                }
            ]
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SANITY_TOKEN}`
            },
            body: JSON.stringify(mutation)
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Sanity Mutation Error:", result);
            return new Response(JSON.stringify(result), {
                status: response.status,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Function Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

export const config = {
    path: "/api/sanity-write"
};
