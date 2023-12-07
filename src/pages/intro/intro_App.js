//////option/////
//
//    background : {
//        backgroundStyles : 'img / color / line',
//        src : '이미지 경로',
//        globalAlpha : 투명도
//    },
//    shadow : 'true / 공백  그림자 사용여부',
//    shadowOption : {
//        color : 'rgba(0, 0, 0, 0.6)',//rgba 형식
//        blur : 10, //반응형에서는 화면 넓이에 비례해 줄어듬
//        x : -5,
//        y : 5
//    },
//    speed : 변형 속도




class LogoApp {
    constructor(selector, options) {
        this.container = document.querySelector(selector);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        //option
        this.stage = this.container.clientWidth;
        this.background = options.background;
        this.shadow = options.shadow;
        this.shadowOption = options.shadowOption;
        this.speed = options.speed;

        this.Wave = new Wave(this.background, this.stage, this.shadow, this.shadowOption, this.speed);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.canvas.width = this.stage;
        this.canvas.height = this.stage;

        this.Wave.resize(this.stage);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stage, this.stage);
        this.Wave.draw(this.ctx,this.stage);

        setTimeout(() => {
            requestAnimationFrame(this.animate.bind(this));
        }, 25);
    }
}

/////////////////////////////////////////
class Wave {
    constructor(background, stage, shadow, shadowOption, speed) {
        this.totalPoints = 8;
        this.points = [];
        this.rota = 360 / this.totalPoints;
        this.parts = speed; //round 진행 카운트
        
        ////option
        this.background = background;
        this.stage = stage;
        this.shadow = shadow;
        this.shadowOption = shadowOption;
    }

    resize(stage) {
        this.stage = stage;
        this.centerX = stage / 2;
        this.centerY = stage / 2;

        this.init();
    }

    init() {
        this.points = [];

        for (var i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.centerX, this.centerY, this.rota * i, i, this.totalPoints, this.parts, this.stage);
            this.points[i] = point;
        };
    }

    draw(ctx) {
        ctx.globalAlpha = this.background.globalAlpha || 1;

        if (this.background.backgroundStyles === 'img') {//이미지 background 생성
            const image = new Image();
            image.src = this.background.src;
            image.onload = () => {
                const modifiedImage = document.createElement('canvas');
                const modifiedCtx = modifiedImage.getContext('2d');
                
                const patternWidth = this.stage*(816/543); // 수정된 가로 크기 (이미지 사이즈)
                const patternHeight = this.stage; // 수정된 세로 크기
                const patternX = -(patternWidth - this.stage) / 1.5;
            
                modifiedImage.width = patternWidth;
                modifiedImage.height = patternHeight;
                modifiedCtx.drawImage(image, patternX, 0, patternWidth, patternHeight);
            
                const pattern = ctx.createPattern(modifiedImage, 'repeat'); // 수정된 이미지로 패턴 생성
                ctx.fillStyle = pattern; // fillStyle을 패턴으로 설정
            };
        }else if (this.background.backgroundStyles === 'color') {
            ctx.fillStyle = this.background.backgroundColor || '#000000';
        }
        
        //도형생성
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i=0; i<this.totalPoints-1; i++){
            this.points[i].update();
            ctx.bezierCurveTo(this.points[i].X1, this.points[i].Y1, this.points[i+1].X2, this.points[i+1].Y2, this.points[i+1].x, this.points[i+1].y);
        }
        this.points[7].update();
        ctx.bezierCurveTo(this.points[7].X1, this.points[7].Y1, this.points[0].X2, this.points[0].Y2, this.points[0].x, this.points[0].y);
        ctx.closePath();

        if (this.shadow === 'true') {// shadow 사용여부
            ctx.shadowColor = this.shadowOption.color || 'rgba(0, 0, 0, 0.6)';
            ctx.shadowBlur = this.stage * (this.shadowOption.blur/600);
            ctx.shadowOffsetX = this.stage * (this.shadowOption.x/600);
            ctx.shadowOffsetY = this.stage * (this.shadowOption.y/600);
        }

        if (this.background.backgroundStyles === 'line') {//line, fill 결정
            ctx.fillStyle = '#000000';
            
            ctx.stroke();//line
        }else {
            ctx.fill();//fill
        }
    }
}

