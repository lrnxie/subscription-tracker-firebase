import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignUp = (props) => {
  const { authStatus, signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authStatus) {
      props.history.push("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="info">Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
