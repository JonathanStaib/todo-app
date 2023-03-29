import { Pagination } from "@mantine/core";
import { useContext, useState } from "react";
import { ToDoContext } from "../../Context/Settings";

const List = ({ list, toggleComplete}) => {
  const {displayCount, complete} = useContext(ToDoContext);
  const {activePage, setPage } = useState(1);

  const listToRender = complete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage -1);
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);
  console.log('pageCount', pageCount);
  const displayList = listToRender.slice(listStart, listEnd);

  return(
    <>
    {displayList.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ))}
      <Pagination value={activePage} onChange={setPage} total={3} />
    </> 
  )
}

export default List;