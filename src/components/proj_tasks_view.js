import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import TaskList from './task_list.js';

const ProjTasksView = (props) => {

    /* props
     * handleCreateTask(task)
     * handleReadTask(task)
     * handleDeleteTask(task)
     * handleSwitchTask(index)
     * tasks
     */

    const backTasks = props.tasks.filter((task) => {
        return (task.status === "Back");
    });

    const sprintTasks = props.tasks.filter((task) => {
        return (task.status !== "Back");
    });

    return (
        <div >
            <Row className="mb-5"> 
                <Col >
                    <h4 > Current Sprint </h4 >
                    <TaskList tasks={sprintTasks} handleReadTask={props.handleReadTask} handleDeleteTask={props.handleDeleteTask} handleSwitchTask={props.handleSwitchTask} />
                </Col >
            </Row >

            <Row className="mb-5">
                <Col >
                    <h4 > Backlog </h4 >
                    <TaskList tasks={backTasks} handleReadTask={props.handleReadTask} handleDeleteTask={props.handleDeleteTask} handleSwitchTask={props.handleSwitchTask} />
                </Col >
            </Row >
            <Button color="primary" onClick={props.handleCreateTask} block> Create New Task </Button >
        </div >
    );          // TODO TEMPORARY ONCLICK HERE ^^^^^^^^^^^^^^^^^^^
};

export default ProjTasksView;