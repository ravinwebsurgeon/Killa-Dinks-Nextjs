import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import { getPreviewUrl, previewPane } from '../components/PreviewPane';

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
                url: (doc) => {
                  const slug = doc?.store.slug?.current; // Adjust based on your schema
                  return getPreviewUrl('collection', slug);
                },
                reload: { button: true },
              }),
            ])
        )
    )
);