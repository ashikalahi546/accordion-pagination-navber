import Image from "next/image"
import Img from "/public/image/logo.png"

function Navber() {
  return (
    <div className='w-9/12 mx-auto'>
        <div>
            <Image src={Img}/>
        </div>
    </div>
  )
}

export default Navber


