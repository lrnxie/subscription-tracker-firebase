import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import SubscriptionDetail from "./SubscriptionDetail";
import Stats from "./Stats";

import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";

const SubscriptionList = () => {
  const [subscriptions, setSubscription] = useState([]);

  useEffect(() => {
    const dbUnsubscribe = db
      .collection("subscriptions")
      .onSnapshot((snapshot) => {
        const dbSubscriptions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubscription(dbSubscriptions);
      });
    return () => dbUnsubscribe();
  }, []);

  return subscriptions.length ? (
    <div className="subscription-list">
      <ListGroup>
        <ListGroupItem>
          <Container>
            <Row>
              <Col>Name</Col>
              <Col>Price</Col>
              <Col>First bill</Col>
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
    <div className="no-subs">No subscriptions. Add one to start tracking!</div>
  );
};

export default SubscriptionList;
