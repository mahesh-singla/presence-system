import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '80vh',
        marginLeft: '1rem'
    }
}))

function Status(props) {
    const { currentUser } = useContext(UserContext);
    const classes = useStyles();
    if (!currentUser) {
        props.history.replace('/login');
    }   
    return (
        <div className={classes.root}>
            Status
        </div>
    )
}

export default withRouter(Status)