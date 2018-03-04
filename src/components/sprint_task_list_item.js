import React from 'react';
import { ListGroupItem, Badge, Button } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

const SprintTaskListItem = (props) => {

    /* props:
     * handleRead(task)
     * handleStatusForward(task)
     * handleStatusBack(task)
     * task
     * index
     * key
     */


     const leftButton = (status) => {
        if (status === "To-Do") {
            return (<div></div>);
        }
        return (
            <Button className="mr-3" outline color="primary" onClick={() => props.handleStatusBack(props.task)}>
                <i className="fa fa-angle-left" > </i >
            </Button >
        );
     }

     const rightButton = (status) => {
        if (status === "Done") {
            return (<div></div>);
        }
        return (
            <Button outline color="primary" onClick={() => props.handleStatusForward(props.task)}>
                <i className="fa fa-angle-right" > </i >
            </Button >
        );
     }

     return (
        <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center" onClick={() => props.handleRead(props.task)} action>
            <div >
                {leftButton(props.task.status)}
            </div >
            <div >
                {props.task.name}
                <Badge pill className="ml-2" >
                    {props.task.estimate}
                </Badge >
            </div >
            <div >
                {rightButton(props.task.status)}
            </div >
        </ListGroupItem >
     );
};

export default SprintTaskListItem;