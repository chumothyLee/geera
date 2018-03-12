import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class CreateProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal   : false,
      id      : "",
      name    : "",
      memberName0 : "",
      memberName1 : "",
      memberName2 : "",
      memberRole0 : "Software Engineer",
      memberRole1 : "Software Engineer",
      memberRole2 : "Software Engineer",
    };

    this.toggle = this.toggle.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMembersChangeName0 = this.handleMembersChangeName0.bind(this);
    this.handleMembersChangeName1 = this.handleMembersChangeName1.bind(this);
    this.handleMembersChangeName2 = this.handleMembersChangeName2.bind(this);
    this.handleMembersChangeRole0 = this.handleMembersChangeRole0.bind(this);
    this.handleMembersChangeRole1 = this.handleMembersChangeRole1.bind(this);
    this.handleMembersChangeRole2 = this.handleMembersChangeRole2.bind(this);
    this.handleSubmitJoin = this.handleSubmitJoin.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleIdChange (event) {
    this.setState ({ id : event.target.value });
  }

  handleNameChange (event) {
    this.setState ({ name : event.target.value });
  }

  handleMembersChangeName0 (event) {
    this.setState ({ memberName0 : event.target.value })
  }

  handleMembersChangeName1 (event) {
    this.setState ({ memberName1 : event.target.value })
  }

  handleMembersChangeName2 (event) {
    this.setState ({ memberName2 : event.target.value })
  }

  handleMembersChangeRole0 (event) {
    this.setState ({ memberRole0 : event.target.value })
  }

  handleMembersChangeRole1 (event) {
    this.setState ({ memberRole1 : event.target.value })
  }

  handleMembersChangeRole2 (event) {
    this.setState ({ memberRole2 : event.target.value })
  }

  handleSubmitNew (event) {
    event.preventDefault();
    const team = [ { name : this.state.memberName0,
                     role : this.state.memberRole0},
                   { name : this.state.memberName1,
                     role : this.state.memberRole1},
                   { name : this.state.memberName2,
                     role : this.state.memberRole2}];
                    
    const newProject = { name  : this.state.name,
                         team  : team,
                         tasks : []}

    this.props.createProject(newProject);
    this.toggle();
  }

  handleSubmitJoin (event) {
    event.preventDefault();
    const newProject = this.props.generateProject(this.state.id);
    this.props.createProject(newProject);
    this.toggle();
  }
  

  render() {
    return (
      <div>

        <Button color="link" onClick={this.toggle}>Create/Join a Project</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>Not on a Project?</ModalHeader>
          
          <ModalBody>
            <h5> Join a Project! </h5>
            <Form onSubmit={this.handleSubmitJoin} inline>
                <FormGroup>
                  <Label for="project_code">Project Code: </Label>
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" id="project_code" onChange={this.handleIdChange} required />
                  </div>
                  <Button color="primary">Join</Button>
                </FormGroup>
            </Form>
          </ModalBody>

          <ModalBody>
            <h5> Have an Idea? Create a New Project! </h5>
            <Form onSubmit={this.handleSubmitNew}>
              <FormGroup>
                <Label for="project_name">Project Name:</Label>
                <Input type="text" className="form-control" id="project_name" onChange={this.handleNameChange} required />
              </FormGroup>

              <FormGroup>
                <Label for="Team">Team Members</Label>

                <div className="form-row align-items-center">
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" onChange={this.handleMembersChangeName0} required />
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select" onChange={this.handleMembersChangeRole0}>
                      <option>Software Engineer</option>
                      <option>Quality Assurance Engineer</option>
                      <option>Product Manager</option>
                      <option>Scrum Master</option>
                      <option>Lead</option>
                    </Input>                                    
                  </div>
                </div>

                <div className="form-row align-items-center">
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" onChange={this.handleMembersChangeName1} required/>
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select" onChange={this.handleMembersChangeRole1}>
                      <option>Software Engineer</option>
                      <option>Quality Assurance Engineer</option>
                      <option>Product Manager</option>
                      <option>Scrum Master</option>
                      <option>Lead</option>
                    </Input>                                    
                  </div>
                </div>

                <div className="form-row align-items-center">
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" onChange={this.handleMembersChangeName2} required/>
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select" onChange={this.handleMembersChangeRole2}>
                      <option>Software Engineer</option>
                      <option>Quality Assurance Engineer</option>
                      <option>Product Manager</option>
                      <option>Scrum Master</option>
                      <option>Lead</option>
                    </Input>                                    
                  </div>
                </div>

                <div className="form-row align-items-center">


                </div>

              </FormGroup>

              <Button color="primary" block>Create Project</Button>
            
            </Form>
          </ModalBody>
          
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>

        </Modal>

      </div>
    );
  }
}

export default CreateProject;
