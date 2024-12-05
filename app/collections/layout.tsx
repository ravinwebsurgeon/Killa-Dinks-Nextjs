import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';
import { getMenu } from 'lib/shopify';
import FilterItemDropdown from 'components/layout/search/filter/dropdown';
import Footerx from 'components/homepage/Footerx';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  const sidemenu = await getMenu('main-menu-1');
  return (
    <div className="bg-[#faf7eb] lg:pt-[47px]">
     
      <div className="mx-4 flex flex-col gap-4 pb-4 sm:pt-[47px] text-black md:mx-[20px] lg:flex-row xl:mx-[43px] xl:gap-8 dark:text-white">
        <div className="order-first lg:block hidden flex-none">
          <Collections />
        </div>
        <div className="order-last flex min-h-screen  w-full flex-col gap-4 md:order-none">
          <div className="flex w-full  gap-1 justify-end">
          <div className="order-first lg:hidden w-[50%] flex-none">
          <Collections />
        </div>
            <div className="flex w-full items-center rounded-lg bg-[#bba887] p-1 sm:p-3 text-white md:justify-center lg:max-w-[300px]">
              <div className="min-w-max  hidden sm:flex pl-1">Sort By : </div>
              <FilterItemDropdown list={sorting} />
            </div>
          </div>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
      </div>
 
    </div>
  );
}
