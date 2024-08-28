import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Sample Alert
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <Alert color="primary">
              This is a primary alert— check it out!
            </Alert>
            <Alert color="secondary">
              This is a secondary alert— check it out!
            </Alert>
            <Alert color="success">
              This is a success alert— check it out!
            </Alert>
            <Alert color="danger">This is a danger alert— check it out!</Alert>
            <Alert color="warning">
              This is a warning alert— check it out!
            </Alert>
            <Alert color="info">This is a info alert— check it out!</Alert>
            <Alert color="light">This is a light alert— check it out!</Alert>
            <Alert color="dark">This is a dark alert</Alert>
          </div>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Alerts;
