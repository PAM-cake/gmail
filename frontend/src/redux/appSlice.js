import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        open:false,
        emails:[],
        selectedEmail:null,
        searchText:"",
    },
    reducers:{ //nothing just an actions or mulitiple actions maybe!
        setOpen:(state,action)=>{
            state.open = action.payload;

        },
        setEmails:(state,action) => {
            state.emails = action.payload;
        },
        setSelectedEmails:(state,action) => {
            state.selectedEmail = action.payload;
        },
        setSearchText:(state,action) => {
            state.searchText = action.payload;
        }
    }
})

export const {setOpen,setEmails,setSelectedEmails,setSearchText} = appSlice.actions;
export default appSlice.reducer;