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



*/
