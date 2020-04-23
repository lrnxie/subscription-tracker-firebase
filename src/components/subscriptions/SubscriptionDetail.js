import React, { useContext, useState } from "react";
import { FirestoreContext } from "../../contexts/FirestoreContext";
import EditSubscription from "./EditSubscription";

import { ListGroupItem, Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SubscriptionDetail = ({ subscription }) => {
  const { deleteSubscription } = useContext(FirestoreContext);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formatCycle = (cycle) => {
    switch (cycle) {
      case "weekly":
        return "wk";
      case "monthly":
        return "mo";
      case "yearly":
        return "yr";
      default:
        return "";
    }
  };

  const formatDate = (date) => {
    return date.slice(2).replace(/-/g, "/");
  };

  return (
    <ListGroupItem>
      <Container>
        <Row className="item">
          <Col className="name">{subscription.name}</Col>
          <Col>
            ${subscription.price} / {formatCycle(subscription.cycle)}
          </Col>
          <Col>{formatDate(subscription.date)}</Col>
          <Col className="edit-delete">
            <div>
              <Button color="info" className="edit" onClick={toggle}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <EditSubscription
                modal={modal}
                toggle={toggle}
                subscription={subscription}
              />
            </div>
            <Button
              color="info"
              className="delete"
              onClick={() => deleteSubscription(subscription.id)}
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
