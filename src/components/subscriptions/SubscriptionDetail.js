import React, { useContext, useState } from "react";
import moment from "moment";
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

  const nextBill = (cycle, date) => {
    let nextDate;

    if (cycle === "yearly") {
      const diff = moment().diff(date, "years", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.round(diff) + 1, "year")
          : moment(date);
    } else if (cycle === "monthly") {
      const diff = moment().diff(date, "months", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.round(diff) + 1, "month")
          : moment(date);
    } else {
      const diff = moment().diff(date, "weeks", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.round(diff) + 1, "week")
          : moment(date);
    }

    return nextDate.format("MMM DD, YYYY");
  };

  return (
    <ListGroupItem>
      <Container>
        <Row className="item">
          <Col className="name">{subscription.name}</Col>
          <Col>
            ${subscription.price} / {formatCycle(subscription.cycle)}
          </Col>
          <Col>{nextBill(subscription.cycle, subscription.date)}</Col>
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
