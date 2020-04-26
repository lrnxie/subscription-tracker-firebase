import React, { useContext } from "react";
import { FirestoreContext } from "../../contexts/FirestoreContext";
import { AuthContext } from "../../contexts/AuthContext";
import SubscriptionDetail from "./SubscriptionDetail";
import Stats from "./Stats";

import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";

const SubscriptionList = () => {
  const { dbLoading, subscriptions } = useContext(FirestoreContext);
  const { authLoading } = useContext(AuthContext);

  return dbLoading || authLoading ? (
    <div className="info-text">Loading...</div>
  ) : subscriptions.length ? (
    <div className="subscription-list">
      <ListGroup>
        <ListGroupItem>
          <Container>
            <Row>
              <Col>Name</Col>
              <Col>Price</Col>
              <Col>Next bill</Col>
              <Col>Actions</Col>
            </Row>
          </Container>
        </ListGroupItem>
        {subscriptions.map((subscription) => {
          return (
            <SubscriptionDetail
              subscription={subscription}
              key={subscription.id}
            />
          );
        })}
        <ListGroupItem>
          <Stats subscriptions={subscriptions} />
        </ListGroupItem>
      </ListGroup>
    </div>
  ) : (
    <div className="info-text">
      No subscriptions. Add one to start tracking!
    </div>
  );
};

export default SubscriptionList;
