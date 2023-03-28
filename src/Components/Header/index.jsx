import React, { useContext } from "react";
import { ToDoContext } from "../../Context/Settings";

const Header = () => {
  const { incomplete } = useContext(ToDoContext);

  return(
    <>
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
    </>
  )
}

export default Header;