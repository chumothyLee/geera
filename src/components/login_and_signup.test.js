import React from 'react';
import ReactDOM from 'react-dom';
import Main from './login_and_signup.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<Main />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Main />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('checks if two forms exist', () => {
        const wrapper = shallow (<Main />);
        expect(wrapper.find('Form').exists()).toEqual(true);
        expect(wrapper.find('Form').length).toBe(2);
    });

    it ('check some values of h3 and h5', () => {
        const wrapper = shallow (<Main />);
        expect(wrapper.find('h3').at(0).text()).toEqual('Log In to Your Account');
        expect(wrapper.find('h3').at(1).text()).toEqual('Create a New Account');
        expect(wrapper.find('h5').text()).toEqual('It\'s free... for now');
    });

    it ('check inputs and their types', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('Input').length).toBe(6);
        expect(wrapper.find('[type="email"]').length).toEqual(2);
        expect(wrapper.find('[type="text"]').length).toEqual(2);
    });

});