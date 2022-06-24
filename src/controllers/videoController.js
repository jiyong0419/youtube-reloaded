import videoModel from "../models/Video"

export const home = (req,res) => {
    videoModel.find({}, (error,videos)=>{})
    res.render("home", {pageTitle:"Home"})
}
export const search = (req,res) => res.send("Search Video")
export const watch = (req,res) => {
    const id = req.params.id
    res.render("watch",{pageTitle:`Watching`})
}
export const getEdit = (req,res) => {
    const id = req.params.id
    res.render("editVideo",{pageTitle:`Editing`}) 
}
export const postEdit = (req,res) => {
    const {id} = req.params
    const {title} = req.body
    res.redirect(`/videos/${id}`)
}
export const remove = (req,res) => res.send("Remove Video")
export const upload = (req,res) => res.send("Upload Video")
export const getUpload = (req,res) => {
    res.render("upload",{pageTitle:"Upload Video"})
}
export const postUpload = (req,res) => {
    res.redirect("/")
}

