import React, { Component } from 'react';
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <>

        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Administrador</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>



        <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Registrar Productos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                <Card.Title>Listar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Buscar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Actualizar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
      </>
    );
  }
}

export default App;