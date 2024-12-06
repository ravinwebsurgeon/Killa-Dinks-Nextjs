import { GoPackage } from 'react-icons/go'
import { defineField } from 'sanity'

export const collectionGroupType = defineField({
  name: 'collectionGroup',
  title: 'Collection group',
  type: 'object',
  icon: GoPackage,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collectionLinks',
      type: 'collectionLinks',
    }),
    defineField({
      name: 'collectionProducts',
      type: 'reference',
      description: 'Products from this collection will be listed',
      weak: true,
      to: [{type: 'collection'}],
    }),
  ],
})
