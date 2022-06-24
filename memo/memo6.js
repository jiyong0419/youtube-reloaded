/*
#6.0 Array Database
    ㄴ  가상의 Database를 만들어서 그것을 controller에 전달(post)하고 각 controller가 rendering하는 pug 템플릿에서
        Database를 활용하여 보자
        1. see controller는 url에 파라미터를 전달받고있다 
            - videoRouter.get("/:id(\\d+)",see)
        2. see controller에서 파라미터를 이용하여 id를 조회할수 있다.
            - console.log(${req.params.id})
        3. 이것을 이용하여 see controller 내부에 id변수를 만들고 video변수도 만들수있다.
            - const {id} = req.params 
              const video = video[id-1]
        4. 이것을 이용하여 watch.pug의 pageTitle을 수정해보자
            - res.render("watch",{ pageTitle:`Watching ${video.title}` })
        
    ㄴ  pug 템플릿에서 변수를 사용할땐 #{}를 사용하지만 pug템플릿에서 html태그 속성에 변수를 사용할떈 `${}`를 사용한다
        1. a(href=`/video/${video.id}`) video.title
            - video.title이 앵커가되고 클릭 시 /video/id로 이동한다


#6.1 Array Database 2
    ㄴ  controller에서 array를 변수로 보낼때 video:vieo 대신 video라고 작성하면 된다
        1.  const video = [1,2,3,4,5]
            const watch = (req,res) => res.render("watch",{ video:video })
            => const watch = (req,res) => res.render("watch",{ video })

    ㄴ  HTML 특수문자
        1. &larr;   &rarr;
            - ;를 꼭 붙혀주자
    
    ㄴ  absolute url 과 relative url
        1.  Relatvie url
            현위치 => localhost:4000/videos/1 
            a(href=`${video.id}/edit`) Edit Video
            -   Edit Video를 클릭하면 url이 끝부분만 변경된다 
                변경위치 => localhost:4000/videos/1/edit
        2.  Absolute url
            현위치 => localhost:4000/videos/1 
            a(href=`/${video.id}/edit`) Edit Video
            -   Eidt Video를 클릭하면 url이 localhost:4000/ 이후로 변경된다.
                변경위치 => localhost:4000/1/edit
        3.  즉, href속성에 /를 먼저 넣으면 route url 이후로 변경되고
            /를 먼저 넣지않으면 현 url의 끝부분에서부터 변경이 시작된다.
            
            
#6.2 Edit Video 
    ㄴ  videoController.js에서 edit controller를 getEdit로 바꾸고 video object를 watch.pug에 전달해줌
        1.  const id = req.params.id
            const video = videos[id-1]
            res.render("watch",{pageTitle:`Watching: ${video.title}`,video})

    ㄴ  editVideo.pug의 내용을 수정해주자
        1.  title을 h4 Change Title of video 로 변경해줌
        2.  POST를 위한 form 을 만들어줌
            =>  form(method="POST")
        3.  form안에 text input과 submit input을 작성해줌
            =>  input(placeholder="Video Title", value=video.title, required)
                input(value="Save",type="submit")
        4.  videoRouter.js에서 edit controller를 getEdit로 수정해준다

    ㄴ  editVideo.pug 에서 POST한 form을 받을 post함수를 작성하자
        1.  videoRouter.js에서 videoRouter.post("/:id(\\d+"),postEdit)
            =>  videoRouter에 post함수를 써서 url은 get과 동일, postEdit controller를 실행해줌
        2.  videoController.js에서 postEdit controller를 작성
            =>  export const postEdit = (req,res) => res.send("Post Edit")
        3.  videoRouter.js에서 postEdit를 import해준다.

    ㄴ  form(method="POST")태그에는 action이라는 속성이있는데 action은 form양식을 어디로 보낼지 정해준다
        1.  action을 생략하면 똑같은 url에 form을 전송, action="/change-video"를 입력하면 http://localhost:4000/change-video로 form을 전송


#6.3 Edit Video 2        
    ㄴ  Router.get과 Router.post의 url이 같다면 한줄로 합칠 수 있다.
        1.  Router.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)

    ㄴ  postEdit controller를 완성해보자
        1.  export const postEdit = (req,res) => {
                const {id} = req.params
                res.redirect(`/videos/${id}`)
            }   
            =>  res.redirect("url")은 url로 postEdit내용을 보내주고 이동한다.
        2.  const {id} = req.params
            const {title} = req.body
            videos[id-1].title = title
            =>  postEdit에 req.body를 이용하여 form에서 입력받은 title을 database에 적용시켜준다.
        3.  2번이 적용되기위해서 express에서 form을 읽을 수 있는 middleWare를 작성해준다
            => server.js에서 route문 위에 app.use(express.urlencoded({extended:true}))
                >>  express가 form을 읽을 수 있고 그것을 자바스크립트 형태로 변형시켜서 우리가 사용할 수 있게 해준다.
                
            
#6.5 More Practice 
    ㄴ  controller작성 > route작성 > pug페이지작성 순으로 하여라
        1.  export const getUpload = (req,res) => {res.render("upload"),{pageTitle:"Upload Video"}}
            export const postUpload = (req,res) => {res.redirect("/")}
        2.  videoRouter.route("/upload").get(getUpload).post(postUpload)
        3.  upload.pug 작성


#6.6 More Practice 2
    ㄴ  req.body를 사용할떄는 input에 꼭 name지정을 해줘야함
        1.  input(name="title")
  
        
#6.7 MongoDB Introduction
    ㄴ  mongodb.com > Resources > Server > Installation > Install MongoDB Community Edition
        > Install on Windows > MongoDB Download Center 
*/