import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class CreateProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      members: []
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  addMore() {
    //console.log('works');


  }

  render() {
    return (
      <div>

        <Button color="primary" onClick={this.toggle}>Create/Join a Project</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>Not on a Project?</ModalHeader>
          
          <ModalBody>
            <h5> Join a Project! </h5>
            <Form inline>
                <FormGroup>
                  <Label for="project_code">Project Code: </Label>
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" id="project_code" required />
                  </div>
                  <Button color="primary">Join</Button>
                </FormGroup>
            </Form>
          </ModalBody>

          <ModalBody>
            <h5> Have an Idea? Create a New Project! </h5>
            <Form>
              <FormGroup>
                <Label for="project_name">Project Name:</Label>
                <Input type="text" className="form-control" id="project_name" required />
              </FormGroup>

              <FormGroup>
                <Label for="Team">Team Members</Label>

                <div className="form-row align-items-center">
                  <div className="col-md my-1">
                    <Input type="text" className="form-control" required />
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select">
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
                    <Input type="text" className="form-control" />
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select">
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
                    <Input type="text" className="form-control" />
                  </div>
                  <div className="col-auto my-1">
                    <Input type="select" name="select">
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

              <Button color="primary" size="sm" onClick={this.addMore}>Add More+</Button>

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
