import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'File types: .png',
      validation: (Rule) => Rule.required(),
    }),  
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryMenu',
      title: 'Primary Menu',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required().max(20),
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{type: 'object', fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required().max(20)},
            {name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required()}
          ]}],
          validation: (Rule) => Rule.min(1),
        }
      ]
    }),
    defineField({
      name: 'secondaryMenu',
      title: 'Secondary Menu',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required().max(20),
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{type: 'object', fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required().max(20)},
            {name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required()}
          ]}],
          validation: (Rule) => Rule.min(1),
        }
      ]
    }),
    defineField({
      name: 'tertiaryMenu',
      title: 'Tertiary Menu',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required().max(20),
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{type: 'object', fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required().max(20)},
            {name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required()}
          ]}],
          validation: (Rule) => Rule.min(1),
        }
      ]
    }),
    defineField( {
      name: 'socialMedia',
      title: 'Social Media Icons',
      type: 'array',
      of: [{type: 'object', fields: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Recommended dimensions: 16X16, File types: .jpg, .png',
          validation: (Rule) => Rule.required(),
        },
        {name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required()}
      ]}],
      validation: (Rule) => Rule.min(1),
    }),

    
  ],
});
