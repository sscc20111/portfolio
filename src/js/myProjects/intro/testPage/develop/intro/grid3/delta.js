export class Delta {
    constructor(index, parts) {
        this.b, this.B, this.radius,this.cycle,this.parts;

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
                217*0.5,
                121*0.5,
                99*0.5,
                130*0.5,
                225*0.5,
                212*0.5,
                115*0.5,
                184*0.5
            ],
            radius: [
                324,
                255,
                211,
                244,
                206,
                329,
                284,
                237
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
        //프레임단위로 각 index에 할당될 값의 변환식을 작성
        if (this.cycle < 7) {
            var radius_b = this.deltas.b[this.cycle+1]-this.deltas.b[this.cycle]-45*Math.PI/180;
            var radius_B = this.deltas.B[this.cycle+1]-this.deltas.B[this.cycle];
            var radius_result = this.deltas.radius[this.cycle+1]-this.deltas.radius[this.cycle];
        }else {
            var radius_b = this.deltas.b[this.cycle-7]-this.deltas.b[this.cycle]-45*Math.PI/180;
            var radius_B = this.deltas.B[this.cycle-7]-this.deltas.B[this.cycle];
            var radius_result = this.deltas.radius[this.cycle-7]-this.deltas.radius[this.cycle];
        }
        // if (this.b > 360) {this.b -= 360;}
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