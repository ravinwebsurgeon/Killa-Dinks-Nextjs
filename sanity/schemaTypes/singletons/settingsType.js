import { CogIcon } from '@sanity/icons'
import { defineType } from 'sanity'

const TITLE = 'Settings'

export const settingsType = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  fields: [   
    {
      name: 'header',
      title: 'Header',
      type: 'reference',
      to: [{ type: 'header' }]
    },
    
    {
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{ type: 'footer' }]
    }   
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
