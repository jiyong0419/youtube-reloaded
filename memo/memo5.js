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


#5.2 Partials
    ㄴ  PUG에서 변수활용방법
        1. #{}
            - footer &copy; #{new Date.getFullYear()}.Youtube

    ㄴ  Partials 사용법
        1. views폴더안에 partials폴더를 만든다
        2. partial을 적용시킬 파일을 하나 만든다
            - footer.pug
        3. partial.pug안에 partial구문을 쓴다
            - footer.pug >>> footer &copy; #{new Date().getFullYear()} Youtube
        4. partial이 필요할 pug파일에서 partial이 들어갈 행에 partial.pug를 include 시켜준다
            - watch.pug / home.pug >>> include partials/footer.pug


#5.3 Extending Templates
    ㄴ  pug 파일들의 양식을 반복하는걸 막기위해 base.pug를 만들고 이를 다른 pug파일에 확장시켜준다
        1. views폴더안에 base.pug파일을 생성
        2. 다른 pug파일들에서 extends base.pug 작성
            - base.pug를 다른 pug파일에서 가져다쓴다.
    
    ㄴ  확장된 base.pug의 html태그들중 일부를 지정해 변경시킬 수 있다. (block기능)
        1. base.pug >>> body >>> h1 Title! 을 다른 pug파일에서 변경하고 싶으면 h1 Title! 자리에 block title라고 써준다
            - h1 Title! >>> block title
        2. 변경할 pug파일(ex home.pug)에 와서   block title 
                                                    h1 Home!    을 작성한다.
            - h1 Title!가 h1 Home!으로 바뀐다


*/
