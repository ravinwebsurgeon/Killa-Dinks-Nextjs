import CustomPaddlesEditor from 'components/custom-paddles/CustomPaddlesEditor';
import './style.css';
import { getProduct } from 'lib/shopify'
import { notFound } from 'next/navigation';
import { ProductProvider } from 'components/product/product-context';
import Collage from 'components/custom-paddles/Collage';
import HowItWorks from 'components/custom-paddles/HowItWorks';
import OurWork from 'components/homepage/OurWork';

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
