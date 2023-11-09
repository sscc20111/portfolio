import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Power1, Power2, Power3 } from 'gsap';
import './App.css';
import Gridset , {Gird_Motion, text_Motion, handleMouseEnter, imgMotion} from './Grid_App'
import SmoothScroll from "../../js/SmoothScroll";

import GridImg1 from './img/GridImg1.png';
import GridImg2 from './img/GridImg2.png';
import GridImg3 from './img/GridImg3.png';
import Test1 from './img/test1.png';
import Test2 from './img/test2.png';
import Test3 from './img/test3.png';
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const App = (pages) => {
  const [gridimg,imgset] = useState([GridImg1,GridImg2,GridImg3])
  const [gridprevimg,previmgset] = useState([GridImg1,GridImg2,GridImg3])
  useEffect(()=>{
    SmoothScroll(".transitionBox", ".transition-group", 1);
    Gridset('.gridApp','#B89569');
    Gird_Motion().MotionIn()
  },[]);

  const mouseenter = (e) => {
    text_Motion().MouseIn().mouseenter(e.target)
    imgtest(e)
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

  const imgtest = (e) => {
    const i = e.target.dataset.key
    const test = [
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3}
    ]

    const target = document.querySelectorAll('.imgBox .z-1');
    const otargets = Array.from(document.querySelectorAll('.imgBox .z-0'));
    gsap.killTweensOf(target);
    gsap.killTweensOf(otargets);
    
    previmgset([gridimg[0],gridimg[1],gridimg[2]])

    setTimeout(() => {// 깜빡임 오류 해결
      imgset([test[i].img1,test[i].img2,test[i].img3])
      gsap.set(target, {opacity:1})
      gsap.to(target, {opacity:0, duration:0.35, ease: Power2.easeInOut})
      if(handleMouseEnter(e) === 'down'){
        otargets.forEach((targets, index) => {
          gsap.set(targets, {y:`${index*5 + 10}px`})
        })
      }else{
        otargets.forEach((targets, index) => {
          gsap.set(targets, {y:`-${index*5 + 10}px`})
        })
      }
    }, 10);
  }
  return (
    <div className='w-100 h-100 transitionBox gridBox' style={{background:'#fff'}}>
      <div className='gridApp w-100 m-auto' style={{maxWidth:'1600px'}}>
        <div className="item item1">
          <div className='contBox'>
            <div className='BoxCover'></div>
            <div className='imgBox'>
              <img className='z-0' src={gridimg[0]}></img>
              <img className='z-1' src={gridprevimg[0]}></img>
            </div>
          </div>
        </div>
        <div className="item item2">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <div className='textBox ms-4'>
              <span>hello</span>
              <span>welcome to my portfolio</span>
          </div>
        </div>
        <div className="item item3">
          <div className='contBox'>
            <div className='BoxCover'></div>
            <div className='imgBox'>
              <img className='z-0' src={gridimg[1]}></img>
              <img className='z-1' src={gridprevimg[1]}></img>
            </div>
          </div>
        </div>
        <div className="item item4">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <Stack className='textBox' style={{alignItems: 'flex-start', justifyContent: 'flex-end'}}>
              <Link className='mb-2' to='/about' data-key='0' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>About</Link>
              <a className='mb-2' data-key='1' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>My Projects</a>
          </Stack>
        </div>
        <div className="item item5">
          <div className='contBox'>
            <div className='BoxCover'></div>
            <div className='imgBox'>
              <img className='z-0' src={gridimg[2]}></img>
              <img className='z-1' src={gridprevimg[2]}></img>
            </div>
          </div>
        </div>
        <div className="item item6">
          <div className='contBox'>
            <div className='BoxCover'></div>
          </div>
          <Stack className='textBox' style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              {/* <a className='mb-2' data-key='2' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Login</a> */}
              <a className='mb-2' data-key='2' onClick={click} onMouseMove={mousemove} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>GuestBook</a>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
