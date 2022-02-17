export default {
    name: 'club',
    title: 'Club',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'type',
            title: 'type',
            type: 'reference',
            to: { type: 'clubtype' },
        },
        {
            name: 'web',
            title: 'Web site',
            type: 'url',
        },
        {
          name: 'logo',
          title: 'Club Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
    ],
}
