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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import LogoApp from '../../pages/intro/intro_App'
import logoImg from './img/intro.jpg';
import backgroundImg from './img/background.png';
import './App.css';
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
    
        gsap.to(main, {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
        gsap.to(background, {scale: 1, duration:0.5, delay:0.2,  ease: Power1.easeInOut})
    }
    
    useEffect(() => {
        SmoothScroll(".transitionBox", ".transition-group", 1);
        introSet('.imgset', '.backgroundset');
    }, []);
    return(
        <Container className="about transitionBox bg-white" style={{paddingTop:'100px'}}>
            <Stack gap={5} direction='horizontal' style={{flexWrap: 'wrap'}}>
                <div className='contentBox position-relative z-0'>
                    <div className='imgBox'>
                        <div className='imgset position-absolute top-50 start-50 z-3'></div>
                        <div className='backgroundset position-absolute top-50 start-50 z-2'></div>
                        <img src={backgroundImg}></img>
                    </div>
                    <ul className='textBox'>
                        <li><span><FontAwesomeIcon icon={faPhone} /></span><p></p></li>
                        <li><span><FontAwesomeIcon icon={faAt} /></span><p></p></li>
                        <li><span><FontAwesomeIcon icon={faGithub} /></span><p></p></li>
                    </ul>
                </div>
                <div className='contentBox ms-auto z-1'>
                    <div className='nameWrap'>
                        <h3>남민우</h3>
                        <h3>Nam MinWoo</h3>
                    </div>
                    <Stack gap={2} className='introWrap'>
                        <p>
                            안녕하세요, 프론트엔드 개발자 남민우입니다.
                        </p>
                        <p>
                            저는 퍼블리셔로서의 경험을 바탕으로 사용자에게 <span className="bg-warning fw-normal rounded px-2 text-nowrap">최상의 경험을 제공</span>하기 위해 노력하는 개발자입니다. 
                            프로젝트의 목표와 방향에 따라 최적화된 웹 서비스를 개발하기 위해 동료 개발자들과의 
                            <span className="bg-warning fw-normal rounded px-2 text-nowrap">능동적인 커뮤니케이션</span>이 필수라고 믿습니다.
                        </p>
                        <p>
                            작업의 효율성과 생산성을 중요하게 생각하며, 끊임없이 진화하는 IT 시장에 발맞춰 
                            항상 새로운 지식을 습득하고 싶습니다. 제 노력과 열정을 통해 뛰어난 웹 개발자로서 성장하고 싶습니다.
                        </p>
                        <p>
                            감사합니다.
                        </p>
                    </Stack>
                </div>
                <div className="contentBox">
                    <h4 className="mb-3 fw-bold text-warning-emphasis">저는 이런 것을 다룰줄압니다.</h4>
                    <Stack gap={2}>
                        <div>
                            <h5 className="fw-semibold">Frontend</h5>
                            <ListGroup>
                                <ListGroupItem className="border-0 py-1">React</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">JQuery</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">Bootstrap</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">Vanilla JS</ListGroupItem>
                            </ListGroup>
                        </div>
                        <div>
                            <h5 className="fw-semibold">Backend</h5>
                            <ListGroup>
                                <ListGroupItem className="border-0 py-1">Express</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">SQL</ListGroupItem>
                            </ListGroup>
                        </div>
                        <div>
                            <h5 className="fw-semibold">Version Control</h5>
                            <ListGroup>
                                <ListGroupItem className="border-0 py-1">Git Hub</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">SourceTree</ListGroupItem>
                                <ListGroupItem className="border-0 py-1">Figma</ListGroupItem>
                            </ListGroup>
                        </div>
                    </Stack>
                </div>
                <div className="contentBox">
                    <h4 className="mb-3 fw-bold text-warning-emphasis">저는 이런 것을 배웠습니다.</h4>
                    <Row className="careerWrap">
                        <Col className="relevant">
                            <h5 className="text-center">관련 이력</h5>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col className="text-end"><span>2021.05.25 - 2021.10.05</span></Col>
                                        <Col className="text-center"><p className="mb-0">IIBI 방송정보국제교육원</p></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col className="text-end"><span>2021.11.24 ~ 2022.12.30</span></Col>
                                        <Col className="text-center"><p className="mb-0">(주)이프론트</p></Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className="additional">
                            <h5 className="text-center">기타 이력</h5>
                            <ListGroup>
                                <ListGroupItem>
                                    <Row>
                                        <Col className="text-end"><span>2018.00.00 ~ 2019.00.00</span></Col>
                                        <Col className="text-center"><p className="mb-0">기아공장</p></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col className="text-end"><span>2019.00.00 ~ 2020.00.00</span></Col>
                                        <Col className="text-center"><p className="mb-0">(주)아이엠티</p></Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
                <div className="contentBox">
                    <h4 className="mb-3 fw-bold text-warning-emphasis">저는 이런 작업경험이 있습니다.</h4>
                    <ListGroup>
                        <ListGroupItem className="border-0 py-1"><a href="http://wowm.1004home.kr/" target="_blank" rel="noopener noreferrer">와우엠</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://iaan.1004home.kr/" target="_blank" rel="noopener noreferrer">이안</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://jeanficial.1004home.kr/" target="_blank" rel="noopener noreferrer">장피셜</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://ccmlaw.1004home.kr/" target="_blank" rel="noopener noreferrer">충만법무법인</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://com2verse.1004home.kr/" target="_blank" rel="noopener noreferrer">컴투버스</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://muirim.com/" target="_blank" rel="noopener noreferrer">무이림</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="https://www.kandesign.kr/" target="_blank" rel="noopener noreferrer">칸디자인</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://pidotech.1004home.kr/" target="_blank" rel="noopener noreferrer">피도텍</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://apsun.1004home.kr/" target="_blank" rel="noopener noreferrer">앞썬</a></ListGroupItem>
                    </ListGroup>
                    <Cardslide projects={'http://muirim.com/'}>무이림</Cardslide>
                </div>
                <Link to="/projects">
                    project page
                </Link>
            </Stack>
        </Container>
    )
};


const Cardslide = ({projects, Children}) => {

    return(
        <Link to={`/projects/${projects}`}>
            <Card style={{ width: '18rem' }} className='mb-2' >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{projects} title</Card.Title>
                    <Card.Text>{Children}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}
export default TestApp;