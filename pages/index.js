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
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">
                    <img
                        alt="Logo"
                        src="https://i.imgur.com/o1fbby0.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    MathsCalc
                </Navbar.Brand>
                <Nav className="ml-auto mr-auto">
                    <Nav.Link href="#" className="active">Home</Nav.Link>
                    <Nav.Link href="./pitagoras">T. Pitágoras</Nav.Link>
                    <Nav.Link href="./bhaskara">Bhaskara</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default App