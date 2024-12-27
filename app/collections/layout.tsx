import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';
import { getMenu } from 'lib/shopify';
import FilterItemDropdown from 'components/layout/search/filter/dropdown';
import Footerx from 'components/homepage/Footerx';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-[#faf7eb] pt-8 lg:pt-[47px]">
      <div className="mx-4 flex flex-col gap-4 pb-4 text-black sm:pt-[47px] md:mx-[20px] lg:flex-row xl:mx-[43px] xl:gap-8 dark:text-white">
        <div className="order-first hidden flex-none lg:block">
          <Collections />
        </div>
        <div className="order-last flex min-h-screen w-full flex-col gap-4 md:order-none">
          <div className="flex w-full justify-end gap-1">
            <div className="order-first w-[50%] flex-none lg:hidden">
              <Collections />
            </div>
            <div className="flex w-full items-center rounded-lg bg-[#bba887] p-1 text-white sm:p-3 md:justify-center lg:max-w-[300px]">
              <div className="hidden min-w-max pl-1 sm:flex">Sort By : </div>
              <FilterItemDropdown list={sorting} />
            </div>
          </div>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
      </div>
    </div>
  );
}
