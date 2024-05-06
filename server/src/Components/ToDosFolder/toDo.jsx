import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddToDo from "./add"
import ToDoItem from "./toDoItem"
import Axios from "axios"
import useAxios from 'axios-hooks'
import { updateData } from "./toDosStore"
import useFunction from '../CustemHook/custemHook'



const ToDo = () => {
    // const [data, setTodos] = useState([])
    const { addItem } = useFunction()
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    // const[finalTags,setFinalTags]=useState([""])
    const [completed, setCompleted] = useState(false)

    const dataStore = useSelector(x => x.toDoer)
    console.log('dataStore',dataStore);
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()

    // const setFlag = () => {
    //     setRefresh(false)
    // }
    // const toDos=useSelector(x=>x.toDoer)
    // useEffect(()=>{ 
    //     setuseEffectFlag(true)
    // },[])
    // const fetchData=async(data)=>{
    //     if (data?.length) {
    //         await dispatch(updateData({payload:data}))
    //      }
    // }

    const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:2552/todos"
    )
    useEffect(() => {
        console.log('data', data);
        // fetchData(data)
        if (data?.length) {
           dispatch(updateData({payload:data}))
        }
    }, [dataStore])

console.log(dataStore);

    const submitFunction = () => {
        addItem("http://localhost:2552/todos", { title, tags, completed })
    }
    // if (toDos.length === 0) return (<h1>Loading...</h1>)

    // const[useEffectFlag,setuseEffectFlag]=useState(false)

    return (
        <>
            <div className="toDo-List">
                {dataStore?.map((e) => {
                    return (
                        <ToDoItem task={e} />
                        //<div>{`title: ${e.title}  completed: ${e.completed}  tags:`}   {e.tags.map(ele=><span>{ele}</span>)}</div>
                    )
                })},
            </div>

            <button onClick={() => { setRefresh(true) }}>ADD ToDo</button><br />
            {/* <button onClick={() => { { setRefresh(true) } }}>ADD ToDo</button><br /> */}
            {/* {refresh ? <AddToDo flag={setFlag} /> : ""} */}
            {refresh ?
                <form onSubmit={submitFunction}>
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

            {/* <button onClick={() => { { setRefresh(true) } }}>UPDATE ToDo</button><br /> */}
        </>
    )
}

export default ToDo