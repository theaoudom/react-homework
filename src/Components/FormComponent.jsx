import React, { useRef, useState } from "react";

const FormComponent = ({addUser}) => {
  const[userInput,setUserInput] = useState({});
  const ref = useRef();

  function userSubmit (e){
    const {name,value} = e.target;
    setUserInput({ ...userInput, [name]: value});
  }
  function handleSubmit(){
    addUser(userInput);
    ref.current.reset();
  }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="bg-gray-300 hover:bg-blue-400 duration-200 py-2 px-3 text-black rounded-md font-bold text-[13px]" onClick={() => document.getElementById("my_modal_3").showModal()}>
        ADD NEW PROJECT
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black w-[450px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center text-black">Input Your Information</h3>
          <form ref={ref} className="w-full">
            {/* Position  */}
            <label htmlFor="" className="text-xs font-semibold">POSITION</label>
            <input name="name" onChange={(e)=>userSubmit(e)} type="text" className="border-2 focus:outline-sky-500 border-blue-300 w-full py-2 px-4 rounded-md my-1 outline-sky-500 focus:bg-gray-300 bg-gray-200" placeholder="UX-UI Design"/>
            {/* Input Company  */}
            <label htmlFor="" className="text-xs font-semibold">COMPANY</label>
            <input name="company" onChange={(e)=>userSubmit(e)} type="text" className="border-2 border-blue-300 w-full py-2 px-4 rounded-md my-1 outline-sky-500 focus:bg-gray-300 bg-gray-200" placeholder="KSHRD Center"/>
            {/* Input Type  */}
            <label htmlFor="" className="text-xs font-semibold">TYPE</label>
            <select name="type" onChange={(e)=>userSubmit(e)} id="" className=" border-2 border-blue-300 w-full py-2 px-4 rounded-md my-2 outline-sky-500 focus:bg-gray-300 bg-gray-200">
              <option value="" className="text-gray-400">----Choose Any Option----</option>
              <option value="Full Time" className="text-black">Full Time</option>
              <option value="Frelance">Freelance</option>
              <option value="Part Time">Part Time</option>
            </select>
            <div className="w-full grid grid-cols-2 gap-x-3">
              <label htmlFor="" className="w-full text-xs font-semibold">START DATE</label>
              <label htmlFor="" className="w-full text-xs font-semibold">END DATE</label>
              {/*Input Start Date  */}
              <input name="startDate" onChange={(e)=>userSubmit(e)} type="date" className="border-2 border-blue-300 w-full py-2 px-4 rounded-md my-2 outline-sky-500 focus:bg-gray-300 bg-gray-200"/>
              {/* Input End Date  */}
              <input name="endDate" onChange={(e)=>userSubmit(e)} type="date" className="border-2 border-blue-300 w-full py-2 px-4 rounded-md my-2 outline-sky-500 focus:bg-gray-300 bg-gray-200"/>
            </div>
            {/* Input Description  */}
            <label htmlFor="" className="text-xs font-semibold">DESCRIPTION</label>
            <textarea name="detail" onChange={(e)=>userSubmit(e)} className="border-2 border-blue-300 text-[14px] w-full py-2 px-4 rounded-md my-1 outline-sky-500 focus:bg-gray-300 bg-gray-200 " id="" cols="5" rows="3" placeholder="Descripe what you do..."></textarea>
            <button type="button" onClick={handleSubmit} className="py-2 px-3 bg-blue-700 rounded-md text-white flex float-end">Submit</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FormComponent;
