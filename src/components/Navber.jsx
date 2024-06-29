import Image from "next/image"
import Img from "/public/image/logo.png"
import { menuItems } from './MenuItemData';


function Navber() {
  return (
<div className="bg-blue-700 py-2">
<div className='w-6/12 mx-auto'>
        <div className="flex items-center justify-between">
            <Image src={Img} alt=''  priority/>
            <div  className="flex gap-10 text-white">
              {
                menuItems.map((item,index)=>(
                  <div key={index} >
                     <ul className="">
                      <li>{item?.title}</li>
                     </ul>
                  </div>
                ))
              }
            </div>
           
        </div>
    </div>
</div>
  )
}

export default Navber


