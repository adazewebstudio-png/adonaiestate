export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }, { type: 'agent' }],
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            description: 'Select categories for this post (e.g. Real Estate, News, Tips)',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
            description: 'A comprehensive summary of the post (Target: ~250 words).',
            validation: (Rule: any) => Rule.max(1500),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                },
                {
                    name: 'gallery',
                    type: 'object',
                    title: 'Image Gallery',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            title: 'Images',
                            of: [
                                {
                                    type: 'image',
                                    options: { hotspot: true },
                                    fields: [
                                        { name: 'caption', type: 'string', title: 'Caption' },
                                        { name: 'alt', type: 'string', title: 'Alt Text' }
                                    ]
                                }
                            ],
                            options: {
                                layout: 'grid'
                            }
                        },
                        {
                            name: 'display',
                            type: 'string',
                            title: 'Display Mode',
                            options: {
                                list: [
                                    { title: 'Grid', value: 'grid' },
                                    { title: 'Carousel/Slider', value: 'carousel' }
                                ]
                            },
                            initialValue: 'grid'
                        },
                        {
                            name: 'columns',
                            type: 'number',
                            title: 'Columns (Grid Only)',
                            description: 'Number of columns in grid (1-4)',
                            initialValue: 2,
                            validation: (Rule: any) => Rule.min(1).max(4)
                        }
                    ],
                    preview: {
                        select: {
                            images: 'images',
                        },
                        prepare(selection: any) {
                            const { images } = selection;
                            return {
                                title: `Gallery with ${images?.length || 0} images`,
                                media: images?.[0],
                            };
                        },
                    },
                }
            ],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'isFeatured',
            title: 'Is Featured?',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'seo',
            title: 'SEO & Social Media',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    description: 'Optimized title for search engines (70 characters max).',
                    validation: (Rule: any) => Rule.max(70),
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    description: 'Optimized description for search results (160 characters max).',
                    validation: (Rule: any) => Rule.max(160),
                },
                {
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'reference', to: [{ type: 'keyword' }] }],
                    description: 'Select SEO keywords (e.g. Real Estate Ghana, Ho Lands, etc.)',
                },
                {
                    name: 'ogImage',
                    title: 'Social Share Image',
                    type: 'image',
                    description: 'Image displayed when sharing on social media (1200x630px recommended).',
                },
            ],
        },
    ],
}
