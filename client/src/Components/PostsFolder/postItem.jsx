
import Axios from "axios"
// import DeleteToDo from "./delete";
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
import { Checkbox, IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const PostItem = ({ post, refetch }) => {
    const { deleteItem, updateItem, updateItemById } = useFunction()
    // const [checked, setChecked] = useState(false)
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    const _id = post._id

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [count, setCount] = React.useState(post.count);

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


    const updateFunction = async () => {
        console.log("aaaaaa " + count);
        await updateItem("http://localhost:5225/posts", { _id, title, body });

        console.log('func', count);
        await refetch()
    }

    const updateLikeFunction = async () => {
        const url = "http://localhost:5225/posts/".concat(_id)

        await updateItemById(url, { _id, count: count + 1 });
        setCount(count + 1)
        await refetch()
    }


    const deletFunction = async () => {
        await deleteItem("http://localhost:5225/posts", _id);
        await refetch()
    }

    function notificationsLabel() {
        setCount(count + 1)
        return `${count} notifications`;
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
                        Task To Do
                    </Typography>
                    <Typography variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {post.body?.length < 50 ? post.body :
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>View Post</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {post.body}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button variant="outlined" onClick={handleClickOpen}>
                        Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Update</DialogTitle>
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
                        <DialogTitle>{"Are you sure you want to delete this Post?"}</DialogTitle>

                        <DialogActions>
                            <Button onClick={handleClose2}>Cancle</Button>
                            <Button onClick={() => { deletFunction(); handleClose2() }}>Delete</Button>
                        </DialogActions>
                    </Dialog>

                    <IconButton aria-label={notificationsLabel} onClick={() => { updateLikeFunction(); setCount(count + 1) }}>
                        {console.log(count)}
                        <Badge badgeContent={count} color="secondary">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                </CardActions>
            </React.Fragment>

        </div>
    );



    // console.log(task);
    return (
        <div>
            <Box sx={{ minWidth: 600  }}>

                
                        <Card variant="outlined">{card}</Card>

                 
            </Box>

        </div>
    )
}
export default PostItem






