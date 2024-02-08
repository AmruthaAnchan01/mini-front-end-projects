import React from "react";
import { GoHomeFill } from "react-icons/go";
// import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

import { useSelector } from "react-redux";
import Slidemin from "./Slidemin";




function Slide() {
  const isMenuOpen = useSelector((sk)=> sk.app.isMenuOpen)
  // console.log(isMenuOpen);
  return isMenuOpen? (
   <Slidemin/>
  ): (
    <div className="col-span-1">

    <div className=" capitalize">
      <ul className="cursor-pointer">
      <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < GoHomeFill className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>home</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < SiYoutubeshorts className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>shorts</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < MdOutlineSubscriptions className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>subscriptions</h1>
                </li>
      </ul>

      {/* <h1 className="text-lg">You </h1> */}
      <ul>
      <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    <h1 className='py-2  text-sm font-semibold'>You</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < MdHistory className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>history</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < IoMdTime className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>watch later</h1>
                </li>                        <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < BsPlayBtn className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>your videos</h1>
                </li>    
                  </ul>
    </div>
    </div>
  );
}

export default Slide;
