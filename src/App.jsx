import React, { useContext } from 'react';
import  Headers  from './Components/Header';
import  Footer from './Components/Footer';

import Todo from './Components/Todo';
import SettingsForm from './Components/SettingsForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { When } from 'react-if';
import { AuthContext } from './Context/Auth';

const App = () => {
  const { loggedIn, can } = useContext(AuthContext);
 
    return (
      <>
      <BrowserRouter>
      <Headers/>
      <When condition={loggedIn}>
       <Routes>
         <Route path="/" element={<Todo/>}/>
         <Route path="/settings" element={<SettingsForm/>}/>
       </Routes>
      </When>
      <Footer/>
      </BrowserRouter>
      </>
    );
}

export default App;
