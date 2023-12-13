import React, { useEffect, useState, useRef } from 'react';

import { gsap } from 'gsap';
// import { Power1, Power2, Power3 } from 'gsap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Button, FloatingLabel, Form, FormControl, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Gridset , { Gird_Motion, text_Motion, handleMouseEnter, imgMotion } from './Grid_App'
import { SmoothScrollKill } from "../../js/SmoothScroll";

import emailjs from '@emailjs/browser';

import Test1 from './img/test1.png';
import Test2 from './img/test2.png';
import Test3 from './img/test3.png';
import './App.css';

const ContactForm = ({contactHiden}) => {
  const form = useRef();
  
  useEffect(()=>{
    setTimeout(() => {
      const background = document.querySelector('.contact')
      background.style.backgroundColor  = '#00000052';
    }, 10);

    gsap.to('.contactWrap',{duration:0.3, opacity:1})
  },[])

  const close = () => {
    contactHiden()
    const background = document.querySelector('.contact')
    background.style.backgroundColor  = '#00000000';
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cgyffo9', 'template_yp7j9gj', form.current, 'CbApPngOAIHNzwwgW')
      .then((result) => {
          console.log(result.text);
          document.querySelector('.sendOk').style.display = 'block'//send 완료 메시지
      }, (error) => {
          console.log(error.text);
      });
  };
  return(
    <div className='contact w-100 h-100'>
      <div className='contactWrap p-4'>
        <div className='contactStage p-3'>
          <div className='closeBtn' onClick={close}><FontAwesomeIcon icon={faXmark} /></div>
          <h2 className='pt-5'>CONTACT ME</h2>
          <div className='contactConts pt-5'>
            <div className='leftBox'>
              <h3 className='mb-5'>남민우 <span>Nam Minwoo</span></h3>
              <ul>
                <li className='mb-4'>
                  <h4 className='mb-2 pt-2'>E-MAIL:</h4>
                  <p>sscc20111@naver.com</p>
                </li>
                <li className='mb-4'>
                  <h4 className='mb-2 pt-2'>PHONE:</h4>
                  <p>010-9255-9404</p>
                </li>
                <li className='sendOk' style={{display:'none'}}>
                  <p>연락주셔서 감사합니다. <br />빠른 시일 내에 답변 드리겠습니다</p>
                </li>
              </ul>
            </div>
            <div className='rightBox'>
              <Form ref={form} className='gform' onSubmit={sendEmail}>
                <Form.Group>
                  <FloatingLabel label='이름 또는 회사명 *' className='mb-3'>
                    <FormControl type='text' name="name"></FormControl>
                  </FloatingLabel>
                  <FloatingLabel label='이메일 *' className='mb-3'>
                    <FormControl type='email' name="email"></FormControl>
                  </FloatingLabel>
                  <FloatingLabel label='메시지 *' className='mb-3'>
                    <FormControl as="textarea" name="message" placeholder="Leave a comment here" style={{ height: '200px' }}></FormControl>
                  </FloatingLabel>
                </Form.Group>
                <Button onClick={sendEmail} variant="dark">Send</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
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
      img: [require('./img/About1.png'),require('./img/About2.png'),require('./img/About3.png')],
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
  const [TargetKey,setTargetKey] = useState('')//ImgSet, TextSet = targetKey 로 컨트롤
  const [ContactShow,setContactShow] = useState(false)

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


  const contactShow = () => {
    setContactShow(true);
    const blur = document.querySelector('.gridApp')

    blur.style.filter = "blur(10px)";
  }
  const contactHiden = () => {
    const blur = document.querySelector('.gridApp')

    blur.style.filter = "blur(0px)";
    setTimeout(() => {
      setContactShow(false);
    }, 1000);
    gsap.to('.contactWrap',{duration:0.3, opacity:0})
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
              <Link className='mb-2' data-key='4' onClick={contactShow} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Contact</Link>
          </Stack>
        </div>
      </div>
      {ContactShow ? (
        <ContactForm contactHiden={contactHiden}></ContactForm>
      ):null}
    </div>
  );
}

export default App;
