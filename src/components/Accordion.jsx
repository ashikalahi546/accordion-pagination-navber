"use client";
import { useState } from "react";
import { accordionData } from "./AccordionData";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoChevronUpSharp } from "react-icons/io5";


export const Accordion = () => {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
//   const handleClick = (index) => {
//     if (active === index) {
//         setActive(active === index ? null : index);
//     }
//   };

  return (
    <div className="w-full  py-20 flex justify-center">
      <div className="w-[600px]  border rounded-lg overflow-hidden">
        {accordionData?.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div
              onClick={()=>handleClick(index)}
              className={`transition ease-out duration-1000 delay-1000 px-5 py-4  flex items-center justify-between cursor-pointer ${
                active === index ? "bg-gray-100" : ""
              }`}
            >
              <p className="">{item?.title}</p>
              <span>{active === index ? <HiOutlineChevronDown />
                : <IoChevronUpSharp />}</span>
            </div>
            {active === index && (
              <div className=" px-5 py-4 ">
                <p>{item?.discription}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
