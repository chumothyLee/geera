import React from 'react';
import ReactDOM from 'react-dom';
import SprintTasksView from './sprint_tasks_view.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<SprintTasksView />', () => {

    const props = {
        tasks:                  [],
        handleReadTask:         () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<SprintTasksView {...props} />).length).toEqual(1);
    });

    it('checks if there is a SprintTaskList', () => {
        const wrapper = shallow(<SprintTasksView {...props} />);
        expect(wrapper.find('SprintTaskList').exists()).toEqual(true);
    });

    it('checks values of h4', () => {
        const wrapper = shallow(<SprintTasksView {...props} />);
        expect(wrapper.find('h4').at(0).text()).toEqual(' <Badge /> ');
        expect(wrapper.find('h4').at(1).text()).toEqual(' <Badge /> ');
        expect(wrapper.find('h4').at(2).text()).toEqual(' <Badge /> ');
    });

});