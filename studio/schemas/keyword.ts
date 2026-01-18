export default {
    name: 'keyword',
    title: 'SEO Keyword',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Keyword/Tag',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
}
