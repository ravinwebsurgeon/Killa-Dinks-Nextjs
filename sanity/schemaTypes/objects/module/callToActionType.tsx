import { GoBlocked, GoImage } from 'react-icons/go'
import { defineArrayMember, defineField } from 'sanity'

export const callToActionType = defineField({
  name: 'callToAction',
  title: 'Call to action',
  type: 'object',
  icon: GoBlocked,
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy',
    },
  ],
  fields: [
    defineField({
      name: 'layout',
      type: 'string',
      initialValue: 'left',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Content / Copy',
            value: 'left',
          },
          {
            title: 'Copy / Content',
            value: 'right',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'copy',
    }),
    defineField({
      name: 'portableText',
      type: 'text',
      rows: 2,
      fieldset: 'copy',
    }),
    defineField({
      name: 'link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
      fieldset: 'copy',
    }),
    defineField({
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.required().max(1),
      of: [
        defineArrayMember({
          icon: GoImage,
          type: 'image',
          options: {hotspot: true},
        }),
        defineArrayMember({
          name: 'productWithVariant',
          type: 'productWithVariant',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: 'Call to action',
        title,
      }
    },
  },
})
