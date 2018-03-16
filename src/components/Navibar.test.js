import React from 'react';
import ReactDOM from 'react-dom';
import Navibar from './Navibar.js';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

describe('<Navibar />', () => {

    it ('renders without exploding', () => {
        expect(shallow(<Navibar />).length).toEqual(1);
    });
    
    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Navibar />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it('check if navbar exists', () => {
        const wrapper = shallow(<Navibar />);
        expect(wrapper.find('Navbar').exists()).toEqual(true);
    });

    it('check toggle of navbar after click', () => {
        const wrapper = shallow(<Navibar />);
        const navToggle = wrapper.find('NavbarToggler');

        navToggle.simulate('click');

        const collapseToggleTrue = wrapper.find('Collapse');
        expect(collapseToggleTrue.props().isOpen).toEqual(true);

        navToggle.simulate('click');

        const collapseToggleFalse = wrapper.find('Collapse');
        expect(collapseToggleFalse.props().isOpen).toEqual(false);
    });

    it('check toggle of navbar before click', () => {
        const wrapper = shallow(<Navibar />);
        const navToggle = wrapper.find('NavbarToggler');
        const collapseToggle = wrapper.find('Collapse');

        expect(collapseToggle.props().isOpen).toEqual(false);
    });

});