import {defineField, defineType } from 'sanity';
export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
     defineField({
          name: 'reviews',
          title: 'Reviews',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text'
                    }
                  ]
                },
                {
                  name: 'Title',
                  title: 'Title',
                  type: 'string'
                },
                {
                  name: 'Description',
                  title: 'Description',
                  type: 'string'
                },
                {
                  name: 'Reviewer',
                  title: 'Reviewer Name',
                  type: 'string'
                }
              ]
            }
          ],
    
        })
]
});
