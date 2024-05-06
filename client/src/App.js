import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import User from './Components/UsersFolder/user';
import Photo from './Components/PhotosFolder/photo';
import Post from './Components/PostsFolder/post';
import ToDo from './Components/ToDosFolder/toDo';
import AddToDo from './Components/ToDosFolder/add';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = ['Home', 'User','ToDo','Post','Photo'];


function App(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} >
                {/* {item} */}
                {item==="Home"? <Link style={{color:'white', textDecoration:'none'}}  to="/" >{item}</Link>:<Link style={{color:'white', textDecoration:'none'}} to={item}>{item}</Link> }
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
        <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/user' element={<User />} />
    <Route path='/photo' element={<Photo />} />
    <Route path='/post' element={<Post />} />
    <Route path='/todo' element={<ToDo />} >
    <Route index element={<></>}/>
      {/* <Route path='/todo/add' element={<AddToDo/>}/>
      <Route path='/todo/update' element={<UpdateToDo/>}/>
      <Route path='/todo/delete'/> */}
    </Route>
  </Routes>
      </Box>
    </Box>
    


    // <>
    //   <nav>
    //     <ul>
    //     <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/user'>User</Link>
    //       </li>
    //       <li>
    //         <Link to='/photo'>Photo</Link>
    //       </li>
    //       <li>
    //         <Link to='/post'>Post</Link>
    //       </li>
    //       <li>
    //         <Link to='/todo'>ToDo</Link>
    //       </li>
    //     </ul>
    //   </nav>
      // <Routes>
      //   <Route path='/' element={<Home />} />
      //   <Route path='/user' element={<User />} />
      //   <Route path='/photo' element={<Photo />} />
      //   <Route path='/post' element={<Post />} />
      //   <Route path='/todo' element={<ToDo />} >
      //   <Route index element={<></>}/>
      //     {/* <Route path='/todo/add' element={<AddToDo/>}/>
      //     <Route path='/todo/update' element={<UpdateToDo/>}/>
      //     <Route path='/todo/delete'/> */}
      //   </Route>
      // </Routes>
    // </>

  );
}

export default App;







  

