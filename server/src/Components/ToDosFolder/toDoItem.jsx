import Axios from "axios"
import DeleteToDo from "./delete";
import { useEffect, useState } from "react";
import useFunction from '../CustemHook/custemHook'

const ToDoItem = ({task}) => {
    const {deleteItem,updateItem}=useFunction()
    const [up,setUp]=useState(false)
    const[title,setTitle]=useState("")
    const[tags,setTags]=useState("")
    const[completed,setCompleted]=useState(false)
    const _id=task._id
    //     })
    //     // console.log();
    //     // props.set(prev=>!prev) 
    // }

   const submitFunction=()=>{
    // console.log({id,title,tags,completed});
    updateItem("http://localhost:2552/todos",{_id,title,tags,completed})
    setUp(false)
   }
   
    console.log(task);
    return (
        <div>
            <h3>{task.title}</h3>
            <div>{`title: ${task.title}  completed: ${task.completed}  tags:`}   {task.tags.map(ele => <span>{ele}</span>)}</div>
            <button onClick={()=>{deleteItem("http://localhost:2552/todos",task._id)}}>Delete {task._id}</button>
            <button onClick={()=>{setUp(true)}}>Update {task._id}</button>
            {/* <button onClick={<DeleteToDo task={task}/>}>Delete {task._id}</button> */}
            {up ?
                <form onSubmit={ submitFunction}>
                    <input value={title}
                        placeholder="enter toDo title"
                        required={true}
                        onChange={e => setTitle(e.target.value)} />

                    <input value={tags}
                        placeholder="enter toDo tags"
                        onChange={e => { setTags([e.target.value]) }} />

                    <input value={completed}
                        placeholder="enter toDo completed"
                        onChange={e => {
                            if (e.target.value)
                                setCompleted(e.target.value)
                        }} /><br />

                    {/* <button onClick={()=>{dispatch(add({title,tags,completed}));setclickFlag(true)}}>Send...</button> */}
                    <button disabled={title === ''} type="submit">Send...</button>
                </form> : ""}
            
        </div>
    )
}
export default ToDoItem