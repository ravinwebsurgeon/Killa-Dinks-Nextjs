'use client';
import React, { useState, useEffect, useRef } from 'react';
import dropDownIcon from '../../public/assets/dropDownArrow.png'

// Type definition for the dropdown props
interface DropdownProps {
  title: string;         // Title for the dropdown button
  options: string[];     // Array of options to display in the dropdown
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to toggle dropdown visibility
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown button */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown when button is clicked
        className="text-white flex gap-[5px] justify-center items-center p-2 py-4 rounded-md"
      >
        {title}
        {isOpen ? (
          <img
            src={dropDownIcon.src}
            width={10}
            height={10}
            className="ml-2 transition-transform duration-300 transform rotate-180"
          />
        ) : (
          <img
            src={dropDownIcon.src}
            width={10}
            height={10}
            className="ml-2 transition-transform duration-300 transform rotate-0"
          />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute bg-black/50 overflow-hidden opacity-7 border rounded-md shadow-lg  w-40 z-10"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 overflow-hidden hover:bg-white hover:text-black cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;


{/* Optionally display the selected option */}
{/* {selectedOption && (
<p className="mt-2 text-gray-700">Selected: {selectedOption}</p>
)} */}