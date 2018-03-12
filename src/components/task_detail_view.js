import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const TaskDetailView = (props) => {

    /* props:
     * task
     */


    return (
        <Card >
            <CardHeader tag="h4"> Task Detail </CardHeader >
            <CardBody >
                <h5 className="mb-4"> {props.task.name} </h5> 
                <Row className="mb-3" >
                    <Col >
                        <p className="font-weight-bold" > Status</p>
                    </Col >
                    <Col >
                        {props.task.status}
                    </Col >
                </Row >
                <Row className="mb-3" >
                    <Col >
                    <p className="font-weight-bold" > Story Point Estimate</p>
                    </Col >
                    <Col >
                        {props.task.estimate}
                    </Col >
                </Row >
                <Row className="mb-3" >
                    <Col >
                    <p className="font-weight-bold" > Assignee</p>
                    </Col >
                    <Col >
                        {props.task.assignee}
                    </Col >
                </Row >
                <Row >
                    <Col > <p className="font-weight-bold" > Description</p> </Col >
                </Row >
                <Row className="mb-3" >
                    <Col > {props.task.description} </Col >
                </Row >
                <Row >
                    <Col > <p className="font-weight-bold" > Requirements </p> </Col >
                </Row >
                <Row >
                    <Col > {props.task.reqs} </Col >
                </Row >
            </CardBody >
        </Card >
    );
}

export default TaskDetailView;