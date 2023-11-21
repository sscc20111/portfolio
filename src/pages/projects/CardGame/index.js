import React, { useState, useEffect } from 'react';
import { Button, Container, FloatingLabel, FormControl, Stack } from "react-bootstrap"

import './style.css'


const Setting = ({Submit}) => {
    const [Level, setLevel] = useState('');

    const submit = (Level) => {
        Submit(Level)
        setLevel('')
    }


    return(
        <>
        <FloatingLabel className="levelInput mb-2" controlId="" label='카드 개수를 짝수로 입력하세요(최대:20)'>
            <FormControl type="number" placeholder="Game Level Choice" value={Level} onChange={(e) => setLevel(e.target.value)}></FormControl>
        </FloatingLabel>
        <Button className='' onClick={()=>submit(Level)}>시작!</Button>
        </>

    )
}

const Cards = ({ count }) => {
    const divs = Array.from({ length: count }, (_, index) => (
        <div key={index + 1} className='testCard'>{index + 1}</div>
    ));

    return <>{divs}</>;
};

const CardGame = () => {
    const [Count, setCount] = useState('');
    const [inputVisible, setinputVisible] = useState(true)

    const start = (Level) => {
        setinputVisible(false);

        const count = Level > 20 ? 20 : Level; //20개 초과 제한
        setCount(count);
    }

    const Color = ['#004e66', '#a79c8e', '#fd999a', '#6d9d88', '#ff5f2e', '#fcbe32'];
    const test = ['1', '2', '3', '4', '5', '6'];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          // 배열의 요소를 서로 교환
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      
      // 배열 섞기
      shuffleArray(test);
      
      console.log(test); // 섞인 배열 출력
    return(
        <div className="transitionBox">
            <div className="CardGame" style={{width:'100vw', height:'100vh'}}>
                {inputVisible ? (
                    <div className='inputBox position-absolute top-50 start-50 translate-middle'>
                        <Setting Submit={start}></Setting>
                    </div>
                ) : (
                    <Stack className='cardWrap position-absolute top-50 start-50 translate-middle' direction="horizontal" gap={3}>
                        <Cards count={Count}></Cards>
                    </Stack>
                )}
            </div>
        </div>
    )
}

export default CardGame