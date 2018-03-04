import React from 'react';
import { Button, ListGroup, Card, CardHeader, CardBody  } from 'reactstrap';
import TeamListItem from './team_list_item';

const TeamListView = (props) => {

    /* props:
     * team
     * handleMessageMember
     */

    if (!Array.isArray(props.team) || !props.team.length) {
        return (
            <div >
                <h6> No Team </h6>
            </div >
        );
    }

    const teammembers = props.team.map ((teammember, index) => {
        return <TeamListItem handleMessageMember={props.handleMessageMember} teammember={teammember} index={index} key={teammember.name} />
    })

     return (
        <Card >
            <CardHeader tag="h4" className="d-flex justify-content-between align-items-center"> 
                <div >
                    Team
                </div >
                <div >
                    <Button color="primary" onClick={props.handleNewMember}>
                        <i className="fa fa-user-plus" > </i >
                    </Button >
                </div >
            </CardHeader >
            <CardBody >
                <ListGroup >
                    {teammembers}
                </ListGroup >
            </CardBody >
        </Card >

     );
}

export default TeamListView;