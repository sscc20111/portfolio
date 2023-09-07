import { Delta } from "./delta.js";
export class Point {
    constructor(centerX,centerY, rota, index, totalPoints, parts) {
        this.totalPoints = totalPoints;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radian = rota * (Math.PI / 180);
        this.index = index;
        this.parts = parts;

        this.speed = (Math.random() * 8 + 1);// 포인트의 이동 속도
        this.r = Math.random() * 0.5 + 0.3; // 포인트의 동작 범위
        this.rota = 0;
        
        const delta = new Delta(this.index, this.parts);
        this.delta = delta;

        this.movement = 0;
    }
    
    update() {
        this.delta.update();
        var plus = Math.cos(this.rota * (Math.PI / 180)) * (this.r);
        // this.radian += 0.003;//축 회전
        // this.b += 0.003;//축 회전
        this.movement += plus;//이게 증가1

        var cos = Math.cos(this.radian) * (this.delta.radius + this.movement);
        var sin = Math.sin(this.radian) * (this.delta.radius + this.movement);

        this.x = cos + this.centerX;
        this.y = sin + this.centerY;
        this.rota += this.speed;//이게 증가2
        
        if (this.rota > 360) { this.rota -= 360; }
        
        this.X1 = this.x + Math.cos(this.delta.b)*this.delta.B;
        this.Y1 = this.y + Math.sin(this.delta.b)*this.delta.B;
        
        this.X2 = this.x - Math.cos(this.delta.b)*this.delta.B;
        this.Y2 = this.y - Math.sin(this.delta.b)*this.delta.B;

        this.cycle = this.delta.cycle
        this.count = this.delta.count
    }
}