import Axios from "axios"
import DeleteToDo from "./delete";
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



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";




const ToDoItem = ({ task,refetch }) => {
    const { deleteItem, updateItem ,updateItemById} = useFunction()
    // const [checked, setChecked] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [tags, setTags] = useState(task.tags)
    const [completed, setCompleted] = useState(task.completed)
    const [completed2, setCompleted2] = useState(task.completed)
    const _id = task._id
  
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
    const handleCloseCancel = () => {
        setCompleted2(completed)
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleChecked = async(event) => {
        // debugger
        
        setCompleted(prev=>!prev);
        console.log("event.target.checked "+event.target.checked);
        
        // setCompleted(!completed)
    
    };
    const handleChecked2 = async(event) => {
        // debugger
        setCompleted2(event.target.checked);
        // setCompleted(!completed)
    
    };

    const updateFunction =async () => {
        // console.log({id,title,tags,completed});
        // debugger
        setCompleted(completed2)
        await updateItem("http://localhost:5225/todos", { _id, title, tags, completed:completed2 });
        await refetch()
        // setUp(false)
    }
    const updateCompFunction =async (e) => {
        // console.log({id,title,tags,completed});
        const url="http://localhost:5225/todos/".concat(_id)
        // console.log(completed);
        await updateItemById(url, { _id, completed:e.target.checked });
        await refetch()
        // setUp(false)
    }

    const deletFunction=async()=>{
        await deleteItem("http://localhost:5225/todos", task._id);
        await refetch()
        }


    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction="up" ref={ref} {...props} />;
    //   });

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
              Task To Do
            </Typography>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.tags.join(",")}
            </Typography>
            {/* <Typography variant="body2">
              {task.completed}
            </Typography> */}
            {/* <label>toDo completed</label>
            <Checkbox  
            // label="toDo completed" 
            value={completed}
            checked={task.completed}  
            onChange={(e)=>{handleChecked(e)}}/> */}
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
                            value={title}
                            margin="dense"
                            id="name"
                            label="enter toDo title"
                            type="taxt"
                            fullWidth
                            variant="standard"
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
                        <Checkbox  
                        label="toDo completed"
                        value={completed2}
                        checked={completed2}
                        onChange={ handleChecked2} />
                    
                        
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => { handleCloseCancel() }}>Cancel</Button>
                        <Button onClick={() => { updateFunction(); handleClose() }}>Update</Button>

                    </DialogActions>
                </Dialog>

                <Button variant="outlined" onClick={handleClickOpen2} >
                    Delete
                </Button>
                <Dialog
                    open={open2}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose2}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Are you sure you want to delete this Task?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose2}>Cancle</Button>
                        <Button onClick={()=>{deletFunction();handleClose2()}}>Delete</Button>
                    </DialogActions>
                </Dialog>

            <Checkbox  
            // label="toDo completed" 
            value={completed}
            checked={completed}  
            onChange={(e)=>{handleChecked(e);updateCompFunction(e)}}/>
                
          </CardActions>
        </React.Fragment>
        </div>
      );
      


    // console.log(task);
    return (
        <div>
            
            <Box sx={{ minWidth: 350 ,flexGrow:1}}>
              
                  
                        <Card variant="outlined">{card}</Card> 
                    
                    
               
            
    </Box>
           
        </div>
    )
}
export default ToDoItem




