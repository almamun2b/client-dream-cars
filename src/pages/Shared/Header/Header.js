import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    
    const profile = ()=>{
        if (user?.photoURL) {
            return user.photoURL;
        }
        else{
            return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
    }

    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Your Dream Car</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/products">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>

                        </Nav>
                        <Nav className="d-flex align-items-center">
                            {user?.email && <Navbar.Text>
                                <img className="profile-image" src={profile()} alt="" /><span className="me-3">{user?.displayName}</span>
                            </Navbar.Text>}

                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;