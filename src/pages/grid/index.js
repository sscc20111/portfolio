import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Power1, Power2, Power3 } from 'gsap';
import './App.css';
import Gridset , {Gird_Motion, text_Motion, handleMouseEnter, imgmtion} from '../../js/myProjects/grid/Grid_App'
import SmoothScroll from "../../component/SmoothScroll";

import GridImg1 from './img/GridImg1.png';
import GridImg2 from './img/GridImg2.png';
import GridImg3 from './img/GridImg3.png';
import Test1 from './img/test1.png';
import Test2 from './img/test2.png';
import Test3 from './img/test3.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function App() {
  const [gridimg,imgset] = useState([GridImg1,GridImg2,GridImg3])
  useEffect(()=>{
    SmoothScroll(".transitionBox", ".transition-group", 1);
    Gridset('.transitionBox','#B89569');
    Gird_Motion().MotionIn()
  },[]);

  const mouseenter = (e) => {
    text_Motion().MouseIn().mouseenter(e.target)
    handleMouseEnter(e)
    imgtest(e)
  }
  const click = (e) => {
    text_Motion().MouseIn().click(e.target)
  }
  const mouseleave = (e) => {
    text_Motion().MouseIn().mouseleave(e.target)
  }
  const mousemove = (e) => {
    imgmtion(e)
  }

  const imgtest = (nuber) => {
    const i = nuber.target.dataset.key
    const test = [
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3},
      {img1:Test1,img2:Test2,img3:Test3},
      {img1:GridImg1,img2:GridImg2,img3:GridImg3}
    ]
    imgset([test[i].img1,test[i].img2,test[i].img3])
  }
  return (
    <Container className='gridBox transitionBox'>
      <div className="item item1">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img style={{Scale:'1.2'}} src={gridimg[0]}></img></div>
        </div>
      </div>
      <div className="item item2">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <span>hello</span>
            <span>welcome to my portfolio</span>
            {/* <Link to='/projects/note' data-key='0' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>canvas</Link> */}
        </div>
      </div>
      <div className="item item3">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img style={{ transform: 'scale(1.2)' }} src={GridImg2}></img></div>
        </div>
      </div>
      <div className="item item4">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <a data-key='1' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>grid.js</a>
            <a data-key='2' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>todo-List</a>
            <a data-key='3' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>GuestBook</a>
        </div>
      </div>
      <div className="item item5">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img style={{transform:{scale:1.2}}} src={GridImg3}></img></div>
        </div>
      </div>
      <div className="item item6">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <a data-key='4' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Responsive</a>
            <a data-key='5' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Parallax</a>
            <a data-key='6' onClick={(e) => {click(e);}} onMouseMove={(e) => {mousemove(e)}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Animated</a>
        </div>
      </div>
    </Container>
  );
}

export default App;
