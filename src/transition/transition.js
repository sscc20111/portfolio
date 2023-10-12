import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";

import IntroApp from "../pages/intro/index";
import GridApp from "../pages/grid/index";
import About from "../pages/about/index";
import Note from "../pages/projects/project1/index";
import NoteApp from '../pages/projects/project1/App/index';
// import Guestbook from "../pages/guestbook/App";


const Transition1 = () => {
    
    const delay = 1500;

    const IntroPage = <IntroApp />;
    const AboutPage = <About />;
    const GridPage = <GridApp />;
    const Project1 = <Note />;
    // const GuestbookPage = <Guestbook />;

    const location = useLocation();

    return (
    <TransitionGroup className="transition-group" onChange={() => {console.log('test')}}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={delay}>
        <Routes location={location} >
            <Route path="/" element={IntroPage} />
            <Route path="/about" element={AboutPage} />
            <Route path="/projects" element={GridPage} />
            <Route path="/projects/note" element={Project1} />
            <Route path="/projects/note/Apppage" element={<NoteApp />}></Route>
            {/* <Route path="/guestbook" element={GuestbookPage} /> */}
        </Routes>
        </CSSTransition>
    </TransitionGroup>
    );
};

export default Transition1;