import React from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
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

        if (this.props.project === undefined) {
            this.state = { team       : [],
                           tasks      : [],
                           activeTab  : '1',
                           activeTab1 : '1',
                           taskToRead : sampleTask
            }
        }
        else {
            this.state = { team       : this.props.project.team,
                           tasks      : this.props.project.tasks,
                           activeTab  : '1',
                           activeTab1 : '1',
                           taskToRead : this.props.project.tasks[0] };
            }

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

    componentWillReceiveProps (newProps) {
        if (newProps.project === undefined) {
            this.setState = { team       : [],
                              tasks      : [],
                              activeTab  : '1',
                              activeTab1 : '1',
                              taskToRead : sampleTask
            }
        }
        else {
            this.setState({ team       : newProps.project.team,
                            tasks      : newProps.project.tasks,
                            activeTab  : '1',
                            activeTab1 : '1',
                            taskToRead : newProps.project.tasks[0] });
        }
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
            <Container className="mt-5" fluid>
                <Row >


                    <Col md="8" className="ml-2">
                        <Card className="mb-5">
                            <CardHeader >
                                <Nav pills>
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
                            </CardHeader >
                            <CardBody >
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <ProjTasksView tasks={this.state.tasks} handleCreateTask={this.openNewTaskModal} handleReadTask={this.readTaskListItem} handleDeleteTask={this.deleteTaskListItem} handleSwitchTask={this.switchTaskListItem} />
                                    </TabPane >
                                    <TabPane tabId="2">
                                        <SprintTasksView tasks={this.state.tasks} handleReadTask={this.readTaskListItem} handleStatusForward={this.updateTaskStatusForward} handleStatusBack={this.updateTaskStatusBack}/>
                                    </TabPane >
                                </TabContent>
                            </CardBody >
                        </Card >
                    </Col >

                    <Col className="ml-2 mr-2"> 
                        <Card >
                            <CardHeader >
                                <Nav pills>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab1 === '1' })}
                                        onClick={() => { this.toggleTab1('1'); }}
                                        >
                                            Task Info
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab1 === '2' })}
                                        onClick={() => { this.toggleTab1('2'); }}
                                        >
                                            Team
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader >
                            <CardBody >
                                <TabContent activeTab={this.state.activeTab1}>
                                    <TabPane tabId="1">
                                        <TaskDetailView task={this.state.taskToRead} />
                                    </TabPane >
                                    <TabPane tabId="2">
                                        <TeamListView team={this.state.team} handleMessageMember={this.openMessageHistModal} handleNewMember={this.openNewMemberModal} /> 
                                    </TabPane >
                                </TabContent>
                            </CardBody >

                        </Card >

                    </Col >

                </Row >
            </Container >
            <CreateNewTask team={this.state.team} createTask={this.createTaskListItem} ref="newTaskModal"/>
            <MessageHistory ref="messageHistModal"/>
            <NewMember addMember={this.addTeamMember} ref="newMemberModal" />
        </div>
        );
    }
}



const sampleTask =   { name     : "Sample Task",
                       status   : "Back",
                       estimate : 5,
                       assignee : "Tom Smith",
                       reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                       description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 };