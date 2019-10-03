import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../hooks/useStyles'; // custom React hook!!!!
import { useInput } from '../hooks/useInput';

import Button from '../theme/Button';

export default function SignupForm() {
  const classes = useStyles();
  const [username, handleUsername, setUsername] = useInput('username', '');
  const [email, handleEmail, setEmail] = useInput('email', '');
  const [role, handleRole, setRole] = useInput('role', '');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const clearForm = e => {
    e.preventDefault();
    setUsername('');
    setEmail('');
    setRole('');
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={handleUsername}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="email"
            className={classes.textField}
            value={email}
            onChange={handleEmail}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="role"
            className={classes.textField}
            value={role}
            onChange={handleRole}
            margin="normal"
            variant="outlined"
          />
          <Button color="blue" type="submit">
            Submit
          </Button>
          <Button color="red" onClick={clearForm}>
            Clear
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
