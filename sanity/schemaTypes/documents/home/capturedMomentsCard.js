import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'capturedMomentsCard',
  title: 'Media',
  type: 'document',
  fields: [
    {
        name: 'text',
        title: 'Images',
        type: 'string',
        initialValue:'Images and Videos',
        hidden:true 
      }, 
    defineField({
      name: 'images',
      title: 'Images',
      // validation: max(5),
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
                name: 'text',
                title: 'Images',
                type: 'string',
                initialValue:'Images and Videos',
                hidden:true 
              }, 
              {
                name: 'mediaType',
                title: 'Media Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Image', value: 'image' },
                    { title: 'Video', value: 'video' },
                  ],
                  layout: 'radio', // to display as radio buttons
                },
                initialValue: 'image',
                validation: Rule => Rule.required(),
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
              
                hidden: ({ parent }) => parent.mediaType !== 'image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                  },
                ],
                description: 'All images file accepted.',
              },
              {
                name: 'video',
                title: 'Video',
                type: 'file',
                hidden: ({ parent }) => parent.mediaType !== 'video',
                options: {
                  accept: 'video/mp4',
                },
                description: ' Max size: 50MB. Accepted file types: mp4.',
              },
          ]
        }
      ],
    })
  ]
});
