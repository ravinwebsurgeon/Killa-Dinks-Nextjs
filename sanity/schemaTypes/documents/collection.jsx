
import pluralize from 'pluralize-esm'
import { GoPackage } from 'react-icons/go'
import { defineField, defineType } from 'sanity'
import CollectionHiddenInput from '../../components/inputs/CollectionHidden'
import ShopifyDocumentStatus from '../../components/media/ShopifyDocumentStatus'
import { GROUPS } from '../../constants'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: GoPackage,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: CollectionHiddenInput,
      },
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted
        return !isDeleted
      },
    }),
 
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync',
    }),

  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{ field: 'store.title', direction: 'asc' }],
    },
    {
      name: 'titleDesc',
      title: 'Title (Z-A)',
      by: [{ field: 'store.title', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      imageUrl: 'store.imageUrl',
      isDeleted: 'store.isDeleted',
      rules: 'store.rules',
      title: 'store.title',
    },
    prepare({ imageUrl, isDeleted, rules, title }) {
      const ruleCount = rules?.length || 0

      return {
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            type="collection"
            url={imageUrl}
            title={title}
          />
        ),
        subtitle: ruleCount > 0 ? `Automated (${pluralize('rule', ruleCount, true)})` : 'Manual',
        title,
      }
    },
  },
})
