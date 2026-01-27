export default {
    name: 'sellRequest',
    title: 'Sell Land Requests',
    type: 'document',
    fields: [
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'In Progress', value: 'in-progress' },
                    { title: 'Closed', value: 'closed' }
                ],
                layout: 'radio'
            },
            initialValue: 'new'
        },
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'middleName',
            title: 'Middle Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'boughtFromUs',
            title: 'Bought From Adonai?',
            type: 'string',
            options: {
                list: [
                    { title: 'Yes', value: 'yes' },
                    { title: 'No', value: 'no' }
                ]
            }
        },
        // Fields for "Yes" (Bought from us)
        {
            name: 'siteLocation',
            title: 'Site Location',
            type: 'string',
            hidden: ({ document }: any) => document?.boughtFromUs !== 'yes'
        },
        {
            name: 'plotNumbers',
            title: 'Plot Number(s)',
            type: 'string',
            hidden: ({ document }: any) => document?.boughtFromUs !== 'yes'
        },
        {
            name: 'purchasePrice',
            title: 'Purchase Price',
            type: 'string',
            hidden: ({ document }: any) => document?.boughtFromUs !== 'yes'
        },
        {
            name: 'yearOfPurchase',
            title: 'Year of Purchase',
            type: 'string',
            hidden: ({ document }: any) => document?.boughtFromUs !== 'yes'
        },

        // Fields for "No" (Bought elsewhere)
        {
            name: 'landLocation',
            title: 'Land Location',
            type: 'string',
            hidden: ({ document }: any) => document?.boughtFromUs !== 'no'
        },

        // Shared fields
        {
            name: 'numberOfPlots',
            title: 'Number of Plots',
            type: 'string'
        },
        {
            name: 'sellingPrice',
            title: 'Proposed Selling Price',
            type: 'string'
        },
        {
            name: 'registrationStatus',
            title: 'Registration Status',
            type: 'string'
        },
        {
            name: 'additionalInfo',
            title: 'Additional Information',
            type: 'text'
        }
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            location: 'siteLocation',
            altLocation: 'landLocation',
            status: 'status'
        },
        prepare(selection: any) {
            const { firstName, lastName, location, altLocation, status } = selection;
            return {
                title: `${firstName} ${lastName}`,
                subtitle: `${location || altLocation || 'Unknown Location'} • ${status?.toUpperCase()}`
            }
        }
    }
}
