import React, { useEffect, useState, useRef  } from 'react';
import { Button, CloseButton, Container, Stack } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserEdit, faCheck, faL } from "@fortawesome/free-solid-svg-icons";

import '../css/common.css';
import './css/todostyle.css';
import './css/media.css';
import Lists, {CompletedLists} from './js/List.js'
import Draw from './js/draw';
import Tools from './js/tool';
import Clock from './js/clock';
import ImgApp from './js/img';
import Weather from './js/weather';
import Popup from '../js/popup';

import uuid from 'react-uuid';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

const NoteApp = () => {


    const [ListText, setText] = useState('');
    
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



    const Popclose = (e) => {
        e.preventDefault()
        const popup = new Popup();
        popup.removeAlert();
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


    ///////////////////수정후


    const TodoArray = JSON.parse(localStorage.getItem('todoList'));
    const CompletedArray = JSON.parse(localStorage.getItem('completedList'));

    const [ListData, setList] = useState(TodoArray);
    const [IsListTogle, setIsListTogle] = useState(false);

    const Visible = (boolean) => {
        if(!boolean){
            setList(TodoArray)
        }else{
            setList(CompletedArray)
        }
        setIsListTogle(boolean)
    }

    const ListPush = (ListText) => {
        const popup = new Popup();
        if (ListText === '') {
            popup.alertNoText();
            return;
        }

        const updatedTodo = TodoArray ? [...ListData, { id: uuid(), text: ListText }] : [{ id: uuid(), text: ListText }];
        localStorage.setItem('todoList', JSON.stringify(updatedTodo));
        setList(updatedTodo);
        setText('');
    }

    const ListDelete = (id) => {
        const updatedList = ListData.filter((Data) => Data.id !== id);
        const storageKey = IsListTogle ? 'completedList' : 'todoList';
        localStorage.setItem(storageKey, JSON.stringify(updatedList));
        setList(updatedList);
    }

    const DataTogle = (id) => {
        ListDelete(id); //해당 리스트에서 삭제

        const updatedTarget = ListData.find((Data) => Data.id === id);

        const updatedList = IsListTogle ? 
                            (TodoArray ? [...TodoArray, updatedTarget] : updatedTarget) //반대 스토리지에 저장
                            : (CompletedArray ? [...CompletedArray, updatedTarget] : [updatedTarget]);

        const storageKey = IsListTogle ? 'todoList' : 'completedList';
        localStorage.setItem(storageKey, JSON.stringify(updatedList));
    }

    const DataEdit = (EditText, id) => {
        const updatedTodo = ListData.map(Data => {
            if (Data.id === id) {
                return { ...Data, text:EditText};
            }
            return Data;
        });
        localStorage.setItem('todoList', JSON.stringify(updatedTodo));
        setList(updatedTodo);
    }


    return (
        <Container className='pt-5'>
            <div className='todoWrap'>
                <div className='alert__text'>
                    <p>please type some words in the text box.</p>
                    <CloseButton className='close' onClick={Popclose}></CloseButton>
                </div>
                <div className='todoMenu'>
                    <div className="ongoing__btn active" onClick={() => Visible(false)}>
                        <i className="fas fa-hourglass-half"></i>
                        <p>Ongoing</p>
                    </div>
                    <div className="completed__btn" onClick={() => Visible(true)}>
                        <i className="fas fa-hourglass-end"></i>
                        <p>Completed</p>
                    </div>
                </div>
                <div className='todoList p-4'>
                    <>{/*List*/}
                        <TransitionGroup className="todo-list">
                            {Array.isArray(ListData) ? (
                            ListData.map((item) =>  (
                            <CSSTransition key={item.id} timeout={300} classNames="item" >
                                <Lists id={item.id} Tododata={item} Togle={DataTogle} Edit={DataEdit} Visible={IsListTogle} Delete={ListDelete} />
                            </CSSTransition>
                            ))) : null}
                        </TransitionGroup>
                        <div className='createList'>
                            <input type="text" className="todolist__input" value={ListText} onChange={(e) => setText(e.target.value)} />
                            <Button className='btn' onClick={() => ListPush(ListText)}><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                    </>

                    <>{/*Draw*/}
                        <Col className={`drawcontainer ${canvasOpen ? 'show' : 'hide'}`} style={{padding: 0}}>
                            <Draw ref={childRef} canvasSave={() => {canvasSave()}} drawColorSet={drawColorSet} drawRange={drawRangeSet}></Draw>
                        </Col>
                    </>
                </div>
                {/* <Col className='row' style={{alignContent:'space-between'}}>
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
                </Col> */}
            </div>
        </Container>
    );
}

export default NoteApp;
