import React, { useContext, useState } from 'react';
import Headers from "../Header";
import Footer from "../Footer";
import { Switch, NumberInput, TextInput, Button } from '@mantine/core';
import { ToDoContext } from '../../Context/Settings';
import {When} from 'react-if';


const SettingsForm = () => {

  const [show, setShow] = useState(false);

  const { complete, setComplete, setDisplayCount, displayCount, sort, setSort, saveSettings  } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleClick = () => {
    setShow(true);
  }
  return(
    <>
    <Headers/>
      <h1>Manage Settings</h1>
      <form onSubmit={handleSubmit}>
      <h2>Update Settings</h2>
      <Switch label="Show Completed ToDos" checked={complete} onChange={(e) => setComplete(e.currentTarget.checked)}/>
      <NumberInput label="Items Per Page"/>
      <TextInput label='Sort Difficulty' placeholder='difficulty'/>
      <Button onClick={handleClick}>Show New Settings</Button>
      <When condition={show}>
      </When>
      </form>
    <Footer/>
    </>
  )
}

export default SettingsForm;