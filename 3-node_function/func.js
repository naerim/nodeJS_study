const {odd, even} = require('./var'); // var.js의 module.exports에 담겨 있던 객체를 불러와 사용

function checkOddOrEven(num) {
    if(num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// module.exports에는 객체뿐만 아니라 함수나 변수를 대입해도 됨