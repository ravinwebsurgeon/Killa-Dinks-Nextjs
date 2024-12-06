import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'
import {getPreviewUrl, previewPane} from '../components/PreviewPane';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .child(S.editor().title('Home').schemaType('home').documentId('home').views([
      S.view.form(),
      previewPane(S).options({
        url: getPreviewUrl('home'),
        reload: { button: true },
      })
    ]))
)
