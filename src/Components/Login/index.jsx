import { Button, Group, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { If, Then, Else } from "react-if";
import useForm from "../../hooks/form";

const Login = () => {
  // console.log(AuthContext);
  const {login, logout, loggedIn} = useContext(AuthContext);
  const [defaultValues] = useState({});

  const {handleChange, handleSubmit} = useForm( handleLogin, defaultValues);
  
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  function handleLogin(user){
     console.log('username', user.username)
     console.log('pass', user.password)
     login(user.username, user.password);
   }

    return(
      <>
        <If condition={loggedIn}>
        <Then>
          <Button color='red' onClick={logout}>Log Out</Button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
          <Group>
            <TextInput name="username" placeholder="Username" onChange={handleChange}/>
            <TextInput name="password" placeholder="Password" onChange={handleChange}/>
            <Button color="gray.7" type="submit">Log In</Button>
          </Group>
          </form>
        </Else>
        </If>
        {/* {!loggedIn? 
        <form onSubmit={handleSubmit}>
          <label placeholder="username">
            <input onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label placeholder="password">
            <input onChange={(event) => setPassword(event.target.value)}/>
          </label>
          <button color="green" type="submit">Login!</button>
        </form>
        :
      
        <Button color="gray.8" onClick={logout}>Logout</Button>
          } */}
      </>
    )
  }
  
export default Login;
