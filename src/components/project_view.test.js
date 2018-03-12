import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import ProjectView from './project_view2.js';

describe('<ProjectView />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectView   />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks existence of create new task', () => {
    const wrapper = shallow(<ProjectView />);
    expect(wrapper.find('CreateNewTask').exists()).toEqual(true);

  });

  it('checks toggle values when project tasks and sprint detail are clicked', () => {
    const wrapper = shallow(<ProjectView />);
    const projTasksToggle = wrapper.find('NavLink').at(0);
    const sprintDetailToggle = wrapper.find('NavLink').at(1);

    projTasksToggle.simulate('click');
    expect(projTasksToggle.hasClass('active')).toBe(true);

    sprintDetailToggle.simulate('click');
    expect(sprintDetailToggle.hasClass('active')).toBe(false);

  });


});

