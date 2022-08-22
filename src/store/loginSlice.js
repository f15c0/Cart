
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
                    users:["Admin","Manager","User" ],
                    userInfo:"N/A"
            }

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userInfo=action.payload;
        }
    }
});

export const {addUser}= loginSlice.actions;
export default loginSlice.reducer;
