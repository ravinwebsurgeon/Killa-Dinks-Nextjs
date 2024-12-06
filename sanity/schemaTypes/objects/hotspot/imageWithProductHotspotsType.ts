import pluralize from 'pluralize-esm'
import { GoImage } from 'react-icons/go'
import { defineField } from 'sanity'

export const imageWithProductHotspotsType = defineField({
  icon: GoImage,
  name: 'imageWithProductHotspots',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      options: {hotspot: true},
      type: 'image',
      validation: (Rule) => Rule.required(),
      // Hide original image when showHotspots is true and an image is set
      hidden: ({value, parent}) => parent.showHotspots && value,
    }),
    defineField({
      name: 'showHotspots',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'productHotspots',
      type: 'productHotspots',
      hidden: ({parent}) => !parent.showHotspots,
    }),
  ],
  preview: {
    select: {
      fileName: 'image.asset.originalFilename',
      hotspots: 'productHotspots',
      image: 'image',
      showHotspots: 'showHotspots',
    },
    prepare({fileName, hotspots, image, showHotspots}) {
      return {
        media: image,
        subtitle:
          showHotspots && hotspots.length > 0
            ? `${pluralize('hotspot', hotspots.length, true)}`
            : undefined,
        title: fileName,
      }
    },
  },
})
