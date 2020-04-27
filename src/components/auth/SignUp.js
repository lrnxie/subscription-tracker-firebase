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

const SignUp = (props) => {
  const { user, signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(null);
  const [passwordInvalid, setPasswordInvalid] = useState(null);
  const [password2Invalid, setPassword2Invalid] = useState(null);

  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validatePassword2(password, password2);
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validatePassword2(password, password2)
    ) {
      signUp(email, password);
      setEmail("");
      setPassword("");
      setPassword2("");
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

  const validatePassword2 = (password, password2) => {
    if (password !== password2) {
      setPassword2Invalid(true);
      return false;
    } else {
      setPassword2Invalid(false);
      return true;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Sign Up</h3>
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
        <FormGroup>
          <Label>Confirm password</Label>
          <Input
            type="password"
            value={password2}
            invalid={password2Invalid}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <FormFeedback>Password does not match</FormFeedback>
        </FormGroup>
        <Button color="info">Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
