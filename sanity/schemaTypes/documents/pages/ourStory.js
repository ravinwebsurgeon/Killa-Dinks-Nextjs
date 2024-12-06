import { defineType } from 'sanity';
export default defineType({
  name: 'ourStory',
  title: 'Our Story',
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
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },   
    {
      name: 'Image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'otherDescription',
      title: 'Description',
      type: 'text'
    },  
    {
      name: 'capturedMoments',
      title: 'Captured Moments',
      type: 'reference',
      to: [{ type: 'capturedMoments' }]
    },    
  ],

});
