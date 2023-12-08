import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Power1, Power2, Power3 } from 'gsap';
import './App.css';
import Gridset , {Gird_Motion, text_Motion, handleMouseEnter, imgMotion} from './Grid_App'
import {SmoothScrollKill} from "../../js/SmoothScroll";


import Test1 from './img/test1.png';
import Test2 from './img/test2.png';
import Test3 from './img/test3.png';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ItemData = (item) => {
  switch (item) {
    case '0': return {
      title:'About',
      img: [require('./img/About1.png'),require('./img/About2.png'),require('./img/About3.png')],
      desc: ['안녕하세요','프론트엔드 개발자 남민우 입니다.'],
    };
    case '1': return {
      title:'Making',
      img: [require('./img/Making1.png'),require('./img/Making2.png'),require('./img/Making3.png')],
      desc: ['포트폴리오 제작에 대한 이야기입니다.'],
    };
    case '2': return {
      title:'Projects',
      img: [require('./img/Projects1.png'),require('./img/Projects2.png'),require('./img/test3.png')],
      desc: ['포트폴리오에 작성된 프로젝트 페이지입니다.','간략한 설명과 토이프로젝트 들이 있습니다.'],
    };
    case '3': return {
      title:'GuestBook',
      img: [Test1,Test2,Test3],
      desc: ['방명록 작성이 가능한 페이지 입니다.','방문하셔서 작성해주시면 큰 힘이됩니다!', '피드백이나 방향성 적어주시면 반영하겠습니다.'],
    };
    case '4': return {
      title:'Contact',
      img: [],
      desc: [],
    };
    default: return {
      title:'About',
      img: [require('./img/About1.png'),require('./img/About2.png'),require('./img/About3.png')],
      desc: ['안녕하세요','프론트엔드 개발자 남민우 입니다.'],
    };
  }
}

const ImgSet = ({ Target, section }) => {
  const Img =  <img src={ItemData(Target).img[section]} />
  return (
    <TransitionGroup className='imgBox'>
      <CSSTransition key={Target} timeout={350} classNames="ImgItem">
        <>{Img}</>
      </CSSTransition>
    </TransitionGroup>
  );
};
const TextSet = ({ Target }) => {
  const Text = <div className='textWrap'>{ItemData(Target).desc.map((item, index) => <span key={index}>{item}</span>)}</div>;
  return (
    <TransitionGroup className='textBox'>
      <CSSTransition key={Target} timeout={350} classNames="TextItem">
        <>{Text}</>
      </CSSTransition>
    </TransitionGroup>
  );
};


const App = (pages) => {
  const [TargetKey,setTargetKey] = useState('')

  useEffect(()=>{
    Gridset('.gridApp','#B89569');
    Gird_Motion().MotionIn()
    setTimeout(() => { //grid 이동 모션시 어색함 수정
      SmoothScrollKill() //SmoothScroll에서 실행된 body.height 초기화
  }, 500);
  },[]);

  const mouseenter = (e) => {
    text_Motion().MouseIn().mouseenter(e.target)
    setTargetKey(e.target.dataset.key)
    imgMouseEnter(e)
  }
  const click = (e) => {
    text_Motion().MouseIn().click(e.target, (pages.delay/1000))
  }
  const mouseleave = (e) => {
    text_Motion().MouseIn().mouseleave(e.target)
  }
  const mousemove = (e) => {
    imgMotion(e)
  }

  const imgMouseEnter = (e) => {
    setTimeout(() => {// 깜빡임 오류 해결
      const target = document.querySelectorAll('.imgBox .ImgItem-enter');
  
      const checkSign = (handleMouseEnter(e) === 'down') ? '' : '-';//마우스 진입방향 감지
      
      target.forEach((targets, index) => {
        gsap.set(targets, {y:`${checkSign}${index*3 + 5}px`})
      })
    }, 10);
  }
  return (
    <div className='w-100 h-100 transitionBox gridWrap' style={{background:'#fff'}}>
      <div className='gridApp w-100 m-auto' style={{maxWidth:'1600px'}}>
        <div className="item item1">
          <div className='contBox'>
            <div className='BoxCover'></div>
              <ImgSet Target={TargetKey} section={0}></ImgSet>
          </div>
        </div>
        <div className="item item2">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <div className='textBox ms-4'>
            <TextSet Target={TargetKey}></TextSet>
          </div>
        </div>
        <div className="item item3">
          <div className='contBox'>
            <div className='BoxCover'></div>
            <div className='imgBox'>
              <ImgSet Target={TargetKey} section={1}></ImgSet>
            </div>
          </div>
        </div>
        <div className="item item4">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <Stack className='textBox ps-3 pb-3' style={{alignItems: 'flex-start', justifyContent: 'flex-end'}}>
              <Link className='mb-2' to='/about' data-key='0' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>About</Link>
              <Link className='mb-2' to='/making' data-key='1' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Making</Link>
              <Link className='mb-2' to='/projects' data-key='2' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>My Projects</Link>
          </Stack>
        </div>
        <div className="item item5">
          <div className='contBox'>
            <div className='BoxCover'></div>
            <div className='imgBox'>
              <ImgSet Target={TargetKey} section={2}></ImgSet>
            </div>
          </div>
        </div>
        <div className="item item6">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <Stack className='textBox pe-3 pb-3' style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <Link to='/guestbook' className='mb-2' data-key='3' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>GuestBook</Link>
              <Link to='/contact' className='mb-2' data-key='4' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Contact</Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
