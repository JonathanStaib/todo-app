import { createStyles, Header, Text, Navbar } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
// import { ToDoContext } from "../../Context/Settings";
const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    width: '100%',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md
  },
  link: {
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    textDecoration: 'none',
  }
}))
const Headers = () => {
  // const { complete } = useContext(ToDoContext);
  const { classes } = useStyles();
  return(
    <>
      <Header>
        <Navbar className={classes.navbar}>
          <Link className={classes.link} to="/" >Home</Link>
          <Link className={classes.link} to="/settings" >Settings</Link>
        </Navbar>
      </Header>
        {/* <h1 data-testid="todo-h1">To Do List: {complete} items pending</h1> */}
    </>
  )
}

export default Headers;