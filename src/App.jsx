import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavbarComponent from './Components/NavbarComponent'
import { SideBarComponent } from './Components/SideBarComponent'
import ContentComponent from './Components/ContentComponent'
import ClientMessageComponent from './Components/ClientMessageComponent'
import './App.css'

function App() {
    const [clientMessage,setClientMessage] = useState([
        {
            id: 1,
            img: "ppl1.jpg",
            name: "David",
            message: "Hey tell me about progress of project? Waiting for your response",
            date:"21 July",
            like: false
            },
            {
            id: 2,
            img: "ppl2.jpg" ,
            name: "Stephanie",
            message: "I got your first assignment. It was quite good. You can start work on next assignment",
            date:"19 July",
            like: true
            },
            {
            id: 3,
            img: "ppl3.jpg" ,
            name: "William",
            message: "I want some changes in previous work you sent me. Waiting for your reply.",
            date:"17 July",
            like: false
            },
            {
            id: 4 ,
            img: "ppl4.jpg",
            name: "Alona",
            message: "I am really impressed from your work. Keep doing great work",
            date:"15 July",
            like: true
            },
            {
            id: 5,
            img: "ppl5.jpg" ,
            name: "Hira",
            message: "When you start redesign of app? Previous project was perfect.",
            date:"13 July",
            like: false
            },
            {
            id: 6 ,
            img: "ppl6.jpg",
            name: "Ghulam",
            message: "I want to let you know I am agree on that project. Looking for anther good one.",
            date:"11 July",
            like: false
            },
            
            {
            id: 7,
            img: "ppl2.jpg" ,
            name: "Mina",
            message: "You did a great job for the previous project. Looking forward for another one next time.",
            date:"13 July",
            like: true
            },
            {
            id: 8,
            img: "ppl4.jpg" ,
            name: "Noona",
            message: "How is the project going? I'm waiting to see...",
            date:"13 July",
            like: true
            },
    ])
    return (
        <div className='bg-slate-300 h-screen w-screen px-32 py-14'>
            <div className='bg-white h-full w-full rounded-3xl overflow-hidden'>
                <nav className='py-2  h-[12%]'>
                    <NavbarComponent/>
                </nav>
                {/* body */}
                <div className='flex h-[88%]'>
                    <SideBarComponent/>
                    <ContentComponent/>
                    <ClientMessageComponent clientMessage={clientMessage}/>
                </div>
            </div>
        </div>
    )
}

export default App
