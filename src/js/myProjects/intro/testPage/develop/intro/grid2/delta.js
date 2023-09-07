export class Delta {
    constructor() {
        this.b, this.B, this.radius = 0;
    }
    update(index) {
        this.index = index;
        if (this.index == 0) {this.b =  90*Math.PI/180 , this.B = 217*0.5, this.radius = 324;}
        else if (this.index == 1) {this.b = 160*Math.PI/180 , this.B = 121*0.5, this.radius = 255;}
        else if (this.index == 2) {this.b = 180*Math.PI/180 , this.B = 99*0.5,  this.radius = 211;}
        else if (this.index == 3) {this.b = 215*Math.PI/180 , this.B = 130*0.5, this.radius = 244;}
        else if (this.index == 4) {this.b = 250*Math.PI/180 , this.B = 225*0.5, this.radius = 206;}
        else if (this.index == 5) {this.b = 315*Math.PI/180 , this.B = 212*0.5, this.radius = 329;}
        else if (this.index == 6) {this.b =  30*Math.PI/180 , this.B = 115*0.5, this.radius = 284;}
        else if (this.index == 7) {this.b =  10*Math.PI/180 , this.B = 184*0.5, this.radius = 237;}
// console.log(this.index)
    }
}