

"use client";
import { useState } from "react";
import { accordionData } from "./AccordionData";
import { HiOutlineChevronDown } from "react-icons/hi";

export const Accordion = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="w-full py-20 flex justify-center">
      <div className="w-[600px] border rounded-lg overflow-hidden">
        {accordionData?.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div
              onClick={() => handleClick(index)}
              className={`transition ease-out duration-1000 delay-1000 px-5 py-4 flex items-center justify-between cursor-pointer ${
                activeIndices.includes(index) ? "bg-gray-100" : ""
              }`}
            >
              <p>{item?.title}</p>

              <span
                className={`${
                  activeIndices.includes(index)
                    ? "rotate-180 transition-all duration-200 ease-out"
                    : "rotate-0 transition-all duration-200 ease-out"
                }`}
              >
                <HiOutlineChevronDown />
              </span>
            </div>
            {activeIndices.includes(index) && (
              <div className="px-5 py-4">
                <p>{item?.discription}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

