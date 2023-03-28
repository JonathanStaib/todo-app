import React, { useState } from 'react';

export const ToDoContext = React.createContext();

const Context = ({children}) => {
  // const [defaultValues] = useState({
  //   difficulty: 4,
  // });
  // const [list, setList] = useState([]);
  const [complete, setcomplete] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [sort, setSort] = useState('difficulty')
  
  
  let values = { complete, displayCount, sort }

  return(
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )

}

export default Context;