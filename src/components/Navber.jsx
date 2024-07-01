
"use client"
import Image from "next/image";
import { nexzanMenuData } from "./NexzanMenuData";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const NexzanNavber = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [hoveredSubmenuIndex, setHoveredSubmenuIndex] = useState(null);

  return (
    <div className="bg-blue-800">
      <div className="w-[1100px] mx-auto flex items-center justify-between h-[65px]">
        <Image src="/image/nexzan-logo.webp" width={168} height={45} alt="" />
        <ul className="flex items-center gap-10 cursor-pointer">
          {nexzanMenuData.map((item, index) => (
            <li
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredItemIndex(index)}
              onMouseLeave={() => setHoveredItemIndex(null)}
            >
              <div className="text-white font-medium flex items-center gap-1 h-[65px]">
                <span>{item.title}</span>
                {item.submenus && (
                  <span
                    className={`transition-transform duration-300 ease-in-out ${
                      item.submenus ? "rotate-0 group-hover:rotate-180" : ""
                    }`}
                  >
                    <FaAngleDown className="text-lg font-medium" />
                  </span>
                )}
              </div>
              {hoveredItemIndex === index && item.submenus && (
                <ul className="absolute top-16 flex flex-col duration-300 delay-200">
                  {item.submenus.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative bg-extraDarkBlue text-gray-200 min-w-full h-[43px] px-5 py-2 border-b border-background text-sm w-[200px] group"
                      onMouseEnter={() => setHoveredSubmenuIndex(subIndex)}
                      onMouseLeave={() => setHoveredSubmenuIndex(null)}
                    >
                      <span>{submenu.title}</span>
                      {hoveredSubmenuIndex === subIndex &&
                        submenu.submenustwo && (
                          <ul className="absolute left-full top-0 flex flex-col duration-300 delay-200">
                            {submenu.submenustwo.map((subSubmenu, subSubIndex) => (
                              <li
                                key={subSubIndex}
                                className="bg-extraDarkBlue bg-fuchsiaBlue text-gray-200 min-w-full h-[43px] px-5 py-2 border-b border-background text-sm w-[200px]"
                              >
                                {subSubmenu.title}
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NexzanNavber;

