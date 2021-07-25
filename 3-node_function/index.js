// 노드 하나가 여러 개의 모듈을 사용할 수 있음
const {odd, even} = require('./var');
const checkNumber = require('./func'); // 모듈로부터 값을 불러올 때 변수 이름을 다르게 지정할 수도 있다.

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
        return odd;
    }
    else return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));