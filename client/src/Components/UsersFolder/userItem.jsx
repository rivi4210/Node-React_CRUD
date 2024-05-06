import Axios from "axios"
import { useEffect, useState } from "react";
import useFunction from '../CustemHook/custemHook'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";




const UserItem = ({ user,refetch }) => {
    const { deleteItem, updateItem ,updateCompItem} = useFunction()
    const [name, setName] = React.useState(user.name)
    const [userName, setUserName] = React.useState(user.userName)
    const [email, setEmail] = React.useState(user.email)
    const [address, setAddress] = React.useState(user.address)
    const [phone, setPhone] = React.useState(user.phone)


    const _id = user._id
  
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

   


    const updateFunction =async () => {
        await updateItem("http://localhost:5225/users", { _id, name, userName, address,email,phone });
        await refetch()
    }
  

    const deletFunction=async()=>{
        await deleteItem("http://localhost:5225/users", _id);
        await refetch()
        }

      const bull = (
        <Box
          component="div"
          sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}
        >
          .
        </Box>
      );
      
      const card = (
        <div display="flex" flex-direction="column" >
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              User
            </Typography>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.userName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.address}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.phone}
            </Typography>
            
          </CardContent>
          <CardActions>
          
          <Button variant="outlined" onClick={handleClickOpen}>
                    Update
                </Button>
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
                            label="enter name"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => setName(e.target.value)}
                        />
                        
                        <TextField
                            autoFocus
                            value={userName}
                            margin="dense"
                            id="name"
                            label="enter userName"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => { setUserName(e.target.value) }}
                        />
                        <TextField
                            autoFocus
                            value={address}
                            margin="dense"
                            id="name"
                            label="enter address"
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
                            label="enter email"
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
                            label="enter phone"
                            type="taxt"
                            fullWidth
                            variant="standard"
                            onChange={e => {
                                try {
                                    Number(e.target.value)
                                    setPhone(e.target.value)
                                } catch (error) {
                                    setPhone("")
                                }
                                //  setPhone(e.target.value)
                             }}
                        />
                        
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => { handleClose() }}>Cancel</Button>
                        <Button onClick={() => { updateFunction(); handleClose() }}>Update</Button>

                    </DialogActions>
                </Dialog>

                <Button variant="outlined" onClick={handleClickOpen2} >
                    Delete
                </Button>
                <Dialog
                    open={open2}
                    keepMounted
                    onClose={handleClose2}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Are you sure you want to delete this User?"}</DialogTitle>
                    
                    <DialogActions>
                        <Button onClick={handleClose2}>Cancle</Button>
                        <Button onClick={()=>{deletFunction();handleClose2()}}>Delete</Button>
                    </DialogActions>
                </Dialog>

       
                
          </CardActions>
        </React.Fragment>
        </div>
      );

    return (
        <div>
            <Box sx={{ minWidth: 350 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
           
        </div>
    )
}
export default UserItem






