/**
 * Sitemap Generator Script
 * 
 * This script generates a complete sitemap.xml that includes:
 * - All static routes
 * - Dynamic blog posts from Sanity
 * - Dynamic property listings from Sanity
 * 
 * Run before build: npm run generate-sitemap
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sanity client configuration
const client = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID || 'w50u4jfs',
    dataset: process.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});

const SITE_URL = 'https://adonaiestateltd.com';
const TODAY = new Date().toISOString().split('T')[0];

// Static routes with their priorities and change frequencies
const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },

    // About Section
    { path: '/about', priority: '0.9', changefreq: 'monthly' },
    { path: '/about/ceo', priority: '0.8', changefreq: 'monthly' },

    // Estates
    { path: '/estates', priority: '0.9', changefreq: 'weekly' },
    { path: '/estates/airport-golf-city', priority: '0.8', changefreq: 'monthly' },
    { path: '/estates/millennium-city', priority: '0.8', changefreq: 'monthly' },
    { path: '/estates/uhas-florida-city', priority: '0.8', changefreq: 'monthly' },
    { path: '/estates/volta-safari-city', priority: '0.8', changefreq: 'monthly' },
    { path: '/estates/leaders-city', priority: '0.8', changefreq: 'monthly' },

    // Services
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/land-sales', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/consultancy', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/property-management', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/brokerage', priority: '0.7', changefreq: 'monthly' },

    // Subsidiaries
    { path: '/subsidiaries', priority: '0.8', changefreq: 'monthly' },
    { path: '/subsidiaries/gcvr-aucre-gardens', priority: '0.7', changefreq: 'monthly' },
    { path: '/subsidiaries/airport-golf-city-school', priority: '0.7', changefreq: 'monthly' },

    // Insights & Listings
    { path: '/insight', priority: '0.9', changefreq: 'daily' },
    { path: '/listings', priority: '0.9', changefreq: 'daily' },
    { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
    { path: '/why-invest', priority: '0.8', changefreq: 'monthly' },
    { path: '/faq', priority: '0.8', changefreq: 'monthly' },

    // Contact & Agent
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/agent/richard-adaze', priority: '0.7', changefreq: 'weekly' },
    { path: '/sell-land', priority: '0.8', changefreq: 'monthly' },

    // Legal (low priority)
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-use', priority: '0.3', changefreq: 'yearly' },
    { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/aml-kyc-policy', priority: '0.3', changefreq: 'yearly' },
];

/**
 * Fetch all published blog posts from Sanity
 */
async function fetchBlogPosts() {
    try {
        const query = `*[_type == "post" && !(_id in path("drafts.**"))] {
            "slug": slug.current,
            _updatedAt
        }`;
        const posts = await client.fetch(query);
        console.log(`✓ Fetched ${posts.length} blog posts from Sanity`);
        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

/**
 * Fetch all published property listings from Sanity
 */
async function fetchListings() {
    try {
        const query = `*[_type == "property" && !(_id in path("drafts.**"))] {
            _id,
            _updatedAt
        }`;
        const listings = await client.fetch(query);
        console.log(`✓ Fetched ${listings.length} property listings from Sanity`);
        return listings;
    } catch (error) {
        console.error('Error fetching listings:', error);
        return [];
    }
}

/**
 * Generate XML URL entry
 */
function generateUrlEntry(loc, lastmod, priority, changefreq) {
    let xml = `  <url>\n`;
    xml += `    <loc>${SITE_URL}${loc}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    if (changefreq) {
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
    }
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
    return xml;
}

/**
 * Generate the complete sitemap
 */
async function generateSitemap() {
    console.log('\n🗺️  Generating sitemap...\n');

    // Fetch dynamic content from Sanity
    const [blogPosts, listings] = await Promise.all([
        fetchBlogPosts(),
        fetchListings()
    ]);

    // Start XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    console.log(`\n📄 Adding ${staticRoutes.length} static routes...`);
    for (const route of staticRoutes) {
        sitemap += generateUrlEntry(route.path, TODAY, route.priority, route.changefreq);
    }

    // Add dynamic blog posts
    if (blogPosts.length > 0) {
        sitemap += `\n  <!-- Blog Posts (Dynamic from Sanity) -->\n`;
        console.log(`📝 Adding ${blogPosts.length} blog posts...`);
        for (const post of blogPosts) {
            const lastmod = post._updatedAt ? post._updatedAt.split('T')[0] : TODAY;
            sitemap += generateUrlEntry(`/insight/${post.slug}`, lastmod, '0.7', 'weekly');
        }
    }

    // Add dynamic property listings
    if (listings.length > 0) {
        sitemap += `\n  <!-- Property Listings (Dynamic from Sanity) -->\n`;
        console.log(`🏠 Adding ${listings.length} property listings...`);
        for (const listing of listings) {
            const lastmod = listing._updatedAt ? listing._updatedAt.split('T')[0] : TODAY;
            sitemap += generateUrlEntry(`/listings/${listing._id}`, lastmod, '0.8', 'weekly');
        }
    }

    // Close XML
    sitemap += `</urlset>\n`;

    // Write to public directory
    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap, 'utf8');

    const totalUrls = staticRoutes.length + blogPosts.length + listings.length;
    console.log(`\n✅ Sitemap generated successfully!`);
    console.log(`   📍 Location: ${outputPath}`);
    console.log(`   📊 Total URLs: ${totalUrls}`);
    console.log(`      - Static: ${staticRoutes.length}`);
    console.log(`      - Blog Posts: ${blogPosts.length}`);
    console.log(`      - Listings: ${listings.length}\n`);
}

// Run the generator
generateSitemap().catch(console.error);
