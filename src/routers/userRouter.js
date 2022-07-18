//임포트문
import express from "express"
import { edit,remove,logout,see } from '../controllers/userController';

//라우터 선언문
const userRouter = express.Router();

//컨트롤러 설정
userRouter.get("/logout",logout)
userRouter.get("/edit",edit)
userRouter.get("/remove",remove)
userRouter.get("/:id(\\d+)",see)  // :id(\\d+) = url파라미터+정규식

//userRouter를 익스포트 기본값으로 지정
export default userRouter
