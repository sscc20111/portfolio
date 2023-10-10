import React, { useEffect } from 'react';
import './App.css';
import Gridset , {Gird_Motion, text_Motion} from '../../js/myProjects/grid/Grid_App'
import SmoothScroll from "../../component/SmoothScroll";

import GridImg1 from './img/GridImg1.png';
import GridImg2 from './img/GridImg2.png';
import GridImg3 from './img/GridImg3.png';
import { Container } from 'react-bootstrap';


// const ImgSect = (props) => {
//   return (
//     <div className='contBox'>
//       <div className='BoxCover'></div>
//       <div className='imgBox'><img src={props.src}></img></div>
//     </div>
//   );
// }
// const TextSect = (props) => {
//   const mouseenter = (e) => {
//     text_Motion().MouseIn().mouseenter(e)
//   }
//   const click = (e) => {
//     text_Motion().MouseIn().click(e)
//   }
//   const mouseleave = (e) => {
//     text_Motion().MouseIn().mouseleave(e)
//   }


//   return (
//     <>
//       <div className='contBox'>
//         <div className='BoxCover'></div>
//       </div>
//       <div className='textBox'>
//         {props.span ? (
//           props.span.map((item, index) => <span key={index}>{item}</span>)
//         ) : null}
//         {props.a.map((item, index) => (
//           <a key={index} onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>{item}</a>
//         ))}
//       </div>
//     </>
//   );
// }
const handleMouseEnter = (e) => {
  console.log(e.target.dataset.key);
  const targetRect = e.target.getBoundingClientRect();
  const mouseY = e.clientY;
  if (mouseY < targetRect.top + (targetRect.bottom - targetRect.top) / 2) {
    console.log('마우스가 위에서 진입했습니다.');
  } else {
    console.log('마우스가 아래에서 진입했습니다.');
  }
};

function App() {
  useEffect(()=>{
    SmoothScroll(".transitionBox", ".transition-group", 1);
    Gridset('.transitionBox','#B89569');
    Gird_Motion().MotionIn()
  });
  const mouseenter = (e) => {
    text_Motion().MouseIn().mouseenter(e.target)
    handleMouseEnter(e)
  }
  const click = (e) => {
    text_Motion().MouseIn().click(e.target)
  }
  const mouseleave = (e) => {
    text_Motion().MouseIn().mouseleave(e.target)
  }

  return (
    <Container className='gridBox transitionBox'>
      <div className="item item1">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img src={GridImg1}></img></div>
        </div>
      </div>
      <div className="item item2">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <span>hello</span>
            <span>welcome to my portfolio</span>
            <a data-key='1' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Tweenmax.js</a>
        </div>
      </div>
      <div className="item item3">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img src={GridImg2}></img></div>
        </div>
      </div>
      <div className="item item4">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <a data-key='2' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>php</a>
            <a data-key='3' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Javascript</a>
            <a data-key='4' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Jquery</a>
        </div>
      </div>
      <div className="item item5">
        <div className='contBox'>
          <div className='BoxCover'></div>
          <div className='imgBox'><img src={GridImg3}></img></div>
        </div>
      </div>
      <div className="item item6">
        <div className='contBox'>
          <div className='BoxCover'></div>
        </div>
        <div className='textBox'>
            <a data-key='5' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Responsive</a>
            <a data-key='6' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Parallax</a>
            <a data-key='7' onClick={(e) => {click(e);}} onMouseEnter={(e) => {mouseenter(e);}} onMouseLeave={(e) => {mouseleave(e)}}>Animated</a>
        </div>
      </div>
    </Container>
    // <Container className='gridBox transitionBox'>
    //       <div className="item item1"><ImgSect src={GridImg1}></ImgSect></div>
    //       <div className="item item2"><TextSect a={['Tweenmax.js']} span={['hello!', 'welcome to my portfolio']}></TextSect></div>
    //       <div className="item item3"><ImgSect src={GridImg2}></ImgSect></div>
    //       <div className="item item4"><TextSect a={['php', 'Javascript', 'Jquery']}></TextSect></div>
    //       <div className="item item5"><ImgSect src={GridImg3}></ImgSect></div>
    //       <div className="item item6"><TextSect a={['Responsive', 'Parallax', 'Animated']}></TextSect></div>
    // </Container>
  );
}

export default App;
