import { WaveGroup } from './group.js';

class WaveApp {
    constructor(Element) {
        // Canvas 요소 생성
        this.div = document.querySelector(Element);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.div.appendChild(this.canvas);

        // WaveGroup 객체 생성
        this.WaveGroup = new WaveGroup();

        // 윈도우 리사이즈 이벤트 처리
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // 애니메이션 시작
        requestAnimationFrame(this.animate.bind(this));
    }

    // Canvas 크기 조정
    resize() {
        this.stageWidth = this.div.clientWidth;
        this.stageHeight = this.div.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        // this.ctx.scale(2, 2);

        // WaveGroup 객체의 크기 조정
        this.WaveGroup.resize(this.stageWidth, this.stageHeight);
    }

    // 애니메이션 프레임 갱신
    animate(t) {
        // Canvas 영역을 클리어
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        // WaveGroup 객체의 애니메이션 프레임 갱신
        this.WaveGroup.draw(this.ctx);

        // 다음 애니메이션 프레임 요청
        requestAnimationFrame(this.animate.bind(this));
    }
}

// 페이지 로드 후 App 객체 생성
// window.onload = () => {
//     new App();
// };
export default WaveApp