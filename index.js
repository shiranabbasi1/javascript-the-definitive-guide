

// funtion based Point class
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//     this.print = () => {
//         console.log(`x: ${this.x}, y: ${this.y}`);
//     };
// }

// const point = new Point(10, 11);
// point.print();

// function abs(x) {
//     return ((x < 0) ? (-x) : x);
// }
//
// console.log(abs(9));

// Point class with new class syntax
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        const result = Math.sqrt((this.x ** 2) + (this.y ** 2));
        return result;
    }
}

const point = new Point(3, 4);
const distanceFromOrigin = point.distance();
console.log(`distance of point P(${point.x}, ${point.y}) from origin O(0, 0): ${distanceFromOrigin}`);
