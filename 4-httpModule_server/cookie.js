const http = require('http');

// 쿠키는 문자열 형식으로 존재하고, 쿠키 간에는 세미콜론으로 구분된다.
http.createServer((req,res) => {
    console.log(req.url, req.headers.cookie); // 쿠키는 요청과 응답의 헤더를 통해 오간다.
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test'}); // 응답을 받은 브라우저는 mycookie=test라는 쿠키를 저장한다.
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });