import { DocumentIcon } from '@sanity/icons';
import { getPreviewUrl, previewPane } from '../components/PreviewPane';

const ourStory = (S: any) =>
  S.listItem()
    .title('Our Story')
    .icon(DocumentIcon)
    .child(
      S.document()
        .schemaType('ourStory') // Ensure this matches your schema type
        .documentId('ourStory')
        .views([
          S.view.form(),
          previewPane(S).options({
            url: getPreviewUrl('our-story'),
            reload: { button: true },
          })
        ]) 
    );

export default ourStory;
