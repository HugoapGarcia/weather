import React from 'react';
import weatherIcon from '../../../assets/img/weather.png';
import '../../../style.scss';

import { getWeatherByCityName } from '../../../services/weatherApi';
import {
    Container,
    Row,
    Col,
    Card,
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
    name: any;
    icon: any;
    temp: any;
    humidity: any;
    wind: any;
    feelsLike: any;
    description: any;
    day: any;
    time: any
}

class HomeComponent extends React.Component<{}, IState> {
    private textInput: React.RefObject<HTMLInputElement>;
    days: any;
    state: IState;
    constructor(props: any) {
        super(props);
        this.textInput = React.createRef();
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.state = {
            backgroud: '-toggle-light',
            cityTosearch: null,
            name: null,
            icon: weatherIcon,
            temp: 0,
            humidity: 0,
            wind: 0,
            feelsLike: 0,
            description: null,
            day: null,
            time: null

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

    async handleInputCityForSearch(units: any) {

        await getWeatherByCityName(this.state.cityTosearch, units)
            .then((response) => {
                console.log('success:', response);
                this.setState({
                    name: response.data.name,
                    icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    wind: response.data.wind.speed,
                    feelsLike: response.data.main.feels_like,
                    description: response.data.weather[0].description,
                    day: this.days[(new Date(response.data.dt * 1000)).getDay()],
                    time: (new Date(response.data.dt * 1000)).toLocaleTimeString()
                })
            })
            .catch((error: any) => {
                throw error
            })
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
                            <Button variant="outline-primary" onClick={() => this.handleInputCityForSearch('metric')}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <Card>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3 -weather-icon"
                                            src={this.state.icon}
                                            alt="Generic placeholder"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="ml-3">
                                        <Card.Text className="-temp-text">{this.state.temp}
                                            <button className="-celsius-f ml-2" onClick={() => this.handleInputCityForSearch('imperial')}>&#x2103;</button>_
                                            <button className="-celsius-f" onClick={() => this.handleInputCityForSearch('metric')}>&#8457;</button>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Text className="-description ml-3">
                                            {this.state.description}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Text className="-description ml-3">
                                            {this.state.day} {this.state.time}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className="mt-5">
                                    <Col md={8}>
                                        <Card.Text className="mt-3 -details-text">Humidity: {this.state.humidity} %</Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                        <Card.Text className="-details-text">Wind: {this.state.wind} kmp</Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                        <Card.Text className="-details-text">Feels like: {this.state.feelsLike}</Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>

            </div>
        );
    }
}

export default HomeComponent;