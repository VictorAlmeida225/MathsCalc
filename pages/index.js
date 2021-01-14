import React from 'react';
import Helmet from 'react-helmet';
import { Button, Col, Row, Container, Table, Modal, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

function App(){
    return (
        <div>
            <Helmet>
                <title>MathsCalc</title>
                <link rel="shortcut icon" href="https://i.imgur.com/o1fbby0.png" type="image/x-icon" />
            </Helmet>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Link href="../">
                    <Navbar.Brand className="unselective">
                        <img
                            alt="Logo"
                            src="https://i.imgur.com/o1fbby0.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    MathsCalc
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="./"><Nav.Link className="active unselective">Home</Nav.Link></Link>
                        <Link href="./pitagoras"><Nav.Link className="unselective">Teorema de Pitágoras</Nav.Link></Link>
                        <Link href="./bhaskara"><Nav.Link className="unselective">Bhaskara</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default App