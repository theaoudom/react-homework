import React, { useRef, useState } from 'react'
import FormComponent from './FormComponent'

const ContentComponent = () => {
    const [userInfo,setUserInfo] = useState([
        {
            id:1,
            name:"Web Designing",
            type: "Full Time",
            startDate:"12-12-2022",
            endDate:"01-03-2023",
            company:"ABA",
            detail:"I’m working on frontEnd Design using ReactJS with TailwindCSS."
            },
            {
            id:2,
            name:"Mobile App",
            type: "Part Time",
            startDate:"01-01-2022",
            endDate:"03-04-2022",
            company:"APD",
            detail:"I am working as a Mobile app developer for an e-commerce project."
            },
            {
            id:3,
            name:"UX-UI Design",
            type: "Freelance",
            startDate:"01-02-2023",
            endDate:"03-04-2024",
            company:"KOSIGN",
            detail:"I'm working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project."
            }
    ])

    function storeInput(addUser){
        setUserInfo([...userInfo,{...addUser,id: userInfo.length+1}]);
    }
  return (
    <div className='w-[63%] h-full'>
        <div className='bg-slate-200 h-full w-full rounded-t-3xl overflow-hidden px-10 pt-9 pb-8'>
            {/* top */}
            <div className='w-full h-[11%] pb-4 flex items-center justify-between'>
                <span className='text-black text-xl font-bold'>Projects</span>
                <FormComponent addUser={storeInput}/>
            </div>
            {/* 1 */}
            <div className='w-full h-[9.8%]  grid grid-cols-4 gap-2'>
                <div className='w-full bg-violet-400 flex rounded-xl overflow-hidden'>
                    <div className='w-[30%] p-1  flex justify-center items-center'>
                        <div className='bg-slate-300 flex justify-center items-center p-[10px] rounded-md text-sm'>
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                    </div>
                    <div className='w-[70%] px-1 pb-1'>
                        <span className='text-[12px] font-semibold'>Finish Project</span>
                        <div className='text-[14px] font-semibold'>13</div>
                    </div>
                </div>
                {/* 2 */}
                <div className='w-full bg-purple-400 flex rounded-xl overflow-hidden'>
                    <div className='w-[30%] p-1  flex justify-center items-center'>
                        <div className='bg-slate-300 flex justify-center items-center p-[10px] rounded-md text-sm'>
                            <i className="fa-solid fa-download"></i>
                        </div>
                    </div>
                    <div className='w-[70%] px-1'>
                        <span className='text-[12px] font-semibold'>Upcoming</span>
                        <div className='text-[14px] font-semibold'>13</div>
                    </div>
                </div>
                {/* 3 */}
                <div className='w-full bg-pink-400 flex rounded-xl overflow-hidden'>
                    <div className='w-[30%] p-1  flex justify-center items-center'>
                        <div className='bg-slate-300 flex justify-center items-center p-[10px] rounded-lg text-sm'>
                            <i className="fa-solid fa-list"></i>
                        </div>
                    </div>
                    <div className='w-[70%] px-1'>
                        <span className='text-[12px] font-semibold'>Total Project</span>
                        <div className='text-[14px] font-semibold'>13</div>
                    </div>
                </div>
                {/*4 */}
                <div className='w-full bg-red-400 flex rounded-xl overflow-hidden'>
                    <div className='w-[30%] p-1  flex justify-center items-center'>
                        <div className='bg-slate-300 flex justify-center items-center p-[10px] rounded-md text-sm'>
                            <i className="fa-solid fa-spinner"></i>
                        </div>
                    </div>
                    <div className='w-[70%] px-1'>
                        <span className='text-[12px] font-semibold'>In Progress</span>
                        <div className='text-[14px] font-semibold'>4</div>
                    </div>
                </div>
            </div>
            {/* buttom */}
            <div className='w-full h-[82%] grid grid-cols-3 gap-3 mt-4 overflow-y-scroll no-scrollbar '>
                {userInfo.map((user)=>(
                // card
                // main card
                <div key={user.id} className='w-full h-fit bg-white rounded-2xl p-3'>
                    <div className='flex justify-between  items-center py-1'>
                        {/* Start Date  */}
                        <span className='text-xs'>{user.startDate}</span>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div className='my-2'>
                        {/* Company Name  */}
                        <h3 className='text-xs font-semibold uppercase'>{user.company}</h3>
                        {/* Name  */}
                        <h1 className='font-bold text-lg'>{user.name}</h1>
                        <div className='my-2 '>
                            {/* Type  */}
                            {/* user.type =='Part Time'? purple : user.type =='Full Time'? Red : yellow  */}
                            <div className={`text-[12px] py-[2px] px-3 rounded-xl font-semibold w-fit ${user.type=='Part Time'? ' text-purple-600 bg-purple-200 ': user.type=='Full Time'? 'text-red-600 bg-red-200 ': 'text-yellow-600 bg-yellow-200'}`}>
                                {user.type}
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <div className='mt-4 mb-1 float-end'>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="px-3 py-2 text-xs font-semibold text-white rounded-2xl bg-purple-400 hover:bg-purple-500 duration-200" onClick={()=>document.getElementById(`${user.id}`).showModal()}>See Detail</button>
                            {/* modal */}
                            <dialog id={user.id} className="modal">
                              <div className={user.type=='Part Time'? 'modal-box bg-purple-100': user.type=='Full Time'? 'modal-box bg-red-100': 'modal-box bg-yellow-100'}>
                                <form method="dialog">
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                {/* Company  */}
                                <h3 className="font-bold text-lg">{user.company} Company</h3>
                                <div className='text-sm'>
                                    <p className='py-1'>
                                        <span className='font-semibold'>Position: </span>
                                        {/* Postition */}
                                        <span>{user.name}</span>  (
                                        {/* Type  */}
                                        <span> {user.type} </span>)
                                    </p>
                                    <p className='py-1'>
                                        <span className='font-semibold'>Duration: </span> From 
                                        {/* Start Date  */}
                                        <span> {user.startDate} </span>to 
                                        {/* End Date  */}
                                        <span> {user.endDate}</span>
                                    </p>
                                    <p className='py-1'>
                                        <span className='font-semibold'>Description:</span> 
                                        {/* Detail  */}
                                        <span> {user.detail}</span>
                                    </p>
                                </div>
                              </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                ))}
                {/* card 1 */}
                
            </div>
        </div>
        
    </div>
  )
}

export default ContentComponent