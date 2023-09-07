import { Wave } from "./wave.js";

export class Group {
    constructor() {
        this.totalPoints = 8;
        this.color = ['#000000', '#57356d', '#356d46', '#6d3535', '#000000', '#57356d', '#356d46', '#6d3535']
        this.radius = 175;

        this.point = [];

        for (let i = 0; i < this.totalPoints; i++) {
            const wave = new Wave(this.totalPoints, this.color[i], this.radius);
            this.point[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalPoints; i++){
            const wave = this.point[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i=0; i<this.totalPoints; i++) {
            const wave = this.point[i];
            wave.draw(ctx);
        }
    }
}