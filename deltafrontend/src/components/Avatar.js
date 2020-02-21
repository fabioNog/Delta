import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  
  const fileSelectedHandler = e => {
    console.log(e)
  }

  return (
    <div className={classes.root}>
      <Avatar
        variant={'rounded'}          
      />
      <input type="file" onChange={fileSelectedHandler}></input>
    </div>
  );
}