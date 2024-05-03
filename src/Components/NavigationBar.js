import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Utils/Img/Primary_logo.png";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="bg-body-primary text-white">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="" className="max-h-[60px]" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar" className="flex justify-end ">
            <Nav className="">
              <Nav.Link href="#Carosule">Home</Nav.Link>
              <Nav.Link href="#Service">Our Services</Nav.Link>
              <Nav.Link href="#Invester">Invester Corner</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
              <Nav.Link href="#Experts">Experts</Nav.Link>
              <Nav.Link href="#Partners">Partners</Nav.Link>
              <Nav.Link href="#About">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
