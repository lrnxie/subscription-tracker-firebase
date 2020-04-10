import React, { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";

import { Container, Row, Col } from "reactstrap";

const Stats = () => {
  const { subscriptions } = useContext(SubscriptionContext);

  const monthly = subscriptions
    .map((subscription) => {
      if (subscription.cycle === "weekly") {
        return subscription.price * 4;
      } else if (subscription.cycle === "yearly") {
        return subscription.price / 12;
      } else {
        return subscription.price;
      }
    })
    .reduce((a, b) => a + b, 0);

  const yearly = subscriptions
    .map((subscription) => {
      if (subscription.cycle === "weekly") {
        return subscription.price * 52;
      } else if (subscription.cycle === "monthly") {
        return subscription.price * 12;
      } else {
        return subscription.price;
      }
    })
    .reduce((a, b) => a + b, 0);

  return subscriptions.length ? (
    <div>
      <Container>
        <Row>
          <Col>Monthly cost: ${monthly.toFixed(2)}</Col>
          <Col>Yearly cost: ${yearly}</Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div></div>
  );
};

export default Stats;
