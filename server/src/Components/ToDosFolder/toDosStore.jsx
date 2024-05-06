import { createSlice } from "@reduxjs/toolkit"

const initVal=([])

const toDoer=createSlice({
    name:"dataToDo",
    initialState:initVal,
    reducers:{
        // add:(state,action)=>{
        //    const newState=[...state,action.payload]
        //    console.log(newState);
        //    return newState
        // },
        updateData:(state,action)=>{
            // const findToDo=state.find(e=>e.title===action.payload.title)//id
            state=action.payload
            console.log('state',state);
         },  
    }
})

export const {updateData}=toDoer.actions
export default toDoer.reducer