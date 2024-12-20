'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useActionState, useContext, useState } from 'react';
import { useCart } from './cart-context';
import { ModalContext} from '../../app/context/Context'

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {

  const context = useContext(ModalContext);
  const { setInitialRender}= context;

  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-lg  bg-[#BBA887] text-[white] hover:text-[#BBA887] hover:bg-white border border-[#BBA887] p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          {/* <PlusIcon className="h-5" /> */}
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
      })}
      onClick={()=>setInitialRender(true)}
    >
      <div className="absolute left-0 ml-4">
        {/* <PlusIcon className="h-5" /> */}
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({ product,productQuantity,attributes, }: { product: Product,productQuantity:any,attributes?:any }) {

 
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  // console.log(product, 'add')
  
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  
  const actionWithVariant = formAction.bind(null,  {selectedVariantId:selectedVariantId,productQuantity:productQuantity, attributes: attributes });
  // const actionWithVariant = formAction.bind(null,  {selectedVariantId:selectedVariantId,productQuantity:productQuantity});
  // console.log(product)

  // console.log(selectedVariantId,productQuantity)
  // console.log(attributes)

  const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;
  
 
  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product,productQuantity);
        
        await actionWithVariant();
      }}
    >
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
