import React, { Component } from 'react';

class IntroApp1 extends Component {
    constructor(props) {
        super(props);

        this.MAX = 8;
        this.circle = {
            center: { x: 100, y: 100 },
            color: '#000000',
            radius: 40,
            point: []
        };

        this.canvasRef = React.createRef();
        this.context = null;
        this.animateCanvas = null;
    }

    componentDidMount() {
        this.context = this.canvasRef.current.getContext('2d');
        this.init();
    }

    componentWillUnmount() {
        clearInterval(this.animateCanvas);
    }

    Point = class {
        constructor(c, r, rota) {
            this.centerX = c.x;
            this.centerY = c.y;
            this.radian = rota * (Math.PI / 180);
            this.radius = r;
            this.delta = 0;

            this.speed = Math.random() * 10 + 2;
            this.r = 0.5;
            this.rota = 0;
        }

        update() {
            var plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;
            this.radian += 0.003;
            this.radius += plus;

            var cos = Math.cos(this.radian) * this.radius;
            var sin = Math.sin(this.radian) * this.radius;

            this.x = cos + this.centerX;
            this.y = sin + this.centerY;

            this.rota += this.speed;

            if (this.rota > 360) {
                this.rota -= 360;
            }
        }
    };

    init() {
        var rota = 360 / this.MAX;

        for (var j = 0; j < this.MAX; j++) {
            this.circle.point[j] = new this.Point(this.circle.center, this.circle.radius, rota * j);
        }

        this.animateCanvas = setInterval(this.update, 25);
    }

    update = () => {
        for (var j = 0; j < this.MAX; j++) {
            this.circle.point[j].update();
        }
        this.draw(this.circle);
    };

    draw(circle) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for (var i = 0; i < this.MAX; i++) {
            this.drawCircle(circle.color, circle.point, 0.3, i);
        }
    }

    drawCircle(color, point, alpha, index) {
        this.context.fillStyle = color;
        this.context.globalAlpha = alpha;

        this.context.beginPath();
        this.context.arc(point[index].x, point[index].y, 3, 0, 2 * Math.PI);
        this.context.fill();
    }

    render() {
        return (
            <div style={{ width: '500px' }} className="IntroApp1">
                <canvas ref={this.canvasRef} width={220} height={200} />
            </div>
        );
    }
}

export default IntroApp1;
