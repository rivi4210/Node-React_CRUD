import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import User from './Components/UsersFolder/user';
import Photo from './Components/PhotosFolder/photo';
import Post from './Components/PostsFolder/post';
import ToDo from './Components/ToDosFolder/toDo';
import AddToDo from './Components/ToDosFolder/add';

function App() {
  return (

    <>
      <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
          <li>
            <Link to='/photo'>Photo</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
          <li>
            <Link to='/todo'>ToDo</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
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
    </>

  );
}

export default App;
