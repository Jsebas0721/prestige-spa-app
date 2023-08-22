import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./usersSlice";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState({});
    
    const dispatch = useDispatch();
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            dispatch(userLogin(user))
          });    
        }else{
          resp.json().then((errorData) => setError(errorData.error)); 
        }
      });
    }

    return (
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login:</h1>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        {error.length > 0 && (
          <ul style={{ color: "red" }}>
            <li key={error}>{error}</li>
          </ul>
        )}
        <button type="submit">Login</button>
      </form>
    )
}

export default Login;