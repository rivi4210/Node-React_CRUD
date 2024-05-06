import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./toDosStore"
import Axios from "axios"
import ToDo from "./toDo"
import { useNavigate } from "react-router-dom"

const AddToDo =({flag})=>{
    // const dispatch=useDispatch()
    // const toDos=useSelector(x=>x.toDoer)

    const[title,setTitle]=useState("")
    const[tags,setTags]=useState("")
    // const[finalTags,setFinalTags]=useState([""])
    const[completed,setCompleted]=useState(false)
    // const[clickFlag,setclickFlag]=useState(false)
    // const navigate=useNavigate()

    const submitFunction=async(e)=>{ 
        e.preventDefault()
        const {data}=await Axios.post("http://localhost:2552/todos",{title,tags,completed})
        setTitle("")
        setTags([""])
        setCompleted(false)
        console.log(data);
        // setAddFlag(false)
        flag()
        // navigate("/todo")   
}

    return(
        <>
        <form onSubmit={submitFunction}>
            <input value={title} 
            placeholder="enter toDo title" 
            required={true} 
            onChange={e=>setTitle(e.target.value)}/>

            <input  value={tags}
            placeholder="enter toDo tags" 
            onChange={e=>{setTags([e.target.value])}}/>

            <input value={completed}
            placeholder="enter toDo completed" 
            onChange={e=>{if(e.target.value) 
            setCompleted(e.target.value)}}/><br/>

            {/* <button onClick={()=>{dispatch(add({title,tags,completed}));setclickFlag(true)}}>Send...</button> */}
            <button disabled={title===''} type="submit">Send...</button>
        </form>
        {/* <input placeholder="enter toDo title" onBlur={e=>setTitle(e.target.value)}/> */}
        {/* <input placeholder="enter toDo tags" onBlur={e=>{setTags([e.target.value])}}/> */}
       
        {/* <checkBox /> */}
        {/* <input placeholder="enter toDo completed" onBlur={e=>{if(e.target.value) setCompleted(e.target.value)}}/><br/> */}
        {/* <button onClick={()=>{dispatch(add({title,tags,completed}));setclickFlag(true)}}>Send...</button> */}
        {/* {clickFlag ? <ToDo/>:""} */}
        </>
    )
}
export default AddToDo