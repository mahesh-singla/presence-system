import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { Tooltip } from '@material-ui/core';
import broken from '../assets/broken.png';

const useStyles = makeStyles(theme => ({
    root: {
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: '#f50057',
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

export default function Total({users}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AvatarGroup max={4}>
          {users.map((user) => (
            <Tooltip title={user.displayName || "Unknown"} key={user.uid}>
              <Avatar
                alt={user.displayName}
                src={broken}
                className={classes.avatar}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
    );
}
