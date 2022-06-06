/*
#5.0 Returning HTML
    ㄴ controller에서 res.send("Home")같이 문자열을 리턴하지않고 HTML을 리턴할것이다
        1. res.send("<h1>Homepage!</h1>") >>> ""안에 html을 작성하는 방법이 있다.
        2. PUG를 이용하는 방법이있다.


#5.1 
    ㄴ  PUG는 템플릿엔진 (템플릿을 이용해서 뷰를 만드는걸 돕는다)
        1. PUG는 괄호를 생략하고 들여쓰기만 잘하면된다.

    ㄴ  PUG 설치,적용방법
        1. npm i pug
        2. 메인 js에서 app.set("view engine","pug")
            - express에게 우리의 view engine을 pug로 할것이란걸 알려줌
        3. 메인 js에서 app.set("views",process.cwd()+"/src/views")
            - PUG가 참고할 views의 경로를 YOUTUBE/src/views로 바꿔줌 (#5.2강의에서나옴)
        4. src폴더안에 views폴더를 생성
        5. views폴더안에 pug파일을 생성
            - home.pug
        6. pug파일 작성
            -   doctype html
                html(lang="ko")
                    head
                        title Youtube
                    body
                        h1 Welcome to Youtebe
                    footer &copy; 2022 Youtube
        7. controller에서 pug파일을 렌더링해준다
            - export const trnding = (req,res) => res.render("home")
*/