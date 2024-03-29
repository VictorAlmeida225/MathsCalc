import React from 'react';
import Helmet from 'react-helmet';
import { Button, Col, Row, Container, Table, Modal, Navbar, Nav } from 'react-bootstrap';

function App(){
    return (
        <div>
            <Helmet>
                <title>MathsCalc</title>
                <link rel="shortcut icon" href="https://i.imgur.com/o1fbby0.png" type="image/x-icon" />
            </Helmet>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Navbar.Brand href="#" className="unselective">
                    <img
                        alt="Logo"
                        src="https://i.imgur.com/o1fbby0.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    MathsCalc
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#" className="active unselective">Home</Nav.Link>
                        <Nav.Link href="./pitagoras" className="unselective">Teorema de Pitágoras</Nav.Link>
                        <Nav.Link href="./bhaskara" className="unselective">Bhaskara</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default App