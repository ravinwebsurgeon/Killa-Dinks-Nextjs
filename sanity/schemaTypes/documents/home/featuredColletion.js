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
       
    },

    {
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }]
    },
    
  ]
});
