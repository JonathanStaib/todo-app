import React, { useState } from 'react';

export const ToDoContext = React.createContext();

const Context = ({children}) => {
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  
  let values = { list, incomplete, setIncomplete, setList, defaultValues}

  return(
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )

}

export default Context;