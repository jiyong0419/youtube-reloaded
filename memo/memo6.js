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
    ㄴ  MongoDB와 Chocolatey설치
        1.  https://evandde.github.io/chocolatey/ 에서 chocolatey 설치
        2.  powershell 관리자모드 실행
        3.  choco install mongodb ( yes/all 나오면 a )
        4.  https://webigotr.tistory.com/241 참고해서 진행 ( Path 추가할때 mongodb 버전 잘확인하기 )
        5.  powershell에서 mongod입력

#6.8 Connecting Mongo
    ㄴ  mongo > mongo에 접속, exit > mongo에 접속해제
    ㄴ  mongoose 설치
        1. npm i mongoose
        2. src폴더내에 db.js파일 생성
        3. 터미널에 mongo입력후 나오는 문구의 위에서 두번째줄에 mongodb://로시작하는 mogoUrl이라고 한다.
            -   ex) mongodb://127.0.0.1:27017
        4. db.js 에서 mongoose를 연결해줌
            -   import mongoose from mongoose
                mongoose.connect("mongodb://127.0.0.1:27017/youtube",{useNewUrlParser:true,useUnifiedTopology:ture})  
                    >> mongoUrl/DBName, {5번에서 db.js를 import하고 저장했을때 경고문구가 뜨면 위처럼 작성, 그 외엔 optional}
        5. server.js에서 db.js를 import해줌
            -   import "./db"
        6.  db.js에서 mongoose연결 성공,실패에 관련한 logger작성
            -   const db = monggose.connection
                const handleError = () => console.log("❌ DB Error",error);
                const once = () => console.log(("✅ Connected to DB");
                db.on("error",handleError)
                db.once("open",handleOpen)

            
#6.9 CRUD Intoduction
    ㄴ  Create Read Update Delete
    ㄴ  src폴더내에 models라는 폴더를 만들고 Video.js를 만들어준다
        1.  data model파일은 첫글자를 대문자로 한다.
        2.  이 작업은 mongoose에게 우리의 data가 어떤형식을 가지고있는지 정해주기 위해서다.


#6.10 Video Model
    ㄴ  Video.js에서 video model을 만들기전 mongoose를 import해준다
        1.  import mongoose from "mongoose"
    ㄴ  data의 형식과 형태를 정의해준다(schema라고한다)
        1.  const videoSchema = new mongoose.Schema({
                title: String,
                description: String,
                createdAt: Date,
                hashtags: [{ type: String }],
                meta: {
                    views: Number,
                    rating: Number,
                }
            })
    ㄴ  정의한 schema를 model로 등록한다.
        1.  const videoModel = mongoose.model("Video", videoSchema)
            - mongoose.model("모델이름",스키마)
    ㄴ  server.js에선 꼭 제일먼저 import "./db"를하고 import "./models/Video"를해준다


#6.11 Our First Query 
    ㄴ  src폴더내에 init.js를 만들어서 db관련 import문을 작성해주고, application실행문도 작성해준다
        1.  import "./db"
            import "./models/Video"
            import app from "./server"      >>  server.js에서 export default app을 해주자
            const PORT = 4000
            const handleListening = () => 
                console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
            app.listen(PORT,handleListening)

        2.  package.json에서 "scripts"에 sever.js를 init.js로 바꿔준다
            -   app.listen함수가 init.js에 있기 때문
    
    ㄴ  위처럼 한 이유는 server.js는 sever관련된 코드와 init.js는 필요한 모든것들을 import시키는 역할을 담당

    ㄴ  video model 사용하기 (콜백함수)
        1.  videoController.js에서 video model을 import
            -   import videoModel from "../models/Video"
        2.  database와 연결
            -   export const home = (req,res) => {
                    videoModel.find({}, (error,videos)=>{})
                    res.render("home", {pageTitle:"Home"})
                }
        3.  #6.12에 이어서


#6.12 Our First Query2
    ㄴ  video model 사용하기 이어서
        1.  videoModel.find()의 콜백함수 작성하기
            -   export const home = (req,res) => {
                    videoModel.find({},(error,videos)=>{
                        console.log("errors",error);
                        console.log("videos",videos);
                        res.render("home",{pageTitle:"Home"})
                    })
                }
        2.  실행순서는 home함수 내부에 실행문이 먼저 실행되고
            그 다음 렌더링이 끝나고 로거가 뜬다
            모델관련함수는 실행속도가 가장늦다.
            허나, 모델관련함수안에 렌더함수를 집어넣음으로써
            실행순서는 home함수 > 모델관련함수 > 로거 순이다


#6.13 Async Await
    ㄴ  video model 사용하기 (promise)
        1.  export const home = async(req,res) => {
                try{
                    console.log("start");                       (1)
                    const videos = await videoModel.find({})    (2)
                    console.log(videos);                        (3)
                    console.log("finish");                      (4)
                    res.render("home",{ pageTitle:"Home",videos })  (5)
                } catch(error) {
                    res.render("server-error",error)
                }
            }   
            -   promise방식은 async가 route argument(res,req)앞에 붙는다
            -   promise방식은 model함수앞에 await가 붙는다
            -   promise방식의 에러잡는법은 try catch문을 이용한다
            
    ㄴ  promise의 특징
        1.  직관적 (실행순서가 직관적이다)
        2.  await는 function안에서만 사용할수있고 해당 function은  async여야한다
        3.  await가 적혀있는곳에선 javascript가 데이터베이스와의 연결을 잠시 기다려준다
        4.


#6.15 Creating a Video
    ㄴ  upload 페이지를 구현해보자
        1.  upload.pug 
            -   input에 placeholder와 require, name을 붙혀준다
        2.  videoController.js
            -   export const postUpload = (req,res) => {
                    const { title, description, hashtags } = req.body
                    const video = new videoModel({
                        title,
                        description,
                        createdAt : Date.now(),
                        hashtags: hashtags.split(",").map((word) => `#${word}`),
                        meta: {
                            views:0,
                            rating:0,
                        },
                    })
                    console.log(video);
                    return res.redirect("/")
                }
                >>  req.body를 사용하여 post된 input값을 받아옴
                    video document를 만들고 받아온 input값들을 document내부에 작성
                    hashtags같은경우 문자열로 이루어진 배열이기떄문에 ("hi,how,are,you")
                    hashtags.split(",")으로 comma로 문자를 구분해준 뒤
                    .map((word)=>`#${word})로 구분된 문자열앞에 #을 붙혀줌


#6.16 Creating a Video 2
    ㄴ  post된 video document를 database에 저장해보자
        1.  export const postUpload = async (req,res) => {
                const video = new videoModel({
                    title,
                    description,
                    createdAt : Date.now(),
                    hashtags : hashtags.split(",").map((word) => `#${word}`),
                    meta : {
                        views : 0,
                        rating : 0,
                    },
                })
                await video.save() 
                return res.redirect("/")
            }
            -   save()도 data가 database에 기록되고 저장되는걸 기다려야하기때문에
                async await를 써서 javascript를 기다리게한다

    ㄴ  save() 말고 create로 database에 저장해보자
        1.  export const postUpload = async (req,res) => {
                const {title,desciption,hashtags} = req.body
                await videoModel.create({
                    title,
                    description,
                    createdAt : date.now(),
                    hashtags : hashtags.split(",").map((word)=>`#${word}`),
                    meta : {
                        views : 0,
                        rating : 0,
                    },
                })
                return res.redirect("/")
            }
            -   async 설정해주고 await가 videoModel.create함수 앞으로온다
                


#6.17 Exeptions and Validation
    ㄴ  post된 data에 error가 있을때 예외처리하는법
        1.  export const postUpload = async(req,res) => {
                try{
                    const { title, description, hashtags } = req.body
                    await videoModel.create({
                        title, /* === title:title 
                        description,
                        hashtags: hashtags.split(",").map((word) => `#${word}`),
                        meta: {
                            views:0,
                            rating:0,
                        },
                    })
                    return res.redirect("/")
                } catch(error) {
                    return res.render("upload",{pageTitle:"Upload Video",errorMessage:error._message,})
                }
            }
            -   try catch문으로 감싸주고
                catch는 error를 parameter로 줄수있고
                그것을 이용하여 upload.pug에 errorMessage를 던져줄수있다.
    
    ㄴ  스키마에서 데이터타입을 정해줄뿐 아니라 required,default값도 정해줄수있다.
        1.  createdAt : { type : Date, required : true,  default : Date.now }
            -   Date.now()라고 적으면 Video.js가 저장된 시간이 default값으로된다.
*/