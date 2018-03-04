import React from 'react';
import {Link} from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navibar extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark">

					<NavbarBrand href="/">Geera</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />

          			<Collapse isOpen={this.state.isOpen} navbar>
					
						<Nav className="ml-auto" navbar>
						
							<NavItem>
								<NavLink>Notifications</NavLink>
							</NavItem>  
										
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Account
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Settings
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										<Link to="/login" > Log Out </Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>

						</Nav>

		      		</Collapse>

        		</Navbar>
			</div>
		);
	}
}

export default Navibar;