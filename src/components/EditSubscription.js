import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

const EditSubscription = props => {
  const { editSubscription } = useContext(SubscriptionContext);
  const [name, setName] = useState(props.subscription.name);
  const [price, setPrice] = useState(props.subscription.price);
  const [cycle, setCycle] = useState(props.subscription.cycle);

  const handleSubmit = e => {
    e.preventDefault();

    const updatedDetails = { id: props.subscription.id, name, price, cycle };
    editSubscription(props.subscription.id, updatedDetails);
    props.toggle();
  };

  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Edit subscription</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Subscription name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input
              type="number"
              placeholder="Subscription price"
              min="0.01"
              step="0.01"
              required
              value={price}
              onChange={e => setPrice(+e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Billing cycle</Label>
            <Input
              type="select"
              value={cycle}
              onChange={e => setCycle(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button color="info" className="add">
              Save
            </Button>
            <Button
              color="secondary"
              className="canccel"
              onClick={props.toggle}
            >
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditSubscription;
