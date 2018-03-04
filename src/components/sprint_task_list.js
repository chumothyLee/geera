import React from 'react';
import { ListGroup } from 'reactstrap';
import SprintTaskListItem from './sprint_task_list_item.js';

const SprintTaskList = (props) => {

    /* props
     * tasks
     * handleReadTask(task)
     * handleStatusForward(task)
     * handleStatusBack(task)
     */

    if (!Array.isArray(props.tasks) || !props.tasks.length) {
        return (
            <div >
                <h6> No Tasks </h6>
            </div >
        );
    }

    const taskItems = props.tasks.map ((task, index) => {
        return <SprintTaskListItem task={task} index={index} key={task.name} handleRead={props.handleReadTask} handleStatusForward={props.handleStatusForward} handleStatusBack={props.handleStatusBack}/>;
    });

    return (
        <ListGroup>
            {taskItems}
        </ListGroup>
    );
};

export default SprintTaskList;