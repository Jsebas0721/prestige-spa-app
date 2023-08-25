import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./usersSlice";
import { useHistory} from "react-router-dom"

function Signup(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors]= useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) =>{ 
          dispatch(userLogin(user))
          history.push(`/profile/${user.username}`)
        });
      }else{
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

    return(
      <form className="signup" onSubmit={handleSubmit}>
         <h1>SIGN UP</h1>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label>Password Confirmation:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /><br/>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit" className="signup-submit">Sign Up</button>
      </form>
    )
}

export default Signup;