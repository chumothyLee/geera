import React from 'react';
import { ListGroupItem, Badge, Button } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

const TaskListItem = (props) => {

    /* props:
     * handleRead(task)
     * handleDelete(task)
     * handleSwitch(task)
     * task 
     *      -name
     *      -status
     *      -estimate
     * index
     * key
     */

    const color = (status) => {

        switch (status) {

            case "To-Do":
                return "danger";

            case "InProg":
                return "warning";

            case "Done":
                return "success";

            default:
                return "info";
        }
    };

    const switchIcon = (status) => {
        
        switch (status) {

            case "Back":
                return "fa fa-angle-up";
            
            default:
                return "fa fa-angle-down";
        }
    };

    return (
        <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center" onClick={() => props.handleRead(props.task)} action >
            <div >
                <Button className="mr-3" onClick={() => props.handleSwitch(props.task)} outline color="primary" >
                    <i className={switchIcon(props.task.status)} > </i >
                </Button >
                {props.task.name}
                <Badge pill className="ml-3" >
                    {props.task.estimate}
                </Badge >
                <Badge className="ml-3" color={color(props.task.status)} pill >
                    {props.task.status}
                </Badge >
            </div >
            <div >
                <Button color="link" onClick={() => props.handleDelete(props.task)} >
                    <i className="fa fa-times-circle" > </i >
                </Button >
            </div >
        </ListGroupItem >
    );
};

export default TaskListItem;