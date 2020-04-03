import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NewSubscription from "./NewSubscription";

export const Header = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Navbar>
        <NavbarBrand className="title">Subscriptions Tracker</NavbarBrand>
        <div>
          <Button color="info" className="new" onClick={toggle}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <NewSubscription modal={modal} toggle={toggle} />
        </div>
      </Navbar>
    </div>
  );
};
