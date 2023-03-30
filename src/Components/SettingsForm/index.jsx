import React, { useContext, useState } from 'react';
import { Switch, NumberInput, TextInput, Button, Grid, Card, Text } from '@mantine/core';
import { ToDoContext } from '../../Context/Settings';
import {When} from 'react-if';
import { IconSettings } from '@tabler/icons-react';
import useStyles from '../../hooks/styles';

const SettingsForm = () => {

  const { classes } = useStyles();
  const [show, setShow] = useState(false);

  const { complete, setComplete, setDisplayCount, displayCount, sort, setSort, saveSettings  } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveSettings();
  }
  return(
    <>
      <h1 className={classes.h1}>Manage Settings<IconSettings/></h1>

      <Grid style={{width: '80%', margin: 'auto'}}>
      <Grid.Col xs={12} s={4}>
        <Card w border>
      <form onSubmit={handleSubmit}>
      <h2>Update Settings</h2>
      <Switch label="Show Completed ToDos" checked={complete} onChange={(e) => setComplete(e.currentTarget.checked)}/>
      <NumberInput label="Items Per Page"
      defaultValue={3}
      onChange={(value)=> setDisplayCount(value)}
      />
      <TextInput label='Sort Difficulty' placeholder='difficulty' onChange={(value)=> setSort(value)}/>
      <Button type="submit">Show New Settings</Button>
      </form>
      </Card>
      </Grid.Col> 

      <Grid.Col xs={12} s={4}>
      <When condition={show}>
        <Card>
          <Text m='xl' fontSize='xl' weight='bold'> Updated Settings</Text>
          <Text m='sm'>{complete ? 'Show' : 'Hide'} Completed ToDos</Text>
          <Text m="sm"> Items Per Page: {displayCount}</Text>
          <Text m='sm'>Sort Keyword: {sort}</Text>
        </Card>
      </When>
      </Grid.Col> 
      </Grid>
    </>
  )
}

export default SettingsForm;