// 임포트문
import mongoose from "mongoose"                         // mongoose 임포트

// 
mongoose.connect("mongodb://127.0.0.1:27017/youtube")   // youtube DB 연결

// 연결의 성공여부나 에러를 콘솔로 출력
const db = mongoose.connection

const handleOpen = () => {console.log("✅ Connected to DB");}
const handleError = (error) => {console.log("❌ DB Error",error);}

db.on("error",handleError)   // db연결에 error발생시 error메시지 출력
db.once("open",handleOpen)   // db연결에 성공시 성공메시지 출력