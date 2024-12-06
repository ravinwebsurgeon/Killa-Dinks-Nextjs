import { ListItemBuilder } from 'sanity/structure';
import { getPreviewUrl, previewPane } from '../components/PreviewPane';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Global Sections')
    .schemaType('Global')
    .child(
      S.documentTypeList('Global')
        .title('Global')
        .child((id) =>
          S.document()
            .schemaType('Global')
            .documentId(id)
            .views([
              S.view.form(),
              previewPane(S).options({
                url: (doc: { store: { slug: { current: any; }; }; }) => {
                  const slug = doc?.store.slug?.current; // Adjust based on your schema
                  return getPreviewUrl('Global', slug);
                },
                reload: { button: true },
              }),
            ])
        )
    )
);