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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}
