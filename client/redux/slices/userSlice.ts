import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

interface user{
    _id:string,
    name:string,
    email:string
}
interface userState extends user{
    isAuth:boolean,
    
}

const initialState:userState={
    isAuth:false,
    _id:"",
    name:"",
    email:""
}


const userSlice= createSlice({
  name:"user",
  initialState,
  reducers:{
    setuser:(state,action: PayloadAction<userState>)=>{
        state._id=action.payload._id
        state.isAuth=true
        state.email=action.payload.email
        state.name=action.payload.name
    }
    ,
    clearuser:(state)=>{
        state.isAuth=false
        state._id=""
        state.name=""
        state.email=""

    }
  }
})

export const {setuser,clearuser}=userSlice.actions
export default userSlice.reducer; 