'use client';
import { SortFilterItem } from 'lib/constants';
import { Suspense, useState } from 'react';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import dropDownIcon from '../../../../public/assets/dropdown.png';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  console.log(list);
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,

}: {
  list: ListItem[];
  title?: string;

}) {
 
  return (
    <>
      <nav className="rounded-lg lg:sticky top-4 bg-[#BBA887] p-1  sm:p-3 sm:pb-4 xl:p-6  text-white">
        {title ? (
          
            // Render the title with the toggle button if it's for sorting
            // <div className="flex flex-col transition-all duration-500 ease-in-out justify-between">
            //   {/* Button to toggle dropdown */}
            //   <button className="flex flex-col rounded-md" onClick={toggleDropdown}>
            //     <h3 className="px-4 flex items-center text-2xl font-medium tracking-[1px]  dark:text-neutral-400">
            //       {title}
            //       {isOpen ? (
            //         <img
            //           src={dropDownIcon.src}
            //           className="ml-2 h-7 w-7 rotate-180 transform transition-transform duration-300"
            //         />
            //       ) : (
            //         <img
            //           src={dropDownIcon.src}
            //           className="ml-2 h-7 w-7 rotate-0 transform transition-transform duration-300"
            //         />
            //       )}
            //     </h3>
                
            //   </button>
            //   {isOpen ? <FilterItemList  list={list} /> : null}
            // </div>
            // <FilterItemDropdown list={list}/>
        (
            // Render only the title if it's not sorting
            <h3 className="hidden p-2 px-4 text-2xl font-medium tracking-[1px] lg:block dark:text-neutral-400">
              {title}
            </h3>
          )
        ) : null}
        <ul className="hidden lg:block">
          <Suspense fallback={null}><FilterItemList list={list} /></Suspense>
        </ul>
        <ul className='lg:hidden z-30'  >
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
