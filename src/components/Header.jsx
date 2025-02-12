import Image from 'next/image'
import img4 from "../images/isaac.jpeg"

export function Header() {
    return (
      <header className="border-b bg-white px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2 bg-gray-100 shadow-md border-2 border-gray-200 h-19 w-19 p-2 rounded-2xl">
          <Image
                  src={img4}
                  alt="Profile picture"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  />
                  <div> <p>Rahil Siddique</p></div>
             
            
          </div>
        </div>
      </header>
    )
  }
  
  