//////////////////////////////
class Point {
    constructor(centerX,centerY, rota, index, totalPoints, parts, stage) {
        this.totalPoints = totalPoints;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radian = rota * (Math.PI / 180);
        this.index = index;
        this.parts = parts;
        this.speed = (Math.random() * 8 + 1);// 포인트의 이동 속도
        this.r = Math.random() * (stage/1000) + (stage/5000*3); // 포인트의 동작 범위
        this.rota = 0;
        this.movement = 0;

        ///option
        this.stage = stage;
        
        const delta = new Delta(this.index, this.parts, this.stage);
        this.delta = delta;

    }
    
    update() {
        this.delta.update();
        var plus = Math.cos(this.rota * (Math.PI / 180)) * (this.r);
        this.movement += plus;//증가1

        var cos = Math.cos(this.radian) * (this.delta.radius + this.movement);
        var sin = Math.sin(this.radian) * (this.delta.radius + this.movement);

        this.x = cos + this.centerX;
        this.y = sin + this.centerY;
        this.rota += this.speed;//증가2
        
        if (this.rota > 360) { this.rota -= 360; }
        
        this.X1 = this.x + Math.cos(this.delta.b)*this.delta.B;
        this.Y1 = this.y + Math.sin(this.delta.b)*this.delta.B;
        
        this.X2 = this.x - Math.cos(this.delta.b)*this.delta.B;
        this.Y2 = this.y - Math.sin(this.delta.b)*this.delta.B;

        this.cycle = this.delta.cycle
        this.count = this.delta.count
    }
}

/////////////////////////////////////
class Delta {
    constructor(index, parts, stage) {
        this.stage = stage;
        var deltas = {
            b: [ 
                90*Math.PI/180,
                160*Math.PI/180,
                180*Math.PI/180,
                215*Math.PI/180,
                250*Math.PI/180,
                315*Math.PI/180,
                30*Math.PI/180,
                10*Math.PI/180,
            ],
            B: [
                this.stage * 217*0.5/720,
                this.stage * 121*0.5/720,
                this.stage * 99*0.5/720,
                this.stage * 130*0.5/720,
                this.stage * 225*0.5/720,
                this.stage * 212*0.5/720,
                this.stage * 115*0.5/720,
                this.stage * 184*0.5/720
            ],
            radius: [
                this.stage * 324/720,
                this.stage * 255/720,
                this.stage * 211/720,
                this.stage * 244/720,
                this.stage * 206/720,
                this.stage * 329/720,
                this.stage * 284/720,
                this.stage * 237/720
            ]
        }
        this.deltas = deltas;
        this.index = index;
        this.cycle = index;
        this.parts = parts;
    
        this.b =  this.deltas.b[this.index];
        this.B = this.deltas.B[this.index];
        this.radius = this.deltas.radius[this.index];
        this.count = 0;
    }
    update() {
        if (this.cycle < 7) {
            var radius_b = this.deltas.b[this.cycle+1]-this.deltas.b[this.cycle]-45*Math.PI/180;
            var radius_B = this.deltas.B[this.cycle+1]-this.deltas.B[this.cycle];
            var radius_result = this.deltas.radius[this.cycle+1]-this.deltas.radius[this.cycle];
        }else {
            var radius_b = this.deltas.b[this.cycle-7]-this.deltas.b[this.cycle]-45*Math.PI/180;
            var radius_B = this.deltas.B[this.cycle-7]-this.deltas.B[this.cycle];
            var radius_result = this.deltas.radius[this.cycle-7]-this.deltas.radius[this.cycle];
        }
        if (radius_b < -180*Math.PI/180){radius_b += 360*Math.PI/180}
        this.b += radius_b / this.parts;
        this.B += radius_B / this.parts;
        this.radius += radius_result / this.parts;

        this.count += 1;
        if (this.count > this.parts) {
            this.count = 0;
            if (this.cycle < 7) {
                this.cycle += 1;
            }else {
                this.cycle = 0;
            }
        }
    }
}
export default LogoApp;