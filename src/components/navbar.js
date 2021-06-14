import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var { isOpen } = this.state;
    return (
      <div className="navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">tritranduc</NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/product">product</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/">homepage</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default navbar;
