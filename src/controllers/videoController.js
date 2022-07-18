const videos = [
    {
        title:"first",
        rating:1,
        comments:1,
        createdAt:"1min",
        views:1,
        id:1,
    },
    {
        title:"second",
        rating:2,
        comments:2,
        createdAt:"2min",
        views:2,
        id:2,
    },
    {
        title:"third",
        rating:3,
        comments:3,
        createdAt:"3min",
        views:3,
        id:3,
    },
]


//컨트롤러 선언문
export const home = (req,res) => {
    res.render("home", { pageTitle:"Home",videos})                          // res.render로 템플릿 렌더링,  home.pug에 pageTitle 변수 넘겨주기
}   
export const watch =  (req,res) => {
    const {id} = req.params                                                 // const id = req.params.id 랑 똑같다 , url파라미터인 id를 변수로 지정
    const video = videos[id-1]
    return res.render("watch", {pageTitle:`Watching: ${video.title}`,video})
}
export const getEdit =  (req,res) =>{
    const {id} = req.params     
    const video = videos[id-1]
    return res.render("edit",{pageTitle:`Editing: ${video.title}`,video})
}
export const postEdit = (req,res)=>{
    const {id} = req.params     
    const {title} = req.body                                                 // req.body를 사용할땐 server.js에 urlencoded를 추가할것
    videos[id-1].title = title  
    return res.redirect(`/videos/${id}`)
}
export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:"Upload Video"})
}
export const postUpload = (req,res) =>{
    const {title} = req.body
    const newVideo = {
        title,
        rating:videos.length+1,
        comments:videos.length+1,
        createdAt:`${videos.length+1}min`,
        views:videos.length+1,
        id: videos.length+1,
    }
    videos.push(newVideo)                                                     // 배열에 요소추가 array.push()
    return res.redirect("/")
}