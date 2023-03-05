import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';

function FinderLayout(props) {

    return <div> 
        <Navbar className="primaryBar" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/discover">Discover</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
    </div>

}

export default FinderLayout;