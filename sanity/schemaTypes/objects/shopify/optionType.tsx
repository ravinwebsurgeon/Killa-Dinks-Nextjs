import { GoSun } from 'react-icons/go'
import { defineField } from 'sanity'

export const optionType = defineField({
  title: 'Product option',
  name: 'option',
  type: 'object',
  icon: GoSun,
  readOnly: true,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'values',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({name}) {
      return {
        title: name,
      }
    },
  },
})
