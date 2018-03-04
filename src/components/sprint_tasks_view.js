import React from 'react';
import { Badge, Row, Col } from 'reactstrap';
import SprintTaskList from './sprint_task_list.js';

const SprintTasksView = (props) => {
     
    /* props:
     * handleReadTask(task)
     * tasks
     */

     const toDoTasks = props.tasks.filter((task) => {
         return (task.status === "To-Do");
     });

     const inProgTasks = props.tasks.filter((task) => {
         return (task.status === "InProg");
     });

     const doneTasks = props.tasks.filter((task) => {
         return (task.status === "Done");
     });

     return (
        <div >
            <Row >
                <Col md="4" sm="12">
                    <h4>  <Badge color="danger" pill> To Do </Badge> </h4>
                    <SprintTaskList tasks={toDoTasks} handleReadTask={props.handleReadTask} handleStatusForward={props.handleStatusForward} handleStatusBack={props.handleStatusBack}/>
                </Col >
                <Col md="4" sm="12">
                    <h4> <Badge color="warning" pill> In Progress </Badge> </h4>
                    <SprintTaskList tasks={inProgTasks} handleReadTask={props.handleReadTask} handleStatusForward={props.handleStatusForward} handleStatusBack={props.handleStatusBack} />
                </Col >
                <Col md="4" sm="12">
                    <h4> <Badge color="success" pill> Done </Badge> </h4>
                    <SprintTaskList tasks={doneTasks} handleReadTask={props.handleReadTask} handleStatusForward={props.handleStatusForward} handleStatusBack={props.handleStatusBack} />
                </Col >
            </Row >     
        </div >
     );
};

export default SprintTasksView;