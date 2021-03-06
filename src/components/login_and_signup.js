import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, FormGroup, Label, Input, Navbar, NavbarBrand } from 'reactstrap';
import styles from './login_and_signup.module.css';

class Main extends Component {

  render() {
    return (

      <div>

        <Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <NavbarBrand href="/">Geera</NavbarBrand>      
        </Navbar>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Log In to Your Account</h3>
              <Form>
                <FormGroup>
                  <Label for="exampleInputEmail1">Email address</Label>
                  <Input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleInputPassword1">Password</Label>
                  <Input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </FormGroup>
                <Link to="/dashboard" className={styles.loginbutton} > Log In </Link>
              </Form>
            </div>

            <div className="col-lg-6">
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
            </div>
          </div>
        </div>

      </div> 
    );
  }
}


export default Main;

