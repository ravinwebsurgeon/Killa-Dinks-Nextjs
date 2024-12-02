import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

import { Suspense } from 'react';
import Navbar from 'components/productDetails/Navbar';
import Slider from 'components/productDetails/Slider';
import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';
import Footerx from 'components/homepage/Footerx';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;

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
  console.log(product)

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

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      
      <div className="mx-auto bg-[#FAF7EB] lg:pt-[47px]  w-full overflow-hidden ">
      <div className='  ' >
      <Navbar/>
        <div className='max-w-[1920px] mx-2 md:mx-[20px]   xl:mx-[43px]' >
        <div className="flex flex-col rounded-lg  gap-8  justify-center     pt-10 lg:flex-row lg:gap-8">
          <div className="h-full lg:w-[60%]  mx-auto w-full">
            <Suspense
              fallback={
                <div className=" flex  h-full max-h-[600px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
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
        <RelatedProducts  id={product.id} />
        <CapturedMoments />
        <NewsLetter />
      </div>
      </div>
      
      <Footerx/>
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="max-w-[1920px] flex flex-col gap-8 mt-[80px] mx-2 md:mx-[20px]   xl:mx-[43px]">
      <div className=" text-4xl  text-center font-medium text-black">
                Related Works
            </div>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
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
      </ul>
    </div>
  );
}
