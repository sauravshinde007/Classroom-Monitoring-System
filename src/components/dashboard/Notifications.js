import React from "react";
import { Card, CardBody, CardTitle, ListGroup, CardSubtitle, ListGroupItem } from "reactstrap";

const NotificationData = [
  { id: 1, message: "Session 1 completed successfully", severity: "Low", icon: "bi bi-check-circle", color: "success", time: "5 minutes ago" },
  { id: 2, message: "Flag detected in Session 2", severity: "High", icon: "bi bi-exclamation-triangle", color: "danger", time: "10 minutes ago" },
  { id: 3, message: "Low interaction detected in Session 3", severity: "Medium", icon: "bi bi-info-circle", color: "warning", time: "15 minutes ago" },
  { id: 4, message: "New session started: Session 4", severity: "Low", icon: "bi bi-play-circle", color: "info", time: "20 minutes ago" },
  { id: 5, message: "Session 5 completed successfully", severity: "Low", icon: "bi bi-check-circle", color: "success", time: "25 minutes ago" },
];

const Notifications = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Notifications</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Recent Session Alerts
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {NotificationData.map((notification) => (
            <ListGroupItem
              key={notification.id}
              className="d-flex align-items-center p-3 border-0"
            >
              <div className={`rounded-circle me-3 bg-${notification.color}`} style={{ padding: "10px" }}>
                <i className={notification.icon} style={{ color: "white" }}></i>
              </div>
              <div>
                <h6 className="mb-0">{notification.message}</h6>
                <small className="text-muted">{`Severity: ${notification.severity}`}</small>
              </div>
              <small className="ms-auto text-muted text-small">{notification.time}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Notifications;
