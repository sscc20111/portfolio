import React from 'react';
import { Link } from "react-router-dom";

import LogoApp from '../../js/intro_App'
import logoImg from './intro.jpg';
import './App.css';

import Container from 'react-bootstrap/Container';

class LoadingApp extends React.Component {
    componentDidMount() {
        // 스크립트 코드를 이 곳에 작성합니다.
        new LogoApp(".logo_main",{
            size : 550,
            background : {
                backgroundStyles : 'img',
                src : logoImg,
                globalAlpha : 1
            },
            shadow : 'true',
            shadowOption : {
                color : 'rgba(0, 0, 0, 0.6)',//rgba 형식
                blur : 15, //반응형에서는 화면 넓이에 비례해 줄어듬
                x : -5,
                y : 5
            },
            speed : 300
        });
        new LogoApp(".logo_outline",{
            size : 600,
            background : {
                backgroundStyles : 'line',
            },
            speed : 300
        });
        new LogoApp(".logo_background",{
            size : 600,
            background : {
                backgroundStyles : 'color',
                backgroundColor : '#80B1C2',
                globalAlpha : 0.8
            },
            speed : 1000
        });
    }

    render() {
        return (
            <div className="logoBox transitionBox">
                <Container>
                    <Link to="/about"><div className="logo_main"></div></Link>
                    <div className="logo_outline"></div>
                    <div className="logo_background"></div>
                </Container>
            </div>
        );
    }
}

export default LoadingApp;