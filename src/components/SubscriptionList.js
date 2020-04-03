import React, { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import SubscriptionDetail from "./SubscriptionDetail";

import { ListGroup } from "reactstrap";

const SubscriptionList = () => {
  const { subscriptions } = useContext(SubscriptionContext);
  return subscriptions.length ? (
    <div className="subscription-list">
      <ListGroup>
        {subscriptions.map(subscription => {
          return (
            <SubscriptionDetail
              subscription={subscription}
              key={subscription.id}
            />
          );
        })}
      </ListGroup>
    </div>
  ) : (
    <div>No subscriptions. Add one to start tracking!</div>
  );
};

export default SubscriptionList;
