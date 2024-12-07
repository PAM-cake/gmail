import React, { useEffect, useState } from 'react'
import Email from './Email'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'


const Emails = () => {
  const {searchText,emails} = useSelector(store=>store.appSlice);
  const [tempEmails,setTempEmails] = useState(emails);
  const dispatch = useDispatch();

  useEffect(()=>{
    const q = query(collection(db,"emails"), orderBy("createdAt","desc"));
    const ub = onSnapshot(q, (snapshot)=>{
      const allEmails = snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id}));
      dispatch(setEmails(allEmails));
      
    })
    //cleanup
    return ()=> ub();
  },[]);

    useEffect(()=>{
      const filterdEmail = emails?.filter((email)=>{
        return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
      })
      setTempEmails(filterdEmail)
    },[searchText, emails])

  return (
    <div>
      {
        tempEmails && tempEmails?.map((email)=> <Email email={email}/>)
      }
        
    </div>
  )
}

export default Emails