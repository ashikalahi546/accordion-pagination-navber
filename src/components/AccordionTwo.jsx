// "use client"
// import { useState } from "react";
// import { activeData } from "./AccordionData";
// import { GoArrowDown , GoArrowUp } from "react-icons/go";

// export const AccordionTwo = () => {
// const [active,setActive] = useState(null)

// const handleClick = (index) =>{
//   setActive(active === index ? null : index)
// }

//   return (
//     <div className="bg-gradient-to-r from-cyan-500 to-blue-500  h-screen">
//       <div className="w-6/12 mx-auto py-20 ">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <div>
//             {activeData?.map((item, index) => (
//               <div key={i} className="border-b-blue-300 border-b last:border-b-0 pb-2">

//                 <button onClick={()=>handleClick(index)} className="py-2 flex justify-between w-full items-center">
//                   <span>{item?.title}</span>


//                   <span className="bg-blue-500 size-8 rounded-full text-white flex items-center justify-center">
//                     {active === index ? (
//                       <GoArrowUp className="transform transition-transform duration-300 ease-in-out rotate-180" />
//                     ) : (
//                       <GoArrowDown className="transform transition-transform duration-300 ease-in-out rotate-0" />
//                     )}
//                     </span>
//                 </button>
//                 <div className={`overflow-hidden transition-all ease-in-out duration-300 ${active === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
//                   <div className="p-2">
//                     {item?.discription}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import { useState } from "react";
import { accordionData } from "./AccordionData";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

export const AccordionTwo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className="w-6/12 mx-auto py-20">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div>
            {accordionData?.map((item, i) => (
              <div key={i} className="border-b border-b-blue-300 last:border-b-0 pb-2">
                <button 
                  onClick={() => handleClick(i)} 
                  className="py-2 flex justify-between w-full items-center"
                >
                  <span>{item?.title}</span>
                  <span className="bg-blue-500 size-8 rounded-full text-white flex items-center justify-center">
                    {/* {activeIndex === i ? (
                      <GoArrowUp/>
                    ) : (
                      <GoArrowDown/>
                    )} */}
                    {
                      <span className={`${activeIndex==i ? 'rotate-180 transition-all duration-300' : 'rotate-0 transition-all duration-300'}`}><GoArrowDown/></span>
                    }
                  </span>
                </button>
                <div className={`overflow-hidden transition-all ease-in-out duration-300 ${activeIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-2">
                    {item?.discription}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
