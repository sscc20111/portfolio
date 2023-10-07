import { gsap } from 'gsap';
import { Power1, Power2, Power3 } from 'gsap';
export default class GridSet {
    constructor() {
        this.container = document.querySelector('.gridBox');
        this.gridItem = this.container.querySelectorAll('.item');
        this.gridColor = document.querySelectorAll('.gridBox .item .contBox .BoxCover');

        this.stageWidth = this.container.offsetWidth;
        this.stageHeight = this.container.offsetHeight;
        this.gridSet();
    }

    gridSet() {
        this.gridColor.forEach(item => {
            item.style.backgroundColor = '#B89569';
        });
        this.container.style.width = this.stageWidth + 'px';
        this.container.style.height = this.stageHeight + 'px';

        this.container.style.display = 'grid';
        this.container.style.gridTemplateColumns  = `repeat(${this.stageWidth}, 1fr)`;
        this.container.style.gridTemplateRows  = `repeat(${this.stageHeight}, 1fr)`;

        this.items = [];

        for (var i = 0; i < 2; i++) {
            if (i === 0){this.maxDifferenceW = 150;}
            else {this.maxDifferenceW = 250;}
            const item = new ItemSize(this.stageWidth, this.stageHeight, this.maxDifferenceW);
            this.items[i] = item;
            this.items[i].width();
            this.items[i].height();
        };

        this.gridItem[0].style.gridArea = `1/1/${this.items[0].gridHeight_1}/${this.items[0].gridWidth_1}`;
        this.gridItem[1].style.gridArea = `1/${this.items[0].gridWidth_1}/${this.items[0].gridHeight_1}/${(this.items[0].gridWidth_2 + this.items[0].gridWidth_1)}`;
        this.gridItem[2].style.gridArea = `1/${(this.items[0].gridWidth_2 + this.items[0].gridWidth_1)}/${this.items[0].gridHeight_1}/-1`;
        this.gridItem[3].style.gridArea = `${this.items[0].gridHeight_1}/1/-1/${this.items[1].gridWidth_1}`;
        this.gridItem[4].style.gridArea = `${this.items[0].gridHeight_1}/${this.items[1].gridWidth_1}/-1/${this.items[1].gridWidth_2 + this.items[1].gridWidth_1}`;
        this.gridItem[5].style.gridArea = `${this.items[0].gridHeight_1}/${this.items[1].gridWidth_2 + this.items[1].gridWidth_1}/-1/-1`;
    }
}
class ItemSize {
    constructor(stageWidth, stageHeight, maxDifferenceW) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.maxDifferenceW = maxDifferenceW;
        this.maxDifferenceH = 100;

        const random = new Random();
        this.random = random;
    }

    width() {
        this.gridWidth_1 = 0;
        this.gridWidth_2 = 0;
        this.gridWidth_3 = 0;

        while ( Math.abs(this.gridWidth_1 - this.gridWidth_2) > this.maxDifferenceW || 
                Math.abs(this.gridWidth_2 - this.gridWidth_3) > this.maxDifferenceW || 
                Math.abs(this.gridWidth_3 - this.gridWidth_1) > this.maxDifferenceW ||
                this.gridWidth_1 === 0) {
            this.random.width(this.stageWidth);
            this.gridWidth_1 = this.random.Width_1;
            this.gridWidth_2 = this.random.Width_2;
            this.gridWidth_3 = this.random.Width_3;
        }
    }

    height() {
        this.gridHeight_1 = 0;
        this.gridHeight_2 = 0;

        while ( Math.abs(this.gridHeight_1 - this.gridHeight_2) > this.maxDifferenceH || 
                this.gridHeight_1 === 0) {
            this.random.height(this.stageHeight);
            this.gridHeight_1 = this.random.Height_1;
            this.gridHeight_2 = this.random.Height_2;
        }
    }
}

class Random {
    width(stageWidth) {
        this.stageWidth = stageWidth;

        this.Width_1 = Math.floor(Math.random() * this.stageWidth);
        this.Width_2 = Math.floor(Math.random() * this.stageWidth);
        this.Width_3 = this.stageWidth - this.Width_1 - this.Width_2;
        
    }

    height(stageHeight) {
        this.stageHeight = stageHeight;

        this.Height_1 = Math.floor(Math.random() * this.stageHeight);
        this.Height_2 = this.stageHeight - this.Height_1;
        
    }

    Delay(x, y, z) {
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
}

export class Change_color {
    constructor() {
        this.gridColor = document.querySelectorAll('.gridBox .item .contBox .BoxCover');
    }
    
    TweenMax(color) {
        this.color = color;
        gsap.to(this.gridColor, 0.3, {backgroundColor: this.color});
    }
}

export class Gird_Motion {
    constructor() {
        const random = new Random();
        this.random = random;
        this.Count = 0;
        const textfade = new TextFade();
        this.textfade = textfade;
    }

