import React from 'react';
import  Headers  from './Components/Header';
import  Footer from './Components/Footer';

import Todo from './Components/Todo';
import SettingsForm from './Components/SettingsForm';

const App = () => {
 
    return (
      <>
      <Headers/>
      <Todo />
      <SettingsForm/>
      <Footer/>
      </>
    );
}

export default App;
