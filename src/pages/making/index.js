import { Container, Stack } from "react-bootstrap"
import LogoApp from "../intro/intro_App"
import { useEffect } from "react"

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
                            <li className="d-flex">
                                <figure className="imgBox"><img src={introImg}></img></figure>
                                <div className="textBox">
                                    <h3 className="fs-4 fw-semibold">Wter Drop</h3>
                                    <p>자바스크립트와 Canvas 기술을 활용하여 물방울이 출렁이는 듯한 동적 애니메이션으로 구현했습니다.
                                        사용자가 원하는 형태와 크기로 자유롭게 커스터마이징할 수 있도록 설계되었습니다.</p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <figure className="imgBox"><img src={gridImg}></img></figure>
                                <div className="textBox">
                                    <h3 className="fs-4 fw-semibold">Grid</h3>
                                    <p>한 잡지의 표지에서 영감을 받아 작업한 디자인에
                                        자바스크립트로 동적인 애니메이션을 추가하여 창의적인 웹 개발을 해보았습니다. 

                                        이 작업을 통해 GSAP와 React의 기본적인 활용법을 익히는데 큰 도움을 받았습니다.
                                        창의적인 디자인과 프론트앤드 개발의 결합으로 더 재미난 경험을 드리고자 노력하는 개발자게 되고싶습니다.</p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <figure className="imgBox"><img src={postitImg}></img></figure>
                                <div className="textBox">
                                    <h3 className="fs-4 fw-semibold">PostIt</h3>
                                    <p></p>
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