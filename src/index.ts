import 'dotenv/config';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import router from './router/index';

const app = express();

app.use(cors({
    credentials: true,
}))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(5001, () => {
    console.log('app running on http://localhost:5001');
})

app.use('/',router())
