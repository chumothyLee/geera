import React from 'react';
import './project_view.css';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import PanelGroup from 'react-panelgroup';
import 'font-awesome/css/font-awesome.min.css';
import ProjTasksView from './proj_tasks_view.js';
import TeamListView from './team_list_view2.js';
import SprintTasksView from './sprint_tasks_view.js'
import TaskDetailView from './task_detail_view2.js';
import CreateNewTask from './modals/create_new_task.js';
import MessageHistory from './modals/message_history.js';
import NewMember from './modals/new_member.js';

export default class ProjectView extends React.Component {

    constructor (props) {
        super (props);

        this.state = { team       : sampleTeam,
                       tasks      : sampleTasks,
                       activeTab  : '1',
                       activeTab1 : '1',
                       taskToRead : sampleTasks[0] };

        this.switchTaskListItem = this.switchTaskListItem.bind(this);
        this.createTaskListItem = this.createTaskListItem.bind(this);
        this.updateTaskStatusForward = this.updateTaskStatusForward.bind(this);
        this.updateTaskStatusBack = this.updateTaskStatusBack.bind(this);
        this.readTaskListItem = this.readTaskListItem.bind(this);
        this.deleteTaskListItem = this.deleteTaskListItem.bind(this);
        this.openNewTaskModal = this.openNewTaskModal.bind(this);
        this.openMessageHistModal = this.openMessageHistModal.bind(this);
        this.openNewMemberModal = this.openNewMemberModal.bind(this);
        this.addTeamMember = this.addTeamMember.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleTab1 = this.toggleTab1.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    toggleTab1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({ activeTab1: tab });
        }
    }

    openNewMemberModal () {
        this.refs.newMemberModal.toggle();
    }

    openMessageHistModal (name) {
        this.refs.messageHistModal.setName(name);
        this.refs.messageHistModal.toggle();
    }

    openNewTaskModal () {
        this.refs.newTaskModal.toggle();
    }

    switchTaskListItem (taskToSwitch) {
        const tasks = this.state.tasks.map((task) => {
            if (task.name === taskToSwitch.name && task.status === "Back") {
                task.status = "To-Do";
            }
            else if (task.name === taskToSwitch.name) {
                task.status = "Back";
            }
            
            return task;
        });

        this.setState({ tasks });
    }

    createTaskListItem (task) {
        const tasks = this.state.tasks;

        //tasks.push(taskGen[taskGenIterator++]);
        tasks.push(task);

        this.setState({ tasks });
    }

    readTaskListItem (taskToRead) {
        this.setState({ taskToRead });
    }

    updateTaskStatusForward (taskToUpdate) {
        const tasks = this.state.tasks.map((task) => {
            if (task.name === taskToUpdate.name) {
                if (task.status === "To-Do") {
                    task.status = "InProg";
                }
                else {
                    task.status = "Done"
                }
            }
            return task;
        });

        this.setState({ tasks });
    }

    updateTaskStatusBack (taskToUpdate) {
        const tasks = this.state.tasks.map((task) => {
            if (task.name === taskToUpdate.name) {
                if (task.status === "Done") {
                    task.status = "InProg";
                }
                else {
                    task.status = "To-Do"
                }
            }
            return task;
        });

        this.setState({ tasks });
    }

    deleteTaskListItem (taskToDelete) {
        const tasks = this.state.tasks.filter((task) => {
            return (task.name !== taskToDelete.name);
        });

        this.setState({ tasks });
    }

    addTeamMember (member) {
        const team = this.state.team;

        team.push(member);

        this.setState({ team });
    }

    // FOR TESTING 
    getNumTasks () {
        return this.state.tasks.length;
    }

    getNumMembers () {
        return this.state.team.length;
    }

    render () {

        return (
        <div>
            <Container fluid id="main">
                <PanelGroup panelWidths={[
                    {size: window.innerWidth*(5/8), minSize:window.innerWidth/2},
                    {minSize:window.innerWidth/4}
                    ]} borderColor="#D3D3D3">
                    <Col md="12" >
                        <Container fluid className="mb-5">
                            <Nav pills className="mb-3 mt-5">
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    >
                                    Project Tasks
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    >
                                    Sprint Detail
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <ProjTasksView tasks={this.state.tasks} handleCreateTask={this.openNewTaskModal} handleReadTask={this.readTaskListItem} handleDeleteTask={this.deleteTaskListItem} handleSwitchTask={this.switchTaskListItem} />
                                </TabPane >
                                <TabPane tabId="2">
                                    <SprintTasksView tasks={this.state.tasks} handleReadTask={this.readTaskListItem} handleStatusForward={this.updateTaskStatusForward} handleStatusBack={this.updateTaskStatusBack}/>
                                </TabPane >
                            </TabContent>
                        </Container >
                    </Col >
                    <Col >
                        <Container fluid className="mb-5">
                            <Nav pills className="mb-3 mt-5">
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab1 === '1' })}
                                    onClick={() => { this.toggleTab1('1'); }}
                                    >
                                        Task Detail
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab1 === '2' })}
                                    onClick={() => { this.toggleTab1('2'); }}
                                    >
                                        Project Team
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={this.state.activeTab1}>
                                <TabPane tabId="1">
                                    <TaskDetailView task={this.state.taskToRead} />
                                </TabPane >
                                <TabPane tabId="2">
                                    <TeamListView team={this.state.team} handleMessageMember={this.openMessageHistModal} handleNewMember={this.openNewMemberModal} /> 
                                </TabPane >
                            </TabContent>
                        </Container >
                    </Col >
                </PanelGroup >

            </Container >
            <CreateNewTask team={this.state.team} createTask={this.createTaskListItem} ref="newTaskModal"/>
            <MessageHistory ref="messageHistModal"/>
            <NewMember addMember={this.addTeamMember} ref="newMemberModal" />
        </div>
        );
    }
}

const test1 = {name     : "sample task 1",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test2 = {name     : "sample task 2",
               status   : "Back",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test3 = {name     : "sample task 3",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test4 = {name     : "sample task 4",
               status   : "Back",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test5 = {name     : "sample task 5",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test6 = {name     : "sample task 6",
               status   : "Back",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test7 = {name     : "sample task 7",
               status   : "InProg",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test8 = {name     : "sample task 8",
               status   : "Done",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test9 = {name     : "sample task 9",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test10 = {name     : "sample task 10",
               status   : "Back",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test11 = {name     : "sample task 11",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test12 = {name     : "sample task 12",
               status   : "To-Do",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test13 = {name     : "sample task 13",
               status   : "InProg",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test14 = {name     : "sample task 14",
               status   : "InProg",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test15 = {name     : "sample task 15",
               status   : "InProg",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const test16 = {name     : "sample task 16",
               status   : "Back",
               estimate : "5",
               assignee : "Tom Smith",
               reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              };

const sampleTasks = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13,test14, test15, test16];

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