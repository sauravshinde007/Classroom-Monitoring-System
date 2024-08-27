import React, { useState } from 'react';
import { Row, Col, Input, FormGroup, Card, CardBody, CardTitle } from 'reactstrap';

const About = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Optionally, handle search logic here (e.g., filtering results)
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col lg="6">
        <Card>
          <CardBody>
            <CardTitle tag="h6" className="text-center mb-3">
              <i className="bi bi-search me-2"></i> Search Sessions
            </CardTitle>
            <FormGroup>
              <Input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </FormGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;

