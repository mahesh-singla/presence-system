import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    },
    home: {
        marginTop: '3rem',
        textDecoration: 'none'
    }
}))

export default function Error() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="h3">
          The requested page is not available.
        </Typography>
            <Typography component={Link} to='/' className={classes.home}>
            Go to Home
        </Typography>
      </div>
    );
}
