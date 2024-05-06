import { createSlice } from "@reduxjs/toolkit"
import useAxios from 'axios-hooks'

const initVal=({todos:[]},{photos:[]},{posts:[]},{users:[]})
// const load=async(url)=>{
//     const [{ data, loading, error }, refetch] =  useAxios(
//         url
//     )
//     return  data
// }

const toDoer=createSlice({
    name:"dataToDo",
    initialState:initVal,
    reducers:{
        // add:(state,action)=>{
        //    const newState=[...state,action.payload]
        //    console.log(newState);
        //    return newState
        // },
        updateToDo:(state,action)=>{
            // const findToDo=state.find(e=>e.title===action.payload.title)//id
            state.todos=action.payload
            console.log('state',state.todos);
            // refetch()
         }, 
         updatePhotos:(state,action)=>{
            // const findToDo=state.find(e=>e.title===action.payload.title)//id
            state.photos=action.payload
            console.log('Photosstate',state.photos);
            // refetch()
         }, 
         updatePosts:(state,action)=>{
            // const findToDo=state.find(e=>e.title===action.payload.title)//id
            state.posts=action.payload
            console.log('Posts',state.posts);
            // refetch()
         },
         updateUsers:(state,action)=>{
            // const findToDo=state.find(e=>e.title===action.payload.title)//id
            state.users=action.payload
            console.log('Users',state.users);
            // refetch()
         }
        //  loadData:(state,action)=>{
        //     // const findToDo=state.find(e=>e.title===action.payload.title)//id
            
        //     state=action.payload
        //     console.log('state',state);
        //    return load(action.payload)

        //  } 
    }
})
// ,loadData
export const {updateToDo,updatePhotos,updatePosts,updateUsers}=toDoer.actions
export default toDoer.reducer