import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'ambassador',
  title: 'Join the Team! (Ambassador)',
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
      name: 'description',
      title: 'Description',
      type: 'text'
    },   
    {
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string'
      },
      { name: 'buttonLink', title: 'Button Link', type: 'string' },
      { name: 'textfield', title: 'Additional Text', type: 'string' },
      {
        name: 'loginbuttonLabel',
        title: 'Button Label',
        type: 'string'
      },
      { name: 'loginbuttonLink', title: 'Button Link', type: 'string' },
      defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
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
              }
        ],

      }),
  ],

});
