import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './sign_up.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<SignUp />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SignUp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks if a form exists', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.find('Form').exists()).toEqual(true);
    });

    it ('check how many inputs', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.find('Input').length).toBe(4);
    });

    it ('check value of h3', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.find('h3').exists()).toEqual(true);
        expect(wrapper.find('h3').text()).toEqual('Create a New Account');
    });

});