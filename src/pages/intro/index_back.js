import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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

const introSet = (main, outline, background) => {
    new LogoApp(main,{
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
    new LogoApp(outline,{
        size : 600,
        background : {
            backgroundStyles : 'line',
        },
        speed : 300
    });
    new LogoApp(background,{
        size : 600,
        background : {
            backgroundStyles : 'color',
            backgroundColor : '#80B1C2',
            globalAlpha : 0.8
        },
        speed : 1000
    });
}

const introIn = (main, outline, background) => {
    //gsap-scale동작시 translate오류 리셋
    gsap.to(main, {xPercent: -50, yPercent: -50, duration:0.1})
    gsap.to(outline, {xPercent: -50, yPercent: -50, duration:0.1})
    gsap.to(background, {xPercent: -50, yPercent: -50, duration:0.1})

    gsap.to(main, {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
    gsap.to(outline, {scale: 1, duration:0.5, delay:0.9,  ease: Power1.easeInOut})
    gsap.to(background, {scale: 1, duration:0.5, delay:0.2,  ease: Power1.easeInOut})
}

const introOut = (main, outline, background) => {
    gsap.to(main, {scale: 0, duration:0.5, delay:0.2,  ease: Power3.easeInOut})
    gsap.to(outline, {scale: 0, duration:0.5, delay:0.6,  ease: Power3.easeInOut})
    gsap.to(background, {scale: 0, duration:0.5, delay:0.4,  ease: Power3.easeInOut})
}


const IntroApp = () => {
    const location = useLocation();
    const logoElement = document.querySelector('.logo_main');

    useEffect(() => {
        if(location.pathname === '/'){
            if(logoElement){
                console.log(location.pathname)
                setTimeout(() => {
                    introSet('.logo_main','.logo_outline', '.logo_background')
                }, 100);
            }
        }
    });
    useEffect(() => {
        if(location.pathname === '/'){
            if(logoElement){
                console.log(location.pathname)
                setTimeout(() => {
                    introIn('.logo_main','.logo_outline', '.logo_background')
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="introBox transitionBox" style={{width: '100vw', height: '100vh'}}>
            <Container className='w-100 h-100 position-relative'>
                <Link className="logo_main position-absolute top-50 start-50 z-3" to="/about" onClick={() => introOut('.logo_main','.logo_outline', '.logo_background')}></Link>
                <div className="logo_outline position-absolute top-50 start-50 z-2"></div>
                <div className="logo_background position-absolute top-50 start-50 z-1"></div>
            </Container>
        </div>
    );
}

export default IntroApp;