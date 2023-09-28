import React from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { Power1, Power3 } from 'gsap';

import './App.css';
import LogoApp from '../../js/intro_App'
import logoImg from './intro.jpg';

import Container from 'react-bootstrap/Container';

// const introOut = () => {
//     gsap.to('.logo_main', {scale: 0, duration:0.5, delay:0.2,  ease: Power3.easeInOut})
//     gsap.to('.logo_outline', {scale: 0, duration:0.5, delay:0.6,  ease: Power3.easeInOut})
//     gsap.to('.logo_background', {scale: 0, duration:0.5, delay:0.4,  ease: Power3.easeInOut})
// }

class LoadingApp extends React.Component {
    constructor() {
        super();
        this.main = '.logo_main';
        this.outline = '.logo_outline';
        this.background = '.logo_background';
    }
    componentDidMount() {
        // 스크립트 코드를 이 곳에 작성합니다.
        new LogoApp(this.main,{
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
        new LogoApp(this.outline,{
            size : 600,
            background : {
                backgroundStyles : 'line',
            },
            speed : 300
        });
        new LogoApp(this.background,{
            size : 600,
            background : {
                backgroundStyles : 'color',
                backgroundColor : '#80B1C2',
                globalAlpha : 0.8
            },
            speed : 1000
        });
        console.log(this.background)
    this.introIn()
    
    // 뒤로 가기 동작을 감지하는 이벤트 리스너를 추가합니다.
    window.addEventListener('popstate', this.handlePopstate);
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        window.removeEventListener('popstate', this.handlePopstate);
    }

    handlePopstate = (event) => {
        // 뒤로 가기 동작이 감지되면 introOut 함수를 호출합니다.
        setTimeout(() => {
            this.introIn()
        }, 1000);
    }

    introIn() {
        //gsap-scale동작시 translate오류 리셋
        gsap.to(this.main, {xPercent: -50, yPercent: -50, duration:0.1})
        gsap.to(this.outline, {xPercent: -50, yPercent: -50, duration:0.1})
        gsap.to(this.background, {xPercent: -50, yPercent: -50, duration:0.1})

        gsap.to(this.main, {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
        gsap.to(this.outline, {scale: 1, duration:0.5, delay:0.9,  ease: Power1.easeInOut})
        gsap.to(this.background, {scale: 1, duration:0.5, delay:0.2,  ease: Power1.easeInOut})
    }

    introOut() {
        gsap.to(this.main, {scale: 0, duration:0.5, delay:0.2,  ease: Power3.easeInOut})
        gsap.to(this.outline, {scale: 0, duration:0.5, delay:0.6,  ease: Power3.easeInOut})
        gsap.to(this.background, {scale: 0, duration:0.5, delay:0.4,  ease: Power3.easeInOut})
    }
    


    render() {
        return (
            <div className="introBox transitionBox" style={{width: '100vw', height: '100vh'}}>
                <Container className='w-100 h-100 position-relative'>
                    <Link className="logo_main position-absolute top-50 start-50 z-3" to="/about" onClick={() => this.introOut()}></Link>
                    <div className="logo_outline position-absolute top-50 start-50 z-2"></div>
                    <div className="logo_background position-absolute top-50 start-50 z-1"></div>
                </Container>
            </div>
        );
    }
}

export default LoadingApp;