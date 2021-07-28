const http = require('http');
const fs = require('fs').promises;

// 요청이 들어오면 먼저 fs 모듈로 HTML 파일을 읽는다.
http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'}); // 에러 메세지는 string 이므로 text/plain 사용
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!');
    });