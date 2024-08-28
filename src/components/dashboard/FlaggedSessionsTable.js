import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const flaggedSessions = [
  {
    sessionName: "Session 1: Introduction to React",
    date: "2024-08-26",
    instructorName: "John Doe",
    status: "Flagged",
    duration: "2 hours",
    reason: "Low interaction detected",
  },
  {
    sessionName: "Session 2: Advanced JavaScript",
    date: "2024-08-25",
    instructorName: "Jane Smith",
    status: "Flagged",
    duration: "1.5 hours",
    reason: "Unusual activity detected",
  },
  {
    sessionName: "Session 3: UI/UX Basics",
    date: "2024-08-24",
    instructorName: "Alice Johnson",
    status: "Flagged",
    duration: "2 hours",
    reason: "High dropout rate",
  },
  {
    sessionName: "Session 4: Backend with Node.js",
    date: "2024-08-23",
    instructorName: "Bob Brown",
    status: "Flagged",
    duration: "3 hours",
    reason: "Content not covered as planned",
  },
];

const FlaggedSessionsTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Flagged Sessions</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Details of all flagged sessions
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Session Name</th>
                <th>Date</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {flaggedSessions.map((session, index) => (
                <tr key={index} className="border-top">
                  <td>{session.sessionName}</td>
                  <td>{session.date}</td>
                  <td>{session.instructorName}</td>
                  <td>
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    {session.status}
                  </td>
                  <td>{session.duration}</td>
                  <td>{session.reason}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default FlaggedSessionsTable;
