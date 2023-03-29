import React, { useEffect, useState } from 'react';

export const ToDoContext = React.createContext();

const Context = ({children}) => {
  // const [defaultValues] = useState({
  //   difficulty: 4,
  // });
  // const [list, setList] = useState([]);
  const [complete, setComplete] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [sort, setSort] = useState('difficulty')
  
  const saveSettings = (settings) => {
    localStorage.setItem('settings', JSON.stringify({settings}));
  }

  useEffect(() => {
    const newSettings = JSON.parse(localStorage.getItem('settings'))
    if(newSettings){
      setComplete(newSettings.complete);
      setDisplayCount(newSettings.displayCount);
      setSort(newSettings.sort);
    }
  }, [])
  let values = { complete, setComplete, displayCount, setDisplayCount, sort, setSort, saveSettings }

  return(
    <ToDoContext.Provider value={values}>
      {children}
    </ToDoContext.Provider>
  )

}

export default Context;