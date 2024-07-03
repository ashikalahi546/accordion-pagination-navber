// "use client"
// import React, { useState } from 'react';

// function ActiveButton() {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const getButtonClass = (buttonName) => {
//     return buttonName === activeButton
//       ? 'w-[110px] h-[36px] font-medium hover:bg-primary hover:text-black rounded-md bg-orange-500 text-white duration-100 border border-none'
//       : 'w-[110px] h-[36px] font-medium hover:bg-primary hover:text-white rounded-md bg-transparent text-secondary duration-100 border border-[#98A2B3] hover:border-none';
//   };

//   return (
//     <div>
//       <button
//         className={getButtonClass('buy')}
//         onClick={() => handleClick('buy')}
//       >
//         Buy
//       </button>
//       <button
//         className={`mx-[10px] ${getButtonClass('sell')}`}
//         onClick={() => handleClick('sell')}
//       >
//         Sell
//       </button>
//       <button
//         className={getButtonClass('rent')}
//         onClick={() => handleClick('rent')}
//       >
//         Rent
//       </button>
//     </div>
//   );
// }

// export default ActiveButton;

"use client"
import React, { useState, useEffect, useRef } from 'react';

function ActiveButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedData = [
    { name: "Bangladesh", code: "BD" },
    { name: "India", code: "IN" },
    { name: "Pakistan", code: "PK" },
    // Add more options here
  ];

  return (
    <div ref={dropdownRef} className="w-[245px]">
      <div
        onClick={() => setOpen(!open)}
        className="w-full border-[#98A2B3] border h-10 rounded-md px-[10px] text-xs leading-[14px] text-secondary flex items-center justify-between cursor-pointer"
      >
        <p>{selected ? selected : "Bangladesh"}</p>
      </div>

      <ul
        className={`w-full bg-[#FFFFFF] select-box-shadow overflow-y-auto rounded-md text-xs leading-[14px] text-secondary mt-2 ${
          open ? "max-h-36 border border-[#E4E4E5]" : "max-h-0"
        }`}
      >
        {selectedData.map((item) => (
          <li
            onClick={() => {
              setSelected(item.name);
              setOpen(false);
            }}
            className="py-2.5 hover:bg-[#F2F7FF] duration-100 text-center cursor-pointer"
            key={item.code}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveButton;
