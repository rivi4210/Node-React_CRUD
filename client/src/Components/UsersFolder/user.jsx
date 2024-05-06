import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Axios from "axios"
import useAxios from 'axios-hooks'
import { updateData, updateToDo, updateUsers } from "../ToDosFolder/toDosStore"
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
import UserItem from "./userItem"



import Grid from '@mui/material/Grid';

const User = () => {
    // const [data, setTodos] = useState([])
    const { addItem } = useFunction()
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    // const _id = user._id


    const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:5225/users"

    )
    const dataStore = useSelector(x => x.toDoer.users)
    console.log('user',data);
    if (data?.length) {
        dispatch(updateUsers(data))
        console.log('data',data);
        // console.log("llllllllllll"+dataStore.length);
    }
    
    // console.log('dataStore', dataStore);
    // console.log('datauseAxios', data);
    useEffect(() => {
        console.log('dataStroe', dataStore);
        if (dataStore?.length) {
            dispatch(updateUsers(data))
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
        await addItem("http://localhost:5225/users", { name, userName, address,email,phone})
        refetch()
    }


    return (
        <>
            {/* <button onClick={() => { setRefresh(true) }}>ADD ToDo</button><br /> */}

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    ADD User
                </Button>
                <br/>
                <br/>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                        <TextField
                            autoFocus
                            value={name}
                            margin="dense"
                            id="name"
                            label="enter User name"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            required={true}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            value={userName}
                            margin="dense"
                            id="name"
                            label="enter User userName"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            required={true}
                            onChange={e => { setUserName(e.target.value) }}
                        />
                        <TextField
                            autoFocus
                            value={address}
                            margin="dense"
                            id="name"
                            label="enter User address"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => { setAddress(e.target.value) }}
                        />
                        <TextField
                            autoFocus
                            value={email}
                            margin="dense"
                            id="name"
                            label="enter Eser email"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => { setEmail(e.target.value) }}
                        />
                        <TextField
                            autoFocus
                            value={phone}
                            margin="dense"
                            id="name"
                            label="enter User phone"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            required={true}
                            onChange={e => {
                                try {
                                    Number(e.target.value)
                                    setPhone(e.target.value)
                                 } catch (error) {
                                    setPhone(e.target.value)
                                 }
                                // setPhone(e.target.value) 
                            }}
                        />
                      
                    </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={() => { handleClose() }}>Cancel</Button>
                        <Button disabled={name === ''||userName === ''||phone=== ''} onClick={() => { submitFunction(); handleClose() }}>Add</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>


            <div className="toDo-List">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                {dataStore?.map((e) => {
                    return (
                        <Grid  item xs={6} >
                        <UserItem user={e} refetch={refetch} />
                        
                        </Grid>
                    )
                })}
                </Grid>
            </div>
        </>
    )
}

export default User