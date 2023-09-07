import React from 'react';
import './App.css';
import GridSet, {Change_color, Gird_Motion} from './Grid_App'

import GridImg1 from './GridImg1.png';
import GridImg2 from './GridImg2.png';
import GridImg3 from './GridImg3.png';



class GridPage extends React.Component {
  componentDidMount() {
    new GridSet();
    // const ChangeColor = new Change_color(); //menu 배경색 선택.js
    // ChangeColor.TweenMax('#B89569'); //menu 배경색 선택.js
    const GirdMotion = new Gird_Motion();
    
    GirdMotion.MotionIn();
    

  }

  ImgSect(props) {
    return (
      <div className='contBox'>
        <div className='BoxCover'></div>
        <div className='imgBox'><img src={props.src}></img></div>
      </div>
    );
  }
  TextSect(props) {
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
              <a key={index}>{item}</a>
            ))}
        </div>
      </>
    );
  }

  render() {
      return (
      <div className='gridBox'>
          <div className="item item1"><this.ImgSect src={GridImg1}></this.ImgSect></div>
          <div className="item item2"><this.TextSect a={['Tweenmax.js']} span={['hello!', 'welcome to my portfolio']}></this.TextSect></div>
          <div className="item item3"><this.ImgSect src={GridImg2}></this.ImgSect></div>
          <div className="item item4"><this.TextSect a={['php', 'Javascript', 'Jquery']}></this.TextSect></div>
          <div className="item item5"><this.ImgSect src={GridImg3}></this.ImgSect></div>
          <div className="item item6"><this.TextSect a={['Responsive', 'Parallax', 'Animated']}></this.TextSect></div>
      </div>
      );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='inner'>
          <GridPage />
        </div>
      </header>
    </div>
  );
}

export default App;
