import React from 'react';
import {Link} from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import CreateProject from './modals/create_project.js';


class Navibar extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen   : false,
			openProj : this.props.selectedProject,
			projects : this.props.projects 
		};

	}

	componentWillReceiveProps(newProps) {
		this.setState({ isOpen   : false,
						openProj : newProps.selectedProject,
						projects : newProps.projects })
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {

		const projects = this.state.projects.map ((project, index) => {
			return (
				<DropdownItem key={project.name} onClick={() => {this.props.handleSwitchProject(index)}}> {project.name} </DropdownItem >
			);
			}
		)


		return (
			<div>
				<Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark">

					<NavbarBrand href="/">Geera</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />

          			<Collapse isOpen={this.state.isOpen} navbar>
					
						<Nav className="ml-auto" navbar>
						
							<UncontrolledDropdown nav inNavbar>  
								<DropdownToggle nav caret >
									{this.state.openProj.name}
								</DropdownToggle >
								<DropdownMenu right>
									{projects}
									<DropdownItem divider />
									<CreateProject createProject={this.props.handleNewProject} generateProject={this.props.generateProject}/>
								</DropdownMenu >
							</UncontrolledDropdown >

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