import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import NewSubscription from "../subscriptions/NewSubscription";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const { authStatus, authLoading, signOut } = useContext(AuthContext);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const links = authStatus ? (
    <Nav>
      <NavItem>
        <NavbarText className="mr-3">
          <Link to="/signin" onClick={signOut}>
            Sign Out
          </Link>
        </NavbarText>
      </NavItem>
      <NavItem>
        <Button color="info" onClick={toggle}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <NewSubscription modal={modal} toggle={toggle} />
      </NavItem>
    </Nav>
  ) : (
    <Nav>
      <NavItem>
        <NavbarText className="mr-3">
          <Link to="/signin">Sign In</Link>
        </NavbarText>
      </NavItem>
      <NavItem>
        <NavbarText>
          <Link to="/signup">Sign Up</Link>
        </NavbarText>
      </NavItem>
    </Nav>
  );

  return (
    <div>
      <Navbar>
        <NavbarBrand className="title">Subscriptions Tracker</NavbarBrand>
        {authLoading ? "" : links}
      </Navbar>
    </div>
  );
};
