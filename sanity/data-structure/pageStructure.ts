import { DocumentsIcon } from '@sanity/icons';
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';
import ambassador from './ambassadorStructure';
import ourStory from './ourStoryStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .icon(DocumentsIcon)
    .child(
      S.list()  // Create a list of pages and shop sections
        .title('All Pages')
        .items([
          ourStory(S),
          S.divider(),
          ambassador(S)
          // product(S), // Add the Shop section here

        ])
    )
);
