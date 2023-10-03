import React, {  useEffect } from 'react';
import { Link } from "react-router-dom";

import { ListGroupItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import SmoothScroll from "../../component/SmoothScroll";

import { gsap } from 'gsap';
const TestApp = () => {
    useEffect(() => {
        SmoothScroll(".transitionBox", ".transition-group", 1);
    }, []);
    return(
        
        <Container className="about transitionBox bg-white" style={{paddingTop:'100px'}}>
            <Stack gap={5}>
                <div className="nameWrap">
                    <h3>남민우</h3>
                </div>
                <div className="introWrap mw-75 fs-6 fw-lighter lh-base" style={{maxWidth:'820px', width:'100%'}}>
                    <p>
                        안녕하세요, 프론트엔드 개발자 남민우입니다.
                    </p>
                    <p>
                        저는 퍼블리셔로서의 경험을 바탕으로 사용자에게 <span className="bg-warning fw-normal rounded px-2">최상의 경험을 제공</span>하기 위해 노력하는 개발자입니다. 
                        프로젝트의 목표와 방향에 따라 최적화된 웹 서비스를 개발하기 위해 동료 개발자들과의 
                        <span className="bg-warning fw-normal rounded px-2">능동적인 커뮤니케이션</span>이 필수라고 믿습니다.
                    </p>
                    <p>
                        작업의 효율성과 생산성을 중요하게 생각하며, 끊임없이 진화하는 IT 시장에 발맞춰 
                        항상 새로운 지식을 습득하고 싶습니다. 제 노력과 열정을 통해 뛰어난 웹 개발자로서 성장하고 싶습니다.
                    </p>
                    <p>
                        감사합니다.
                    </p>
                </div>
                <div className="스킬">
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
                <div>
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
                <div className="프로젝트">
                    <h4 className="mb-3 fw-bold text-warning-emphasis">저는 이런 작업경험이 있습니다.</h4>
                    <ListGroup>
                        <ListGroupItem className="border-0 py-1"><a href="http://wowm.1004home.kr/" target="_blank" rel="noopener noreferrer">와우엠</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://iaan.1004home.kr/" target="_blank" rel="noopener noreferrer">이안</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://jeanficial.1004home.kr/" target="_blank" rel="noopener noreferrer">장피셜</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://ccmlaw.1004home.kr/" target="_blank" rel="noopener noreferrer">충만법무법인</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://com2verse.1004home.kr/" target="_blank" rel="noopener noreferrer">컴투버스</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://muirim.com/" target="_blank" rel="noopener noreferrer">무이림</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://kandesign.1004home.kr/" target="_blank" rel="noopener noreferrer">칸디자인</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://pidotech.1004home.kr/" target="_blank" rel="noopener noreferrer">피도텍</a></ListGroupItem>
                        <ListGroupItem className="border-0 py-1"><a href="http://apsun.1004home.kr/" target="_blank" rel="noopener noreferrer">앞썬</a></ListGroupItem>
                    </ListGroup>
                </div>
                <Link to="/projects">
                    project page
                </Link>
            </Stack>
        </Container>
    )
};

export default TestApp;