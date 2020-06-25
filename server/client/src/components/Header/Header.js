import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Payments from '../payments/payments';

import {
  Nav,
  Navbar,
  NavDropdown,

} from "react-bootstrap";

import {connect} from 'react-redux';


 class Header extends Component {
   renderContent(){
     switch(this.props.auth){
       case null:
          return ;
       case false:
          return (
            <Nav.Link href="/auth/google">Login with Google</Nav.Link>
          );
       default:
         return [
          <Nav.Link key="1" ><Payments /></Nav.Link>,
          <Nav.Link key="3" style={{margin:'8px 10px'}}>Credits:{this.props.auth.credits}</Nav.Link>,
          <Nav.Link key="2" style={{margin:'8px 10px'}} href="/api/logout">Logout</Nav.Link>
         ];
     }
   }
  render() {
    
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to={this.props.auth ? '/surveys' : '/'} style={{textDecoration:'none'}}>React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {/* <Nav.Link href="#link">Login with Google</Nav.Link> */}{this.renderContent()}
          </Nav>
          
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps) (Header);