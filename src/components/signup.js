import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
import App from '../index'
import { useStyles } from '../hooks/useStyles'; // custom React hook!!!!
import { useInput } from '../hooks/useInput';

import Button from '../theme/Button';

export default function SignupForm() {
  const classes = useStyles();
  const [username, handleUsername, setUsername] = useInput('username', '');
  const [email, handleEmail, setEmail] = useInput('email', '');
  const [password, handlePassword, setRole] = useInput('role', '');

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

      <h2>Start Trading Crypto Currencies</h2>
      <p>All we need is an email!</p>
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
            label="password"
            className={classes.textField}
            value={password}
            onChange={handlePassword}
            margin="normal"
            variant="outlined"
          />
          <Button color="blue" type="submit">
            Submit
          </Button>
          <Button color="red" onClick={clearForm}>
            Clear
          </Button>
          <Router>
          {/* <Route path='/' component={App} /> */}
          <NavLink to='/'><button className="aBtn">Close</button></NavLink>
        </Router>
        </fieldset>
      </form>
    </div>
  );
}
