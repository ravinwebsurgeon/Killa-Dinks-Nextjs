'use client';
import React, { useEffect, useRef, useState } from 'react';
import dropDown from '../../public/assets/dropdown.svg';

interface AccordionItem {
  title: string;
  content: string | null; // Can be plain text or HTML
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]); // To store the heights of each item
  const [isClient, setIsClient] = useState<boolean>(false); // Flag to check if it's client-side
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // To store refs of content divs

  // Toggle function to open/close accordion
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  // Check if content is HTML
  const isHtmlContent = (content: string | null) => {
    if (!content || !isClient) return false; // Only check in client-side

    // Using DOMParser in client-side
    const doc = new DOMParser().parseFromString(content, 'text/html');
    return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1); // Check if there's an HTML tag
  };

  // Set the height of each item dynamically on mount and whenever openIndex changes
  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts (client-side rendering)
  }, []);

  useEffect(() => {
    // Set the heights dynamically after the component is mounted and updated
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, [openIndex, items]);

  return (
    <div className="w-full ">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggleAccordion(index)}
            className={`
              w-full text-left py-4 px-6 tracking-[1px]
              bg-[#FAF7EB] text-[#BBA887] hover:text-white font-semibold 
               border-t  border-[#BBA887] 
              hover:bg-[#BBA887] transition-colors
              flex items-center justify-between
            `}
          >
            {item.title}
            <span
              className={`transition-transform   duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
            >
              <img height={16} width={16} src={dropDown.src} />
            </span>
          </button>

          <div
            ref={(el) => { contentRefs.current[index] = el }}  // Ensure no return value here
            className={`
              overflow-hidden 
              transition-all duration-300 ease-in-out 
              ${openIndex === index ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              height: openIndex === index ? `${heights[index]}px` : '0px', // Dynamically set height for smooth transition
            }}
          >
            {/* Check if content is HTML or plain text */}
            {isHtmlContent(item.content) ? (
              <div
                className="bg-white p-4 text-[#BBA887]  border-[#BBA887] "
                dangerouslySetInnerHTML={{ __html: item.content || '' }}
              />
            ) : (
              item.content && openIndex === index && (
                <div className="bg-white text-[#BBA887] p-4  border-[#BBA887] ">
                  <p>{item.content}</p>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;