import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoApp from '../js/intro_App'


const headerLoad = () => {
    const logoElement = document.querySelector('.logo_header');

    if(logoElement){
        new LogoApp('.logo_line',{
            size : 170,
            background : {
                backgroundStyles : 'line',
            },
            speed : 300
        });
        new LogoApp(".logo_header", {
            size: 150,
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


const Header = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState('/');

    useEffect(() => {
        if(location.pathname !== '/'){
            if(prevLocation === '/' || prevLocation.pathname === '/'){
                headerLoad()
            }
        }
        
        // 현재 경로를 이전 경로로 업데이트
        setPrevLocation(location);
    }, [location]);

    return (
        <header className='header'>
            {location.pathname !== '/' ? (
                <h2 >
                    <Link className="logo_header position-absolute top-50 start-50 z-1" to="/"></Link>
                    <div className='logo_line position-absolute top-50 start-50 z-2'></div>
                </h2>
                ) : (
                <></>
            )}
        </header>
    )
}
export default Header;