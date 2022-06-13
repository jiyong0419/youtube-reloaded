const videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt : "2 minutes ago",
        views:59,
        id:1,
    },
    {
        title: "Second Video",
        rating: 4,
        comments: 3,
        createdAt : "5 minutes ago",
        views:1,
        id:2,
    },
    {
        title: "Third Video",
        rating: 3,
        comments: 4, 
        createdAt : "10 minutes ago",
        views:0,
        id:3,
    },
]
export const trending = (req,res) => {
    res.render("home", {pageTitle:"Home",videos:videos})
}
export const search = (req,res) => res.send("Search Video")
export const see = (req,res) => {
    const id = req.params.id
    const video = videos[id-1]
    res.render("watch",{pageTitle:`Watching ${video.title}`})
}
export const edit = (req,res) => res.render("editVideo")
export const remove = (req,res) => res.send("Remove Video")
export const upload = (req,res) => res.send("Upload Video")


