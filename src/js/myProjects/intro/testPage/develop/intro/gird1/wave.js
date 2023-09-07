class IntroApp {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

        this.MAX = 8; // 원이 가질 최대 포인트 수
        this.circle = {
            center: { x: 315, y: 300 }, // 원의 중심 좌표
            color: '#000000', // 원의 색상
            radius: 175, // 원의 반지름
            point: [] // 원의 포인트 배열
        };
    }

    init() {
        var rota = 360 / this.MAX;

        // 원의 포인트 객체 생성
        for (var j = 0; j < this.MAX; j++) {
            this.circle.point[j] = new Point(this.circle['center'], this.circle['radius'], rota * j);
        }

        animateCanvas = setInterval(Point.update(), 25);//이걸로 반복
    }

    draw(circle) {
        this.circle = circle;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (i=0; i<this.MAX; i++){
            this.index = i;
            drawCircle(this.circle['color'], this.circle['point'], 0.3, this.index);
        }
    }

    drawCircle(color, point, alpha, index) {
        this.point = point;
        this.ctx.fillStyle = color;
        this.ctx.globalAlpha = alpha;

        this.ctx.beginPath();

        this.ctx.arc(this.point[index].x, this.point[index].y, 5, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

class Point {
    constructor(c, r, rota) {
        this.x, this.y;
        this.centerX = c.x;
        this.centerY = c.y;
        this.radian = rota * (Math.PI / 180);
        this.radius = r;
        this.delta = 0;

        this.speed = Math.random() * 8 + 2; // 포인트의 속도
        this.r = Math.random() * 2 + 1; // 포인트의 반지름
        this.rota = 0; // 포인트의 회전 각도
    }

    update() {
        var plus = Math.cos(this.rota * (Math.PI / 180)) * (this.r);
        this.radian += 0.003;
        this.radius += plus;//이게 증가1

        var cos = Math.cos(this.radian) * this.radius;
        var sin = Math.sin(this.radian) * this.radius;

        this.x = cos + this.centerX;
        this.y = sin + this.centerY;

        this.rota += this.speed;//이게 증가2

        if (this.rota > 360) { this.rota -= 360; }

    }
}

export default IntroApp;