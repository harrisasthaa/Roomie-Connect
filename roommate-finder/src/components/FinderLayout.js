import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
import logo from "../bed.png";

function FinderLayout(props) {

    return <div> 
        <Navbar className="primaryBar" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={logo} /> 
                </Navbar.Brand>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/profile" id="navElement">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/discover" id="navElement">Discover</Nav.Link>
                        <Nav.Link as={Link} to="/matches" id="navElement">Matches</Nav.Link>
                    </Nav>
                </Container>
            </Container>
        </Navbar>
        <Outlet />
    </div>

}

export default FinderLayout;