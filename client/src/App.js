
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
// import SignUp from "./SignUp";
import Login from "./features/users/Login";
import Signup from './features/users/Signup';
import Header from './Header';
import NavBar from './NavBar';
import UserNavBar from './UserNavBar';
import Services from './Services';
import Profile from './Profile';
import { useEffect } from 'react';
import { userLogin } from './features/users/usersSlice';
import { useHistory } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() =>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
      }else{
        history.push("/");
      }
    });
  },[dispatch])
  
  const user = useSelector((state) => state.users.entities);
  console.log(user);
  

  return (
    <div className="app">
      <Header/>
      {user ? (
        <div>
          <UserNavBar/>
          <h1>Welcome User: {user.username}</h1>
          <Switch>
            <Route exact path={`/profile/${user.username}`}>
              <Profile/>
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
