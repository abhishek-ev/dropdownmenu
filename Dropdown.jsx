import React, { useState } from 'react'
import list from './list.json'
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { RiStarLine } from "react-icons/ri";


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex items-center w-auto rounded-lg'>
      <div onClick={()=>setIsOpen((prev) => !prev)} className='bg-blue-100 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
        <div className='flex w-14 bg-[#F6F7FB] h-[50px] items-center justify-center rounded-lg'>
        <RiStarLine />
        </div>
        <div className='flex-auto flex-row px-6'>
           <h2>Managing new reviews</h2>
           <p className='font-thin'>Choose which reviews you want to auto to publish and how you want to be notified of new reviews</p>
        </div>
        
        {!isOpen ? (<div><AiOutlineCaretDown className='h-8' /></div>
            
        ):(<div><AiOutlineCaretUp className='h-8' /></div>)}
      </div>
      {isOpen && (
        <div className='bg-blue-100 absolute top-[110px] flex-col items-start rounded-lg p-2 w-full'>
            {list.map((items, i)=>(
                <div className='flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent'key={i}>
                    <h3 className='font-bold'>{items.city}</h3>
                    <h3>{items.emoticon}</h3>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
