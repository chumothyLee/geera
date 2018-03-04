import React from 'react';
import ReactDOM from 'react-dom';
import TeamListItem from './team_list_item.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<TeamListItem />', () => {

    const props = {
        teammember:         [],
        handleReadTask:     () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<TeamListItem {...props} />).length).toEqual(1);
        
    });

    it('checks for ListGroupItem component', () => {
        const wrapper = shallow(<TeamListItem {...props} />);
        expect(wrapper.find('ListGroupItem').exists()).toEqual(true);
    });

    it('checks button', () => {
        const wrapper = shallow(<TeamListItem {...props} />);
        expect(wrapper.find('Button').props().color).toEqual('primary');
    });

});