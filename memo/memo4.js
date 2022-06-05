/*
#4.0 What are Routers?
    ㄴ  Router는 controller와 url의 관리를 도와주며 카테고리별로 url을 그룹화해준다. (미니어플리케이션)
        1. / , /login , /join 
            - 글로벌한 url들
        2. /users/edit, /users/delete
            - user관련 url들
        3. /videos/watch, /videos/edit, /videos/delete, /videos/comments, /videos/comments/delete
            - video관련 url들

    ㄴ  README파일에 필요한 url들을 정리해보도록 하자

#4.1 Making Our Routers
    ㄴ  Router사용법
        1. const globalRouter = express.Router();
           const userRouter = express.Router();
           const videoRouter = express.Router();
            - 각각 Router를 선언한다
        2. app.use("/", globalRouter)
           app.use("/videos", videoRouter)
           app.use("/users", userRouter)
            - 각각 Router를 app.use에 적용해준다 
        3. const handleHome = (req,res) => res.send("Home")
           const handleEditUser = (req,res) => res.send("Edit User")
           const handleWatchVideo = (req,res) => res.send("Watch Video")
            - 각각 Router들의 controller를 선언한다.
        4. globalRouter.get("/",handleHome)
           userRouter.get("/",handleEditUser)
           videoRouter.get("/",handleWatchVideo)
            - 각각 Router.get으로 각각 Router들에게 controller를 적용한다.
            
#4.2 Cleaning the Code
    ㄴ  Router를 따로 모아두는 폴더를 만들자
        1. src안에 routers폴더를 생성
        2. routers폴더안에 globalRouter.js / userRouter.js / videoRouter.js 생성
        3. 각 Router.js에 Router선언문을 집어넣는다.
            - import express from "express"
              const globalRouter = express.Router() 
            - import express from "express"
              const userRouter = express.Router() 
            - import express from "express"
              const videoRouter = express.Router() 
        4. 각 Router.js에 Router.get()을 집어넣는다.
            - globalRouter.get("/",handleHome)
            - globalRouter.get("/edit",handleEditUser)
            - globalRouter.get("/watch",handleWatchVideo)
        5. 각 Router.js에 controller를 집어넣는다.
            - globalRouter.get("/",handleHome)
            - userRouter.get("/edit",handleEditUser)
            - videoRouter.get("/watch",handleWatchVideo)
        5. 각 Router.js에서 Router변수들을 export해주자
            - export default globalRouter
            - export default userRouter
            - export default videoRouter
        5. 메인 JS파일에서 각 Router변수들을 import해주자
            - import globalRouter from ""
              import userRouter from ""
              import videoRouter from ""
    
    ㄴ  export default는 변수하나를 export한다
        1. 자세한 내용은 #4.3강의에서


        
        
        
        */         