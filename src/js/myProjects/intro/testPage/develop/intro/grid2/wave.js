import { Point } from "./point.js";
export class Wave {
    constructor() {
        this.totalPoints = 8;
        this.color = ['#000000', '#57356d', '#356d46', '#6d3535', '#000000', '#57356d', '#356d46', '#6d3535']
        this.radius = 100;
        this.points = [];
        this.rota = 360 / this.totalPoints;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        
        this.init();
    }

    init() {

        // 원의 포인트 객체 생성
        this.points = [];

        for (var i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.centerX, this.centerY, this.radius, this.rota * i, i);
            this.points[i] = point;
        };
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3;
        // const image = new Image();
        // image.src = '/common/img/layout/logoImg.jpg';
        // image.onload = function() {
        //     const pattern = ctx.createPattern(image, 'repeat'); // 패턴 생성
        
        //     ctx.fillStyle = pattern; // fillStyle을 패턴으로 설정
        // };
        
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i=0; i<this.totalPoints-1; i++){
            this.points[i].update();

            ctx.bezierCurveTo(this.points[i].X1, this.points[i].Y1, this.points[i+1].X2, this.points[i+1].Y2, this.points[i+1].x, this.points[i+1].y);
        }
        this.points[7].update();
        ctx.bezierCurveTo(this.points[7].X1, this.points[7].Y1, this.points[0].X2, this.points[0].Y2, this.points[0].x, this.points[0].y);
        ctx.closePath();
        ctx.fill();

        for (let i=0; i<this.totalPoints; i++){
            ctx.beginPath();
            this.points[i].update();
            ctx.arc(this.points[i].x, this.points[i].y, 4, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(this.points[i].X1, this.points[i].Y1, 4, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(this.points[i].X2, this.points[i].Y2, 4, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
        }
        
        for (let i=0; i<this.totalPoints; i++){
            ctx.beginPath();
            ctx.moveTo(this.points[i].X1, this.points[i].Y1);
            ctx.lineTo(this.points[i].X2, this.points[i].Y2);
            ctx.stroke();
            ctx.fill();
        }

    }
    // draw(ctx) {
    //     ctx.fillStyle = this.color;
    //     ctx.globalAlpha = 0.3;
        
    //     ctx.beginPath();

    //     ctx.moveTo(this.points[0].x,this.points[0].y)
    //     for (let i=0; i<this.totalPoints; i++){
    //         this.points[i].update();
    //         ctx.lineTo(this.points[i].x, this.points[i].y);
    //     }
    //     ctx.closePath();
    //     ctx.fill();
        
    //     for (let i=0; i<this.totalPoints; i++){
    //         ctx.beginPath();
    //         this.points[i].update();
    //         ctx.arc(this.points[i].x, this.points[i].y, 5, 0, 2*Math.PI);
    //         ctx.closePath();
    //         ctx.fill();
            
    //         ctx.beginPath();
    //         ctx.arc(this.points[i].X1, this.points[i].Y1, 5, 0, 2*Math.PI);
    //         ctx.closePath();
    //         ctx.fill();
            
    //         ctx.beginPath();
    //         ctx.arc(this.points[i].X2, this.points[i].Y2, 5, 0, 2*Math.PI);
    //         ctx.closePath();
    //         ctx.fill();
    //     }
        
    //     for (let i=0; i<this.totalPoints; i++){
    //         ctx.beginPath();
    //         ctx.moveTo(this.points[i].X1, this.points[i].Y1);
    //         ctx.lineTo(this.points[i].X2, this.points[i].Y2);
    //         ctx.stroke();
    //         ctx.fill();
    //     }


        
    //     // ctx.beginPath();
    //     // ctx.arc(this.points[2].X1, this.points[2].Y1, 5, 0, 2*Math.PI);
    //     // ctx.closePath();
    //     // ctx.fill();

    //     // ctx.beginPath();
    //     // ctx.arc(this.points[2].X2, this.points[2].Y2, 5, 0, 2*Math.PI);
    //     // ctx.closePath();
    //     // ctx.fill();

    //     // ctx.beginPath();
    //     // ctx.moveTo(this.points[2].X1, this.points[2].Y1);
    //     // ctx.lineTo(this.points[2].X2, this.points[2].Y2);
    //     // ctx.stroke();


    //     // console.log(`1:(${this.points[2].x},${this.points[2].y}), 2:(${this.points[2].X},${this.points[2].Y})`)
    // }
}