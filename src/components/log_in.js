import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, FormGroup, Label, Input, Navbar, NavbarBrand } from 'reactstrap';
import styles from './log_in.module.css';

class LogIn extends Component {

  render() {
    return (    

      <div>

        <Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <NavbarBrand href="/">Geera</NavbarBrand>      
        </Navbar>

        <div className="container">
          <div className="row">
            <div className="col-lg">
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
              
              <h5 style={{textAlign: 'center'}}> -or- </h5>
                
              <Link to="/signup" className={styles.signupbutton} > Sign Up for an Account</Link>  
                          
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default LogIn;

