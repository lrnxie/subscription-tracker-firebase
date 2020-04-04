import React, { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";

import { ListGroupItem, Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SubscriptionDetail = ({ subscription }) => {
  const { removeSubscription } = useContext(SubscriptionContext);

  return (
    <ListGroupItem>
      <Container>
        <Row className="item">
          <Col className="name">{subscription.name}</Col>
          <Col>{"$ " + subscription.price}</Col>
          <Col>{subscription.cycle}</Col>
          <Col className="edit-delete">
            <Button color="info" className="edit">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button
              color="info"
              className="delete"
              onClick={() => removeSubscription(subscription.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroupItem>
  );
};

export default SubscriptionDetail;
