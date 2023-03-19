import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";

import logo from "../assets/images/logo.png";
import "./style.css";
import {  NavLink } from "react-router-dom";

const Header = () => {
  // Collapse isOpen State
  // const [isOpen, setIsOpen] = React.useState(false);
  const [show, setIsShow] = useState(false);
  const toggle = () => setIsShow((prevState) => !prevState);
  return (
    <div>
      <Navbar light className="headerHome shadow px-2 py-3 bg-white" fixed="top" expand="lg">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="imgLogo" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsShow(!show);
          }}
        />
        <Collapse className="ps-3" navbar>
          <Nav className="me-auto d-flex" navbar>
            <NavItem>
              <NavLink to={`/home`} className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/users`} className="nav-link">
                users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/contact`} className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Offcanvas isOpen={show}>
        <OffcanvasHeader toggle={toggle}>
          <img src={logo} alt="" className="imgLogo" />
        </OffcanvasHeader>
        <OffcanvasBody className="headerHome">
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to={`/Home`} className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/users`} className="nav-link">
                users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/contact`} className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
export default Header;
