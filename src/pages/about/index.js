import React, {  Children, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

import { ListGroupItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import SmoothScroll from "../../js/SmoothScroll";
import { Power1, Power3 } from 'gsap';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import LogoApp from '../../pages/intro/intro_App'
import logoImg from './img/intro.jpg';
import backgroundImg from './img/background.png';
import './App.css';

const PageLink = () => {
    const MouseMove = (e) => {
        const target = document.querySelector('.projects_link');
        const MotionBox = document.querySelector('.motionBox');
        const contRect = target.getBoundingClientRect();
        const y = e.clientY - contRect.top;
        const targetP = gsap.utils.clamp(0, 1, y / (target.clientHeight / 2));
    
        gsap.to(MotionBox, {rotate:(targetP-1)*2, translateY:-targetP*50})
    }

    const active = () => {
        gsap.registerPlugin(Flip);
        const flipFrom = document.querySelector('.motionBox')
        const flipTo = document.querySelector('.fakeBox')
        const state = Flip.getState('.motionBox, .fakeBox');
        flipFrom.classList.toggle("flipActive");
        flipTo.classList.toggle("flipActive");
        Flip.from(state, {
            duration: 0.5,
            fade: true,
            scale: true,
            absolute: true,
            toggleClass: "flipping",
            ease: "power3.inOut"
        });
        const test = document.querySelector('.about')
        setTimeout(() => {
            test.style.display = "none";
            flipTo.style.display = "none";
        }, 500);
    }

    return(
        // <Link className='projects_link py-4 d-block position-relative' style={{height:'20vh'}} onMouseMove={MouseMove} onClick={active} >
        <Link to="/projects" className='projects_link py-4 d-block position-relative' style={{height:'20vh'}} onMouseMove={MouseMove} onClick={active} >
            <div className='textBox pt-3 d-flex position-relative z-1 align-items-end flex-column' >
                <span>next</span>
                <h3 style={{fontSize:'6rem'}}>projects page</h3>
            </div>
            <div className='motionBox position-absolute z-0' data-flip-id="img" style={{width:'90vw', maxWidth:'1600px',top:'90%', left:'50%', height:'100vh', backgroundColor:'#B89569', transform:'translateX(-50%) rotate(-2deg)'}}></div>
        </Link>
    )
}

const TestApp = () => {
    const introSet = (main, background) => {
        new LogoApp(main,{
            size : 450,
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
        new LogoApp(background,{
            size : 550,
            background : {
                backgroundStyles : 'color',
                backgroundColor : '#80B1C2',
                globalAlpha : 0.8
            },
            speed : 300
        });
        introIn(main, background)
    }
    const introIn = (main, background) => {
        //gsap-scale동작시 translate오류 리셋
        gsap.set(main, {xPercent: -50, yPercent: -50, scale:0})
        gsap.set(background, {xPercent: -50, yPercent: -50, scale:0})
    
        gsap.to(main, {scale: 1, duration:0.5, delay:2.1,  ease: Power1.easeInOut})
        gsap.to(background, {scale: 1, duration:0.5, delay:1.7,  ease: Power1.easeInOut})
    }

    useEffect(() => {
        SmoothScroll(".transitionBox", ".transition-group", 1);
        introSet('.imgset', '.backgroundset');
    }, []);
    return(
        <>
        <div className='about transitionBox bg-white py-5'>
            <Container className="" style={{maxWidth:'1000px'}}>
                <Stack gap={5}>
                    <Stack className='contentBox justify-content-between align-items-end flex-wrap z-0' direction='horizontal'>
                        <div className='w-50' style={{maxWidth:'450px'}}>
                            <div className='imgBox position-relative'>
                                <div className='imgset position-absolute top-50 start-50 z-3'></div>
                                <div className='backgroundset position-absolute top-50 start-50 z-2'></div>
                                <img src={backgroundImg}></img>
                            </div>
                        </div>
                        <div className='nameWrap w-50 ps-3'>
                            <h3 style={{fontSize:'4.5rem'}}>남민우</h3>
                            <h3 style={{fontSize:'2rem'}} className='my-3 fw-normal'>Nam MinWoo</h3>
                            <ul className='textBox pt-3 ps-0 gap-3 d-grid'>
                                <li className='d-flex fs-5 align-items-center'>
                                    <FontAwesomeIcon icon={faPhone} className='me-3' />
                                    <p className='mb-0'>010-9255-9404</p>
                                </li>
                                <li className='d-flex fs-5 align-items-center'>
                                    <FontAwesomeIcon icon={faAt} className='me-3' />
                                    <p className='mb-0'>sscc20111@naver.com</p>
                                </li>
                                <li className='d-flex fs-5 align-items-center'>
                                    <FontAwesomeIcon icon={faGithub} className='me-3' />
                                    <a href='https://github.com/sscc20111' target='_blangk'>github</a>
                                </li>
                            </ul>
                        </div>
                    </Stack>
                    <div className='mb-4 z-1 trigger'>
                        <Stack gap={4} className='introWrap lh-base'>
                            <p>
                                안녕하세요, 프론트엔드 개발자 남민우입니다.
                            </p>
                            <p>
                                저는 퍼블리셔로서의 경험을 바탕으로 사용자에게 <span className="fw-normal rounded px-2 text-nowrap" style={{backgroundColor:'#b89569'}}>최상의 경험을 제공</span> 하기 위해 노력하는 개발자입니다. <br />
                                프로젝트의 목표와 방향에 따라 최적화된 웹 서비스를 개발하기 위해 동료 개발자들과의 
                                <span className="fw-normal rounded px-2 text-nowrap" style={{backgroundColor:'#b89569'}}>능동적인 커뮤니케이션</span>이 필수라고 믿습니다.
                            </p>
                            <p>
                                작업의 효율성과 생산성을 중요하게 생각하며, 끊임없이 진화하는 IT 시장에 발맞춰 <br />
                                항상 새로운 지식을 습득하고 싶습니다. 제 노력과 열정을 통해 뛰어난 웹 개발자로서 성장하고 싶습니다.
                            </p>
                            <p>
                                감사합니다.
                            </p>
                        </Stack>
                    </div>
                    <div className="mb-4 ">
                        <h4 className="mb-4 fs-2 fw-bold" style={{color:'#735a3c'}}>WORK EXPERIENCE</h4>
                        <ul className='ps-0' style={{maxWidth:'400px'}}>
                            <li className='d-flex align-items-center mb-3' style={{fontSize:'1rem'}}>
                                <p className="mb-0 w-50">(주)이프론트</p>
                                <span className='w-50'>2021.11.24 ~ 2022.12.30</span>
                            </li>
                            <li className='d-flex align-items-center' style={{fontSize:'1rem'}}>
                                <p className="mb-0 w-50">IIBI 방송정보국제교육원</p>
                                <span className='w-50'>2021.05.25 ~ 2021.10.05</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 ">
                        <h4 className="mb-4 fs-2 fw-bold" style={{color:'#735a3c'}}>SKILLS</h4>
                        <Stack gap={4}>
                            <div>
                                <h5 className="fw-semibold">Frontend</h5>
                                <ListGroup className='gap-3 ps-3 pt-3 fw-light'>
                                    <ListGroupItem className="border-0 p-0">React</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">JQuery</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">Bootstrap</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">GSAP</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">Vanilla JS</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">Figma</ListGroupItem>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="fw-semibold">Backend</h5>
                                <ListGroup className='gap-3 ps-3 pt-3 fw-light'>
                                    <ListGroupItem className="border-0 p-0">Express</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">SQL</ListGroupItem>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="fw-semibold">Version Control</h5>
                                <ListGroup className='gap-3 ps-3 pt-3 fw-light'>
                                    <ListGroupItem className="border-0 p-0">Git Hub</ListGroupItem>
                                    <ListGroupItem className="border-0 p-0">SourceTree</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Stack>
                    </div>
                </Stack>
                {/* <Link to="/projects" className='projects_link pt-5 d-block position-relative' style={{height:'20vh'}} onMouseMove={test} >
                    <div className='textBox pt-3 d-flex position-relative z-1' >
                        <h3 style={{fontSize:'6rem'}}>projects page</h3>
                    </div>
                    <div className='fakeBox position-absolute top-100 start-50 z-0' style={{width:'90vw', maxWidth:'1600px', height:'100vh', backgroundColor:'#B89569', transform:'translate(-50%,-20%) rotate(-2deg)'}}></div>
                </Link> */}
                <PageLink></PageLink>
            </Container>
        </div>
        <div className='fakeBox w-100 position-fixed' data-flip-id="img" style={{maxWidth:'1600px', height:'100vh', left:'50%', transform:'translateX(-50%)', backgroundColor:'#B89569', zIndex:'99'}}></div>
        </>
    )
};


export default TestApp;