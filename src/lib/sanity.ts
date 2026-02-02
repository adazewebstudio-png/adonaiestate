import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Type for Sanity image source (asset reference or image object)
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0];

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'w50u4jfs',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true, // Use CDN for production speed
    apiVersion: '2023-05-03',
    token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
