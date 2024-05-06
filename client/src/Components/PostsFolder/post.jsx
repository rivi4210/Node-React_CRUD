
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"
import useAxios from 'axios-hooks'
import { updateData, updatePosts, updateToDo } from "../ToDosFolder/toDosStore"
import useFunction from '../CustemHook/custemHook'
import toDoer from "../ToDosFolder/toDosStore"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from "@mui/material"
import PostItem from "./postItem"

import Grid from '@mui/material/Grid';



const Post = () => {
    // const [data, setTodos] = useState([])
    const { addItem } = useFunction()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    // const[finalTags,setFinalTags]=useState([""])
    // const [completed, setCompleted] = useState("")
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(0);


    const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:5225/posts"

    )
    const dataStore = useSelector(x => x.toDoer.posts)
    if (data?.length) {
        dispatch(updatePosts(data))
        console.log('data', data);
    }

    console.log('dataStore', dataStore);
    console.log('datauseAxios', data);
    useEffect(() => {
        console.log('data', dataStore);
        if (dataStore?.length) {
            dispatch(updatePosts(data))
        }
    }, [dataStore, data])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const submitFunction = async () => {
        await addItem("http://localhost:5225/posts", { title, body, count: 0 })
        console.log({ title, body, count: 0 });
        refetch()
    }


    return (
        <>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    ADD Post
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
                            label="enter post title"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            required={true}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            value={body}
                            margin="dense"
                            id="name"
                            label="enter body"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => { setBody(e.target.value) }}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => { handleClose() }}>Cancel</Button>
                        <Button disabled={title === ''} onClick={() => { submitFunction(); handleClose() }}>Add</Button>

                    </DialogActions>
                </Dialog>
            </React.Fragment>


            <div className="toDo-List">
               
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                   
                        {dataStore?.map((e) => {
                            return (
                                 <Grid  item xs={6} >
                                <PostItem sx={{nimHeight: 350}} post={e} refetch={refetch} />
                            </Grid>
                            )
                        })} 
                </Grid>

            </div>

        </>
    )
}

export default Post