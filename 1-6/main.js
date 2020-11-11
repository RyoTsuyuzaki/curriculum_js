let scores = [10,15,20,25];
let index = 0
function isEven(num) {
    while (index < num.length) {
        if(num[index] % 2 == 0) {
            console.log(num[index] + 'は偶数です');
        }
        index++;
    };
};
isEven(scores);

let car = {
    gass:20.5 ,
    num:1234 ,
};
console.log(car);
console.log("ガソリンは"+car.gass+"です");
console.log("ナンバーはは"+car.num+"です");