import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class CreateNewTask extends React.Component {

  /* props:
   * team
   * createTaskListItem(task)
   */

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name : "",
      status : "Back",
      estimate : "",
      assignee : "",
      reqs : "",
      description : ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEstimateChange = this.handleEstimateChange.bind(this);
    this.handleAssigneeChange = this.handleAssigneeChange.bind(this);
    this.handleReqsChange = this.handleReqsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleNameChange (event) {
    this.setState({ name : event.target.value });
  }

  handleEstimateChange (event) {
    this.setState({ estimate : event.target.value });
  }

  handleAssigneeChange (event) {
    this.setState({ assignee : event.target.value });
  }

  handleReqsChange (event) {
    this.setState({ reqs : event.target.value });
  }

  handleDescriptionChange (event) {
    this.setState({ description : event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault();
    const taskToSubmit = { name     : this.state.name,
                           status   : this.state.status,
                           estimate : this.state.estimate,
                           assignee : this.state.assignee,
                           reqs     : this.state.reqs,
                           description : this.state.description } 

    this.props.createTask(taskToSubmit);
    this.toggle();
    //this.setState({ name : "", status : "Back", estimate : "", assignee : "", reqs : "", description : ""});
  }

  render() {

    const teamList = this.props.team.map((member,i) => {
      return (<option key={i}>{member.name}</option>);
    })

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>Create a New Task</ModalHeader>
          
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="recipient">Task Name</Label>
                <Input type="text" className="form-control" id="recipient" onChange={this.handleNameChange} required/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Assignee</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleAssigneeChange} required>
                  <option value>Choose...</option>
                  {teamList}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="StoryPointEstimate">Story Point Estimate</Label>
                <Input className="form-control" type="number" id="StoryPointEstimate" onChange={this.handleEstimateChange} required />
              </FormGroup>
              <FormGroup>
                <Label for="DescriptionText">Description</Label>
                <textarea className="form-control" id="DescriptionText" rows="8" onChange={this.handleDescriptionChange} required></textarea>
              </FormGroup>
              <FormGroup>
                <Label for="Requirements">Requirements</Label>
                <textarea className="form-control" id="Requirements" rows="8" onChange={this.handleReqsChange} required></textarea>
              </FormGroup>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                <Button color="primary">Create</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
          

        </Modal>

      </div>
    );
  }
}

export default CreateNewTask;
