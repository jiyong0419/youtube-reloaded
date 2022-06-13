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
            
            
        
*/