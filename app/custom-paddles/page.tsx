import CustomPaddlesEditor from 'components/custom-paddles/CustomPaddlesEditor';
import Navbar from 'components/productDetails/Navbar';
import { getMenu } from 'lib/shopify';
import './style.css';
const CustumPaddles = async () => {
  const sidemenu = await getMenu('main-menu-1');
  return (
    <div>
      <Navbar menu={sidemenu} />
      <CustomPaddlesEditor />
    </div>
  );
};

export default CustumPaddles;
