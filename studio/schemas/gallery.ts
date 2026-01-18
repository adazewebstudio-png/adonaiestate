export default {
    name: 'gallery',
    title: 'Gallery',
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
                    { title: 'Commissioning of Police Station', value: 'Commissioning of Police Station' },
                    { title: 'Golf City restaurant Launch', value: 'Golf City restaurant Launch' },
                    { title: 'NOWA 2020', value: 'NOWA 2020' },
                    { title: 'Airport Golf City', value: 'Airport Golf City' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
}
