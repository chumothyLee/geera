import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class NewMember extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name : "",
      role : "Software Engineer"
    };

    this.toggle = this.toggle.bind(this);
    this.handleNameChanged = this.handleNameChanged.bind(this);
    this.handleRoleChanged = this.handleRoleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChanged (event) {
    this.setState({ name : event.target.value });
  }

  handleRoleChanged (event) {
    this.setState({ role : event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const newMember = { name : this.state.name,
                        role : this.state.role }

    this.props.addMember(newMember);
    this.toggle();
    this.setState({name : "", role : "Software Engineer"});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>Add a New Project Member</ModalHeader>
          
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="recipient">Name</Label>
                <Input onChange={this.handleNameChanged} required/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Role</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleRoleChanged} required>
                  <option>Software Engineer</option>
                  <option>Quality Assurance Engineer</option>
                  <option>Product Manager</option>
                  <option>Scrum Master</option>
                  <option>Lead</option>
                </Input>
              </FormGroup>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                <Button color="primary">Add</Button>
              </ModalFooter>
            </Form>
          </ModalBody>

        </Modal>

      </div>
    );
  }
}

export default NewMember;
