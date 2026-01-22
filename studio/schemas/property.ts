export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Residential land', value: 'Residential land' },
                    { title: 'Off Plan Building', value: 'Off Plan Building' },
                    { title: 'Commercial Lands', value: 'Commercial Lands' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            description: 'e.g., Serviced Plot, 3-Bedroom House, etc.',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Display Location',
            type: 'string',
            description: 'The location string shown on the card (e.g., "Airport Golf City, Ho")',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'region',
            title: 'Region',
            type: 'string',
            options: {
                list: [
                    { title: 'Greater Accra', value: 'Greater Accra' },
                    { title: 'Volta Region', value: 'Volta Region' },
                    { title: 'Eastern Region', value: 'Eastern Region' },
                ],
            },
        },
        {
            name: 'district',
            title: 'District/City',
            type: 'string',
        },
        {
            name: 'area',
            title: 'Specific Area',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price Display',
            type: 'string',
            description: 'e.g., GHS 45,000 or $12,000',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'size',
            title: 'Size/Dimensions',
            type: 'string',
            description: 'e.g., 70x100ft',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'tag',
            title: 'Status Tag',
            type: 'string',
            description: 'e.g., Selling Fast, Exclusive, Sold Out',
        },
        {
            name: 'isFeatured',
            title: 'Is Featured?',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'fullDescription',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'propertyImages',
            title: 'Property Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            options: {
                                isHighlighted: true // Makes the field easily accessible
                            }
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessiblity.',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ],
            options: {
                layout: 'grid',
            },
            description: 'Upload up to 10 images for this property.',
            validation: (Rule: any) => Rule.max(10).warning('Maximum 10 images allowed.'),
        },
        // --- Off-Plan Building Specific Fields ---
        {
            name: 'floorPlans',
            title: 'Floor Plans',
            type: 'array',
            of: [
                {
                    type: 'image',
                    title: 'Floor Plan',
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            description: 'e.g., Ground Floor',
                        }
                    ]
                }
            ],
            hidden: ({ document }: any) => document?.category !== 'Off Plan Building',
            description: 'Upload architectural floor plans (visible only for Off-Plan Buildings).',
        },
        {
            name: 'roomDimensions',
            title: 'Room Dimensions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'room', type: 'string', title: 'Room Name (e.g., Master Bedroom)' },
                        { name: 'size', type: 'string', title: 'Dimensions (e.g., 14x14ft)' }
                    ]
                }
            ],
            hidden: ({ document }: any) => document?.category !== 'Off Plan Building',
            description: 'List the dimensions for each room (visible only for Off-Plan Buildings).',
        },
        {
            name: 'features',
            title: 'Property Features',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            hidden: ({ document }: any) => document?.category !== 'Off Plan Building',
            description: 'Add key features like "En-suite", "Guest Washroom", "Porcelain Tiles" (visible only for Off-Plan Buildings).',
        },
        {
            name: 'brochure',
            title: 'Brochure / Documentation',
            type: 'file',
            hidden: ({ document }: any) => document?.category !== 'Off Plan Building',
            description: 'Upload a PDF brochure or additional documentation if available.',
        }
    ],
}
