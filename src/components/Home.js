import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../context/UserContextProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '4rem'
  },
  repo: {
    textDecoration: 'none',
    "&:hover": {
      textDecoration: "none",
    },
  },
  login: {
    border: "1px solid #fff",
    padding: "0.5rem 2rem",
    marginTop: '5rem',
      '&:hover': {
        textDecoration: 'none'
    },
    fontWeight: '800',
    fontSize: '3rem'
  }
}));

export default function Home() {
  const classes = useStyles();
  const { currentUser } = useContext(UserContext);
    return (
      <div className={classes.root}>
        <Typography variant="h4">Navigus CU Campus Hiring 21</Typography>
        <Typography>
          Github:{" "}
          <a
            href="https://github.com/mahesh-singla/presence-system.git"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.repo}
          >
            Click here for Github Repository
          </a>
        </Typography>
        <Typography>
          Developed By:{" "}
          <a
            href="https://mahesh-singla.wixsite.com/mahesh-singla"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.repo}
          >
            Mahesh Singla
          </a>
        </Typography>
        <Typography>Registration Number: 1702693</Typography>
        {!currentUser ? (
          <Button
            color="inherit"
            className={classes.login}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        ) : (
          <Button
            color="inherit"
            className={classes.login}
            component={Link}
            to="/status"
          >
            Status
          </Button>
        )}
      </div>
    );
}
