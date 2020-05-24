import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    marginTop: '2rem',
  },
  tableContainer: {
      display: 'flex',
      justifyContent: 'center'
  },
  table: {
      width: '80%',
      [theme.breakpoints.down('sm')]: {
          width: '100%'
      },
      userSelect: 'none'
  }
}));

export default function Details({users}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Last Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.uid}>
                  <TableCell component="th" scope="row">
                    <Avatar
                      alt={user.displayName}
                      src="/broken-image.jpg"
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell>{user.displayName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {new Date(user.metadata.lastSignInTime).toLocaleTimeString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}
