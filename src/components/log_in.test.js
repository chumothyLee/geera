import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'reactstrap';
import LogIn from './log_in.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<LogIn />', () => {

  // it ('renders without exploding', () => {
  //   expect(
  //     shallow(
  //       <LogIn /> 
  //     ).length
  //   ).toEqual(1);
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogIn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks if a form exists', () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.find('Form').exists()).toEqual(true);
  });

  it ('check if there is input for email and password', () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.find('Input').length).toBe(2);
  });

  it ('check if there are two buttons', () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.find('Link').length).toBe(2);
  });

  it ('check value of h3', () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.find('h3').exists()).toEqual(true);
    expect(wrapper.find('h3').text()).toEqual('Log In to Your Account');
  });

});