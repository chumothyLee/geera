import React from 'react';
import ReactDOM from 'react-dom';
import SprintTaskList from './sprint_task_list.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<SprintTaskList />', () => {

    const props = {
        tasks:                  [],
        handleReadTask:         () => {},
        handleStatusForward:    () => {},
        handleStatusBack:       () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<SprintTaskList {...props} />).length).toEqual(1);
    });

    it('checks if there is a ListGroup', () => {
        const wrapper = shallow(<SprintTaskList {...props} />);
        expect(wrapper.find('ListGroup').exists()).toEqual(false);
    });


});