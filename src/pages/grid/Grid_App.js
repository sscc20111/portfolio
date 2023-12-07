import { gsap } from 'gsap';
import { Power1, Power2, Power3 } from 'gsap';
import { useRef, useState } from 'react';

const Gridset = (contents,backgroundColor) => {
    const container = document.querySelector(contents);
    const gridItem = container.querySelectorAll('.item');
    const stageWidth = container.offsetWidth;
    const stageHeight = container.offsetHeight;
    const gridColor = document.querySelectorAll(contents + ' .item .contBox .BoxCover');

    gridColor.forEach(item => {
        item.style.backgroundColor = '#B89569';
    });
    container.style.display = 'grid';
    container.style.gridTemplateColumns  = `repeat(${stageWidth}, 1fr)`;
    container.style.gridTemplateRows  = `repeat(${stageHeight}, 1fr)`;

    const itemWidth = itemSize(stageWidth, stageHeight, 150).width()
    itemWidth.push(...itemSize(stageWidth, stageHeight, 250).width())
    const itemHeight = itemSize(stageWidth, stageHeight, 150).height()

    gridItem[0].style.gridArea = `1/1/${itemHeight[0]}/${itemWidth[0]}`;
    gridItem[1].style.gridArea = `1/${itemWidth[0]}/${itemHeight[0]}/${(itemWidth[1] + itemWidth[0])}`;
    gridItem[2].style.gridArea = `1/${(itemWidth[1] + itemWidth[0])}/${itemHeight[0]}/-1`;
    gridItem[3].style.gridArea = `${itemHeight[0]}/1/-1/${itemWidth[3]}`;
    gridItem[4].style.gridArea = `${itemHeight[0]}/${itemWidth[3]}/-1/${itemWidth[4] + itemWidth[3]}`;
    gridItem[5].style.gridArea = `${itemHeight[0]}/${itemWidth[4] + itemWidth[3]}/-1/-1`;
}


const itemSize = (stageWidth, stageHeight, maxDifferenceW) => {
    const maxDifferenceH = 100;

    const width = () => {
        let a = 0;
        let b = 0;
        let c = 0;
        while ( Math.abs(a - b) > maxDifferenceW || 
                Math.abs(b - c) > maxDifferenceW || 
                Math.abs(c - a) > maxDifferenceW ||
                a === 0) {
            let random = Random().width(stageWidth)
            a = random[0];
            b = random[1];
            c = random[2];
        }
        return [a, b, c]
    }

    const height = () => {
        let a = 0;
        let b = 0;
        while ( Math.abs(a - b) > maxDifferenceH || 
                a === 0) {
            let random = Random().height(stageHeight);
            a = random[0];
            b = random[1];
        }
        return [a, b]
    }
    return {width,height}
}

