import { Pagination, Card, Badge, Group, Text, CloseButton} from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { ToDoContext } from "../../Context/Settings";
import Auth from "../Auth";
import { If, Then, Else } from "react-if";

const List = ({ list, toggleComplete, deleteItem}) => {

  const {displayCount, complete} = useContext(ToDoContext);
  const {can, loggedIn} = useContext(AuthContext);
  const [activePage, setPage ] = useState(1);

  console.log(list);
  const listToRender = complete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage -1);
  console.log(listStart)
  const listEnd = listStart + displayCount;
  console.log(listEnd)
  const pageCount = Math.ceil(listToRender.length / displayCount);
  console.log('pageCount', pageCount);
  const displayList = listToRender.slice(listStart, listEnd);

  console.log(displayList);

  return(
    <>
    {displayList.map(item => (
      // <div key={item.id}>
      //   <p>{item.text}</p>
      //   <p><small>Assigned to: {item.assignee}</small></p>
      //   <p><small>Difficulty: {item.difficulty}</small></p>
      //   <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
      //   <hr />
      // </div>
      <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <If condition={loggedIn && can('update')}>
                 <Then>
                  <Badge
                  onClick={() => toggleComplete(item.id)}
                  color={item.complete ? 'red': 'green'}
                  variant="filled"
                  m="3px"
                >
                  {item.complete ? 'Complete' : 'Pending'}
                 </Badge>
                </Then>
                <Else>
                    <Badge
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Else>
                </If>
                <Text data-testid={`${item._id}-assignee`}>{item.assignee}</Text>
                <Auth capabilities='delete'>
                  <CloseButton
                    title="close item"
                    onClick={()=> deleteItem(item._id)}
                  />
                </Auth>
              </Group>
            </Group>
          </Card.Section>
          <Text mt="sm">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
    ))}
      <Pagination value={activePage} onChange={setPage} total={3} />
    </> 
  )
}

export default List;