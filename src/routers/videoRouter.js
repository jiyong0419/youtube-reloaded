//임포트문
import express from "express"
import { watch,getEdit,postEdit,getUpload,postUpload } from '../controllers/videoController';

//라우터 선언문
const videoRouter = express.Router();

//컨틀롤러 설정
videoRouter.get("/:id(\\d+)",watch)                                 //:id(\\d+) >> url파라미터+정규식
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)    //동일한 url에 get,post가 이뤄질때 route사용
videoRouter.route("/upload").get(getUpload).post(postUpload)

//videoRouter를 익스포트 기본값으로 지정
export default videoRouter