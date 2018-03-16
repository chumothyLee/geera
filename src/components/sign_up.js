import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, FormGroup, Label, Input, Navbar, NavbarBrand } from 'reactstrap';
import './sign_up.css';
import styles from './sign_up.module.css';

class SignUp extends Component {

  render() {

    return (      

      <div>

        <Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <NavbarBrand href="/">Geera</NavbarBrand>      
        </Navbar>

        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <h3>Create a New Account</h3>
                    <h5>It's free... for now</h5>
                    <Form>
                      <FormGroup>
                        <Label for="exampleFormControlInput1">First Name</Label>
                        <Input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFormControlInput2">Last Name</Label>
                        <Input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFormControlInput3">Email</Label>
                        <Input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Email" required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFormControlInput4">Password</Label>
                        <Input type="password" className="form-control" id="exampleFormControlInput4" placeholder="Password" required />
                      </FormGroup>
                      <Link to="/dashboard" className={styles.signupbutton} > Sign up </Link>
                    </Form>

                    <h5 style={{textAlign: 'center'}}> -or- </h5>

                    <Link to="/login" className={styles.loginbutton} > Already have an Account? Log In </Link>

                </div>
            </div>
        </div>

      </div>
    );
  }
}


export default SignUp;

