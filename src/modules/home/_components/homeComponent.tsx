import React from 'react';
import weatherIcon from '../../../assets/img/weather.png';


import {
    Container,
    Row,
    Col,
    Card,
    CardGroup,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Image,
    InputGroup
} from 'react-bootstrap';

interface IState {
    backgroud: any;
  }

class HomeComponent extends React.Component<{}, IState> {
    private myRef: React.RefObject<HTMLInputElement>;
    state: IState;
    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            backgroud: {}
        }
    }

    watherStage() {

    }

    render() {
        return (
            <div className="-toggle-dark" ref={this.myRef}>
                <Navbar expand="lg">
                    <Navbar.Brand href=""><Image src={weatherIcon} width="50" height="50" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label=""
                                onClick={() => { this.setState({}) }}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="mt-4 text-center">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type city name to find weather"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
            </div>
        );
    }
}

export default HomeComponent;