import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme'; 

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that there is a nav bar', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('Navibar').exists()).toEqual(true);
    });

    it('checks that there is the project view', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('ProjectView').exists()).toEqual(true);
    });


});