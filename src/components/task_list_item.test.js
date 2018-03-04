import React from 'react';
import ReactDOM from 'react-dom';
import TaskListItem from './task_list_item.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';


describe('<TaskListItem />', () => {

      const props = {
          task:                   [],
          index:                  0,
          key:                    "",
          handleRead:             () => {},
          handleDelete:           () => {},
          handleSwitch:           () => {}
      };


      const task  = {name     : "sample task 1",
                    status   : "To-Do",
                    estimate : "5",
                    assignee : "Tom Smith",
                    reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    };

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
          <ul>
              <TaskListItem task={task} index={0} key={task.name} handleRead={() => {console.log("handleRead")}} handleDelete={() => {console.log("handleDelete")}} handleSwitch={() => {console.log("handleSwitch")}}/>
          </ul>    
          , div);
        ReactDOM.unmountComponentAtNode(div);
      });

      it('checks for ListGroupItem component', () => {
          const wrapper = shallow(<TaskListItem {...props} />);
          expect(wrapper.find('ListGroupItem').exists()).toEqual(true);
      });

      it('checks button', () => {
        const wrapper = shallow(<TaskListItem {...props} />);
        expect(wrapper.find('Button').exists()).toEqual(true);
        expect(wrapper.find('Button').at(0).props().color).toEqual('primary');
        expect(wrapper.find('Button').at(1).props().color).toEqual('link');
    });


});