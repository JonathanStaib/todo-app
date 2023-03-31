import testUsers from './lib/user';
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ error, setError ] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const _validateToken = (token) => {
    try{
      let validUser = jwt_decode(token);
      if(validUser){
        setUser(validUser);
        setLoggedIn(true);
        console.log('login success');
      }
    } catch(e){
      setError(e);
      console.log('error in validating token');
    }
  }

  const login = (username, password) => {
    let user = testUsers[username];
    if(user && user.password === password){
      try{
        _validateToken(user.token);
      }catch(e){
        setError(e);
        console.log('error in login')
      }
    }
  }

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };
  
  useEffect(() => {
    const cookieToken = cookie.load('auth');
    _validateToken(cookieToken);
  }, []);



  const values = {
    loggedIn, user, error, login, logout, can
  }

console.log('values', values);

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;