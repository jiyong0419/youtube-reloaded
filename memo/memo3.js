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
            - get함수의 첫번째 파라미터는 url, 두번쨰 파라미터는 callback함수
        2. app과 관련된 함수들은 대게 샌드위치존(app선언문과 handleListening선언문 사이)에 작성한다
*/
