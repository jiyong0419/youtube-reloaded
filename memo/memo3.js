/*
#3.0 Your First Server
    ㄴ  src(source)폴더를 만들어 파일들을 옮긴다
        1. index.js파일을 옮기고 package.json에서 "scripts"를 수정해준다
            - "dev": "nodemon --exec babel-node index.js" -> "dev": "nodemon --exec babel-node src/index.js"

    ㄴ  index.js의 이름을 server.js로 수정한다
        1. package.json의 "scripts"의 "dev"의 값에 index.js를 server.js로 수정해준다
            - "dev": "nodemon --exec babel-node src/index.js" -> "dev": "nodemon --exec babel-node src/server.js"

    ㄴ  서버는 항상 켜져있는 컴퓨터, 항상 request를 listen하고있다

    ㄴ  서버 임포트 및 서버선언하기
        1. import express from "express"
            - express서버를 express라는 이름으로 임포트한다
        2. const app = express();
            - 임포트한 express서버를 app이라는 변수에 담는다
        3.  const PORT = 4000
            app.listen(PORT,handleListening)
            - 서버는 4000포트를 listen하고, 서버가 시작될 때 handleListening함수를 실행한다
        4. const handleListening = () => console.log("Server listening on port http://localhost:${PORT}🚀")
            - 서버가 시작되면 콘솔에 문구를 출력한다
        5. url에 localhost:4000
            - 서버에 접속하는 방법
        6. ctrl + c 
            - 서버를 종료하는 방법


#3.1 GET Requests
    ㄴ  / = url에서 서버의 root, 혹은 첫 페이지를 뜻함 (google.com === google.com/)

    ㄴ  GET은 HTTP method중 하나다
        1. url에 google.com을 입력하면 유저가 google.com으로 들어가는것이 아니라 
           브라우저가 서버에게 google.com/ 페이지를 요청하고 
           서버는 브라우저에게 google.com/ 페이지를 전해주고
           브라우저는 GET해온 google.com/ 페이지를 유저에게 보여준다.


#3.2 GET Requests 2
    ㄴ  서버에 GET requests가 들어왔을때 응답 설정하기
        1. app.get("/",handleHome)
            - get함수의 첫번째 파라미터는 url, 두번쨰 파라미터는 controller
            

#3.3 Responses
    ㄴ  express에선 controller에 req,res두개의 아규먼트가 전달된다
        1. console.log(req)를 하면 쿠키,method,url등의 정보를 확인할수있고 사용할수있다.
        2. res의 함수로는 res.end()가있는데 최종적으로 응답을 끝내는 용도이다.
        3. res의 함수로는 res.send()도있는데 ()안에 문자열을 입력하면 화면에 출력해준다
            - res.send("I still love you") 
                >> 브라우저 화면에 I still love you가 출력됨
    
    ㄴ  app.get('/login',handleLogin)에서 '/login'을 route라고 하며 handleLogin을 controller라고한다.

    
#3.5 Middlewares 
    ㄴ  Middleware는 request와 response사이에 존재한다.
        1. 브라우저가 request하고 서버가 response하기 전, 그 사이에 Middleware가 있다.
        2. Middleware는 controller이다.
        3. 모든 controller는 Middleware가 될수있다.
        4. controller는 req,res 외에 next라는 argument를 갖고있다.
            - next는 app.get() 등의 controller가 두개 이상일 때, 다음 controller를 호출해준다.
                >> app.get("/",handleFirst,handleSecond)
                   const handleFirst = (req,res,next) => {next()}
                   const handleSecond = (req,res) => {res.end()}
                >> handleFirst가 실행되고 handleFirst가 handleSecond를 불러온다. handleSecond가 실행되고 handleSecond는 응답을 종료한다.

    ㄴ  마지막으로 호출되는 controller는 Finalware라고 한다.
        1. FinalWare는 next argument가 필요하지 않다.

    ㄴ  req는 request에 관한 정보를 가지고있는 object이므로 req.url 로 url정보를 가져올수있다.
*/  
