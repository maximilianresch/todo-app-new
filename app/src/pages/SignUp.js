import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as auth from "../utils/auth";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const router = useHistory();

  const onSubmit = async () => {
    console.log("onSubmit", {
      email,
      password,
    });

    const data = {
      email,
      password,
    };

    const response = await axios.post("http://localhost:4000/signup", data);

    if (response.data.success) {
      auth.getUserToken(response.data.token);
      router.push("/me/todos");

      console.log("response", response);
    }
  };
  return (
    <div className="form">
      <h1>SignUp</h1>
      <form
        className="signup-form"
        noValidate
        autoComplete="off"
        action="/signup"
        method="POST"
      >
        <TextField
          required
          id="outlined-basic"
          label="e-mail"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="confirm password"
          variant="outlined"
        />
      </form>
      <div className="button">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          SignUp
        </Button>
      </div>
    </div>
  );
}
