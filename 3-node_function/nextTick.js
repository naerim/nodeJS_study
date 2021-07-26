setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
});

Promise.resolve().then(() => console.log('promise'));

// process.nextTick은 setImmediate나 setTimeout보다 먼저 실행된다.
// resolve된 promise도 nextTick처럼 다른 콜백들보다 우선시된다.
// 그래서 process.nextTick과 promise를 마이크로태스크라고 따로 구분지어 부름.

/*
nextTick
promise
timeout
immediate
*/