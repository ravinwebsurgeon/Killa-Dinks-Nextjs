import { BlockElementIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import { GROUPS } from '../../constants';

const TITLE = 'Global';

export const globalType = defineType({
  name: 'Global',
  title: TITLE,
  type: 'document',
  icon: BlockElementIcon,
  groups: GROUPS,
  fields: [
    {
      name: 'capturedMoments',
      title: 'Captured Moments',
      type: 'reference',
      to: [{ type: 'capturedMoments' }]
    },
    {
      name: 'popup',
      title: 'PopUp',
      type: 'reference',
      to: [{type: 'popup'}]
    }
  ],
  preview: {
    prepare() {
      return {
        title: TITLE
      };
    }
  }
});
