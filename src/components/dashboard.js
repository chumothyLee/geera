import React from 'react';
import { Row, Col, Navbar } from 'reactstrap';
import ProjectView from './project_view2.js';
import Navibar from './Navibar.js';

const Dashboard = (props) => {
return (
  <div id="main"> 
    <Row >
      <Col > <Navibar /> </Col >
    </Row >
    <Row >
      <Col > <ProjectView /> </Col >
    </Row >
  </div>);
}

export default Dashboard;