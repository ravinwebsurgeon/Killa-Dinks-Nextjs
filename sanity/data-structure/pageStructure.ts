import { DocumentsIcon } from '@sanity/icons';
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .icon(DocumentsIcon)
    .child(
      S.list()  // Create a list of pages and shop sections
        .title('All Pages')
        .items([
          // product(S), // Add the Shop section here

        ])
    )
);
