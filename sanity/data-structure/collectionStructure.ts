import { ListItemBuilder } from 'sanity/structure';
import { getPreviewUrl, previewPane } from '../components/PreviewPane';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Collections')
    .schemaType('collection')
    .child(
      S.documentTypeList('collection')
        .title('Collections')
        .child((id) =>
          S.document()
            .schemaType('collection')
            .documentId(id)
            .views([
              S.view.form(),
              previewPane(S).options({
                url: (doc: { store: { slug: { current: any; }; }; }) => {
                  const slug = doc?.store.slug?.current; // Adjust based on your schema
                  return getPreviewUrl('collection', slug);
                },
                reload: { button: true },
              }),
            ])
        )
    )
);