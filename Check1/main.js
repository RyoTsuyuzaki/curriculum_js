let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
let index = 0
function isEven(num) {
    while (index < num.length) {
        if(num[index] % 2 == 0) {
            console.log(num[index] + 'は偶数です');
        }
        index++;
    };
};
isEven(numbers);


class Car {
    constructor(oil, number){
        this.oil = oil;
        this.number = number;
    }

    getNumGas() {
        console.log(`ガソリンは${this.oil}です。ナンバーは${this.number}です`);
    }

}
let cars = new Car(`○○`, `△△`);
cars.getNumGas();