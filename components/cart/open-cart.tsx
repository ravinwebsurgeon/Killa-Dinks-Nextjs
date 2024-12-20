import cart from '../../public/assets/cart.png';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md  border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      {/* <ShoppingCartIcon
        className={clsx('', className)}
      /> */}
      <img src={cart.src} alt="Cart" className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]" />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
