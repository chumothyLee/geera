import React from 'react';
import { Row, Col, Navbar } from 'reactstrap';
import ProjectView from './project_view2.js';
import Navibar from './Navibar.js';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects     : sampleProjects,
      selectedProj : sampleProjects[0],
      isOpen       : false
    }

    console.log(sampleProjects);
    this.changeSelectedProject = this.changeSelectedProject.bind(this);
    this.createProject = this.createProject.bind(this);
    this.classGenerateProject = this.classGenerateProject.bind(this);
    this.classGenerateTask = this.classGenerateTask.bind(this);
    this.classGenerateTasks = this.classGenerateTasks.bind(this);
    this.classGenerateStatus = this.classGenerateStatus.bind(this);
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
                            tasks : this.classGenerateTasks(projectID),
                            team  : sampleTeam
                          }
  
    return sampleProject
  }
  
  classGenerateTasks (projectID) {
    const numTasks = Math.floor(Math.random() * 25);
    const tasks    = [];
  
    for (var i = 0; i < numTasks; i++) {
      tasks.push(this.classGenerateTask(projectID, i));
    }
    return tasks;
  }
  
  classGenerateTask (projectID, taskID) {
    const sampleTask = { name     : "Sample Task " + projectID + "-" + taskID,
                         status   : this.classGenerateStatus(),
                         estimate : Math.floor(Math.random() * 10),
                         assignee : "Tiffany Huang",
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

export default Dashboard;



























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
                          tasks : generateTasks(projectID),
                          team  : sampleTeam
                        }

  return sampleProject
}

function generateTasks (projectID) {
  const numTasks = Math.floor(Math.random() * 25);
  const tasks    = [];

  for (var i = 0; i < numTasks; i++) {
    tasks.push(generateTask(projectID, i));
  }
  return tasks;
}

function generateTask (projectID, taskID) {
  const sampleTask = { name     : "Sample Task " + projectID + "-" + taskID,
                       status   : generateStatus(),
                       estimate : Math.floor(Math.random() * 10),
                       assignee : "Tom Smith",
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

