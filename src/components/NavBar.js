import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F50057",
    marginBottom: "0.5rem",
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#fff'
  },
  icon: {
    cursor: 'pointer'
  },
  username: {
    cursor: 'pointer',
    marginRight: '2rem',
    userSelect: 'none'
  },
  logout: {
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '0.25rem 1rem'
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const { currentUser, onLogout } = useContext(UserContext)
  const logout = () => {
    onLogout();
    props.history.replace('/')
  }
    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            component={Link}
            to="/"
          >
            Presence System
          </Typography>
          {
            currentUser ? 
              <>
                <AccountCircle className={classes.icon}/>
                <Typography variant="body1" className={classes.username}>
                  {currentUser.displayName}
                </Typography>
                <Button
                  color="inherit"
                  className={classes.logout}
                  onClick={logout}
                >
                  Log Out
                </Button>
              </> : 
              null
          }
        </Toolbar>
      </AppBar>
    );
}

export default withRouter(NavBar)