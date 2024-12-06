import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'ourWork',
  title: 'Our Work',
  type: 'document',
  fields: [
    {
        name: 'text',
        title: 'Heading',
        type: 'string',
        validation: Rule =>
          Rule.max(80).warning('Text should be less than 80 characters')
      }, 
      {
        name: 'subHeading',
        title: 'Sub Heading',
        type: 'string',
        validation: Rule =>
          Rule.max(80).warning('Text should be less than 80 characters')
      }, 
      defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'object', fields: [
          {name: 'image', title: 'Image', type: 'image', options: {hotspot: true},   fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ]},
          {
            name: 'headline',
            title: 'Heading',
            type: 'string',
        },
          {name: 'url', title: 'URL', type: 'string'},
        ]}]
      }),
  ],

});
