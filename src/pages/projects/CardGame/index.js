import React, { useState, useEffect } from 'react';
import { Button, Container, FloatingLabel, FormControl, Stack } from "react-bootstrap"
import gsap from 'gsap';

import './style.css'


const Setting = ({Submit}) => {
    const [Total, setTotal] = useState('');

    const submit = (Total) => {
        Submit(Total)
        setTotal('')
    }

    return(<>
        <FloatingLabel className="levelInput mb-2" controlId="" label='카드 개수를 짝수로 입력하세요(최대:20)'>
            <FormControl type="number" placeholder="Game Level Choice" value={Total} onChange={(e) => setTotal(e.target.value)}></FormControl>
        </FloatingLabel>
        <Button className='' onClick={()=>submit(Total)}>시작!</Button>
    </>)
}

const Cards = ({ Total, Click }) => {
    const Color = ["red", "orange", "yellow", "green", "white", "black", "cyan", "tomato", "pink", "blue"];
    const colorSlice = Color.slice(0, Total/2);
    const ArrayColor = colorSlice.concat(colorSlice)
    const [CardArray,setCardArray] = useState('')

    const shuffleArray = (array) => {// 배열 섞기
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];// 배열의 요소를 서로 교환
        }
        setCardArray(ArrayColor)
    }

    const CardClick = (e) => {
        const target = e.target;
        if(target.classList.contains('ok') === false){
            target.classList.add('ok')
            Click(e)
        }
    }

    useEffect(()=> {
        shuffleArray(ArrayColor);
    },[])

    return (<>
        {Array.from({ length: Total }, (_, index) => (
            <div key={index + 1} data-key={index + 1} className='Card' onClick={(e)=>CardClick(e)}>
                <div className='cardInner'>
                    <div className='cardFront' style={{background:`${CardArray[index]}`}}></div>
                    <div className='cardBack'></div>
                </div>
            </div>
        ))}
        <button onClick={() => shuffleArray(ArrayColor)}>test</button>
    </>)
};

const CardGame = () => {
    const [Total, setTotal] = useState('');
    const [inputVisible, setinputVisible] = useState(true)
    const [Selected,setSelected] = useState('');

    const start = (total) => {
        setinputVisible(false);

        const totalLimit = total > 20 ? 20 : total; //20개 초과 제한
        setTotal(totalLimit);
    }

    const GameRule = (e) => {
        const target = e.target;
        const targetkey = target.getAttribute('data-key');
        const targetColor = target.querySelector(".cardFront").style.background

        switch (true) {
            case Selected === '': //선택된 카드가 있는지 판별
                setSelected(target); 
                break;
            case Selected.getAttribute('data-key') !== targetkey: //동일 카드 판별
                if (Selected.querySelector(".cardFront").style.background === targetColor) {//동일 색 판별
                    console.log('ok');//성공
                    // target.classList.add('ok')
                    // Selected.classList.add('ok')
                    setSelected('');
                } else {
                    console.log('fail');//실패
                    setSelected('');
                    setTimeout(() => {
                        target.classList.remove('ok')
                        Selected.classList.remove('ok')
                    }, 800);
                }
                break;
            default:
                break;
        }
    }


    return(
        <div className="transitionBox">
            <div className="CardGame" style={{width:'100vw', height:'100vh'}}>
                {inputVisible ? (
                    <div className='inputBox position-absolute top-50 start-50 translate-middle'>
                        <Setting Submit={start}></Setting>
                    </div>
                ) : (
                    <Stack className='cardWrap position-absolute top-50 start-50 translate-middle' direction="horizontal" gap={3}>
                        <Cards Total={Total} Click={GameRule}></Cards>
                    </Stack>
                )}
            </div>
        </div>
    )
}

export default CardGame