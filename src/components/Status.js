import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContextProvider'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Details from './Details';
import Total from './Total';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  head: {
    textAlign: "center",
    color: "#f50057",
    borderTop: "1px solid #f50057",
    borderBottom: "1px solid #f50057",
    fontWeight: "600",
  },
}));


function Status(props) {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(UserContext);
  const classes = useStyles();
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("https://us-central1-presence-system-9c93d.cloudfunctions.net/api");
        setUsers(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  if (!currentUser) {
        props.history.replace('/login');
    }   
    return (
      <div className={classes.root}>
        <Total users={users}/>
        <Typography variant="h5" className={classes.head}>
          Login Record
        </Typography>
        <Details users={users}/>
      </div>
    );
}

export default withRouter(Status)