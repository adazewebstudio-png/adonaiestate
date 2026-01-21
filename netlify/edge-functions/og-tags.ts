const SANITY_PROJECT_ID = "w50u4jfs";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2023-05-03";

const BASE_URL = "https://adonaiestateltd.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.jpg`;

// Page metadata for static pages
const staticPages: Record<string, { title: string; description: string; image?: string }> = {
    "/": {
        title: "Adonai Estate Limited | Ultra Modern Living in Ho, Volta Region",
        description: "Helping solve Ghana's housing deficit realistically. Own litigation-free land and homes in Airport Golf City, UHAS Florida City, and more in the Volta Region.",
        image: "/hero_home_main.jpg",
    },
    "/about": {
        title: "About Us | Adonai Estate Limited",
        description: "Learn about Adonai Estate Limited, our mission, vision, and commitment to affordable housing in Ghana since 2014.",
        image: "/about_development.jpg",
    },
    "/about/ceo": {
        title: "Founder & CEO | Rev. Dr. Bright Adonai",
        description: "The visionary leadership of Rev. Dr. Bright Adonai, Founder & CEO of Adonai Estate Limited.",
        image: "/ceo_bright_adonai_optimized.jpg",
    },
    "/estates": {
        title: "Our Estates | Premium Communities in the Volta Region",
        description: "Explore our premium estate developments including Airport Golf City, Millennium City, and UHAS Florida City.",
        image: "/airport_golf_city_main.jpg",
    },
    "/estates/airport-golf-city": {
        title: "Airport Golf City | Adonai Estate Limited",
        description: "Discover Airport Golf City, our flagship 98-acre gated community featuring a world-class golf course in Ho, Volta Region.",
        image: "/airport_golf_city_main.jpg",
    },
    "/estates/millennium-city": {
        title: "Millennium City | Adonai Estate Limited",
        description: "Bringing you back to your roots with cultural heritage and modern living at Kpetoe.",
        image: "/images/estates/millennium-city/hero.jpg",
    },
    "/estates/uhas-florida-city": {
        title: "UHAS Florida City | Adonai Estate Limited",
        description: "A vibrant community designed for modern lifestyles near UHAS.",
        image: "/images/estates/florida-city/hero.jpg",
    },
    "/estates/volta-safari-city": {
        title: "Volta Safari City | Adonai Estate Limited",
        description: "Eco-friendly riverside lodges and homes in Sogakope.",
        image: "/images/estates/volta-safari-city/safari2.jpg",
    },
    "/estates/leaders-city": {
        title: "Leaders City | Adonai Estate Limited",
        description: "The heart of commercial and residential excellence in Ho.",
        image: "/images/estates/leaders-city/home_thumb.jpg",
    },
    "/listings": {
        title: "Property Listings | Adonai Estate Limited",
        description: "Browse our available litigation-free land and property listings across the Volta Region.",
        image: "/home_who_we_are.jpg",
    },
    "/insight": {
        title: "Insights | Real Estate News & Tips",
        description: "Stay informed with the latest real estate news, investment tips, and market insights from Adonai Estate Limited.",
        image: "/about_development.jpg",
    },
    "/contact": {
        title: "Contact Us | Adonai Estate Limited",
        description: "Get in touch with Adonai Estate Limited for inquiries about land purchases, consultancy, and property management.",
        image: "/logo.jpg",
    },
    "/gallery": {
        title: "Gallery | Adonai Estate Limited",
        description: "Take a visual tour of our estates and community developments.",
        image: "/airport_golf_city_main.jpg",
    },
    "/why-invest": {
        title: "Why Invest With Adonai? | Adonai Estate Limited",
        description: "Discover why investing with Adonai Estate Limited is a smart choice for your future.",
        image: "/why_invest_hero_aerial.jpg",
    },
    // Services
    "/services": {
        title: "Our Services | Adonai Estate Limited",
        description: "Explore our comprehensive real estate services including land sales, consultancy, property management, and brokerage.",
        image: "/about_development.jpg",
    },
    "/services/land-sales": {
        title: "Land Sales | Secure & Litigation-Free",
        description: "Buy land with confidence. We provide authentic documentation and planned communities in the best locations.",
        image: "/land_dispute_avoidance.png",
    },
    "/services/consultancy": {
        title: "Real Estate Consultancy | Adonai Estate Limited",
        description: "Professional advice on land acquisition, development planning, and real estate investment in Ghana.",
        image: "/logo.jpg",
    },
    "/services/property-management": {
        title: "Property Management | Adonai Estate Limited",
        description: "Let us help you protect and grow the value of your real estate assets through professional management.",
        image: "/logo.jpg",
    },
    "/services/brokerage": {
        title: "Real Estate Brokerage | Adonai Estate Limited",
        description: "Transparent and secure facilitation of property transactions between buyers and sellers.",
        image: "/logo.jpg",
    },
    // Subsidiaries
    "/subsidiaries": {
        title: "Our Subsidiaries | Adonai Group of Companies",
        description: "Discover our diverse group of companies covering education, hospitality, agriculture, and real estate services.",
        image: "/logo.jpg",
    },
    "/subsidiaries/golf-city-view-restaurant": {
        title: "Golf City View Restaurant | Dining with a View",
        description: "The best continental and local dishes in Ho with a stunning view of the Airport Golf City course.",
        image: "/gcvr_aucre_logo.jpg",
    },
    "/subsidiaries/gcvr-aucre-gardens": {
        title: "Aucre Gardens | Premium Event Venue",
        description: "The perfect venue for weddings, corporate events, and celebrations in a serene, luxury environment.",
        image: "/gcvr_aucre_logo.jpg",
    },
    "/subsidiaries/airport-golf-city-school": {
        title: "Adonai Global International School | Nurturing Leaders",
        description: "Providing world-class education for the leaders of tomorrow at Airport Golf City.",
        image: "/agis_logo.jpg",
    },
    "/grolip": {
        title: "GROLIP | Greater Returns On Land Investment",
        description: "Earn 4% monthly appreciation with our unique land investment package at Airport Golf City.",
        image: "/land_dispute_avoidance.png",
    },
};

