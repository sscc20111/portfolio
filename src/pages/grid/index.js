import React, { useEffect } from 'react';
import './App.css';
import Gridset , {Gird_Motion, text_Motion} from '../../js/myProjects/grid/Grid_App'
import SmoothScroll from "../../component/SmoothScroll";

import GridImg1 from './img/GridImg1.png';
import GridImg2 from './img/GridImg2.png';
import GridImg3 from './img/GridImg3.png';
import { Container } from 'react-bootstrap';


const ImgSect = (props) => {
  return (
    <div className='contBox'>
      <div className='BoxCover'></div>
      <div className='imgBox'><img src={props.src}></img></div>
    </div>
  );
}
const TextSect = (props) => {
  const mouseenter = (e) => {
    text_Motion().MouseIn().mouseenter(e)
  }
  const click = (e) => {
    text_Motion().MouseIn().click(e)
  }
  const mouseleave = (e) => {
    text_Motion().MouseIn().mouseleave(e)
  }
  return (
    <>
      <div className='contBox'>
        <div className='BoxCover'></div>
      </div>
        <div className='textBox'>
          {props.span ? (
            props.span.map((item, index) => <span key={index}>{item}</span>)
          ) : null}
          {props.a.map((item, index) => (
            <a key={index} onClick={(e) => {click(e.target);}} onMouseEnter={(e) => {mouseenter(e.target);}} onMouseLeave={(e) => {mouseleave(e.target)}}>{item}</a>
          ))}
      </div>
    </>
  );
}



function App() {
  useEffect(()=>{
    SmoothScroll(".transitionBox", ".transition-group", 1);
    Gridset('.transitionBox','#B89569');
    Gird_Motion().MotionIn()
  })
  return (
    <Container className='gridBox transitionBox'>
          <div className="item item1"><ImgSect src={GridImg1}></ImgSect></div>
          <div className="item item2"><TextSect a={['Tweenmax.js']} span={['hello!', 'welcome to my portfolio']}></TextSect></div>
          <div className="item item3"><ImgSect src={GridImg2}></ImgSect></div>
          <div className="item item4"><TextSect a={['php', 'Javascript', 'Jquery']}></TextSect></div>
          <div className="item item5"><ImgSect src={GridImg3}></ImgSect></div>
          <div className="item item6"><TextSect a={['Responsive', 'Parallax', 'Animated']}></TextSect></div>
    </Container>
  );
}

export default App;
