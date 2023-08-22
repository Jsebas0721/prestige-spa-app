
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import SignUp from "./SignUp";
import Login from "./features/users/Login";
import { userLogout } from './features/users/usersSlice';
import { useHistory } from "react-router-dom";

function App() {

  const user = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(user)
  function handleLogout(){
    dispatch(userLogout(null));
    history.push("/login");
  }

  return (
    <div className="app">
      {user ? (
        <div>
          <h1>Welcome User: {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
