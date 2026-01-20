const SANITY_PROJECT_ID = "p1fxf3j0";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-01-01";

const BASE_URL = "https://adonaiestatelimited.com";
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
    },
    "/insight": {
        title: "Insights | Real Estate News & Tips",
        description: "Stay informed with the latest real estate news, investment tips, and market insights from Adonai Estate Limited.",
    },
    "/contact": {
        title: "Contact Us | Adonai Estate Limited",
        description: "Get in touch with Adonai Estate Limited for inquiries about land purchases, consultancy, and property management.",
    },
    "/services": {
        title: "Our Services | Adonai Estate Limited",
        description: "Explore our comprehensive real estate services including land sales, consultancy, property management, and brokerage.",
    },
    "/why-invest": {
        title: "Why Invest With Adonai? | Adonai Estate Limited",
        description: "Discover why investing with Adonai Estate Limited is a smart choice for your future.",
    },
    "/gallery": {
        title: "Gallery | Adonai Estate Limited",
        description: "View our photo gallery showcasing our estates, developments, and community events.",
    },
};

// Fetch blog post from Sanity using native fetch
async function fetchBlogPost(slug: string) {
    const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    excerpt,
    "image": mainImage.asset->url
  }`);

    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

    try {
        const response = await fetch(url);
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
  <meta property="og:type" content="article">
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

export default async (request: Request) => {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";

    // Check if request is from a social media crawler
    // NOTE: Do NOT include Googlebot here - it needs to see the full SPA to index content
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

    // If not a crawler, pass through to the SPA
    if (!isCrawler) {
        return;
    }

    const pathname = url.pathname;
    let meta = {
        title: staticPages["/"].title,
        description: staticPages["/"].description,
        image: DEFAULT_IMAGE,
        url: `${BASE_URL}${pathname}`,
    };

    // Check for static page metadata
    if (staticPages[pathname]) {
        const page = staticPages[pathname];
        meta.title = page.title;
        meta.description = page.description;
        meta.image = page.image ? `${BASE_URL}${page.image}` : DEFAULT_IMAGE;
    }
    // Check for dynamic blog post
    else if (pathname.startsWith("/insight/")) {
        const slug = pathname.replace("/insight/", "").replace(/\/$/, ""); // Remove trailing slash

        if (slug && slug.length > 0) {
            const post = await fetchBlogPost(slug);

            if (post) {
                meta.title = `${post.title} | Adonai Estate Limited`;
                meta.description = post.excerpt || post.title;
                meta.image = post.image || DEFAULT_IMAGE;
            }
        }
    }
    // Check for estates (handle any estate slug)
    else if (pathname.startsWith("/estates/")) {
        const estateSlug = pathname.replace(/\/$/, ""); // Remove trailing slash
        if (staticPages[estateSlug]) {
            const page = staticPages[estateSlug];
            meta.title = page.title;
            meta.description = page.description;
            meta.image = page.image ? `${BASE_URL}${page.image}` : DEFAULT_IMAGE;
        }
    }

    return new Response(generateHTML(meta), {
        headers: {
            "content-type": "text/html;charset=UTF-8",
            "cache-control": "public, max-age=3600", // Cache for 1 hour
        },
    });
};

export const config = {
    path: "/*",
};
