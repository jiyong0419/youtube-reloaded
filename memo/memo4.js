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
        
        
        
        
        */         