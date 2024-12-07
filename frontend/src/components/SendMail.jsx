import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to:"",
    subject:"",
    message:""
  })
  const open = useSelector(store =>store.appSlice.open)
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      createdAt:serverTimestamp(),
    })
    dispatch(setOpen(false));
    setFormData({
      to:"",
      subject:"",
      message:""
    })
  }
  
  return (
    <div className={`${open ? "block" : "hidden"} max-w-6xl bg-white shadow-xl rounded-t-md shadow-slate-600`}>
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Messgae</h1>
        <div onClick={()=> dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor pointer">
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-2 p-3">
        <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder="To" className="py-1 outline-none "/>
        <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder="Subject" className="py-1 outline-none "/>
        <textarea onChange={changeHandler} value={formData.message} name="message" cols={"30"} rows={"10"} className="py-1 outline-none" ></textarea>
        <button type="submit" className="px-4 font-medium text-white rounded-full w-fit bg-[#0B57D0]">Send</button>
      </form>
    </div>
  );
};

export default SendMail;
