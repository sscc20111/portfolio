import React from "react";
import {TitleBox, TextBox , ImgBox} from './component';
import LogoApp from '../../loadPage/intro_App'

import img1 from './img/img1.png'

import WaveApp from "./develop/intro/wave/index";
import IntroApp1 from "./develop/intro/gird1/index";
import IntroApp2 from "./develop/intro/grid2/app";
import IntroApp3 from "./develop/intro/grid3/app";

const title = 'intro-canvas'
const text1 = 'Front-end / canvas / javascript'
const text2 = '오픈소스에서 흔히 사용하는 옵션을 추가하여 cavas의 크기, 형태, 색상, 속도 등을 조절하여 사용자화가 가능하게 개발하였습니다.'
const text3 = '마침 직접개발한 스크립트를 만들고싶은 마음에 공부중이던 canvas가 생각이났고 합쳐보기로 마음먹었습니다.'
const text4 = '포트폴리오 작업을 하며 직접 개발한 작업물을 만들고싶은 욕심이 있었습니다. canvas를 공부하던중 포트폴리오에 사용할 디자인을보고 인터랙티브한 아이디어가 떠올라 개발하게 된 작업물입니다.'
const text5 = '공부중이던 wave.js 를 참고하여 원의 중심점을 기준으로 왕복운동하는 점을 만들고,각 점의 거리값과 제어점을 추가하여 원하는 형태를 만들었고,특정 속도에 맞춰 index+1의 위치값, 제어점의 값을 상속받는 형태로 설계했습니다.'

class TestApp extends React.Component {
    componentDidMount() {
        new LogoApp(".logo_background",{
            size : 400,
            background : {
                backgroundStyles : 'color',
                backgroundColor : '#80B1C2',
                globalAlpha : 0.8
            },
            speed : 100
        });
        new IntroApp2(".intro2");
    }
    render() {
        return (
            <div className="testBox transitionBox">
                <div className="development">
                    <TitleBox title={title} txt={text1}></TitleBox>
                    <div className="logo_background"></div>
                    <ImgBox src={img1}></ImgBox>
                    <WaveApp></WaveApp>
                    <TextBox txt={text2}></TextBox>
                    <IntroApp1></IntroApp1>
                    <div className="intro2"></div>
                    <TextBox txt={text3}></TextBox>
                    
                </div>
            </div>
        )
    };
}

export default TestApp;