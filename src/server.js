// 임포트문

import express from "express"                       // express 패키지 임포트
import morgan from 'morgan';                        // morgan 패키지 임포트
import globalRouter from './routers/globalRouter';  // globalRouter 임포트
import userRouter from './routers/userRouter';      // userRouter 임포트
import videoRouter from './routers/videoRouter';    // videoRouter 임포트

// 선언문
const server = express();       // express 선언
const logger = morgan("dev")    // morgan(logger) 선언

// pug 환경설정 
server.set("view engine","pug")                 // view engine 설정 (pug 세팅)
server.set("views",process.cwd()+"/src/views")  // views폴더를 위해 현재작업디렉토리설정 (pug 세팅)

// 미들웨어 설정
server.use(logger)                                  // morgan미들웨어
server.use(express.urlencoded({ extended: true })) // express가 post된 form의 value들을 이해하게함

// 라우터 설정
server.use("/",globalRouter)
server.use("/users",userRouter)
server.use("/videos",videoRouter)

// 익스포트문
export default server // init.js