    MotionIn = () => {
        setTimeout(() => {
            document.querySelector('.gridBox').classList.add('MotionGo');
        }, 600);
        const girdMotion = document.querySelectorAll('.gridBox .item .contBox');
        const img = document.querySelectorAll('.gridBox .item .imgBox');
        const delays = this.random.Delay(1,2,6);// (x,y,z) z개의 x.0 ~ y.0 랜덤 딜레이값
        
        img.forEach(item => {
            item.style.opacity = 1;
        });
        gsap.to(girdMotion[0], {left:'15%',               duration:0.3, delay:delays[0], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();setTimeout(() => {girdMotion[0].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[1], {bottom:'20%',             duration:0.3, delay:delays[1], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();}})
        gsap.to(girdMotion[2], {left:'15%',               duration:0.3, delay:delays[2], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();setTimeout(() => {girdMotion[2].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[3], {left:'10%', bottom:'20%', duration:0.3, delay:delays[3], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();}})
        gsap.to(girdMotion[4], {top:'20%',                duration:0.3, delay:delays[4], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();setTimeout(() => {girdMotion[4].classList.add('Motion1_complet')}, 300);}})
        gsap.to(girdMotion[5], {right:'15%', bottom:'5%', duration:0.3, delay:delays[5], ease: Power2.easeInOut, onComplete: () => {this.TextFadeInCount();}})
    }

    TextFadeInCount = () => {
        this.Count += 1;
        if(this.Count === 6){
            setTimeout(() => {
                this.textfade.FadeIn();
                this.textfade.MouseIn();
            }, 600);
        }
    }

}

export class Girid_Motion_Reverse {
    constructor() {
        const random = new Random();
        this.random = random;
    }

    MotionOut = (target) => {
        this.target = target;

        gsap.to(this.target, {duration:0.6, opacity:0, filter: 'blur(20px)', ease:Power3.easeOut, onComplete: () => {this.target.forEach(element => {element.style.visibility = 'hidden'})}});
        setTimeout(() => {
            document.querySelector('.gridBox').classList.remove('MotionGo');
        }, 1400);
        const girdMotion = document.querySelectorAll('.gridBox .item .contBox');
        const delays = this.random.Delay(0,1,6);// (x,y,z) z개의 x.0 ~ y.0 랜덤 딜레이값


        gsap.to(girdMotion[0], {left:'0%',               duration:0.3, delay:delays[0], ease: Power2.easeInOut, onComplete: () => {girdMotion[0].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[1], {bottom:'0%',             duration:0.3, delay:delays[1], ease: Power2.easeInOut});
        gsap.to(girdMotion[2], {left:'0%',               duration:0.3, delay:delays[2], ease: Power2.easeInOut, onComplete: () => {girdMotion[2].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[3], {left:'0%', bottom:'0%',  duration:0.3, delay:delays[3], ease: Power2.easeInOut});
        gsap.to(girdMotion[4], {top:'0%',                duration:0.3, delay:delays[4], ease: Power2.easeInOut, onComplete: () => {girdMotion[4].classList.remove('Motion1_complet')}});
        gsap.to(girdMotion[5], {right:'0%', bottom:'0%', duration:0.3, delay:delays[5], ease: Power2.easeInOut});
    }
}

export class TextFade {
    constructor() {
        this.element = document.querySelectorAll('.gridBox .item .textBox');
        this.target = document.querySelectorAll('.gridBox .item .textBox a');

        const GirdMotionReverse = new Girid_Motion_Reverse();
        this.gridmotionreverse = GirdMotionReverse;
    }

    FadeIn() {
        gsap.to(this.element, {duration:0.4, opacity:1, visibility:'visible', filter: 'blur(0px)', ease:Power2.easeInOut});
    }
    
    FadeOut() {
        gsap.to(this.element, {duration:0.4, opacity:0, filter: 'blur(10px)', ease:Power2.easeInOut});
    }

    MouseIn() {
        const targetArray = [...this.target]; //querySelectorAll 을 배열에 저장
        this.target.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const otherItems = targetArray.filter(otherItem => otherItem !== item); //target을 제외한 targetArray배열 선택
                
                for(let i = 0; i < otherItems.length; i++){
                    gsap.to(otherItems[i], {duration:0.6, opacity:0.4, filter: 'blur(3px)', ease:Power3.easeOut, onComplete: () => {gsap.to(otherItems[i], {duration:2, filter: 'blur(10px)', ease:Power1.easeIn, onComplete: () => {setTimeout(() => {console.log('test')}, 2000);}});}});
                };

                item.addEventListener('mouseleave', () => {
                    for(let i = 0; i < otherItems.length; i++){
                        gsap.killTweensOf(otherItems[i]);
                        gsap.to(otherItems[i], {duration:0.4, opacity:1, filter: 'blur(0px)', ease:Power2.easeIn});
                    };
                });

                item.addEventListener('click', () => {
                    for(let i = 0; i < otherItems.length; i++){
                        gsap.killTweensOf(otherItems[i]);
                        gsap.to(otherItems[i], {duration:0.6, opacity:0.4, filter: 'blur(20px)', ease:Power2.easeOut});
                    };
                    this.gridmotionreverse.MotionOut(this.element);
                });
            });
        });
    }


}
