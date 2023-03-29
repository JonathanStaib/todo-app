import React from 'react';
import  Headers  from './Components/Header';
import  Footer from './Components/Footer';

import Todo from './Components/Todo';
import SettingsForm from './Components/SettingsForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
 
    return (
      <>
      <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/settings" element={<SettingsForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    );
}

export default App;
