import { defineType } from 'sanity';


export default defineType({
  name: 'popup',
  title: 'PopUp Modal',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    //   validation: (Rule) => Rule.max(25).warning('Text should be less than 25 characters')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    //   validation: (Rule) => Rule.max(80).warning('Text should be less than 50 characters')
    },
    {
      name: 'additional',
      title: 'Additional',
      type:'string',
    //   validation: (Rule) => Rule.max(50).warning('Text should be less than 50 characters')
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string'
    },
    {
      name: 'buttonLink',
      title: 'button Link',
      type: 'string'
    },
    {
      name: 'image',
      title: ' Popup Image',
      type: 'image',
    }
  ]
});
