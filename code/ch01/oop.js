
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let p = new Point(3, 4);
console.log(p.distance());  // => 5
