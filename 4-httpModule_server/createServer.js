const http = require('http');

const server = http.createServer((req, res) => {
    // 어땋게 응답할지
    // req: request(요청), res: response(응답)
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); // 응답에 대한 정보를 기록하는 메서드(200: 성공적인 요청임을 의미. 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알림)
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});

server.on('error', (err) => {
    console.error(err);
});

// http://127.0.0.1:8080

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!');
    });

// 각각 localhost:8080과 localhost:8081 주소로 서버에 접속할 수 있음