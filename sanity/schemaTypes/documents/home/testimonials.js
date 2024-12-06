import { defineType } from 'sanity';
export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
]
});
