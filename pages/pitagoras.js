import React from 'react';
import Helmet from 'react-helmet';
import { Button, Col, Row, Container, Table, Modal, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';

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
            <Navbar bg="dark" variant="dark">
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
                <Nav className="ml-auto mr-auto">
                    <Nav.Link href="../">Home</Nav.Link>
                    <Nav.Link href="./pitagoras" className="active">T. Pitágoras</Nav.Link>
                    <Nav.Link href="../bhaskara">Bhaskara</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                <Row className="RowInp">
                    <Col sm={12} xs={6} md={4}><h3 id="lbl1">Primeiro Cateto:</h3></Col>
                    <Col sm={12} xs={12} md={8}>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox id="chkb1"/>
                            <InputGroup.Text>√</InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl id="Num1"/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="RowInp">
                    <Col sm={12} xs={6} md={4}><h3 id="lbl2">Segundo Cateto:</h3></Col>
                    <Col className="SCol" sm={12} xs={12} md={8}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox id="chkb2"/>
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
                    <Col sm={12}><Respostas /></Col>
                    <Col sm={12} id="Col-resp"></Col>
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
    partes.push([1, '']);
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
                var firstsqrd = true;
            }
            if (chkbtwo.checked) {
                var secondsqrd = true;
            }
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            document.getElementById('resp8').innerHTML = '';

            // $('#resposta-container').append('<h4>A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup></h4>');
            document.getElementById('resp1').innerHTML = 'A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup>';

            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + first + '<sup>2</sup> + ' + second + '<sup>2</sup></h4>');
            document.getElementById('resp2').innerHTML = 'A<sup>2</sup> = ' + first + '<sup>2</sup> + ' + second + '<sup>2</sup>';

            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + fsqr + ' + ' + ssqr + '</h4>');
            document.getElementById('resp3').innerHTML = 'A<sup>2</sup> = ' + Math.pow(first, 2) + ' + ' + Math.pow(second, 2);

            var soma = parseInt(Math.pow(first, 2)) + parseInt(Math.pow(second, 2))

            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + soma + '</h4>');
            document.getElementById('resp4').innerHTML = 'A<sup>2</sup> = ' + soma;

            // $('#resposta-container').append('<h4>A = √' + soma + '</h4>');
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

                if (!numeroantes) {
                    var foradaraiz = multiplicatodooarray(numeroantes)
                }
                if (!numerodepois) {
                    var dentrodaraiz = multiplicatodooarray(numerodepois)
                }

                document.getElementById('resp6').innerHTML = 'C = ' + foradaraiz + '√' + dentrodaraiz;

                var n = Math.sqrt(soma);
                var numeroDefinitivo = formatarValor(n);

                document.getElementById('resp7').innerHTML = 'A Hipotenusa é igual a ' + foradaraiz + '√' + dentrodaraiz + ' ou ' + numeroDefinitivo;
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

                document.getElementById('resp7').innerHTML = 'A Hipotenusa é igual a ' + Math.sqrt(soma);
            }
        }
        else {
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            
            // $('#resposta-container').append('<h4>A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup></h4>');
            document.getElementById('resp1').innerHTML = 'A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup>';

            // $('#resposta-container').append('<h4>' + first + '<sup>2</sup> = ' + second + '<sup>2</sup>' + '+ C<sup>2</sup></h4>');
            document.getElementById('resp2').innerHTML = first + '<sup>2</sup> = ' + second + '<sup>2</sup> + ' + 'C<sup>2</sup>';

            // $('#resposta-container').append('<h4>' + fsqr + ' = ' + ssqr + ' + C<sup>2</sup></h4>');
            document.getElementById('resp3').innerHTML = 'C<sup>2</sup> = ' + first + '<sup>2</sup> - ' + second + '<sup>2</sup>';

            // $('#resposta-container').append('<h4>C<sup>2</sup> = ' + fsqr + ' - ' + ssqr + '</h4>');
            document.getElementById('resp4').innerHTML = 'C<sup>2</sup> = ' + Math.pow(first, 2) + ' - ' + Math.pow(second, 2);

            var subtração = parseInt(Math.pow(first, 2)) - parseInt(Math.pow(second, 2));

            // $('#resposta-container').append('<h4>C<sup>2</sup> = ' + subtração + '</h4>');
            document.getElementById('resp5').innerHTML = 'C<sup>2</sup> = ' + subtração;

            // $('#resposta-container').append('<h4>A = √' + subtração + '</h4>');
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
                if (!numeroantes){
                    var foradaraiz = multiplicatodooarray(numeroantes)
                }
                if (!numerodepois) {
                    var dentrodaraiz = multiplicatodooarray(numerodepois)
                }

                document.getElementById('resp7').innerHTML = 'C = ' + foradaraiz + '√' + dentrodaraiz;

                var n = Math.sqrt(subtração);
                var numeroDefinitivo = formatarValor(n);

                document.getElementById('resp8').innerHTML = 'O outro Cateto é igual a ' + foradaraiz + '√' + dentrodaraiz + ' ou ' + numeroDefinitivo;
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

                document.getElementById('resp8').innerHTML = 'O outro Cateto é igual a ' + Math.sqrt(subtração);
            }
        }
    }
}

const multiplicatodooarray = (itens) => itens.reduce((acumulador, item) => acumulador * item);

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 3 });
}

export default App