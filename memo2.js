/*
개발자를 위한 윈도우 셋업 강의 들어보는거 추천 
콘솔 초기화 >> clear

#1.3 What is Node JS?
    ㄴ  Nodejs.org에서 설치한다
    ㄴ  Node JS는 브라우저에서 JS를 꺼낸것이며, 웹이 아닌 다른곳에서도 JS를 활용하게 해준다
    ㄴ  Node JS덕분에 안드로이드,iOS앱을 만들수있는 'React Native'와 데스크탑 앱을 만들수 있는 'Electron' 같은것들도 쓸수 있다
    ㄴ  NodeJS = 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임

#1.4 What is NPM?
    ㄴ  Node JS Package Manager
    ㄴ  npm은 NodeJS와 package들을 서로 상호작용 시켜준다
    ㄴ  여러사람이 만든 개발에 유용한 패키지들을 가져다 쓸수있다 (express)
    ㄴ  npm말고 yarn이라는것도 있는데 이 둘 사이에는 차이가 거의 없다
*/



/*
#2.0 Your First Node JS Project
    ㄴ  NodeJS 사용하는 순서
        1. 폴더를 생성한다
        2. 폴더에 git repository를 생성한다
            - 콘솔에 git init
            - GitHub에서 새로운 repository를 생성한다
            - repository의 url을 복사한다
            - 콘솔에 git remote add origin 복사한URL을 입력한다
        3.  프로젝트를 생성한다
            - 콘솔에서 npm init 입력
            - 필요한 정보들을 입력한다
            - package.json파일이 생성되었다
                >> json은 개발자가 파일에 정보를 저장하기 위해 만든 방식
            - index.js파일을 만들면 된다
                >> package.json파일에 "main":"index.js"라고 적혀있는데 index.js를 대표파일이라고 보는이에게 알리는거다. (지워도됨 중요하지않음)

#2.1 Installing Express
    ㄴ  nodeJS로 자바스크립트에 접근하는 2가지 방법
        1.  콘솔에 node index.js (비추)
        2.  npm을 이용하여 접근하는 방법 (강추)
            - package.json을 연다
            - "scripts":{"dev" : "node index.js"}를 작성한다
            - 콘솔에 npm run dev 
    ㄴ  서버만들기
        1.  npm을 이용하여 설치하고싶은 package의 이름을 쓴다
            - npm i express
                >> package-lock 파일과 node_modules폴더가 생성된다
                >> node_modules폴더에는 express외에도 설치하는 모든 패키지가 저장된다
                >> npm i 명령어를 하기전에 json파일은 꼭 닫고서 실행한다
        2.  모든 package.json파일의 "dependencies"는 해당 package가 동작하는데 필요한 패키지,파일들이 적혀있음
            - npm i express를 하면 express 패키지의 dependencies도 같이 다운받아진다

#2.2 Understanding Dependencies
    ㄴ  node_modules폴더와 package-lock.json을 지워도 간단히 복구할수있다.
        1.  npm i 
            - package.json의 "dependencies"를 보고 npm이 그 안의 모듈들을 다시 재설치해준다.
    ㄴ  .gitigonore 파일을 만들어서 node_modules폴더의 커밋을 무시해준다.
        1.  /node_modules

#2.3 The Tower of Babel
    ㄴ  js파일에서 express 쓰는법 
        1.  (구문법, 비추하는방법)
            const express = require("express")
            const app = express()
    ㄴ  바벨 설치하기
        1. babeljs.io
        2. Setup
        3. Node
        4. ②Installation 복사 -> 콘솔에 붙혀넣기
            >> package.json의 "devDependencies"에 @babel/core가 추가됨
            >> "devDependencies"는 개발자에게 필요한 Dependencies들
        5. bael.config.json파일 생성
        6. ④Create babel.config.json configuration file에서 JSON안에 내용을 복사 -> babel.config.json파일에 붙혀넣기
        7. ④Create babel.config.json configuration file에서 Shell안에 내용을 복사 -> 콘솔에 붙혀넣기
            >> package.json의 "devDependencies"에 @babel/preset-env가 추가됨

#2.4 Nodemon
    ㄴ  바벨 사용하기
        1. babeljs.io
        2. Setup
        3. Nodemon
        4. ②Installation 복사 -> 콘솔에 붙혀넣기
            - package.json의 "devDependencies"에 @babel/node가 추가됨
        5. "scripts"의 "dev"의 값에 "babel-node index.js"를 써줌
            - babel-node를 사용할것이라 알리고 어떤 파일을 실행할지 써준것
    ㄴ  Nodemon 사용하기
        1. Nodemon은 우리가 만든 파일이 수정되면 자동으로 재실행 해주는 패키지 
            - Nodemn 덕분에 파일 수정 후 npm run dev을 계속 입력할 필요가 없다.
        2. Nodemon 설치하기
            - babeljs.io
            - Setup
            - Nodemon
            - 콘솔에 npm i nodemon --save-dev
                >> package.json의 "devDependencies"에 nodemon이 추가됨
            - "scripts"의 "dev"의 값에 "nodemon --exec" 를 추가해준다
                >> "babel-node index.js" -> "nodemon --exec babel-node index.js"로 바꿔줌
    ㄴ  js파일에서 express 쓰는법 
        1. (최신문법, Babel이 설치되어있어야함)
            import express from "express"
            const app = express()

        */      