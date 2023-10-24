import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class MyNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="fixed-top bg-dark navbar-dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link as={Link} to={"business"}>business</Nav.Link>
                                <Nav.Link as={Link} to={"entertainment"}>entertainment</Nav.Link>
                                <Nav.Link as={Link} to={"health"}>health</Nav.Link>
                                <Nav.Link as={Link} to={"science"}>science</Nav.Link>
                                <Nav.Link as={Link} to={"sports"}>sports</Nav.Link>
                                <Nav.Link as={Link} to={"technology"}>technology</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default MyNavBar;