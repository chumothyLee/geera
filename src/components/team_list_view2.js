import React from 'react';
import { Button, ListGroup } from 'reactstrap';
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
        <div >
            <ListGroup className="mb-3">
                {teammembers}
            </ListGroup >

            <Button color="primary" onClick={props.handleNewMember} block>
                <i className="fa fa-user-plus" > </i >
            </Button >
        </div >

     );
}

export default TeamListView;