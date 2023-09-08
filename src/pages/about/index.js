import React from "react";
import { Link } from "react-router-dom";

// import {TitleBox, TextBox , ImgBox} from './component';
// import LogoApp from ''

// import img1 from './img/img1.png'

// import WaveApp from "";
// import IntroApp1 from "";
// import IntroApp2 from "";
// import IntroApp3 from "";

import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class TestApp extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <>
                {/* <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/> */}
                <Container>
                    <div className="testBox transitionBox">
                        <Link to="/projects">
                            <Button variant="primary">test</Button>
                        </Link>
                        
                    </div>
                </Container>
            </>
        )
    };
}

export default TestApp;