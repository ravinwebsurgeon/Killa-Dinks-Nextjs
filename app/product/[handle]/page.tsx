import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getMenu, getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';
import Slider from 'components/productDetails/Slider';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
    console.log( params.handle)
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };


  const menu = await getMenu('main-menu');
  const sidemenu = await getMenu('main-menu-1');
  const footerData = await getMenu('footer');

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      
      <div className="mx-auto flex flex-col bg-[#FAF7EB]  pt-8 lg:pt-[47px]  w-full overflow-hidden ">
     
      <div className=' flex justify-center  mx-2 md:mx-[20px]   xl:mx-[43px] flex-col  ' >
      
        <div className='max-w-[1920px] w-full ' >
        <div className="flex flex-col rounded-lg  gap-8    md:pt-20 lg:flex-row lg:gap-8">
          <div className="h-full lg:w-[60%]  mx-auto w-full">
            <Suspense
              fallback={
                <div className=" flex  h-full max-h-[600px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image?.url,
                  altText: image?.altText
                }))}
              />
            </Suspense>
          </div>

          <div className="mx-4  flex  lg:w-[40%] flex-col  place-self-center lg:place-self-start  w-full">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        </div>
        <div className=' ' >
        <RelatedProducts  id={product.id} />
        </div>
       
        
      </div>
     
      </div>
      <div className='bg-[#FAF7EB]'>
      <CapturedMoments />
      </div>
      <NewsLetter />
      <div className="jdgm-widget jdgm-review-widget jdgm-outside-widget" data-id={product.id.replace('gid://shopify/Product/', '')} data-product-title={product.title}></div>
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className=" flex  flex-col gap-8  mt-[80px] ">
      <div className=" text-4xl  text-center font-medium text-black">
                Related Works
            </div>
      {/* <ul className="flex w-full gap-4  pt-1"> */}
        {/* {relatedProducts.map((product) => (
          // <li
          //   key={product.handle}
          //   className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          // >
          //   <Link
          //     className="relative h-full w-full"
          //     href={`/product/${product.handle}`}
          //     prefetch={true}
          //   >
          //     <GridTileImage
          //       alt={product.title}
          //       label={{
          //         title: product.title,
          //         amount: product.priceRange.maxVariantPrice.amount,
          //         currencyCode: product.priceRange.maxVariantPrice.currencyCode
          //       }}
          //       src={product.featuredImage?.url}
          //       fill
          //       sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
          //     />
          //   </Link>
          // </li>
          <Card product={product}/>
        ))} */}
        <Slider relatedProducts={relatedProducts}/>

      {/* </ul> */}
      
    </div>
  );
}