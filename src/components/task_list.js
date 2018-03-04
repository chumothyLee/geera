import React from 'react';
import { ListGroup } from 'reactstrap';
import TaskListItem from './task_list_item.js';

const TaskList = (props) => {

    /* props
     * handleReadTask(task)
     * handleDeleteTask(task)
     * handleSwitchTask(task)
     * tasks [ task {name, status, estimate} ]
     */


    if (!Array.isArray(props.tasks) || !props.tasks.length) {
        return (
            <div >
                <h6> No Tasks </h6>
            </div >
        );
    }

    const taskItems = props.tasks.map ((task, index) => {
        return <TaskListItem task={task} index={index} key={task.name} handleRead={props.handleReadTask} handleDelete={props.handleDeleteTask} handleSwitch={props.handleSwitchTask}/>;
    });

    return (
        <ListGroup > 
            {taskItems}
        </ListGroup >
    );
};

export default TaskList