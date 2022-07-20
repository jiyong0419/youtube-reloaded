import "./db"                 // db.js 파일 자체를 임포트해줌으로써 mongoDB안의 youtube데이터에 연결
import "./models/Video"       // Video model 임포트 
import server from "./server"

// 선언문
const PORT = 4000               // 포트번호 선언

// 리슨함수 설정
const handleListening = () => {console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)}  // 리스닝함수 선언
server.listen(PORT,handleListening)                                                                      // 리슨함수