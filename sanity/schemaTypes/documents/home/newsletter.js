import { defineType } from 'sanity';
export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Heading',
      type: 'string',
       
    }  
  ]
});
