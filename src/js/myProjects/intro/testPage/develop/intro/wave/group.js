import { Wave } from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 5;
        this.totalPoints = 8;

        this.color = ['rgba(0, 199, 235, 0.1)', 'rgba(0, 146, 199, 0.1)', 'rgba(0, 87, 158, 0.1)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            // Wave 객체 생성
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    // WaveGroup 크기 조정
    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    // WaveGroup 그리기
    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}