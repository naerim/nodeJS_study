const express = require('express');
const morgan = require('morgan'); // 요청과 응답에 대한 정보를 기록
const cookieParser = require('cookie-parser');
const session = require('express-session'); // 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 매우 유용
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // dotenv는 .env 파일을 읽어서 process.env로 만든다., 보안 설정의 편의성
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); // static: 정적인 파일들을 제공하는 라우터 역할
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');
const { UV_FS_O_FILEMAP } = require('constants');

try {
    fs.readdirSync('uploades');
} catch (err) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});
app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload',
    upload.fields([{name: 'image1'}, {name: 'image2'}]),
    (req, res) => {
        console.log(req.files, req.body);
        res.send('ok');
    },
);

// app.use(미들웨어)
app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됨');
    next();
})

app.get('/', (req, res, next) => {
    // res.send('Hello Express');
    console.log('GET / 요청에서만 실행')
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨로 간다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});