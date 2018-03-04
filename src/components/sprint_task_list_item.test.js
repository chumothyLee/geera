import React from 'react';
import ReactDOM from 'react-dom';
import SprintTaskListItem from './sprint_task_list_item.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<SprintTaskListItem />', () => {

    const props = {
        task:                  [],
        index:                  0,
        key:                    "",
        handleRead:             () => {},
        handleStatusForward:    () => {},
        handleStatusBack:       () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<SprintTaskListItem {...props} />).length).toEqual(1);
    });

    it('checks if there is a ListGroupItem', () => {
        const wrapper = shallow(<SprintTaskListItem {...props} />);
        expect(wrapper.find('ListGroupItem').exists()).toEqual(true);
    });

    it('checks for divs', () => {
        const wrapper = shallow(<SprintTaskListItem {...props} />);
        expect(wrapper.find('div').length).toEqual(3);
    });

});