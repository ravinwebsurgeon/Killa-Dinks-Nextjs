import { Iframe } from 'sanity-plugin-iframe-pane'
import { MdOutlinePreview } from "react-icons/md";

export function getPreviewUrl(docType, slug) {
  if (docType === 'utility-pages') {
    return `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview/utility-pages/${slug}`;
  }
  if (docType === 'product-page') {
    return `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview/product-page/popdarts-original-glow-set-blue-green-slightly-used-returned-copy`;
  }
  if (docType === 'product') {
    return `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview/product-page/${slug}`;
  }
  if (docType === 'collection') {
    return `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview/collection/${slug}`;
  }
  return docType
    ? `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview/${docType}`
    : `${process.env.SANITY_STUDIO_NEXT_PUBLIC_BASE_URL}/preview`;
}

export const previewPane = (S) => {
  return S.view
    .component(Iframe)
    .title('Preview')
    .icon(MdOutlinePreview)
};
