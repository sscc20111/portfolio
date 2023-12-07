import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Power1, Power3 } from 'gsap';

import './App.css';
import LogoApp from './intro_App'
import logoImg from './img/intro.jpg';

import Container from 'react-bootstrap/Container';
import {SmoothScrollKill} from "../../js/SmoothScroll";

const introSet = (main, outline, background) => {
    new LogoApp(main,{
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
        background : {
            backgroundStyles : 'line',
        },
        speed : 300
    });
    new LogoApp(background,{
        background : {
            backgroundStyles : 'color',
            backgroundColor : '#80B1C2',
            globalAlpha : 0.8
        },
        speed : 1000
    });
    introMotion().In();
}

const introMotion = () => {
    const main = '.logo_main';
    const outline = '.logo_outline';
    const background = '.logo_background';
    const In = () => {
        //gsap-scale동작시 translate오류 리셋
        gsap.set(main, {xPercent: -50, yPercent: -50, scale:0})
        gsap.set(outline, {xPercent: -50, yPercent: -50, scale:0})
        gsap.set(background, {xPercent: -50, yPercent: -50, scale:0})
    
        gsap.to(main, {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
        gsap.to(outline, {scale: 1, duration:0.5, delay:0.9,  ease: Power1.easeInOut})
        gsap.to(background, {scale: 1, duration:0.5, delay:0.2,  ease: Power1.easeInOut})
    }
    
    const Out = () => {
        gsap.to(main, {scale: 0, duration:0.5, delay:0.2,  ease: Power3.easeInOut})
        gsap.to(outline, {scale: 0, duration:0.5, delay:0.6,  ease: Power3.easeInOut})
        gsap.to(background, {scale: 0, duration:0.5, delay:0.4,  ease: Power3.easeInOut})
    }
    return {In, Out}
}


const IntroApp = () => {
    const navigate = useNavigate();
    const introDuration = 5000;

    useEffect(() => {
        introSet('.logo_main','.logo_outline', '.logo_background')
        SmoothScrollKill() //SmoothScroll에서 실행된 body.height 초기화

        setTimeout(() => {
            navigate('/grid');
            introMotion().Out();
        }, introDuration);
    },[]);

    return (
        <div className="introWrap transitionBox" style={{width: '100vw', height: '100vh'}}>
            <Container className='w-100 h-100 position-relative'>
                <Link className="logo_main position-absolute top-50 start-50 z-3" to="/grid" onClick={() => introMotion().Out()}></Link>
                <div className="logo_outline position-absolute top-50 start-50 z-2"></div>
                <div className="logo_background position-absolute top-50 start-50 z-1"></div>
            </Container>
        </div>
    );
}

export default IntroApp;