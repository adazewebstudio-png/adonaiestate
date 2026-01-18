export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) => Rule.required().email(),
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{ type: 'post' }],
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments won't show on the site until you approve them.",
            initialValue: false,
        },
    ],
    preview: {
        select: {
            name: 'name',
            comment: 'comment',
            post: 'post.title',
        },
        prepare(selection: any) {
            const { name, comment, post } = selection
            return {
                title: `${name} on ${post}`,
                subtitle: comment,
            }
        },
    },
}
