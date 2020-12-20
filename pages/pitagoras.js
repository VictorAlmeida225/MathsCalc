import React from 'react';
import Helmet from 'react-helmet';
import { OverlayTrigger, Button, Col, Row, Container, Table, Modal, Navbar, Nav, InputGroup, FormControl, Image, Tooltip } from 'react-bootstrap';

class ToggleButtons extends React.Component {
    state = {
        FirstActive: true,
        SecondActive: false,
    }
    render() {
        return (
            <div>
                <Button 
                    className="buttonbtn"
                    variant={this.state.FirstActive ? "secondary" : "outline-secondary"}
                    onClick={() => this.setState({ FirstActive: true }) & this.setState({ SecondActive: false }) & MudarLabelHyp()}
                    id="Radio">
                Hipotenusa</Button>
                <Button 
                    className="buttonbtn"
                    variant={this.state.SecondActive ? "secondary" : "outline-secondary"}
                    onClick={() => this.setState({ FirstActive: false }) & this.setState({ SecondActive: true }) & MudarLabelCat()}>
                Cateto</Button>
            </div>
        );
    }
}

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

function Respostas() {
    return (
        <div id="respostas-container">
            <h4 id="resp1"></h4>
            <h4 id="resp2"></h4>
            <h4 id="resp3"></h4>
            <h4 id="resp4"></h4>
            <h4 id="resp5"></h4>
            <h4 id="resp6"></h4>
            <h4 id="resp7"></h4>
            <h4 id="resp8"></h4>
            <h4 id="resp9"></h4>
            <h4 id="resp10"></h4>
        </div>
    )
}

function App() {
    return (
        <div>
            <Helmet>
                <title>MathsCalc - Teorema de Pitágoras</title>
                <link rel="shortcut icon" href="https://i.imgur.com/o1fbby0.png" type="image/x-icon"/>
            </Helmet>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Navbar.Brand href="../">
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
                    <Nav.Link href="../">Home</Nav.Link>
                    <Nav.Link href="./pitagoras" className="active">Teorema de Pitágoras</Nav.Link>
                    <Nav.Link href="../bhaskara">Bhaskara</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row className="RowInp">
                    <Col sm={12}><h3 id="lbl1">Primeiro Cateto:</h3></Col>
                    <Col sm={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Ao selecionar, o número digitado será posto como raiz!</Tooltip>}>
                                    <InputGroup.Checkbox id="chkb1"/>
                                </OverlayTrigger>
                                <InputGroup.Text>√</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="Num1"/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="RowInp">
                    <Col sm={12}><h3 id="lbl2">Segundo Cateto:</h3></Col>
                    <Col sm={12} className="SCol">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Ao selecionar, o número digitado será posto como raiz!</Tooltip>}>
                                    <InputGroup.Checkbox id="chkb2"/>
                                </OverlayTrigger>
                                <InputGroup.Text>√</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="Num2"/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="TogCol"><ToggleButtons /></Col>
                    <Col className="SubCol"><ButtonSubmit /></Col>
                </Row>
                <Row>
                    <Col><Respostas /></Col>
                    <Col id="Col-resp"></Col>
                </Row>
            </Container>
        </div>
    )
}


function MudarLabelHyp() {
    document.getElementById('lbl1').innerHTML = 'Primeiro Cateto:';
    document.getElementById('lbl2').innerHTML = 'Segundo Cateto:';
}

function MudarLabelCat(){
    document.getElementById('lbl1').innerHTML = 'Hipotenusa:';
    document.getElementById('lbl2').innerHTML = 'Cateto:';
}

function gerarTabela(ftrs) {
    var gerartable = document.createElement('Table');
    for (var i = 0; i < ftrs.length; i++) {
        var f = ftrs[i];
        var linha = document.createElement('tr');
        var elementoLinha1 = document.createElement('td');
        var elementoLinha2 = document.createElement('td');
        var texto1 = document.createTextNode(f[0]);
        var texto2 = document.createTextNode(f[1]);
        elementoLinha1.appendChild(texto1);
        elementoLinha2.appendChild(texto2);
        linha.appendChild(elementoLinha1);
        linha.appendChild(elementoLinha2);
        gerartable.append(linha);
    }
    var columnresp = document.getElementById('Col-resp');
    columnresp.append(gerartable);
}

function Fatorar(nr) {
    var partes = [];
    while (nr > 1) {
        for (var i = 2; i <= nr; i++) {
            if (nr % i) continue;
            partes.push([nr, i]);
            nr = nr / i;
            break;
        }
    }
    partes.push([1, '/']);
    return partes;
}

