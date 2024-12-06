import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'perfectPaddle',
  title: 'Design Your Perfect Paddle',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Heading',
      type: 'string',
       
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
       
    },
    {
      name: 'image',
      title: 'Left Image',
      type: 'image',
      description: 'Left Side Image. dimensions 640X665px',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    },
    defineField({
      name: 'images',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ]
            },
            {
              name: 'headline',
              title: 'Heading',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Sescription',
              type: 'string'
            }
          ]
        }
      ],

    }),
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string'
    },
    { name: 'buttonLink', title: 'Button Link', type: 'string' }
  ]
});
