
import { InfoOutlineIcon } from '@sanity/icons';
import { ListItemBuilder } from 'sanity/structure';
import { getPreviewUrl, previewPane } from '../components/PreviewPane';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .schemaType('product')
    .child(
      S.documentTypeList('product')
        .filter('_type == "product" && !store.isDeleted')
        .child((id) =>
          S.list()
            .title('Product')
            .items([
              // Product Details
              S.listItem()
                .title('Details')
                .icon(InfoOutlineIcon)
                .schemaType('product')
                .id(id)
                .child(S.document().schemaType('product').documentId(id)
                  .views([
                    S.view.form(),
                    previewPane(S).options({
                      url: (doc: { store: { slug: { current: any; }; }; }) => {
                        const slug = doc?.store.slug?.current;
                        return getPreviewUrl('product', slug);
                      },
                      reload: { button: true },
                    })
                  ])
                ),

              // Product Variants
              S.listItem()
                .title('Variants')
                .schemaType('productVariant')
                .child(
                  S.documentList()
                    .title('Variants')
                    .schemaType('productVariant')
                    .filter(`
                      _type == "productVariant" &&
                      store.productId == ${id.split('-')[1]}
                    `)

                    .apiVersion('v2023-08-28')
                ),
            ])
        )
    )
);
