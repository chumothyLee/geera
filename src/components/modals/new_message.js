import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class NewMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);

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

          <ModalHeader toggle={this.toggle}>New Message</ModalHeader>
          
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="recipient">To: </Label>
                <Input required/>
              </FormGroup>
              <FormGroup>
                <Label for="message-info">Message: </Label>
                <Input type="textarea" placeholder="Type your message" required/>
              </FormGroup>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                <Button color="primary">Send Message</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
          

        </Modal>

      </div>
    );
  }
}

export default NewMessage;
