import React from "react";
import { Link } from "react-router-dom";
// import {TitleBox, TextBox , ImgBox} from './component';
// import LogoApp from ''

// import img1 from './img/img1.png'

// import WaveApp from "";
// import IntroApp1 from "";
// import IntroApp2 from "";
// import IntroApp3 from "";


class TestApp extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="testBox transitionBox">
                <Link to="/projects">
                    <p className="development">test</p>
                </Link>
                
            </div>
        )
    };
}

export default TestApp;