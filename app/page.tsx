
export const metadata = {
  description: 'Killa Dinks',
  openGraph: {
    type: 'website'
  }
};

import Index from 'components/homepage';
import { getCollectionProducts } from 'lib/shopify';
export default async function HomePage() {
  const FrontProducts = await getCollectionProducts({ collection: "front-page" });
  return (
    <>
      <div className="bg-[#FAF7EB]  w-full overflow-hidden  ">
        {/* <HomePageBanner className='left-0 right-0 top-0  lg:absolute w-full lg:left-0 lg:top-[0px]' image={banner} menu={sidemenu} /> */}
          <Index FrontProducts={FrontProducts} />
         
      </div>
    </>
  );
}
