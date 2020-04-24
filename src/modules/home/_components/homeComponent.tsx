import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';


class HomeComponent extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="">Weather App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search City" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="mt-4">
                    <Card>
                        <Card.Header>City</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        <Col>Rancho Park, CA 90064</Col>
                                        <Col>Thursday 10:00 PM</Col>
                                        <Col>Clear with periodic clouds</Col>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Title>
                                <Row>
                                    <Col>
                                        <Card.Text>
                                            <Col><h1>75</h1></Col>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        Rancho Park, CA 90064
                                        Thursday 10:00 PM
                                        Clear with periodic clouds
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        Rancho Park, CA 90064
                                        Thursday 10:00 PM
                                        Clear with periodic clouds
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    }
}

export default HomeComponent;