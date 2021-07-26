// 변수를 모아둔 모듈
// func.js에서 이를 참조

// 1
// const odd = '홀수';
// const even = '짝수';

// module.exports = {
//     odd,
//     even
// }

// 2
exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';
// exports를 사용할때는 객체만 사용할 수 있으므로 함수를 대입한 경우에는 사용할 수 없다.
// 한 모듈에 exports 객체와 module.exports를 동시에 사용하지 않는 것이 좋음