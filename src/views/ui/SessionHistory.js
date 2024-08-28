import FlaggedSessionsTable from "../../components/dashboard/FlaggedSessionsTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const SessionHistory = () => {
  return (
    <Row>
      <Col lg="12">
        <FlaggedSessionsTable />
      </Col>
    </Row>
  );
};

export default SessionHistory;
