"use client";
import Image from "next/image";
import { nexzanMenuData } from "./NexzanMenuData";

import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
const NexzanNavber = () => {
  const [hoverItemIndex, setItemIndex] = useState(null);
  const [hoverSubmenuIndex, sethoverSubmenuIndex] = useState(null);
  return (
    <div className="bg-blue-800">
      <div className="w-[1100px] mx-auto flex items-center justify-between  h-[65px]">
        <Image src="/image/nexzan-logo.webp" width={168} height={45} alt="" />
        <ul className="flex items-center gap-10 cursor-pointer ]">
          {nexzanMenuData.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setItemIndex(index)}
              onMouseLeave={() => setItemIndex(null)}
              className="group relative"
            >
              <div className="text-white font-medium flex items-center gap-1 h-[65px]">
                <span>{item?.title}</span>
                {item.submenus && (
                  <span
                    className={`transtion-transform duration-300 ease-in-out ${
                      item.submenus ? "rotate-0 group-hover:rotate-180" : ""
                    }`}
                  >
                    <FaAngleDown className="text-lg font-medium" />
                  </span>
                )}
              </div>
              {hoverItemIndex === index && item.submenus && (
                <ul className="absolute right-0  top-16 hidden group-hover:flex flex-col duration-300 delay-200  ">
                  {item.submenus.map((submenu, subIndex) => (
                    <li
                      onMouseEnter={() => sethoverSubmenuIndex(subIndex)}
                      onMouseLeave={() => sethoverSubmenuIndex(null)}
                      key={subIndex}
                      className="bg-extraDarkBlue relative bg-fuchsiaBlue text-gray-200 min-w-full h-[43px] px-5 py-2 border-b border-background  text-sm w-[200px]"
                    >
                      <span className=""> {submenu.title}</span>

                      {hoverSubmenuIndex === subIndex &&
                        submenu?.submenustwo && (
                          <ul className="absolute left-[100%] top-0 hidden  duration-300 delay-200 group-hover:flex flex-col">
                            {submenu?.submenustwo.map((submenu, subIndex) => (
                              <li
                                key={subIndex}
                                className="bg-extraDarkBlue bg-fuchsiaBlue text-gray-200 min-w-full h-[43px] px-5 py-2 border-b border-background  text-sm w-[200px]"
                              >
                                {submenu.title}
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
