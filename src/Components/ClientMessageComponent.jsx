import React, { useState } from 'react'

const ClientMessageComponent = ({clientMessage}) => {
    const [messages, setMessages] = useState(clientMessage);

    const messageChange = (id) => {
        const updatedMessages = messages.map(message => {
            if (message.id === id) {
                messages[id-1].like = !messages[id-1].like
            }
            return message;
        });
        setMessages(updatedMessages);
    };

  return (
    <div className='w-[28%] h-full overflow-y-scroll no-scrollbar'>
        <div className='sticky top-0 flex justify-between items-center bg-white py-3 px-8'>
          <span className='text-sm font-semibold'>Client Messages</span>
          <i className={`cursor-pointer fa-solid fa-ellipsis ${messages.length >=2? "block" : "invisible"}`}></i>
        </div>
        <hr className='border-1 border-gray-400' />
        <div>
            {messages.map((message)=>(
                <div className='h-fit'>
                <hr className='border-1 border-gray-400'/>
                <div className='flex h-full p-3'>
                    <div className='w-1/4 h-full '>
                        <div className='h-full w-full'>
                            <img className='rounded-full w-14 h-14' src={`../src/assets/${message.img}`} alt="" /> 
                        </div>
                    </div>
                    <div className='w-3/4 h-full'>
                        <div className='flex justify-between'>
                            <h2 className='font-semibold'>{message.name}</h2>
                            <i onClick={()=> messageChange(message.id)} className={`cursor-pointer ${message.like == false ? "fa-regular fa-star" : "fa-solid fa-star"}`}></i>
                        </div>
                        <div>
                            <p className='text-xs'>{message.message}</p>
                        </div>
                        <div className='float-end text-sm'>{message.date}</div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ClientMessageComponent