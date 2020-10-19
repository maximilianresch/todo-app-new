import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField required id="outlined-basic" label="e-mail" variant="outlined" />
      <TextField required id="outlined-basic" label="password" variant="outlined" />
      <TextField required id="outlined-basic" label="confirm password" variant="outlined" />
    </form>
  );
}