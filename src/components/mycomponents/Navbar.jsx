import React, { useState } from "react";
import { Search,Bell,X,Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
    const [menu,setMenu] = useState(true)
  return (
    <div className="flex flex-row-reverse">
        <nav className="w-full h-20 flex justify-between items-center  bg-white px-10 flex-grow shadow-md">
      <div className="search flex items-center justify-between max-w-full ">
      <Menu size={25} className="mx-2 cursor-pointer" onClick={()=>setMenu(!menu)} />
        <Search size={25} className="m-5" />
        <input
          type="text"
          placeholder="Search..."
          className="px-10 py-2.5 w-full"
        />
      </div>
      <div className="profile flex justify-between w-40 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Karan</p>
        <Bell size={20} className="cursor-pointer" />
      </div>
    </nav>
    <nav className={`p-5 sidebar h-screen min-w-80 bg-white text-gray-500 transition-transform duration-1000 z-10 absolute  shadow-md ${menu?" hidden":"left-0"} `}>
    <X className="cursor-pointer" onClick={()=>setMenu(!menu)} />
        <div className={`logo font-extrabold w-full h-20 text-xl  flex items-center justify-center space-x-2 `}><span className="text-green-600">Green</span> <span className="text-indigo-500">Health</span></div>
        <div className="menu"></div>
        

    </nav>
    </div>
  );
};

export default Navbar;
