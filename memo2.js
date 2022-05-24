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
        1. 콘솔에 node index.js (비추)
        2. npm을 이용하여 접근하는 방법 (강추)
            - package.json을 연다
            - "scripts":{"dev" : "node index.js"}를 작성한다
            - 콘솔에 npm run dev 
    ㄴ  서버만들기
        1. npm을 이용하여 설치하고싶은 package의 이름을 쓴다
            - npm i express
                >> package-lock 파일과 node_modules폴더가 생성된다
                >> node_modules폴더에는 express외에도 설치하는 모든 패키지가 저장된다
                >> npm i 명령어를 하기전에 json파일은 꼭 닫고서 실행한다
        2. 모든 package.json파일의 "dependencies"는 해당 package가 동작하는데 필요한 패키지,파일들이 적혀있음
                >> npm i express를 하면 express 패키지의 dependencies도 같이 다운받아진다