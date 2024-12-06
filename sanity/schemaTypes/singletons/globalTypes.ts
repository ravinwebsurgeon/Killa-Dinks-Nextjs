import { BlockElementIcon } from '@sanity/icons'
import { defineType } from 'sanity'
import { GROUPS } from 'sanity/constants'

const TITLE = 'Global'
interface ProductOptions {
  title: string
}

export const globalType = defineType({
  name: 'Global',
  title: TITLE,
  type: 'document',
  icon: BlockElementIcon,
  groups: GROUPS,
  fields: [   
    {
        name: 'capturedMoments',
        title: 'Captured Moments',
        type: 'reference',
        to: [{ type: 'capturedMoments' }]
      },   
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
