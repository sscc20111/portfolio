import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";

import IntroApp from "../pages/intro/index";
import GridApp from "../pages/grid/index";
import About from "../pages/about/index";
import Projects from "../pages/projects/main";
import Guestbook from "../pages/guestbook/App";

import Note from "../pages/projects/todoList/index";
import NoteApp from '../pages/projects/todoList/App/index';
import CardGame from "../pages/projects/CardGame/index";


import './transition.css';

const Transition1 = () => {
    
    const delay = 1500;

    const location = useLocation();

    return (
    <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={delay}>
        <Routes location={location} >
            <Route path="/" element={<IntroApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/grid" element={<GridApp delay={delay} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/todo" element={<Note />} />
            <Route path="/projects/todo/Apppage" element={<NoteApp />}></Route>
            <Route path="/projects/CardGame" element={<CardGame />} />
            <Route path="/guestbook" element={<Guestbook />} />
        </Routes>
        </CSSTransition>
    </TransitionGroup>
    );
};

export default Transition1;