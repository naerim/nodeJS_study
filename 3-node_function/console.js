const string = 'str';
const number = 2;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체 시간');
console.log('평범한 로그, 쉼표로 구분해 여러 값을 찍을 수 있음');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에!');

console.table([{name: '내림', birth: 1997}, {name: 'hero', birth: 2000}]);

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('시간 측정');
for (let i=0; i<100000; i++) {}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체 시간');

/*
console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정
console.log(내용) : 평범한 로그
console.error(에러 내용) : 에러를 콘솔에 표시
console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됨
console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용, 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣는다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기 편해진다. depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다. 기본값은 2!
console.trace(레이블) : 에러가 어디서 발생했는지 추적할 수 있게 함
*/