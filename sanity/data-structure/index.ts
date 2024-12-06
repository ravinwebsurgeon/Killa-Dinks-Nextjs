import { ListItemBuilder, StructureResolver } from 'sanity/structure';
import collections from './collectionStructure';
import global from './globalStructure';
import home from './homeStructure';
import pages from './pageStructure';
import products from './productStructure';
import settings from './settingStructure';
// import productDetail from './productPageStructure'

/**
 * Structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schema types progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId() || null

  if (!id) {
    return false
  }

  return [
    // 'collection',
    // 'home',
    // 'media.tag',
    // 'page',
    // 'product',
    // 'productVariant',
    'shop'
    // 'settings',
    // 'reviewsComponent',
  ]?.includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      collections(S, context),
      products(S, context),
      S.divider(),
      global(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
    ])
