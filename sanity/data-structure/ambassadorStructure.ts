import { UsersIcon } from '@sanity/icons';
import { getPreviewUrl, previewPane } from '../components/PreviewPane';

const ambassador = (S: any) =>
  S.listItem()
    .title('Join the Team! (Ambassador)')
    .icon(UsersIcon)
    .child(
      S.document()
        .schemaType('ambassador') // Ensure this matches your schema type
        .documentId('ambassador')
        .views([
          S.view.form(),
          previewPane(S).options({
            url: getPreviewUrl('ambassador'),
            reload: { button: true },
          })
        ]) 
    );

export default ambassador;
