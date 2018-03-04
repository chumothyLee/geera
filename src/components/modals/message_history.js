import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, ListGroupItem } from 'reactstrap';


class MessageHistory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      messages: [],
      value: ''
    };

    this.toggle = this.toggle.bind(this);
    this.setName = this.setName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  setName(name) {
    this.setState({
      name
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    const message = this.state.value;

    event.preventDefault();

    const messages = this.state.messages;
    messages.push(message);

    this.setState(messages);

    event.target.reset();
  }
 

  render() {

    const messageHistory = this.state.messages.map((message, index) => {
      return (<ListGroupItem key={index}> {message} </ListGroupItem >);
    })

    return (
      <div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
          
          <ModalBody>
            <div className="container text-left">
              <ListGroupItem> Hello </ListGroupItem>
            </div>
            <div className="container text-right">
              {messageHistory}
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="message-info">Message: </Label>
                <Input type="textarea" onChange={this.handleChange} placeholder="Type your message" required/>
              </FormGroup>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                <input type="submit" value="Send Message" className="btn btn-primary" />
              </ModalFooter>
            </Form>
          </ModalBody>
    

        </Modal>

      </div>
    );
  }
}

export default MessageHistory;
