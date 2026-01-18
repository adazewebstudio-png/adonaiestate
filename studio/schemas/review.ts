export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'agent',
            title: 'Agent',
            type: 'reference',
            to: [{ type: 'agent' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'text',
            title: 'Review Text',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(1).max(5),
        },
    ],
}
