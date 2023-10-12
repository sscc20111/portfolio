import React, { useEffect, useState, useRef  } from 'react';
import { Button, CloseButton, Container, Stack } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

import '../css/common.css';
import './css/todostyle.css';
import './css/media.css';
import Lists from './js/todo.js'
import Draw from './js/draw';
import Tools from './js/tool';
import Clock from './js/clock';
import ImgApp from './js/img';
import Weather from './js/weather';
import Popup from '../js/popup';



const NoteApp = () => {
const storedArrayString = localStorage.getItem('list');
const storedArray = JSON.parse(storedArrayString);

    const [ListText, setText] = useState('');
    const [ListData, setList] = useState(storedArray);
    const [dataUser, setData] = useState(localStorage.getItem('UserName'));
    const [UserName, setUser] = useState(localStorage.getItem('UserName'));
    const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
    const [canvasOpen, setCanvasOpen] = useState(false);
    // const [canvasColor, setCanvasColor] = useState(false);
    const childRef = useRef();
    
    const toggleForms = () => {
        setIsRegisterFormVisible(!isRegisterFormVisible);
    };
    const UserNameChange = () => {
        toggleForms();
        setUser('')
    }
    const UserNameDataChange = () => {
        toggleForms();

        setUser(dataUser);
        localStorage.setItem('UserName', dataUser);
    }

    const ListPush = (ListText) => {
        const popup = new Popup();
        if(ListText === ''){
            popup.alertNoText();
        }else{
            if(ListData == null){
                setList([ListText]);
            }else{
                setList([...ListData,ListText]);
            }
            setText('')
        }
        
    }
    useEffect(() => {
        localStoragePush();
    }, [ListPush]);
    const Popclose = (e) => {
        e.preventDefault()
        const popup = new Popup();
        popup.removeAlert();
    }
    const localStoragePush = () => {
        localStorage.setItem('list', JSON.stringify(ListData));
    }

    const handleCanvasOpen = () => {
        setCanvasOpen(true);
        childRef.current.initCanvas();
    };

    const handleCanvasClose = () => {
        setCanvasOpen(false);
    };

    const drawColor = (e) => {
        const targetColor = e.target.style.backgroundColor;
        drawColorSet(targetColor);
    }
    const drawColorSet = (targetColor) => {
        childRef.current.colorChange(targetColor);
    }
    const drawRange = (e) => {
        const targetvalue = e.target.value;
        drawRangeSet(targetvalue);
    }
    const drawRangeSet = (targetvalue) => {
        childRef.current.rangeChange(targetvalue);
    }
    const handleSaveClick = () => {
        canvasSave()
    }
    const canvasSave = () => {
        childRef.current.saveClick();
    }

    return (
        <Container>
            <Row>
                <Col xs={7}>
                    <Col className={`todolist ${canvasOpen ? 'hide' : 'show'}`}>
                        <div className='alert__text'>
                            <p>please type some words in the text box.</p>
                            <CloseButton className='close' onClick={Popclose}></CloseButton>
                        </div>
                        <div className='lists'><Lists ListItem={ListData}/></div>
                        <div className='completed__lists hide'></div>
                        <div className='todolist__typebox'>
                            <input type="text" className="todolist__input" value={ListText} onChange={(e) => setText(e.target.value)} />
                            <Button className='todolist__btn' onClick={() => ListPush(ListText)}><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                        <div className=''></div>
                    </Col>
                    <Col className={`drawcontainer ${canvasOpen ? 'show' : 'hide'}`} style={{padding: 0}}>
                        <Draw ref={childRef} canvasSave={() => {canvasSave()}} drawColorSet={drawColorSet} drawRange={drawRangeSet}></Draw>
                    </Col>
                </Col>
                <Col className='row' style={{alignContent:'space-between'}}>
                    <div>
                        <Row className='todolist__infoo'>
                            <header className='py-3'>
                                <ImgApp />
                                <h2 className='todo_user'>{UserName}</h2>
                                {isRegisterFormVisible ? (
                                    <FontAwesomeIcon icon={faCheck} className='fa-user-edit checked' onClick={UserNameDataChange} />
                                    ) : (
                                    <FontAwesomeIcon icon={faUserEdit} className='fa-user-edit' onClick={UserNameChange} />
                                )}
                                <input type='text' className={`userName__input ${isRegisterFormVisible ? 'show' : ''}`} value={dataUser} onChange={(e) => setData(e.target.value)}></input>
                            </header>
                        </Row>
                        <Row className='mt-4'>
                            <Weather />
                            <Clock type='todo' />
                        </Row>
                    </div>
                    <div>
                        <Tools canvasOpen={canvasOpen} handleSaveClick={handleSaveClick} drawRange={drawRange} drawColor={drawColor} handleCanvasOpen={handleCanvasOpen} handleCanvasClose={handleCanvasClose} />
                    </div>
                </Col>
            </Row>
            {/* <Row>
                <Col className={`todolist ${canvasOpen ? 'hide' : 'show'}`}>
                    <div className='alert__text'>
                        <p>please type some words in the text box.</p>
                        <CloseButton className='close' onClick={Popclose}></CloseButton>
                    </div>
                    <div className='lists'><Lists ListItem={ListData}/></div>
                    <div className='completed__lists hide'></div>
                    <div className='todolist__typebox'>
                        <input type="text" className="todolist__input" value={ListText} onChange={(e) => setText(e.target.value)} />
                        <Button className='todolist__btn' onClick={() => ListPush(ListText)}><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                    <div className=''></div>
                </Col>
                <Col className={`drawcontainer ${canvasOpen ? 'show' : 'hide'}`} style={{padding: 0}}>
                    <Draw ref={childRef} drawColorSet={drawColorSet} drawRange={drawRangeSet}></Draw>
                </Col>
                <Col className='todolist__info'>
                    <header>
                        <ImgApp />
                        <h2 className='todo_user'>{UserName}</h2>
                        {isRegisterFormVisible ? (
                            <FontAwesomeIcon icon={faCheck} className='fa-user-edit checked' onClick={UserNameDataChange} />
                            ) : (
                            <FontAwesomeIcon icon={faUserEdit} className='fa-user-edit' onClick={UserNameChange} />
                        )}
                        <input type='text' className={`userName__input ${isRegisterFormVisible ? 'show' : ''}`} value={dataUser} onChange={(e) => setData(e.target.value)}></input>
                    </header>
                    <Weather />
                    <Clock type='todo' />
                    <Tools canvasOpen={canvasOpen} drawRange={drawRange} drawColor={drawColor} handleCanvasOpen={handleCanvasOpen} handleCanvasClose={handleCanvasClose} />
                </Col>
            </Row> */}
        </Container>
    );
}

export default NoteApp;
