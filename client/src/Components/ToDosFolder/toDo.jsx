import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddToDo from "./add"
import ToDoItem from "./toDoItem"
import Axios from "axios"
import useAxios from 'axios-hooks'
import { updateData, updateToDo } from "./toDosStore"
import useFunction from '../CustemHook/custemHook'
import toDoer from "../ToDosFolder/toDosStore";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from "@mui/material"
import Grid from '@mui/material/Grid';



const ToDo = () => {
    // const [data, setTodos] = useState([])
    const { addItem } = useFunction()
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    // const[finalTags,setFinalTags]=useState([""])
    const [completed, setCompleted] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);


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
        "http://localhost:5225/todos"

    )
    const dataStore = useSelector(x => x.toDoer.todos)
    if (data?.length) {
        dispatch(updateToDo(data))
        // console.log('data',data);
    }
    
    // console.log('dataStore', dataStore);
    // console.log('datauseAxios', data);
    useEffect(() => {
        console.log('data', dataStore);
        // fetchData(data)
        if (dataStore?.length) {
            dispatch(updateToDo(data))
        }
    }, [dataStore,data])

    // console.log(dataStore);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const submitFunction = async () => {
        await addItem("http://localhost:5225/todos", { title, tags, completed })
        {console.log('tags',tags);}
        refetch()
    }
    // if (toDos.length === 0) return (<h1>Loading...</h1>)

    // const[useEffectFlag,setuseEffectFlag]=useState(false)

    return (
        <>
            {/* <button onClick={() => { setRefresh(true) }}>ADD ToDo</button><br /> */}

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    ADD ToDo
                </Button>
                <br/>
                <br/>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                        <TextField
                            autoFocus
                            value={title}
                            margin="dense"
                            id="name"
                            label="enter toDo title"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            required={true}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            value={tags}
                            margin="dense"
                            id="name"
                            label="enter toDo tags"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => { setTags(e.target.value.split(",")) }}
                            
                        />
                        {/* <TextField
                            autoFocus
                            value={completed}
                            margin="dense"
                            id="name"
                            label="enter toDo completed"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => {
                                if (e.target.value)
                                    setCompleted(e.target.value)
                            }}
                        /> */}
                        <Checkbox  
                        label="toDo completed"
                        value={completed}
                        checked={completed}
                        onChange={e => {
                            setCompleted(!completed)
                        }} />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => { handleClose() }}>Cancel</Button>
                        <Button disabled={title === ''} onClick={() => { submitFunction(); handleClose() }}>Add</Button>

                    </DialogActions>
                </Dialog>
            </React.Fragment>



            {/* <button onClick={() => { { setRefresh(true) } }}>ADD ToDo</button><br /> */}
            {/* {refresh ? <AddToDo flag={setFlag} /> : ""} */}
            {/* {refresh ?
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
                        }} /><br /> */}

            {/* <button onClick={()=>{dispatch(add({title,tags,completed}));setclickFlag(true)}}>Send...</button> */}
            {/* <button disabled={title === ''} type="submit">Send...</button>
                </form> : ""} */}





            <div className="toDo-List">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                {dataStore?.map((e) => {
                    return (
                        <Grid  item xs={6} >
                        <ToDoItem task={e} refetch={refetch} />
                        {/* //<div>{`title: ${e.title}  completed: ${e.completed}  tags:`}   {e.tags.map(ele=><span>{ele}</span>)}</div> */}
                        </Grid>)
                })}
            </Grid></div>



            {/* <button onClick={() => { { setRefresh(true) } }}>UPDATE ToDo</button><br /> */}
        </>
    )
}

export default ToDo