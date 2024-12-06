import { defineType } from 'sanity';
export default defineType({
  name: 'featuredColletion',
  title: 'Featured Colletion',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.max(80).warning('Text should be less than 80 characters')
    },

    {
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }]
    },
    
  ]
});
