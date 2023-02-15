import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const verifyEmail = (em) => {
    if (email === "") return false;
    const reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    setError((prev) => ({ email: !reg.test(em), password: prev.password }));
  };
  const verifyPass = (pass) => {
    if (password === "") return false;
    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    setError((prev) => ({ password: !reg.test(pass), email: prev.email }));
  };

  return (
    <Form>
      <StyledInput
        type={"email"}
        variant="outlined"
        placeholder="Email"
        helperText=""
        label="Email"
        error={error.email}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          verifyEmail(e.target.value);
        }}
      />

      <StyledInput
        type="password"
        variant="outlined"
        placeholder="Password"
        helperText=""
        label="Password"
        error={error.password}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          verifyPass(e.target.value);
        }}
      />
      <Button variant="contained">Log In</Button>
    </Form>
  );
};

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-inline: 2em;
  box-sizing: border-box;
  gap: 2.5em;
  margin-top: 2em;
  Button {
    align-self: center;
    background-color: ${(props) => props.theme.colorPrimary};
    &:hover {
      background-color: ${(props) => props.theme.colorPrimary};
    }
  }
`;

const StyledInput = styled(TextField)`
  width: 100%;
`;

export default Login;
