import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoApp from '../js/intro_App'

// new LogoApp(this.main,{
//     size : 150,
//     background : {
//         backgroundStyles : 'img',
//         src : logoImg,
//         globalAlpha : 1
//     },
//     shadow : 'true',
//     shadowOption : {
//         color : 'rgba(0, 0, 0, 0.6)',
//         blur : 15,
//         x : -5,
//         y : 5
//     },
//     speed : 300
// });

const inrto = () => {
    return (
        <h1>intro</h1>
    )
}

// const testtt = () => {
//     new LogoApp('.logo_header',{
//         size : 150,
//         background : {
//             backgroundStyles : 'color',
//             backgroundColor : '#80B1C2',
//             globalAlpha : 0.8
//         },
//         speed : 1000
//     });
// }
const headerOn = () => {
  
    return (
        <h2>
            <Link className="" to="/about"> <div className='logo_header'></div></Link>
        </h2>
    )
}

const Header = () => {
    const [test, testset] = useState(inrto);
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState(location);

    useEffect(() => {
    // 이전 경로와 현재 경로가 다르고, IntroPage에서 AboutPage로 이동한 경우에만 'start'로 설정
    if (prevLocation.pathname === '/' && location.pathname === '/about') {
        testset(headerOn)
        // testtt()
    }
    if (location.pathname === '/'){
        testset(inrto);
        console.log(inrto)
    }

    // 현재 경로를 이전 경로로 업데이트
    setPrevLocation(location);
    }, [location]);

    useEffect(() => {
        const logoElement = document.querySelector('.logo_header');
        console.log(logoElement)
        setTimeout(() => {
            if (logoElement) {
              new LogoApp(".logo_header", {
                size: 150,
                background: {
                  backgroundStyles: 'color',
                  backgroundColor: '#80B1C2',
                  globalAlpha: 0.8
                },
                speed: 1000
              });
            } else {
                console.log('failde')
            }
            
        }, 1000);
    }, [test]);

    return <header>{test}</header>;
}
export default Header;