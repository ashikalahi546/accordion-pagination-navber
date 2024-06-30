
import { HiOutlineChevronDown } from 'react-icons/hi';

const menuData = [
  {
    title: 'Home',
    submenus: [
      { title: 'Submenu1' },
      { title: 'Submenu2' },
    ],
  },
  {
    title: 'About',
    submenus: [
      { title: 'Submenu1' },
      { title: 'Submenu2' },
    ],
  },
];

const Dropdown = () => {
  
  return (
    <ul className=" w-6/12 mx-auto flex">
      {menuData.map((item, index) => (
        <li key={index} className="relative group mb-2">
          <div className="p-2 border rounded bg-gray-200 hover:bg-gray-300 cursor-pointer flex justify-between items-center">
            <span>{item.title}</span>
            {item.submenus && (
              <span
                className={`transition-transform duration-300 ease-in-out ${item.submenus ? 'rotate-0 group-hover:rotate-180' : ''}`}
              >
                <HiOutlineChevronDown />
                
              </span>
            )}
          </div>
          {item.submenus && (
            <ul className="absolute left-0 top-full  hidden group-hover:flex flex-col transition-opacity duration-300 delay-150 ease-in-out opacity-0 group-hover:opacity-100 bg-white border rounded shadow-lg">
              {item.submenus.map((submenu, subIndex) => (
                <li
                  key={subIndex}
                  className="p-2 border-b last:border-0 bg-gray-100 hover:bg-gray-200"
                >
                  {submenu.title}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};



export default Dropdown;
