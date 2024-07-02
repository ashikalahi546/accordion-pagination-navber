"use client";
import { FaChevronDown } from "react-icons/fa6";
import { selectOptionData } from "./SelectOptionData";
import { useState } from "react";

const SelectOption = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black h-screen">
      <div className="w-2/12 mx-auto py-5">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white shadow-sm px-2 py-2 rounded flex items-center justify-between cursor-pointer ${
            selected && "text-gray-500"
          }`}
        >
          {selected ? selected : "select Country"}
          <FaChevronDown
            className={`${open ? "rotate-180 duration-300" : ""}`}
          />
        </div>

        <ul
          className={`bg-white mt-2 rounded cursor-pointer  overflow-y-auto ${
            open ? "max-h-48" : "max-h-0"
          }`}
        >
          {selectOptionData.map((country) => (
            <li
              key={country.code}
              onClick={() => setSelected(country.name)}
              className="text-center hover:bg-blue-500 hover:text-white  py-1.5 "
            >
              {country.name}  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOption;
