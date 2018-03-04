import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

const TeamListItem = (props) => {
    
    /* props:
     * teammember
     * handleSendMessage(teammember)
     */ 

     return (
        <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
            <div >
                {props.teammember.name}
                <p className="text-muted"> {props.teammember.role} </p >
            </div >
            <div >
                <Button outline color="primary" onClick={() => props.handleMessageMember(props.teammember.name)}>
                    <i className="fa fa-comment" > </i >
                </Button >
            </div >
        </ListGroupItem >
     );
}

export default TeamListItem;