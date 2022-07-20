//임포트문
import Video from "../models/Video" // Video model 임포트

//컨트롤러 선언문
export const home = (req,res) => {
    /*
    콜백함수를 이용한 DB와의 접근법
    Video.find({},(error,videoData)=>{
        console.log("errors",error);
        console.log("videos",videoData);
        res.render("home", { pageTitle:"Home",videos:[]})                   
    })    //
    */
}   
export const watch =  (req,res) => {
    const {id} = req.params                                                 // const id = req.params.id 랑 똑같다 , url파라미터인 id를 변수로 지정
    return res.render("watch", {pageTitle:`Watching`})                      // res.render로 템플릿 렌더링,  watch.pug에 pageTitle 변수 넘겨주기
}
export const getEdit =  (req,res) =>{
    const {id} = req.params     
    return res.render("edit",{pageTitle:`Editing`})
}
export const postEdit = (req,res)=>{
    const {id} = req.params     
    const {title} = req.body                                                 // req.body를 사용할땐 server.js에 urlencoded를 추가할것
    return res.redirect(`/videos/${id}`)
}
export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:"Upload Video"})
}
export const postUpload = (req,res) =>{
    const {title} = req.body
    // 배열에 요소추가 array.push()
    return res.redirect("/")
} 