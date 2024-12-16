// schemas/header.js

import { GoHeading } from "react-icons/go";
export default {
    name: 'header',
    title: 'Header',
    icon: GoHeading,
    type: 'document',
    fields: [
     {
        name: 'title',
        title: 'Title',
        type: 'string',
        hidden:true
      },
      {
        name: 'logo',
        title: 'Logo Image',
        type: 'image',
        description: 'This field is required to ensure your logo is displayed correctly across the site.',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      },
      {
        title: 'Show Account',
        name: 'account',
        type: 'boolean'
      },
      {
        title: 'Show Cart',
        name: 'cart',
        type: 'boolean'
      }
    ] 
  };
  