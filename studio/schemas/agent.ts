export default {
    name: 'agent',
    title: 'Agent',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'experience',
            title: 'Experience',
            type: 'string',
        },
        {
            name: 'specialization',
            title: 'Specialization',
            type: 'string',
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'facebook',
            title: 'Facebook URL',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        },
        {
            name: 'website',
            title: 'Personal/Business Website',
            type: 'url',
        },
    ],
}
