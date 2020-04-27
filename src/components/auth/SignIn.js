import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";

const SignIn = (props) => {
  const { user, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(null);
  const [passwordInvalid, setPasswordInvalid] = useState(null);

  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (validateEmail(email) && validatePassword(password)) {
      signIn(email, password);
      setEmail("");
      setPassword("");
    }
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email.trim())) {
      setEmailInvalid(true);
      return false;
    } else {
      setEmailInvalid(false);
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordInvalid(true);
      return false;
    } else {
      setPasswordInvalid(false);
      return true;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Sign In</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            invalid={emailInvalid}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormFeedback>Please enter a valid email address</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            invalid={passwordInvalid}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormFeedback>Password must be more than 6 characters</FormFeedback>
        </FormGroup>
        <Button color="info">Sign In</Button>
      </Form>
    </div>
  );
};

export default SignIn;
