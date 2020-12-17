import React from 'react';
import Helmet from 'react-helmet';
import { Button, Col, Row, Container, Table, Modal, Navbar } from 'react-bootstrap';

function App(){
    return (
        <div>
            <Helmet>
                <title>MathsCalc</title>
                <link rel="shortcut icon" href="../images/favicon.png" type="image/x-icon" />
            </Helmet>
            <a href="./pitagoras"><h1>Mathscalc</h1></a>
            
        </div>
    )
}

export default App