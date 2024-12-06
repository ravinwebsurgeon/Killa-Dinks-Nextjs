import { ColorWheelIcon, ComposeIcon, DocumentIcon, SearchIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import ShopifyIcon from '../../components/icons/Shopify'
import { validateSlug } from '../../utils/validateSlug'

export const pageType = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme',
      icon: ColorWheelIcon,
    },
    {
      default: false,
      name: 'editorial',
      title: 'Editorial',
      icon: ComposeIcon
    },
    {
      name: 'shopifySync',
      title: 'Shopify sync',
      icon: ShopifyIcon,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: SearchIcon
    },
  ],
  fields: [
    defineField({
      name: 'title',
      group: 'editorial',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      group: 'editorial',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
    }),    

  ],
  preview: {
    select: {
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare({seoImage, title}) {
      return {
        media: seoImage ?? DocumentIcon,
        title,
      }
    },
  },
})
