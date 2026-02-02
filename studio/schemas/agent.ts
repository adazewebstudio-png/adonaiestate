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
            description: 'e.g., "4+ Years"',
        },
        {
            name: 'specialization',
            title: 'Specialization',
            type: 'string',
            description: 'e.g., "Real Estate Marketing"',
        },
        // Statistics Fields
        {
            name: 'satisfiedClients',
            title: 'Satisfied Clients',
            type: 'number',
            description: 'Number of satisfied clients to display (e.g., 3)',
            initialValue: 0,
        },
        {
            name: 'dealsClosed',
            title: 'Deals Closed',
            type: 'number',
            description: 'Number of land deals closed (e.g., 5)',
            initialValue: 0,
        },
        {
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
            description: 'A brief summary for cards and previews.',
        },
        {
            name: 'fullBio',
            title: 'Full Bio (Paragraphs)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add multiple text blocks for the detailed biography.',
        },
        {
            name: 'status',
            title: 'Status Badge',
            type: 'string',
            description: 'e.g., "Verified Company Representative"',
        },
        {
            name: 'responsibilities',
            title: 'Key Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key responsibilities (bullet points).',
        },
        {
            name: 'founderNote',
            title: 'Founder / System Note',
            type: 'text',
            rows: 4,
            description: 'Special note or quote (e.g., A Note on Systems).',
        },
        // Contact Fields
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            description: 'e.g., +233 599 007 786',
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp Number',
            type: 'string',
            description: 'Numbers only for wa.me link, e.g., 233599007786',
        },
        // Social Links
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
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'profileImage',
        },
    },
}
