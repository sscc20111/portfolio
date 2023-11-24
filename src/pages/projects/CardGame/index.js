import React, { useState, useEffect } from 'react';
import { Button, FloatingLabel, FormControl, Stack } from "react-bootstrap"

import './style.css'
import cardimg from './img/cardBackground.png'


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

const Cards = ({ Total, Click, StartTime, Reset }) => {
    const Color = ["red", "orange", "yellow", "green", "white", "black", "cyan", "tomato", "pink", "blue"];
    const colorSlice = Color.slice(0, Total/2);
    const ArrayColor = colorSlice.concat(colorSlice)
    const [CardArray,setCardArray] = useState('')

    const gameStart = () => {
        const target = document.querySelectorAll('.Card');
        target.forEach((card,index)=>{
            setTimeout(() => {
                card.classList.add('cardFlip');
            }, 500 + (40 * index));
            setTimeout(() => {//카드 감추기
                card.classList.remove('cardFlip');
            }, 2000 + (target.length*100));
        })
        setTimeout(() => {
            StartTime(new Date());//타이머 시작
        }, 2000 + (target.length*100));
    }
    const shuffleArray = (array) => {// 배열 섞기
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];// 배열의 요소를 서로 교환
        }
        setCardArray(ArrayColor)
        gameStart()
    }
    const reset = () => {
        const target = document.querySelectorAll('.Card.cardFlip');
        target.forEach((card)=>{//셔플전 카드 감추기
            card.classList.remove('cardFlip')
        })
        setTimeout(() => {//카드 감추고 셔플
            shuffleArray(ArrayColor)
        }, 600);
        Reset()
    }

    const CardClick = (e) => {
        const target = e.target;

        if(target.classList.contains('cardFlip') === false){
            target.classList.add('cardFlip')
            Click(target)
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
                    <div className='cardBack' style={{backgroundImage: `url(${cardimg})`}}></div>
                </div>
            </div>
        ))}
        <button onClick={reset}>reset</button>
    </>)
};

const CardGame = () => {
    const [Total, setTotal] = useState('');
    const [inputVisible, setinputVisible] = useState(true)
    const [Selected,setSelected] = useState('');
    const [StartTime,setStartTime] = useState('')
    const [Completed,setCompleted] = useState([])

    const CardSetting = (total) => {
        setinputVisible(false);

        const totalOdd = (total % 2 !== 0) ? parseInt(total, 10)+1 : total; //홀수 제한
        const totalLimit = totalOdd > 20 ? 20 : totalOdd; //20개 초과 제한
        setTotal(totalLimit);
    }

    const Reset = () => {
        setStartTime('');
        setCompleted([]);
    }

    const GameRule = (target) => {
        const targetkey = target.getAttribute('data-key');
        const targetColor = target.querySelector(".cardFront").style.background

        switch (true) {
            case Selected === '': //선택된 카드가 있는지 판별
                setSelected(target); 
                break;
            case Selected.getAttribute('data-key') !== targetkey: //동일 카드 판별
                if (Selected.querySelector(".cardFront").style.background === targetColor) {//동일 색 판별
                    setSelected('');//성공
                    setCompleted([...Completed,targetkey,Selected.getAttribute('data-key')])
                    if(Completed.length === Total-2){
                        setTimeout(() => {
                            alert('축하합니다!' + ((new Date()-StartTime)/1000) + '초 걸렸습니다.');
                        }, 100);
                    }
                } else {
                    setSelected('');//실패
                    setTimeout(() => {
                        target.classList.remove('cardFlip')
                        Selected.classList.remove('cardFlip')
                    }, 600);
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
                        <Setting Submit={CardSetting}></Setting>
                    </div>
                ) : (
                    <Stack className='cardWrap position-absolute top-50 start-50 translate-middle' direction="horizontal" gap={3}>
                        <Cards Total={Total} Click={GameRule} StartTime={setStartTime} Reset={Reset}></Cards>
                    </Stack>
                )}
            </div>
        </div>
    )
}

export default CardGame