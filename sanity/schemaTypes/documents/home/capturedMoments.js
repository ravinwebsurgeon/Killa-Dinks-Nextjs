import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'capturedMoments',
  title: 'Captured Moments',
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
      name: 'images',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'capturedMomentsCard' }]          
        }
      ],
      description: 'Optional images like Trustpilot, Recommended dimensions: 169X82px,.'
    })
  ]
});
