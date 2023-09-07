<!DOCTYPE html>
<html>
    <head>
        <title>Canvas Drawing</title>
        <style>
            canvas {border: 1px solid black;}
        </style>
    </head>
    <body>
        <canvas id="canvas"></canvas>

        <script>
            var MAX = 8; // 원이 가질 최대 포인트 수

            var circle = {
            center: { x: 315, y: 300 }, // 원의 중심 좌표
            color: '#000000', // 원의 색상
            radius: 175, // 원의 반지름
            point: [] // 원의 포인트 배열
            };

            var canvas;
            var context;

            // Point: 원의 포인트 객체 생성자 함수
            var Point = function(c, r, rota) {
                this.x, this.y;
                this.centerX = c.x;
                this.centerY = c.y;
                this.radian = rota * (Math.PI / 180);
                this.radius = r;
                this.delta = 0;

                this.speed = Math.random() * 8 + 2; // 포인트의 속도
                this.r = Math.random() * 2 + 1; // 포인트의 반지름
                this.rota = 0; // 포인트의 회전 각도

                this.update = function() {
                    var plus = Math.cos(this.rota * (Math.PI / 180)) * (this.r);
                    this.radian += 0.003;
                    this.radius += plus;//이게 증가1

                    var cos = Math.cos(this.radian) * this.radius;
                    var sin = Math.sin(this.radian) * this.radius;

                    this.x = cos + this.centerX;
                    this.y = sin + this.centerY;

                    this.rota += this.speed;//이게 증가2

                    if (this.rota > 360) { this.rota -= 360; }
                };
            };


            var init = function() {
                var rota = 360 / MAX;

                // 원의 포인트 객체 생성
                for (var j = 0; j < MAX; j++) {
                    circle.point[j] = new Point(circle['center'], circle['radius'], rota * j);
                }

                animateCanvas = setInterval(update, 25);//이걸로 반복
            };

            var update = function() {
            // 각 포인트의 업데이트 수행
                for (var j = 0; j < MAX; j++) {
                    circle.point[j].update();
                }
                draw(circle);
            };

            var draw = function(circle) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (i=0; i<MAX; i++){
                    var index = i;
                    drawCircle(circle['color'], circle['point'], 0.3, index);
                }
            };
            
            

            var drawCircle = function(color, point, alpha, index) {
                context.fillStyle = color;
                context.globalAlpha = alpha;

                context.beginPath();

                context.arc(point[index].x, point[index].y, 5, 0, 2 * Math.PI);
                context.fill();

            };

            window.onload = function() {
                canvas = document.getElementById("canvas");
                if (canvas) {
                    canvas.width = 630;
                    canvas.height = 630;
                    context = canvas.getContext("2d");

                    init();
                }
            };

        </script>
    </body>
</html>