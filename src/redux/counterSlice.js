import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({

    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,actions)=>{
            state.value=state.value+actions.payload
        },
        decrement:(state,actions)=>{
            state.value=state.value-
            actions.payload
        },
        Reset:(state)=>{
            state.value=state.value=0
        }
    }

})

export const {increment,decrement,Reset}=counterSlice.actions
export default counterSlice.reducer