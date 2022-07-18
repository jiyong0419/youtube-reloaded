//임포트문
import express from 'express';
import { home,search } from '../controllers/videoController';
import { join,login } from '../controllers/userController';

//라우터 선언문
const globalRouter = express.Router();

//컨틀롤러 설정
globalRouter.get("/",home)
globalRouter.get("/join",join)
globalRouter.get("/login",login)

//globalRouter를 익스포트 기본값으로 지정
export default globalRouter