// Fetch blog post from Sanity using native fetch
async function fetchBlogPost(slug: string) {
    const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    excerpt,
    "image": mainImage.asset->url
  }`);

    const apiUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error("Sanity API error:", response.status);
            return null;
        }
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error fetching from Sanity:", error);
        return null;
    }
}

function escapeHtml(str: string): string {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function generateHTML(meta: { title: string; description: string; image: string; url: string }) {
    const safeTitle = escapeHtml(meta.title);
    const safeDescription = escapeHtml(meta.description);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${meta.url}">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:image" content="${meta.image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Adonai Estate Limited">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${meta.url}">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDescription}">
  <meta name="twitter:image" content="${meta.image}">
  
  <meta http-equiv="refresh" content="0;url=${meta.url}">
</head>
<body>
  <p>Redirecting to <a href="${meta.url}">${safeTitle}</a>...</p>
</body>
</html>`;
}

export default async (request: Request, context: any) => {
    try {
        const url = new URL(request.url);
        const userAgent = request.headers.get("user-agent") || "";

        // Check if request is from a social media crawler
        const crawlerPatterns = [
            "facebookexternalhit",
            "Facebot",
            "Twitterbot",
            "LinkedInBot",
            "WhatsApp",
            "Slackbot",
            "TelegramBot",
            "Discordbot",
            "Pinterest",
        ];

        const isCrawler = crawlerPatterns.some((pattern) =>
            userAgent.toLowerCase().includes(pattern.toLowerCase())
        );

        if (!isCrawler) {
            return context.next();
        }

        // Normalize path: lowercase and no trailing slash (but keep / for root)
        const rawPath = url.pathname;
        const lookupPath = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "").toLowerCase();

        // Default meta
        let meta = {
            title: staticPages["/"].title,
            description: staticPages["/"].description,
            image: DEFAULT_IMAGE,
            url: `${BASE_URL}${rawPath}`,
        };

        // 1. Check for specific static page
        if (staticPages[lookupPath]) {
            const page = staticPages[lookupPath];
            meta.title = page.title;
            meta.description = page.description;
            meta.image = page.image ? (page.image.startsWith("http") ? page.image : `${BASE_URL}${page.image}`) : DEFAULT_IMAGE;
        }
        // 2. Check for dynamic blog post
        else if (lookupPath.startsWith("/insight/")) {
            const slug = lookupPath.replace("/insight/", "");
            if (slug) {
                const post = await fetchBlogPost(slug);
                if (post) {
                    meta.title = `${post.title} | Adonai Estate Limited`;
                    meta.description = post.excerpt || post.title;
                    meta.image = post.image || DEFAULT_IMAGE;
                }
            }
        }
        // 3. Check for dynamic property listings
        else if (lookupPath.startsWith("/listings/")) {
            const id = lookupPath.replace("/listings/", "");
            if (id) {
                // We use the same fetch logic but for 'property' type
                const query = encodeURIComponent(`*[_type == "property" && _id == "${id}"][0]{
                    title,
                    location,
                    price,
                    "image": mainImage.asset->url
                }`);
                const apiUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

                try {
                    const response = await fetch(apiUrl);
                    if (response.ok) {
                        const data = await response.json();
                        const prop = data.result;
                        if (prop) {
                            meta.title = `${prop.title} | ${prop.location}`;
                            meta.description = `View details for this property in ${prop.location}. Pricing: ${prop.price}. Litigation-free and secure land from Adonai Estate Limited.`;
                            meta.image = prop.image || DEFAULT_IMAGE;
                        }
                    }
                } catch (e) {
                    console.error("Error fetching prop in edge function:", e);
                }
            }
        }
        // 4. Check for any nested estates that might not be in staticPages list (fallback)
        else if (lookupPath.startsWith("/estates/")) {
            // This is already covered by staticPages lookup if we keep them updated,
            // but we could add a generic title if missing.
            meta.title = "Our Estate Communities | Adonai Estate Limited";
        }

        return new Response(generateHTML(meta), {
            status: 200,
            headers: {
                "content-type": "text/html;charset=UTF-8",
                "cache-control": "public, max-age=3600",
            },
        });
    } catch (error) {
        console.error("Edge Function Error:", error);
        return context.next();
    }
};

export const config = {
    path: "/*",
};
