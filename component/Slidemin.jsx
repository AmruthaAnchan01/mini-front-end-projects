import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";


function Slidemin() {
  return (
    <div className=" capitalize">
      <ul className="cursor-pointer">
        <li className="flex items-center gap-4 text-lg font-bold ">
          <IoMdHome /> Home
        </li>
        <li className="flex items-center gap-4 text-lg font-bold ">
          <SiYoutubeshorts /> shorts
        </li>
        <li className="flex items-center gap-4 text-lg font-bold ">
          <MdSubscriptions /> subscription
        </li>
      </ul>

      <h1 className="text-lg">You </h1>
      <ul>
        <li className="flex items-center gap-4 text-lg font-bold "><MdOutlineHistory />history</li>
        <li className="flex items-center gap-4 text-lg font-bold "><FaRegClock />watch later</li>
        <li className="flex items-center gap-4 text-lg font-bold "><AiOutlineLike />liked videos</li>
      </ul>
    </div>
  )
}

export default Slidemin