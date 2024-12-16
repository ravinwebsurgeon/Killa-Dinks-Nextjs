import CustomPaddlesEditor from 'components/custom-paddles/CustomPaddlesEditor';
import './style.css';
import { getProduct } from 'lib/shopify'
import { notFound } from 'next/navigation';
import { ProductProvider } from 'components/product/product-context';

const CustumPaddles = async () => {
     const customHandle = 'custom-paddle';
  
      const getProductData = await getProduct(customHandle)
      
      if (!getProductData) return notFound();
  return (
    <ProductProvider>

      <CustomPaddlesEditor getProductData={getProductData}   />
    

    </ProductProvider>
  );
};

export default CustumPaddles;