const Random = () => {
    const width = (stageWidth) => {
        const a = Math.floor(Math.random() * stageWidth);
        const b = Math.floor(Math.random() * stageWidth);
        const c = stageWidth - a - b;
        return [a, b, c]
    }

    const height = (stageHeight) => {

        const a = Math.floor(Math.random() * stageHeight);
        const b = stageHeight - a;
        return [a,b]
    }

    const Delay = (x, y, z) => {
        const results = [];
        results.push(Math.floor(Math.random() * (y * 10 + 1 - x * 10)) / 10 + x); // x.0 ~ y.0까지 소숫점 첫째자릿수 까지 출력
        while (results.length < z) { // 6개의 인자가 될때까지 반복
        let number = Math.floor(Math.random() * (y * 10 + 1 - x * 10)) / 10 + x;
        if (!results.includes(number)) { // 기존 인자와 중복된 값이 있으면 재실행
            results.push(number);
            }
        }
        return results;
    }

    return {width,height,Delay}
}
const Gird_Motion = () => {
    let Count = 0;
    
    const CountSet = () => {Count += 1;}
    const MotionIn = () => {
        const delays = Random().Delay(1,2,6);// (x,y,z) z개의 x.0 ~ y.0 랜덤 딜레이값
        setTimeout(() => {
            document.querySelector('.gridApp').classList.add('MotionGo');
        }, 600);
        const girdMotion = document.querySelectorAll('.gridApp .item .contBox');
        const img = document.querySelectorAll('.gridApp .item .imgBox');
        img.forEach(item => {
            item.style.opacity = 1;
        });
        gsap.to(girdMotion[0], {left:'15%',               duration:0.3, delay:delays[0], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();setTimeout(() => {girdMotion[0].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[1], {bottom:'20%',             duration:0.3, delay:delays[1], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();}})
        gsap.to(girdMotion[2], {left:'15%',               duration:0.3, delay:delays[2], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();setTimeout(() => {girdMotion[2].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[3], {left:'10%', bottom:'20%', duration:0.3, delay:delays[3], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();}})
        gsap.to(girdMotion[4], {top:'20%',                duration:0.3, delay:delays[4], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();setTimeout(() => {girdMotion[4].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[5], {right:'15%', bottom:'5%', duration:0.3, delay:delays[5], ease: Power2.easeInOut, onComplete: () => {text_Motion().MotionIn(Count);CountSet();}})
    }

    const MotionOut = (delay) => {
        const girdMotion = document.querySelectorAll('.gridApp .item .contBox');
        const delays = Random().Delay(0,delay*(2/3),6);// (x,y,z) z개의 x.0 ~ y.0 랜덤 딜레이값 //delay*(2/3)=1
        const target = document.querySelectorAll('.gridApp .item .textBox');

        gsap.to(target, {duration:(delay*0.4), opacity:0, filter: 'blur(20px)', ease:Power3.easeOut, onComplete: () => {target.forEach(element => {element.style.visibility = 'hidden'})}});
                                //delay*0.4=0.6
        setTimeout(() => {
            document.querySelector('.gridApp').classList.remove('MotionGo');
        }, (delay*520));// delay*5.4=800 + 0.5s('.MotionGo') = 1.3s
        setTimeout(() => {
            gsap.to(girdMotion, {opacity:'0', duration:0.15, ease: Power2.easeInOut});
        }, (delay*750));// delay*866= 1.3s

        gsap.to(girdMotion[0], {left:'0%',               duration:0.2, delay:delays[0]/2, ease: Power2.easeInOut, onComplete: () => {girdMotion[0].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[1], {bottom:'0%',             duration:0.2, delay:delays[1]/2, ease: Power2.easeInOut});
        gsap.to(girdMotion[2], {left:'0%',               duration:0.2, delay:delays[2]/2, ease: Power2.easeInOut, onComplete: () => {girdMotion[2].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[3], {left:'0%', bottom:'0%',  duration:0.2, delay:delays[3]/2, ease: Power2.easeInOut});
        gsap.to(girdMotion[4], {top:'0%',                duration:0.2, delay:delays[4]/2, ease: Power2.easeInOut, onComplete: () => {girdMotion[4].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[5], {right:'0%', bottom:'0%', duration:0.2, delay:delays[5]/2, ease: Power2.easeInOut});
    }
    return {MotionIn,MotionOut}
}

const text_Motion = () => {
    const element = document.querySelectorAll('.gridApp .item .textBox');
    const MotionIn = (Count) => {
        if(Count === 5){
            setTimeout(() => {
                gsap.to(element, {duration:0.4, opacity:1, visibility:'visible', filter: 'blur(0px)', ease:Power2.easeInOut});
            }, 600);
        }
    }

    const targets = document.querySelectorAll('.gridApp .item .textBox a');
    const targetArray = [...targets];
    const MouseIn = () => {
        
        const mouseenter = (target) => {
            // console.log(target.getAttribute('data-key'))
            // test(target.getAttribute('data-key'))

            const otherItems = targetArray.filter(otherItem => otherItem !== target);
            for(let i = 0; i < otherItems.length; i++){
                gsap.to(otherItems[i], {duration:0.6, opacity:0.4, filter: 'blur(3px)', ease:Power2.easeOut, onComplete: () => {gsap.to(otherItems[i], {duration:2, filter: 'blur(10px)', ease:Power1.easeIn});}});
            };

        }
        const click = (target, delay) => {
            const otherItems = targetArray.filter(otherItem => otherItem !== target);
            Gird_Motion().MotionOut(delay);
        }
        const mouseleave = (target) => {
            const otherItems = targetArray.filter(otherItem => otherItem !== target);
            for(let i = 0; i < otherItems.length; i++){
                gsap.killTweensOf(otherItems[i]);
                gsap.to(otherItems[i], {duration:0.4, opacity:1, filter: 'blur(0px)', ease:Power2.easeOut});
            };
        }
        return {mouseenter,click,mouseleave}
    }
    return {MotionIn,MouseIn}
}
const handleMouseEnter = (e) => {
    const targetRect = e.target.getBoundingClientRect();
    const mouseY = e.clientY;
    if (mouseY < targetRect.top + (targetRect.bottom - targetRect.top) / 2) {
        const direction = 'up'
        return direction
    } else {
        const direction = 'down'
        return direction
    }
};

const imgMotion = (e) => {
    const imgtargets = Array.from(document.querySelectorAll('.imgBox img'));
    const { offsetWidth: controllSizeX, offsetHeight: controllSizeY } = e.target;
    const maxX = controllSizeX / 15;
    const maxY = controllSizeY / 15;
    const { left: controllLeft, top: controllTop } = e.target.getBoundingClientRect();
    const mouseX = e.clientX - controllLeft;
    const mouseY = e.clientY - controllTop;
    const xDecimal = mouseX / controllSizeX - 0.5;
    const yDecimal = mouseY / controllSizeY - 0.5;
    const X = maxX * Math.sin(xDecimal);
    const Y = maxY * Math.sin(yDecimal);

    imgtargets.forEach((target, index) => {
      gsap.to(target, { x: X, y: Y, delay: 0.02 * index, duration:1.5, ease: `Power${index + 1}.easeOut` });
    });
};

// const test = (key) => {
//     const girdMotion = document.querySelector('.gridApp .item2 .contBox');
//     const textBox =  document.createElement("div");
//     textBox.textContent = key;

//     girdMotion.appendChild(textBox);
// }
export default Gridset 
export {Gird_Motion, text_Motion, handleMouseEnter, imgMotion}