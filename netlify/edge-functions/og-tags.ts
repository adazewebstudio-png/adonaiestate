import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "p1fxf3j0",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});

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
};

function generateHTML(meta: { title: string; description: string; image: string; url: string }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${meta.url}">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:image" content="${meta.image}">
  <meta property="og:site_name" content="Adonai Estate Limited">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${meta.url}">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  <meta name="twitter:image" content="${meta.image}">
  
  <meta http-equiv="refresh" content="0;url=${meta.url}">
</head>
<body>
  <p>Redirecting to <a href="${meta.url}">${meta.title}</a>...</p>
</body>
</html>`;
}

export default async (request: Request) => {
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
        "Discord",
        "Pinterest",
        "Google-InspectionTool",
    ];

    const isCrawler = crawlerPatterns.some(pattern =>
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
        const slug = pathname.replace("/insight/", "");
        try {
            const post = await client.fetch(
                `*[_type == "post" && slug.current == $slug][0]{
          title,
          excerpt,
          "image": mainImage.asset->url
        }`,
                { slug }
            );

            if (post) {
                meta.title = `${post.title} | Adonai Estate Limited`;
                meta.description = post.excerpt || post.title;
                meta.image = post.image || DEFAULT_IMAGE;
            }
        } catch (error) {
            console.error("Error fetching blog post:", error);
        }
    }
    // Check for estates
    else if (pathname.startsWith("/estates/")) {
        const estateSlug = pathname.replace("/estates/", "");
        const estateKey = `/estates/${estateSlug}`;
        if (staticPages[estateKey]) {
            const page = staticPages[estateKey];
            meta.title = page.title;
            meta.description = page.description;
            meta.image = page.image ? `${BASE_URL}${page.image}` : DEFAULT_IMAGE;
        }
    }

    return new Response(generateHTML(meta), {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
};

export const config = {
    path: "/*",
};
