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
       
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
       
    },
]
});