function Calculate() {
    var first = document.getElementById('Num1').value;
    var second = document.getElementById('Num2').value;
    var chkbone = document.getElementById('chkb1');
    var chkbtwo = document.getElementById('chkb2');
    if (!first & !second) {
        document.getElementById("Num1").placeholder = "Nenhum número digitado!";
        document.getElementById("Num2").placeholder = "Nenhum número digitado!";
    }
    else if (!first) {
        document.getElementById("Num1").placeholder = "Nenhum número digitado!";
    }
    else if (!second) {
        document.getElementById("Num2").placeholder = "Nenhum número digitado!";
    }
    else {
        if (document.getElementById('Radio').classList.contains('btn-secondary') == true) {
            if (chkbone.checked){
                var firstsqrd = false;
            } else {
                var firstsqrd = true;
            }
            if (chkbtwo.checked) {
                var secondsqrd = false;
            } else {
                var secondsqrd = true;
            }
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            document.getElementById('resp8').innerHTML = '';

            document.getElementById('resp1').innerHTML = 'A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup>';

            if (firstsqrd == true) {
                var FS = '<sup>2</sup>';
            } else {
                var FS = '';
            }
            if (secondsqrd == true) {
                var SS = '<sup>2</sup>';
            } else {
                var SS = '';
            } 

            document.getElementById('resp2').innerHTML = 'A<sup>2</sup> = ' + first + FS + ' + ' + second + SS;

            if (firstsqrd == true){
                var None = Math.pow(first, 2);
            } else {
                var None = first;
            }
            if (secondsqrd == true) {
                var Ntwo = Math.pow(second, 2);
            } else {
                var Ntwo = second;
            }

            document.getElementById('resp3').innerHTML = 'A<sup>2</sup> = ' + None + ' + ' + Ntwo;

            var soma = parseInt(None) + parseInt(Ntwo)

            document.getElementById('resp4').innerHTML = 'A<sup>2</sup> = ' + soma;

            document.getElementById('resp5').innerHTML = 'A = √' + soma;

            if (Math.sqrt(soma) % 1 !== 0) {
                var columnresp = document.getElementById('Col-resp');
                if (columnresp.hasChildNodes()) {
                    var elemento = document.getElementById('Col-resp');
                    while (elemento.firstChild) {
                        elemento.removeChild(elemento.firstChild);
                    }
                }
                var tabela = Fatorar(soma);
                gerarTabela(tabela);
                var numerosprimos = [];
                for (var i = 0; i < tabela.length; i++) {
                    numerosprimos.push(tabela[i][1])
                }

                var NúmerosDiferentes = new Set(numerosprimos);
                var NDArray = [...NúmerosDiferentes];
                var NDArrayCut = NDArray.pop();
                var numerosprimosCut = numerosprimos.pop();


                var total = 0;
                var inutil = 0;
                var inutil2 = 0;
                var numerorepitidos = [];
                var numeroantes = [];
                var numerodepois = [];

                for (var x = 0; x < NDArray.length; x++) {
                    for (var z = 0; z < numerosprimos.length; z++) {
                        var test = numerosprimos[z]
                        var test2 = numerosprimos[z - 1]
                        if (test == NDArray[x] & test == test2) {
                            inutil++
                            inutil2 = NDArray[x]
                        }
                        else if (test == NDArray[x]) {
                            inutil = 1
                            inutil2 = NDArray[x]
                        }
                    }
                    numerorepitidos.push([inutil2, inutil])
                }

                for (var y = 0; y < numerorepitidos.length; y++) {
                    var conferidor = numerorepitidos[y][1];
                    if ((conferidor & 1) & conferidor == 1) {
                        numerodepois.push(numerorepitidos[y][0]);
                    }
                    else if (conferidor & 1) {
                        numerodepois.push(numerorepitidos[y][0]);
                        numeroantes.push(total = Math.pow(numerorepitidos[y][0], ((conferidor - 1) / 2)));
                    }
                    else {
                        numeroantes.push(total = Math.pow(numerorepitidos[y][0], (conferidor / 2)));
                    }
                }

                var foradaraiz = multiplicatodooarray(numeroantes)
                var dentrodaraiz = multiplicatodooarray(numerodepois)
                
                if (foradaraiz == 1){
                    var foradaraiz = '';
                }

                document.getElementById('resp6').innerHTML = 'A = ' + foradaraiz + '√' + dentrodaraiz;

                var n = Math.sqrt(soma);
                var numeroDefinitivo = formatarValor(n);

                document.getElementById('resp7').innerHTML = 'A hipotenusa é igual a ' + foradaraiz + '√' + dentrodaraiz + ' ou ' + numeroDefinitivo;
            }
            else{
                var columnresp = document.getElementById('Col-resp');
                if (columnresp.hasChildNodes()) {
                    var elemento = document.getElementById('Col-resp');
                    while (elemento.firstChild) {
                        elemento.removeChild(elemento.firstChild);
                    }
                }
                var tabela = Fatorar(soma);
                gerarTabela(tabela);

                document.getElementById('resp6').innerHTML = 'A = ' + Math.sqrt(soma);

                document.getElementById('resp7').innerHTML = 'A hipotenusa é igual a ' + Math.sqrt(soma);
            }
        }
        else {
            if (chkbone.checked) {
                var firstsqrd = false;
            } else {
                var firstsqrd = true;
            }
            if (chkbtwo.checked) {
                var secondsqrd = false;
            } else {
                var secondsqrd = true;
            }
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            
            document.getElementById('resp1').innerHTML = 'A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup>';

            if (firstsqrd == true) {
                var FS = '<sup>2</sup>';
            } else {
                var FS = '';
            }
            if (secondsqrd == true) {
                var SS = '<sup>2</sup>';
            } else {
                var SS = '';
            } 

            document.getElementById('resp2').innerHTML = first + FS + ' = ' + second + SS + ' + ' + 'C<sup>2</sup>';

            document.getElementById('resp3').innerHTML = 'C<sup>2</sup> = ' + first + FS + ' - ' + second + SS;

            if (firstsqrd == true) {
                var None = Math.pow(first, 2);
            } else {
                var None = first;
            }
            if (secondsqrd == true) {
                var Ntwo = Math.pow(second, 2);
            } else {
                var Ntwo = second;
            }

            if (firstsqrd == false & secondsqrd == false) {
                document.getElementById('resp4').innerHTML = '';
            } else {
                document.getElementById('resp4').innerHTML = 'C<sup>2</sup> = ' + None + ' - ' + Ntwo;
            }

            var subtração = parseInt(None) - parseInt(Ntwo);

            document.getElementById('resp5').innerHTML = 'C<sup>2</sup> = ' + subtração;

            document.getElementById('resp6').innerHTML = 'C = √' + subtração;

            if (Math.sqrt(subtração) % 1 !== 0) {
                var columnresp = document.getElementById('Col-resp');
                if (columnresp.hasChildNodes()){
                    var elemento = document.getElementById('Col-resp');
                    while (elemento.firstChild) {
                        elemento.removeChild(elemento.firstChild);
                    }
                }
                var tabela = Fatorar(subtração);
                gerarTabela(tabela);
                var numerosprimos = [];
                for (var i = 0; i < tabela.length; i++) {
                    numerosprimos.push(tabela[i][1])
                }

                var NúmerosDiferentes = new Set(numerosprimos);
                var NDArray = [...NúmerosDiferentes];
                var NDArrayCut = NDArray.pop();
                var numerosprimosCut = numerosprimos.pop();
                

                var total = 0;
                var inutil = 0;
                var inutil2 = 0;
                var numerorepitidos = [];
                var numeroantes = [];
                var numerodepois = [];

                for (var x = 0; x < NDArray.length; x++){
                    for (var z = 0; z < numerosprimos.length; z++){
                        var test = numerosprimos[z]
                        var test2 = numerosprimos[z-1] 
                        if (test == NDArray[x] & test == test2) {
                            inutil++
                            inutil2 = NDArray[x]
                        }
                        else if (test == NDArray[x]){
                            inutil = 1
                            inutil2 = NDArray[x]
                        }
                    }
                    numerorepitidos.push([inutil2, inutil])
                }

                for (var y = 0; y < numerorepitidos.length; y++) {
                    var conferidor = numerorepitidos[y][1];
                    if ((conferidor & 1) & conferidor == 1) {
                        numerodepois.push(numerorepitidos[y][0]);
                    }
                    else if (conferidor & 1) {
                        numerodepois.push(numerorepitidos[y][0]);
                        numeroantes.push(total = Math.pow(numerorepitidos[y][0], ((conferidor - 1) / 2)));
                    } 
                    else {
                        numeroantes.push(total = Math.pow(numerorepitidos[y][0], (conferidor / 2)));
                    }
                }

                var foradaraiz = multiplicatodooarray(numeroantes)
                var dentrodaraiz = multiplicatodooarray(numerodepois)
                if (foradaraiz == 1) {
                    var foradaraiz = '';
                }

                document.getElementById('resp7').innerHTML = 'C = ' + foradaraiz + '√' + dentrodaraiz;

                var n = Math.sqrt(subtração);
                var numeroDefinitivo = formatarValor(n);

                document.getElementById('resp8').innerHTML = 'O outro cateto é igual a ' + foradaraiz + '√' + dentrodaraiz + ' ou ' + numeroDefinitivo;
            }
            else {
                var columnresp = document.getElementById('Col-resp');
                if (columnresp.hasChildNodes()) {
                    var elemento = document.getElementById('Col-resp');
                    while (elemento.firstChild) {
                        elemento.removeChild(elemento.firstChild);
                    }
                }
                var tabela = Fatorar(subtração);
                gerarTabela(tabela);

                // $('#resposta-container').append('<h3> A = ' + c + '</h3>');
                document.getElementById('resp7').innerHTML = 'C = ' + Math.sqrt(subtração);

                document.getElementById('resp8').innerHTML = 'O outro cateto é igual a ' + Math.sqrt(subtração);
            }
        }
    }
}

function multiplicatodooarray(v) {
    var res = 1;
    for (var i = 0; i < v.length; i++) {
        res *= v[i];
    }
    return res;
}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 3 });
}

export default App