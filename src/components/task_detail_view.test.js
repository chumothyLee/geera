import React from 'react';
import ReactDOM from 'react-dom';
import TaskDetailView from './task_detail_view.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<TaskDetailView />', () => {

    const props = {
        task:          []
    };

    it('renders without crashing', () => {
        expect(shallow(<TaskDetailView {...props} />).length).toEqual(1);
    });

    it('checks for Card component', () => {
        const wrapper = shallow(<TaskDetailView {...props} />);
        expect(wrapper.find('Card').exists()).toEqual(true);
    });

    it('checks the values of p', () => {
        const wrapper = shallow(<TaskDetailView {...props} />);
        expect(wrapper.find('p').at(0).text()).toEqual(' Status');
        expect(wrapper.find('p').at(1).text()).toEqual(' Story Point Estimate');
        expect(wrapper.find('p').at(2).text()).toEqual(' Assignee');
        expect(wrapper.find('p').at(3).text()).toEqual(' Description');
        expect(wrapper.find('p').at(4).text()).toEqual(' Requirements ');
    });

});