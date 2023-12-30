import { Container, Stack } from "react-bootstrap"
import LogoApp from "../intro/intro_App"
import { useEffect } from "react"

import SmoothScroll from "../../js/SmoothScroll";

import introImg from './img/Making_intro.png'
import gridImg from './img/Making_grid.png'
import postitImg from './img/Making_postit.png'



const introSet = () => {
    new LogoApp('.logo',{
        background : {
            backgroundStyles : 'color',
            backgroundColor : '#80B1C2',
            globalAlpha : 0.8
        },
        speed : 300
    })
}



const Making = () => {

    useEffect(()=>{
        setTimeout(() => {
            SmoothScroll(".transitionBox", ".transition-group", 1);
        }, 10);
        introSet();
    },[])
    return(
        <div className="maikgWrap transitionBox bg-white w-100 py-5">
            <Container style={{maxWidth:'1000px'}}>
                <Stack gap={5}>
                    <div className="visual m-auto" style={{width:'550px', maxWidth:'50%'}}>
                        <div className="logo"></div>
                    </div>
                    <div className="introWrap"></div>
                    <div className="descWrap">
                        <ul>
                            <li className="mb-5 d-flex justify-content-between align-items-center">
                                <figure className="imgBox" style={{maxWidth:'220px', width:'30%'}}><img src={introImg}></img></figure>
                                <div className="textBox" style={{width:'65%'}}>
                                    <h3 className="fs-4 fw-semibold mb-4">Wter Drop</h3>
                                    <p className="lh-base">
                                        자바스크립트와 Canvas 기술을 활용하여 물방울이 출렁이는 듯한 동적 애니메이션으로 구현했습니다.
                                        사용자가 원하는 형태와 크기로 자유롭게 커스터마이징할 수 있도록 설계되었습니다.
                                    </p>
                                </div>
                            </li>
                            <li className="mb-5 d-flex justify-content-between align-items-center">
                                <figure className="imgBox" style={{maxWidth:'220px', width:'30%'}}><img src={gridImg}></img></figure>
                                <div className="textBox" style={{width:'65%'}}>
                                    <h3 className="fs-4 fw-semibold mb-4">Grid</h3>
                                    <p className="lh-base">
                                        한 잡지의 표지에서 영감을 받아 작업한 디자인에
                                        자바스크립트로 동적인 애니메이션을 추가하여 창의적인 웹 개발을 해보았습니다. 

                                        이 작업을 통해 GSAP와 React의 기본적인 활용법을 익히는데 큰 도움을 받았습니다.
                                        창의적인 디자인과 프론트앤드 개발의 결합으로 더 재미난 경험을 드리고자 노력하는 개발자게 되고싶습니다.
                                    </p>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between align-items-center">
                                <figure className="imgBox" style={{maxWidth:'220px', width:'30%'}}><img src={postitImg}></img></figure>
                                <div className="textBox" style={{width:'65%'}}>
                                    <h3 className="fs-4 fw-semibold mb-4">PostIt</h3>
                                    <p className="lh-base">
                                        로그인 기능과 데이터베이스 활용을 공부하고자 간단한 페이지로 시작된 페이지입니다.
                                        게시판 형식의 기존 디자인에서 STICKY NOTE 라는 아이디어를 반영하여 작성해 보았습니다.
                                        고려할게 많아 react의 컴포넌트 구조, sql의 동작원리에 대해 가장 공부가 많이 되었습니다.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Stack>
            </Container>
        </div>
    )
}

export default Making