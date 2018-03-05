import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectView from './project_view.js';
import Navibar from './Navibar.js';

const Dashboard = (props) => {
return (
  <div > 
    <Row >
      <Col > <Navibar /> </Col >
    </Row >
    <Row >
      <Col > <ProjectView /> </Col >
    </Row > 
  </div>);
}

export default Dashboard;