import React from 'react';
import  Headers  from './Components/Header';
import  Footer from './Components/Footer';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Headers/>
      <Todo />
      <Footer></Footer>
      </>
    );
  }
}
