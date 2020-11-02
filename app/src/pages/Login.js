import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles.css";
import axios from 'axios';
import * as auth from '../utils/auth';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useHistory()

  const onSubmit = async () => {
    console.log("onSubmit", {
      email,
      password,
    });

    const data = {
      email,
      password
    }

    const response = await axios.post("http:localhost:4000/login", data)

    if (response.data.success) {
      auth.saveUserToken(response.data.token)
      router.push("/me/todos")
    }

    console.log("response", response)
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="e-mail"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <div className="button">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}
