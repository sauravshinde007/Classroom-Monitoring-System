import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ["Session 1", "Session 2", "Session 3", "Session 4"],
    datasets: [
      {
        label: "Activity Levels",
        backgroundColor: ["rgba(75,192,192,1)", "rgba(255,0,0,1)", "rgba(75,192,192,1)", "rgba(75,192,192,1)"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 45, 80, 81],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Classroom Activity Levels",
        fontSize: 20,
      },
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Activity Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Session-wise Activity Levels
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          <Row>
            <Col md="4">
              <h6>Ongoing Sessions</h6>
              <h4 className="mb-0 fw-bold">4</h4>
            </Col>
            <Col md="4">
              <h6>Flagged Sessions</h6>
              <h4 className="mb-0 fw-bold">1</h4>
            </Col>
          </Row>
        </div>
        <Bar data={data} options={options} height={179} />
      </CardBody>
    </Card>
  );
};

export default ActivityChart;
