import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  console.log(products,'hello')
  const filterIds = ['gid://shopify/Product/9910961406257', 'gid://shopify/Product/9904468689201', 'gid://shopify/Product/9226445848881']; // Replace with your actual IDs
  const filteredProducts = products.filter((product) => !filterIds.includes(product.id));
  console.log(filteredProducts)
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
    
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {filteredProducts.length > 0 ? (
        <Grid className="  collection-cards w-full place-content-center lg:place-content-start gap-2    ">
          <ProductGridItems products={filteredProducts} /> 
          
        </Grid>
      ) : null}
    </>
  );
}
