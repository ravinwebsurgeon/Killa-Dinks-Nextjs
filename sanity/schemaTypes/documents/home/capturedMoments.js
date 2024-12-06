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
      validation: (Rule) => Rule.max(80).warning('Text should be less than 80 characters')
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      validation: (Rule) => Rule.max(80).warning('Text should be less than 80 characters')
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
      validation: (Rule) => Rule.max(3),
      description: 'Optional images like Trustpilot, Recommended dimensions: 169X82px,.'
    })
  ]
});
