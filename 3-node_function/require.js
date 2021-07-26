// 항상 require이 최상단, exports가 최하단에 위치할 필요가 없다.
console.log('require가 가장 위에 오지 않아도 된다.');

module.exports = '저를 찾아보세요';

require('./var');

console.log('require.cache');
console.log(require.cache);

console.log('require.main');
console.log(require.main === module); // 현재 파일이 첫 모듈인지 알아볼 때
console.log(require.main.filename);

// 순환참조(두 모듈이 서로 require할 때)
// 순환참조가 있을 경우에는 순환 참조되는 대상을 빈 객체로 만든다.
// 이때 에러가 발생하지 않고 조용히 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있다. 주의하기!