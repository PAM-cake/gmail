import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useSelector } from "react-redux";
import { deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase"

const Mail = () => {
  
    
    const navigate = useNavigate();
    const {selectedEmail} = useSelector(store=>store.appSlice);
    const params = useParams(); // Get the email ID from the URL

    const deleteMailById  = async (id) => {
      try {
        await deleteDoc(doc(db,"emails", id))
        navigate("/")
      } catch (error) {
        console.log(error);
        
      }
    }

  return (
    <div className="flex-1 mx-5 bg-white rounded-xl">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 py-2 text-gray-700">
          <div onClick={() => navigate("/")} className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={()=>deleteMailById(params.id)} className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <IoMdMore size={"20px"} />
          </div>
        </div>
          <div className="flex items-center gap-2">
            <button className="hover:rounded-full hover:bg-gray-100"> <MdKeyboardArrowLeft size={"20px"} /> </button>
            <button className="hover:rounded-full hover:bg-gray-100"> <MdKeyboardArrowRight size={"20px"} /> </button>
          </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
            <div className="flex items-center justify-between gap-1 bg-white">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
                        <span className="px-2 text-sm bg-gray-200 rounded-md ">inbox</span>
                    </div>
                    <div className="flex-none my-5 text-sm text-gray-400">
                        <p>{new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
                    </div>
            </div>
            <div className="text-sm text-gray-500 ">
                <h1>{selectedEmail?.to}</h1>
                <span>to me</span>
            </div>
            <div className="my-10">
                <p>{selectedEmail?.message}</p>
            </div>
      </div>
    </div>
  );
};

export default Mail;
