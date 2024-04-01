import { Home } from 'lucide-react'
import React from 'react'

export const SideBarComponent = () => {
  return (
    <div className=' w-[9%] h-full'>
        <div className='pt-10 flex flex-col items-center gap-3'>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 bg-slate-300 flex justify-center items-center duration-200 cursor-pointer'>
                <i className="fa-solid fa-house text-xl"></i>
            </div>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 flex justify-center items-center cursor-pointer duration-200'>
                <i className="fa-solid fa-user text-xl"></i>
            </div>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 flex justify-center items-center cursor-pointer duration-200'>
                <i className="fa-solid fa-message text-xl"></i>
            </div>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 flex justify-center items-center cursor-pointer duration-200'>
                <i className="fa-solid fa-graduation-cap text-xl"></i>
            </div>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 flex justify-center items-center cursor-pointer duration-200'>
                <i className="fa-solid fa-clock text-xl"></i>
            </div>
            <div className='text-black w-12 h-12 rounded-full hover:bg-slate-300 flex justify-center items-center cursor-pointer duration-200'>
                <i className="fa-solid fa-gear text-xl"></i>
            </div>
        </div>
    </div>
  )
}
