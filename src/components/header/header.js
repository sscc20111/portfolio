import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { gsap } from 'gsap';
import { Power1 } from 'gsap';

import LogoApp from '../../js/intro_App'
import './header.css'


const headerLoad = () => {
    const logoElement = document.querySelector('.logo_header');

    if(logoElement){
        new LogoApp('.logo_line',{
            size : 80,
            background : {
                backgroundStyles : 'line',
            },
            speed : 300
        });
        new LogoApp(".logo_header", {
            size: 70,
            background: {
            backgroundStyles: 'color',
            backgroundColor: '#80B1C2',
            globalAlpha: 0.8
            },
            speed: 350
        });
    }else{
        setTimeout(() => {
            headerLoad();
        }, 100);
    }
}

const introIn = () => {
    //gsap-scale동작시 translate오류 리셋
    gsap.to(".logo_header", {xPercent: -50, yPercent: -50, duration:0.1})
    gsap.to('.logo_line', {xPercent: -50, yPercent: -50, duration:0.1})

    gsap.to(".logo_header", {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
    gsap.to('.logo_line', {scale: 1, duration:0.5, delay:0.9,  ease: Power1.easeInOut})
}


const Header = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState('/');
    useEffect(() => {
        if(location.pathname !== '/'){
            if(prevLocation === '/' || prevLocation.pathname === '/'){
                headerLoad()
                introIn()
            }
        }
        
        // 현재 경로를 이전 경로로 업데이트
        setPrevLocation(location);
    }, [location]);

    return (
        <Stack className='header' style={{width:'100%'}} direction="horizontal" gap={3}>
            {location.pathname !== '/' ? (
                <h2 className='mb-0' style={{minHeight:'90px', width:'90px'}}>
                    <Link className="logo_header position-absolute top-50 start-50 z-2" to="/"></Link>
                    <div className='logo_line position-absolute top-50 start-50 z-1'></div>
                </h2>
                ) : (
                    <></>
                )}

        </Stack>
    )
}
export default Header;