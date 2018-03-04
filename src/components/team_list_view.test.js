import React from 'react';
import ReactDOM from 'react-dom';
import TeamListView from './team_list_view.js';
import { Button, ListGroup, Card, CardHeader, CardBody  } from 'reactstrap';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<TeamListView />', () => {

    const props = {
        team:                    [],
        handleMessageMember:     () => {}
    };

    it('renders without crashing', () => {
        expect(shallow(<TeamListView {...props} />).length).toEqual(1);
        
    });

    it('checks for Card and CardHeader component', () => {
        const wrapper = shallow(<TeamListView {...props} />);
        expect(wrapper.find('CardHeader').exists()).toEqual(false);
        expect(wrapper.find('Card').length).toEqual(0);
    });

});