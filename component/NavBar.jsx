import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

function NavBar() {
  const dispatch= useDispatch()
  function toggleMenuHandler() {
    dispatch(toggleMenu())
    
  }
  return (
    <div className='w-full h-16 flex items-center ml-9 gap-10'>
        <div>
        <GiHamburgerMenu className='cursor-pointer' onClick={toggleMenuHandler} />
        </div>
        <div className=" ">
        <img
          className="w-20 h-32"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          alt=""
        />
      </div>
     <div className='flex gap-4 justify-center'>
     <div className="flex items-center  border-black ml-40">
      <input type="text" placeholder='Search' className='w-96 h-10 border border-black p-1 rounded-l-full outline-none  pl-8' />  
            <button className='w-9 h-10 border border-black flex items-center rounded-r-full'><FaSearch className='' /></button>
      </div>
      <div className='bg-gray-200 w-8 h-9 rounded-full flex items-center p-2 '>
      <FaMicrophone />
      </div>
      <div className='flex justify-center pl-56'>

      <h1 className='cursor-pointer col-span-1 h-8 w-8 bg-gray-500 rounded-full flex text-white items-center justify-center'>A</h1>
      </div>

     </div>

    </div>
  )
}

export default NavBar