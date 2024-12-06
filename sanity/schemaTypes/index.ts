import { productVariantType } from './documents/productVariant';
import { collectionGroupType } from './objects/collection/collectionGroupType';
import { collectionLinksType } from './objects/collection/collectionLinksType';
import { customProductOptionColorObjectType } from './objects/customProductOption/customProductOptionColorObjectType';
import { customProductOptionColorType } from './objects/customProductOption/customProductOptionColorType';
import { customProductOptionSizeObjectType } from './objects/customProductOption/customProductOptionSizeObjectType';
import { customProductOptionSizeType } from './objects/customProductOption/customProductOptionSizeType';
import { footerType } from './objects/global/footerType';
import { menuLinksType } from './objects/global/menuLinksType';
import { menuType } from './objects/global/menuType';
import { notFoundPageType } from './objects/global/notFoundPageType';
import { imageWithProductHotspotsType } from './objects/hotspot/imageWithProductHotspotsType';
import { productHotspotsType } from './objects/hotspot/productHotspotsType';
import { spotType } from './objects/hotspot/spotType';
import { linkEmailType } from './objects/link/linkEmailType';
import { linkExternalType } from './objects/link/linkExternalType';
import { linkInternalType } from './objects/link/linkInternalType';
import { linkProductType } from './objects/link/linkProductType';
import { accordionGroupType } from './objects/module/accordionGroupType';
import { accordionType } from './objects/module/accordionType';
import { calloutType } from './objects/module/calloutType';
import { callToActionType } from './objects/module/callToActionType';
import { collectionReferenceType } from './objects/module/collectionReferenceType';
import { gridItemType } from './objects/module/gridItemType';
import { gridType } from './objects/module/gridType';
import { heroType } from './objects/module/heroType';
import { imageCallToActionType } from './objects/module/imageCallToActionType';
import { imageFeaturesType } from './objects/module/imageFeaturesType';
import { imageFeatureType } from './objects/module/imageFeatureType';
import { productFeaturesType } from './objects/module/productFeaturesType';
import { productReferenceType } from './objects/module/productReferenceType';
import { seoType } from './objects/seoType';
import { collectionRuleType } from './objects/shopify/collectionRuleType';
import { inventoryType } from './objects/shopify/inventoryType';
import { optionType } from './objects/shopify/optionType';
import { placeholderStringType } from './objects/shopify/placeholderStringType';
import { priceRangeType } from './objects/shopify/priceRangeType';
import { productWithVariantType } from './objects/shopify/productWithVariantType';
import { proxyStringType } from './objects/shopify/proxyStringType';
import { shopifyCollectionType } from './objects/shopify/shopifyCollectionType';
import { shopifyProductType } from './objects/shopify/shopifyProductType';
import { shopifyProductVariantType } from './objects/shopify/shopifyProductVariantType';
import { homeType } from './singletons/homeType';
import { settingsType } from './singletons/settingsType';
// Objects used as annotations must be imported first
const annotations = [linkEmailType, linkExternalType, linkInternalType, linkProductType, productVariantType];

const objects = [
  accordionGroupType,
  accordionType,
  calloutType,
  callToActionType,
  collectionGroupType,
  collectionLinksType,
  collectionReferenceType,
  collectionRuleType,
  customProductOptionColorObjectType,
  customProductOptionColorType,
  customProductOptionSizeObjectType,
  customProductOptionSizeType,
  footerType,
  gridItemType,
  gridType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  imageWithProductHotspotsType,
  inventoryType,
  menuLinksType,
  menuType,
  notFoundPageType,
  optionType,
  placeholderStringType,
  priceRangeType,
  productFeaturesType,
  productHotspotsType,
  productReferenceType,
  productWithVariantType,
  proxyStringType,
  seoType,
  shopifyCollectionType,
  shopifyProductType,
  shopifyProductVariantType,
  spotType
];

import { portableTextSimpleType } from './portableText/portableTextSimpleType';
import { portableTextType } from './portableText/portableTextType';

const blocks = [portableTextType, portableTextSimpleType];

import { collectionType } from './documents/collection';
import footer from './documents/footer';
import header from './documents/header';
import animationHero from './documents/home/animationHero';
import capturedMoments from './documents/home/capturedMoments';
import capturedMomentsCard from './documents/home/capturedMomentsCard';
import featuredColletion from './documents/home/featuredColletion';
import newsletter from './documents/home/newsletter';
import ourWork from './documents/home/ourWork';
import perfectPaddle from './documents/home/perfectPaddle';
import testimonials from './documents/home/testimonials';
import { pageType } from './documents/page';
import { productType } from './documents/product';
import { globalType } from './singletons/globalTypes';
const documents = [collectionType, pageType, productType];

const singletons = [homeType, settingsType, globalType];

export const schemaTypes = [
  testimonials,
  animationHero,
  ourWork,
  perfectPaddle,
  featuredColletion,
  capturedMoments,
  capturedMomentsCard,
  newsletter,  
  header,
  footer,
  ...annotations,
  ...objects,
  ...singletons,
  ...blocks,
  ...documents
];
