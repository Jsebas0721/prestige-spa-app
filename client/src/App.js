
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
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
import { fetchMe } from './features/users/usersSlice';

function App() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const history = useHistory();

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
