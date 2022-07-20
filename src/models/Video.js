/*  
    스키마는 데이터의 형태를 정해주는것, 모델은 스키마를 통해 만들어진 데이터 양식 (인스턴스) 
    모델파일의 첫글자는 대문자로
*/

// 임포트문
import mongoose from 'mongoose'; //DB와 연관있는것이기 때문에 mongoose임포트


// 스키마(데이터형태) 작성
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{type: String}],
    meta: {
        views: Number,
        rating: Number,
    },
})                                          
//  Model 작성                                           
const Video = mongoose.model("Video", videoSchema) // (외부에서 불릴 모델명,스키마이름)

// Model 익스포트문 
export default Video //(server.js에서 임포트해줘야함)
