import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import ProjTasksView from './proj_tasks_view.js';

describe('<ProjTasksView />', () => {

    const props = {
            tasks:            [],
            handleCreateTask: () => {},
            handleReadTask:   () => {},
            handleDeleteTask: () => {},
            handleSwitchTask: () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<ProjTasksView {...props} />).length).toEqual(1);
    });

    it('checks values of h4', () => {
        const wrapper = shallow(<ProjTasksView {...props} />);
        expect(wrapper.find('h4').at(0).text()).toEqual(' Current Sprint ');
        expect(wrapper.find('h4').at(1).text()).toEqual(' Backlog ');
    });

    it('checks button', () => {
        const wrapper = shallow(<ProjTasksView {...props} />);
        expect(wrapper.find('Button').exists()).toEqual(true);
        expect(wrapper.find('Button').props().color).toEqual('primary');
    });


});