import React, {  useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import uuid from 'react-uuid';
import SmoothScroll from "../../js/SmoothScroll";
import { gsap } from 'gsap';
import { Power3 } from 'gsap';
import { useState } from 'react';
import './style.css'


const ProjectsView = (props) => {
    const getImageSource = (project) => {
        switch (project) {
            case 'Todo-List': return {
                link:'todo',
                source:require('./img/todo.png'),
                title:'todo_list',
                desc: ['로컬스토리지 데이터 저장관리', 'todo-list, 그림 그리기 기능 구현', '기존 todo-list를 react로 변환, 클론코딩 해보았습니다.'],
                skills: ['React.js', 'JavaScript']
            };
            case 'CardGame': return {
                link:'CardGame',
                source:require('./img/cardGame.png'),
                title:'CardGame',
                desc: ['같은 그림찾기 게임을 만들어보았습니다.'],
                skills: ['React.js', 'JavaScript']
            };
            case 'canvas': return {
                link:'/',
                source:require('./img/canvas.png'),
                title:'canvas.js',
                desc:['수학식을 사용하여 물이 출렁이는듯한 움직임 구현', '커스터마이징 옵션구현'],
                skills: ['JavaScript']
            };
            case 'GSAP': return {
                link:'/grid',
                source:require('./img/GSAP.png'),
                title:'GSAP motion grid',
                desc:['gsap를 이용한 grid 모션 페이지'],
                skills: ['JavaScript', 'gsap']
            };
            case 'GuestBook': return {
                link:'/guestbook',
                source:require('./img/GuestBook.png'),
                title:'GuestBook',
                desc:['mysql을 이용한 데이터 상태 관리', 'gsap-flip을 사용한 모션 구현', 'login기능과 연동하여 글작성 및 수정, 삭제 권한 구현'],
                skills: ['React.js', 'php', 'mysql', 'gsap-flip']
            };
            default: return {
                link:'todo',
                source:require('./img/todo.png'),
                title:'todo_list',
                desc: ['로컬스토리지 데이터 저장관리', 'todo-list, 그림 그리기 기능 구현', '기존 todo-list를 react로 변환, 클론코딩 해보았습니다.'],
                skills: ['React.js', 'JavaScript']
            };
        }
    };

    return(
        <Link to={`${getImageSource(props.project).link}`} className='ViewWrap position-relative'>
            <figure className='imgBox d-flex align-items-center justify-content-center position-relative'>
                <img src={require('./img/imgsize.png')} style={{backgroundImage: `url(${getImageSource(props.project).source})`}}></img>
            </figure>
            <div className='infoWrap p-3'>
                <h3 className='info_title fs-2 mb-3'>{getImageSource(props.project).title}</h3>
                <div className='info_desc mb-3'>
                    <ul>
                        {getImageSource(props.project).desc.map((desc) => (
                            <li key={uuid()} className='px-3 py-2 fs-6 fw-light'>{desc}</li>
                        ))}
                    </ul>
                </div>
                <div className='info_skills'>
                    {getImageSource(props.project).skills.map((skill) => (
                        <span key={uuid()} className='px-3 py-2 fw-light'>#{skill}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

const Main = () => {
    const toyProjects = ['Todo-List','CardGame'];
    const myProjects = ['canvas', 'GSAP', 'GuestBook'];

    const [viewimg,setViewimg] = useState('')

    
    const active = (project) => {
        setViewimg(project)
        const target = document.querySelector('.ViewWrap')
        gsap.killTweensOf(target);
        gsap.set(target, {opacity:0})
        gsap.to(target, {opacity: 1, duration:0.6,  ease: Power3.easeInOut})
    }
    // useEffect(() => {
    //     SmoothScroll(".transitionBox", ".transition-group", 1);
    // }, []);
    return (
        <div className='projectsWrap Ntransition'>
            <Container className='d-flex pt-5'>
                <div className='projectslist' style={{width:'45%'}}>
                    <h3 className='fs-2 fw-normal mb-4'>Projects List</h3>
                    <h4 className='fs-6 fw-light mb-2'>( toyProjects )</h4>
                    <div className='toyProjects mb-5'>
                    {toyProjects.map((Projects) => (
                        <div key={Projects} className="mb-3 fs-5 fw-normal d-flex">
                            <Form.Check
                                type='radio'
                                name="group"
                                label={Projects}
                                id={Projects}
                                onClick={()=>{active(Projects)}}
                            />
                            <span className='fillbar'></span>
                        </div>
                    ))}
                    </div>
                    <h4 className='fs-6 fw-light mb-2'>( myProjects )</h4>
                    <div className='myProjects'>
                    {myProjects.map((Projects) => (
                        <div key={Projects} className="mb-3 fs-5 fw-normal d-flex">
                            <Form.Check
                                type='radio'
                                name="group"
                                label={Projects}
                                id={Projects}
                                onClick={()=>{active(Projects)}}
                            />
                            <span className='fillbar'></span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='projectView ms-5' style={{width:'55%'}}>
                    <h3 className='fs-2 fw-normal mb-4'>Projects View</h3>
                    <ProjectsView project={viewimg}></ProjectsView>
                </div>
            </Container>
        </div>
    );
}

export default Main;
