import { defineType } from 'sanity';
export default defineType({
  name: 'animationHero',
  title: 'Hero Section',
  type: 'document',  
  fields: [
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'Image' }
        ],
        layout: 'radio', 
      },
      initialValue: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'Image',
      title: 'Image',
      type: 'image',    
      hidden: ({ parent }) => parent.mediaType !== 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      description: 'All images file accepted. Recommended dimensions: 1824X875px.',
    }   
  ],

});
