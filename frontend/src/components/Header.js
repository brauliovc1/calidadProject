import React from 'react'
import { LinkContainer } from 'react-router-bootstrap' 
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Seguimiento de programa y mejora de procesos</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                    <LinkContainer to='/solicitud'>
                        <Nav.Link>
                            <i className='fas fa-file'></i> Solicitud de equipo
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link>
                            <i className='fas fa-user'></i> Log in
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header