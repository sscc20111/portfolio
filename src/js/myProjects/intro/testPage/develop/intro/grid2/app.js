import { Wave } from "./wave.js";

class IntroApp2 {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

        this.Wave = new Wave();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = 300;
        this.stageHeight = 250;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        if (this.stageWidth < 760) {
            this.stageWidth = document.body.clientWidth;
            this.stageHidth = document.body.clientHeight;
        }
        // this.canvas.width = this.stageWidth * 2;
        // this.canvas.height = this.stageHeight * 2;
        // this.ctx.scale(2, 2);

        this.Wave.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.Wave.draw(this.ctx);

        setTimeout(() => {
            requestAnimationFrame(this.animate.bind(this));
        }, 25);
    }
}

export default IntroApp2;