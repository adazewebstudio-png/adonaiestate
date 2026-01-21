import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    pathname?: string;
    schema?: any;
}

const SEO = ({ title, description, image, article, pathname, schema }: SEOProps) => {
    const defaultTitle = 'Adonai Estate Limited | Ultra Modern Living in Ho, Volta Region';
    const defaultDescription = 'Adonai Estate Limited offers litigation-free lands, property management, and ultra-modern estate living in Ho, Volta Region, Ghana. Join our golf city community.';
    const siteUrl = 'https://adonaiestateltd.com';
    const defaultImage = '/logo.jpg';
    const twitterUsername = '@adonaiestate';

    const seo = {
        title: title ? `${title} | Adonai Estate Limited` : defaultTitle,
        description: description || defaultDescription,
        image: image?.startsWith('http') ? image : `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || ''}`,
    };

    // Base Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Adonai Estate Limited",
        "alternateName": "Adonai Estate",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.jpg`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+233599007786",
            "contactType": "customer service",
            "areaServed": "GH",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://web.facebook.com/AdonaiEstateLtd",
            "https://www.instagram.com/adonaiestateltd/",
            "https://adazewebstudio.com"
        ]
    };

    // Website Schema for Search Box
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Adonai Estate Limited",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // Breadcrumb Schema for structural understanding
    const pathSegments = pathname ? pathname.split('/').filter(Boolean) : [];
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                "item": `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`
            }))
        ]
    };

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Adonai Estate Limited",
        "image": seo.image,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+233599007786",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ho - Aflao Road",
            "addressLocality": "Ho",
            "addressRegion": "Volta Region",
            "addressCountry": "GH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.6111,
            "longitude": 0.4703
        }
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <link rel="canonical" href={seo.url} />

            {/* OG Tags */}
            <meta property="og:site_name" content="Adonai Estate Limited" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content={article ? "article" : "website"} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}

            {/* Structured Data for SEO / AEO / LLMs */}
            <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
