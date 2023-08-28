
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import Login from "./features/users/Login";
import Signup from './features/users/Signup';
import Header from './Header';
import NavBar from './NavBar';
import UserNavBar from './UserNavBar';
import Services from './Services';
import Profile from './Profile';
import { useEffect } from 'react';
import { fetchMe } from './features/users/usersSlice';
import Home from './Home';

function App() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchMe());
  },[dispatch])
  
 
  console.log(user);

  return (
    <div className="app">
      <Header/>
      {user ? (
        <div>
          <UserNavBar/>
          <h1>Welcome User: {user.username}</h1>
          <Routes>
            <Route exact path={`/profile/${user.username}`} element={<Profile/>}/>
          </Routes>
        </div>
      ) : (
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/services" element={<Services/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
