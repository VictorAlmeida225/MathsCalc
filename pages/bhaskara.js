import React from 'react';
import Helmet from 'react-helmet';
import { Alert, OverlayTrigger, Button, Col, Row, Container, Modal, Navbar, Nav, InputGroup, Form, Image, Tooltip } from 'react-bootstrap';

class ButtonSubmit extends React.Component {
    state = {
        Hovered: false,
    }

    render() {
        return (
            <div>
                <Button
                    className="buttonbtn"
                    variant={this.state.Hovered ? "primary" : "outline-primary"}
                    onMouseEnter={() => this.setState({ Hovered: true })}
                    onMouseLeave={() => this.setState({ Hovered: false })}
                    onClick={Calculate}>
                    Calcular</Button>
            </div>
        )
    }
}

function App(){
    return (
        <div>
        <Helmet>
                <title>MathsCalc - Bhaskara</title>
                <link rel="shortcut icon" href="https://i.imgur.com/o1fbby0.png" type="image/x-icon"/>
        </Helmet>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Navbar.Brand href="../" className="unselective">
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
                <Nav.Link href="../" className="unselective">Home</Nav.Link>
                <Nav.Link href="../pitagoras" className="unselective">Teorema de Pitágoras</Nav.Link>
                <Nav.Link href="./bhaskara" className="active unselective">Bhaskara</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
            <Container>
                <Row className='RowInp'>
                    <Col md={12} xl={2}><h3 id="lbl1" className="unselective">A:</h3></Col>
                    <Col md={12} xl={10}>
                        <InputGroup className="mb-3">
                            <Form.Control type="number" id="A" />
                        </InputGroup>
                    </Col>
                    <Col md={12} xl={2}><h3 id="lbl1" className="unselective">B:</h3></Col>
                    <Col md={12} xl={10}>
                        <InputGroup className="mb-3">
                            <Form.Control type="number" id="B" />
                        </InputGroup>
                    </Col>
                    <Col md={12} xl={2}><h3 id="lbl1" className="unselective">C:</h3></Col>
                    <Col md={12} xl={10}>
                        <InputGroup className="mb-3">
                            <Form.Control type="number" id="C" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="SubCol"><ButtonSubmit /></Col>
                </Row>
            </Container>
        </div>
    )
}

function Calculate(){
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    if (!A) {
        document.getElementById("A").placeholder = "Nenhum número digitado!";
    }
    if (!B) {
        document.getElementById("B").placeholder = "Nenhum número digitado!";
    }
    if (!C) {
        document.getElementById("C").placeholder = "Nenhum número digitado!";
    }
}
export default App