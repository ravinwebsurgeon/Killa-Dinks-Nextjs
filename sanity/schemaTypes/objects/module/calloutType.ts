import { GoLightBulb } from 'react-icons/go'
import { defineField } from 'sanity'

export const calloutType = defineField({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon: GoLightBulb,
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      rows: 2,
      validation: (Rule) => [
        Rule.required(),
        Rule.max(70).warning(`Callout length shouldn't be more than 70 characters.`),
      ],
    }),
    defineField({
      name: 'link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      text: 'text',
    }
  },
})