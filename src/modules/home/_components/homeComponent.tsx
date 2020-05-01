import React from 'react';
import weatherIcon from '../../../assets/img/weather.png';
import '../../../style.scss';
import { getWatherByName } from '../../../services/weatherApi';

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
    cityTosearch: any;
}

class HomeComponent extends React.Component<{}, IState> {
    private textInput: React.RefObject<HTMLInputElement>;
    state: IState;
    constructor(props: any) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            backgroud: '-toggle-light',
            cityTosearch: null
        }

        this.watherStage = this.watherStage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputCityForSearch = this.handleInputCityForSearch.bind(this);
    }

    watherStage() {
        this.setState({
            backgroud: this.state.backgroud === '-toggle-dark' ? '-toggle-light' : '-toggle-dark'
        })
    }

    handleInputChange(event: any) {
        this.setState({ cityTosearch: event.target.value });
    }

    handleInputCityForSearch() {
        console.log('search for:', this.state.cityTosearch);
        let response = getWatherByName(this.state.cityTosearch);
        console.log('check res:', response)
    }

    render() {
        return (
            <div className={this.state.backgroud}>
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
                                onClick={() => this.watherStage()}
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
                            onChange={this.handleInputChange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => this.handleInputCityForSearch()}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
            </div>
        );
    }
}

export default HomeComponent;