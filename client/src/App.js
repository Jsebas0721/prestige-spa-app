
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import SignUp from "./SignUp";
import Login from "./features/users/Login";
import Signup from './features/users/Signup';
import { userLogout } from './features/users/usersSlice';
import { useHistory } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar';

function App() {

  const user = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const history = useHistory();

  
  function handleLogout(){
    dispatch(userLogout(null));
    history.push("/login");
  }

  return (
    <div className="app">
      <Header/>
      {user ? (
        <div>
          <h1>Welcome User: {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
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
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
