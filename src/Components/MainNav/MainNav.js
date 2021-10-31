import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MainNav = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand className='text-warning fw-bold' href="#home">Hash Tour</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link activeClassName='text-warning' as={NavLink} to='/home'>Home</Nav.Link>

                        {
                            user.displayName && <Nav.Link activeClassName='text-warning' as={NavLink} to='/myOrders'>My Orders</Nav.Link>
                        }
                        {
                            user.displayName && <Nav.Link activeClassName='text-warning' as={NavLink} to='/manageOrders'>Manage All Orders</Nav.Link>
                        }
                        {
                            user.displayName && <Nav.Link activeClassName='text-warning' as={NavLink} to='/addService'>Add Service</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user.displayName ? <button className='btn btn-warning px-5 rounded-0' onClick={handleSignOut}>LogOut</button> : <Nav.Link activeClassName='text-warning' as={NavLink} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;