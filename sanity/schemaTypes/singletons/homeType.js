import { HomeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { GROUPS } from '../../constants'

const TITLE = 'Home'

export const homeType = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    {
      name: 'animationHero',
      title: 'Hero Section',
      type: 'reference',
      to: [{ type: 'animationHero' }]
    },  
    {
      name: 'ourWork',
      title: 'Our Work',
      type: 'reference',
      to: [{ type: 'ourWork' }]
    }, 
    {
      name: 'perfectPaddle',
      title: 'Perfect Paddle',
      type: 'reference',
      to: [{ type: 'perfectPaddle' }]
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }]
    },  
    {
      name: 'featuredColletion',
      title: 'Featured Colletion',
      type: 'reference',
      to: [{ type: 'featuredColletion' }]
    }, 
    {
      name: 'capturedMoments',
      title: 'Captured Moments',
      type: 'reference',
      to: [{ type: 'capturedMoments' }]
    },  
    {
      name: 'newsletter',
      title: 'Newsletter',
      type: 'reference',
      to: [{ type: 'newsletter' }]
    },  

  ],
  preview: {
    prepare() {
      return {
        media: HomeIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
