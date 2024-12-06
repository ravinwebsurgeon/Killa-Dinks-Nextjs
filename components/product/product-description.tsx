import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import Counter from 'components/productDetails/Counter';
import Accordion from 'components/productDetails/Accordion';

export function ProductDescription({ product }: { product: Product }) {

  const items=[
    {title:'Description',
    content:product.descriptionHtml ||null},
    {
      title:'Material',
      content:'100% breathable poly mesh fabric'
    },
    {
      title:'Shipping',
      content:'This is a limited edition collaboration and ALL SALES ARE FINAL!'
    }
  ]
  
  return (
    <div className='flex flex-col gap-4' >
      <div className=" flex flex-col  gap-2 ">
        <h1 className=" text-4xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            className='text-2xl font-[500] text-[#9c8c70]'
          />
        </div>
      </div>
      <div className='text-xs xl:text-sm text-yellow-900/70' >Shipping calculated at checkout.</div>
      <VariantSelector options={product.options} variants={product.variants} />
      <Counter/>
      <AddToCart product={product} />
      {/* {product.descriptionHtml ? (
        <Prose
          className=" text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null} */}

      <Accordion  items={items}/>

      
    </div>
  );
}
