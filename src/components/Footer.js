import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mahesh-singla.wixsite.com/mahesh-singla"
      >
        Mahesh Singla
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    position: 'absolute',
    bottom: '0' ,
    width: '100%',
    textAlign: 'center'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Container>
          <Copyright />
        </Container>
      </footer>
    );
}
