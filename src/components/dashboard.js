import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectView from './project_view.js';
import Navibar from './Navibar.js';

const Dashboard = (props) => {
return (
  <div > 
    <Row className="mb-5">
      <Col > <Navibar className="mb-5"/> </Col >
    </Row >
    <Row >
     <Col > <ProjectView className="mt-5"/> </Col >
    </Row > 
  </div>);
}

export default Dashboard;