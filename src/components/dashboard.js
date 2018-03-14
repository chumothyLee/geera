import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Row, Col } from 'reactstrap';
import * as projectActions from '../actions/project_actions';
import ProjectView from './project_view2.js';
import Navibar from './Navibar.js';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    
    this.state = {
      projects     : this.props.projects,
      selectedProj : this.props.projects[0],
      isOpen       : false
    }
      console.log(this.props.projects);
    
    this.changeSelectedProject = this.changeSelectedProject.bind(this);
    this.createProject = this.createProject.bind(this);
    this.classGenerateProject = this.classGenerateProject.bind(this);
    this.classGenerateTask = this.classGenerateTask.bind(this);
    this.classGenerateTasks = this.classGenerateTasks.bind(this);
    this.classGenerateStatus = this.classGenerateStatus.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log("NEW PROPS RECEIVED")
    console.log(newProps)
    this.setState  ({
      projects     : newProps.projects,
      selectedProj : newProps.projects[0],
      isOpen       : false
    });
  }

  changeSelectedProject (projectID) {
    this.setState({ selectedProj : this.state.projects[projectID] });
    console.log(this.state.selectedProj);
  }

  createProject (project) {
    const projects = this.state.projects;

    projects.push(project);

    this.setState({ projects });
  }

  classGenerateProject (projectID) {

    const member1 = { name : "Sherman Lee",
                    role : "Software Engineer"};
  
    const member2 = { name : "Luis Llobrera",
                      role : "Software Engineer"};
  
    const member3 = { name : "Tiffany Huang",
                      role : "Software Engineer"};
  
    const member4 = { name : "Katie Lau",
                      role : "Software Engineer"};
  
    const member5 = { name : "Vanessa Chou",
                      role : "Software Engineer"};
  
    const member6 = { name : "Jeremy Siocon",
                      role : "Software Engineer"};
  
    const member7 = { name : "Jed Tadios",
                      role : "Product Manager"};
  
    const member8 = { name : "Patrick Hu",
                      role : "Product Manager"};
  
    const member9 = { name : "Crystal Yung",
                      role : "Scrum Master"};
  
    const sampleTeam = [member1, member2, member3, member4, member5, member6, member7, member8, member9];
  
    const sampleProject = { name  : projectID,
                            tasks : this.classGenerateTasks(projectID, sampleTeam),
                            team  : sampleTeam
                          }
  
    return sampleProject
  }
  
  classGenerateTasks (projectID, team) {
    const numTasks = Math.floor(Math.random() * 25);
    const tasks    = [];
  
    for (var i = 0; i < numTasks; i++) {
      tasks.push(this.classGenerateTask(projectID, i, team));
    }
    return tasks;
  }
  
  classGenerateTask (projectID, taskID, team) {
    const sampleTask = { name     : "Sample Task " + projectID + "-" + taskID,
                         status   : this.classGenerateStatus(),
                         estimate : Math.floor(Math.random() * 10),
                         assignee : team[Math.floor(Math.random() * team.length)].name,
                         reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   };
  
   return sampleTask;
  }
  
  classGenerateStatus () {
    switch(Math.floor(Math.random() * Math.floor(4))) {
      case 0:
        return "Back";
      case 1:
        return "To-Do";
      case 2:
        return "InProg";
      default:
        return "Done";
    }
  }


  render () {
    return (
      <div id="main"> 
        <Row >
          <Col > <Navibar selectedProject={this.state.selectedProj} projects={this.state.projects} handleSwitchProject={this.changeSelectedProject} handleNewProject={this.createProject} generateProject={this.classGenerateProject}/> </Col >
        </Row >
        <Row >
          <Col > <ProjectView project={this.state.selectedProj}/> </Col >
        </Row >
      </div>
    );
  }
}

//export default Dashboard;
Dashboard.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("DASHBOARD - mapStateToProps: ")
  console.log(state)
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);













const sampleProjects = generateProjects(4);



function generateProjects (numProjects) {
  const projects = [];

  for (var i = 0; i < numProjects; i++) {
    projects.push(generateProject(i));
  }

  return projects;
}

function generateProject (projectID) {

  const member1 = { name : "Sherman Lee",
                  role : "Software Engineer"};

  const member2 = { name : "Luis Llobrera",
                    role : "Software Engineer"};

  const member3 = { name : "Tiffany Huang",
                    role : "Software Engineer"};

  const member4 = { name : "Katie Lau",
                    role : "Software Engineer"};

  const member5 = { name : "Vanessa Chou",
                    role : "Software Engineer"};

  const member6 = { name : "Jeremy Siocon",
                    role : "Software Engineer"};

  const member7 = { name : "Jed Tadios",
                    role : "Product Manager"};

  const member8 = { name : "Patrick Hu",
                    role : "Product Manager"};

  const member9 = { name : "Crystal Yung",
                    role : "Scrum Master"};

  const sampleTeam = [member1, member2, member3, member4, member5, member6, member7, member8, member9];

  const sampleProject = { name  : "Sample Project " + projectID,
                          tasks : generateTasks(projectID, sampleTeam),
                          team  : sampleTeam
                        }

  return sampleProject
}

function generateTasks (projectID, team) {
  const numTasks = Math.floor(Math.random() * 25);
  const tasks    = [];

  for (var i = 0; i < numTasks; i++) {
    tasks.push(generateTask(projectID, i, team));
  }
  return tasks;
}

function generateTask (projectID, taskID, team) {
  const sampleTask = { name     : "Sample Task " + projectID + "-" + taskID,
                       status   : generateStatus(),
                       estimate : Math.floor(Math.random() * 10),
                       assignee : team[Math.floor(Math.random() * team.length)].name,
                       reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                       description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 };

 return sampleTask;
}

function generateStatus () {
  switch(Math.floor(Math.random() * Math.floor(4))) {
    case 0:
      return "Back";
    case 1:
      return "To-Do";
    case 2:
      return "InProg";
    default:
      return "Done"
  }
}

