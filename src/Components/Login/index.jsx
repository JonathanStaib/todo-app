import { Button } from "@mantine/core";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth";

const Login = () => {
  // console.log(AuthContext);
  const {login, logout, loggedIn} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
  }
    return(
      <>
      {!loggedIn? 
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <label>Password:
          <input onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <button type="submit">Login!</button>
      </form>
      :
  
      <Button onClick={logout}>Logout</Button>
        }
      </>
    )
}

export default Login;
