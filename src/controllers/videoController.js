//임포트문
import Video from "../models/Video" // Video model 임포트

//컨트롤러 선언문
export const home = async(req,res) => {
    const videos = await Video.find({})
    if(!videos){
        //return res.render("errorPage")
    }
    console.log(videos);
    return res.render("home",{pageTitle:"Home",videos})
    
    /* 
    async와 await를 이용한 DB와의 접근법과 try catch를 이용한 에러검출
    try{
        const videos = await Video.find({})
        return res.render("home",{ pageTitle: "Home", videos})
    } catch {
        return res.render("errorPage")
    }
    */

    /*
    콜백함수를 이용한 DB와의 접근법 ( 이거의 장점은 에러들을 바로 콘솔에서 볼수있다는것 )
    Video.find({},(error,videoData)=>{
        console.log("errors",error);
        console.log("videos",videoData);
        if(error){
            return res.render("errorPage")
        }
        res.render("home", { pageTitle:"Home",videos:[]})                   
    })    
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
export const postUpload = async(req,res) =>{
    const {title,description,hashtags} = req.body
    // DB에 데이터 저장하는 법1 (create방식)
    await Video.create({
        title,
        description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map(word => `#${word}`),
        meta: {
            views:0,
            rating:0,
        },
    })
    /*
    DB에 데이터 저장하는 법2 (save방식)
        const video = new Video({
            title,
            description,
            createdAt: Date.now(),
            hashtags: hashtags.split(",").map(word => `#${word}`),
            meta: {
                views:0,
                rating:0,
            },
        })
        await video.save() 
   */

    // 배열에 요소추가 array.push()
    return res.redirect("/")
} 