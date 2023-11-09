import LogoApp from '../../pages/intro/intro_App'


const introSet = (main, outline, background) => {
    new LogoApp(main,{
        size : 550,
        background : {
            backgroundStyles : 'img',
            src : logoImg,
            globalAlpha : 1
        },
        shadow : 'true',
        shadowOption : {
            color : 'rgba(0, 0, 0, 0.6)',//rgba 형식
            blur : 15, //반응형에서는 화면 넓이에 비례해 줄어듬
            x : -5,
            y : 5
        },
        speed : 300
    });
    new LogoApp(outline,{
        size : 600,
        background : {
            backgroundStyles : 'line',
        },
        speed : 300
    });
    new LogoApp(background,{
        size : 600,
        background : {
            backgroundStyles : 'color',
            backgroundColor : '#80B1C2',
            globalAlpha : 0.8
        },
        speed : 1000
    });
    introIn(main, outline, background)
}

const introIn = (main, outline, background) => {
    //gsap-scale동작시 translate오류 리셋
    gsap.set(main, {xPercent: -50, yPercent: -50, scale:0})
    gsap.set(outline, {xPercent: -50, yPercent: -50, scale:0})
    gsap.set(background, {xPercent: -50, yPercent: -50, scale:0})

    gsap.to(main, {scale: 1, duration:0.5, delay:0.6,  ease: Power1.easeInOut})
    gsap.to(outline, {scale: 1, duration:0.5, delay:0.9,  ease: Power1.easeInOut})
    gsap.to(background, {scale: 1, duration:0.5, delay:0.2,  ease: Power1.easeInOut})
}

const introOut = (main, outline, background) => {
    gsap.to(main, {scale: 0, duration:0.5, delay:0.2,  ease: Power3.easeInOut})
    gsap.to(outline, {scale: 0, duration:0.5, delay:0.6,  ease: Power3.easeInOut})
    gsap.to(background, {scale: 0, duration:0.5, delay:0.4,  ease: Power3.easeInOut})
}

export default introSet