import videoModel from "../models/Video"

export const home = async(req,res) => {
        const videos = await videoModel.find({})
        return res.render("home",{ pageTitle:"Home",videos })
}   
export const search = (req,res) => res.send("Search Video")
export const watch = (req,res) => {
    const id = req.params.id
    return res.render("watch",{pageTitle:`Watching`})
}
export const getEdit = (req,res) => {
    const id = req.params.id
    return res.render("editVideo",{pageTitle:`Editing`}) 
}
export const postEdit = (req,res) => {
    const {id} = req.params
    const {title} = req.body
    return res.redirect(`/videos/${id}`)
}
export const remove = (req,res) => res.send("Remove Video")
export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload Video"})
}
export const postUpload = (req,res) => {
    const { title, description, hashtags } = req.body
    const video = new videoModel({
        title, /* === title:title */
        description,
        createdAt : Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta: {
            views:0,
            rating:0,
        },
    })
    console.log(video);
    return res.redirect("/")
}

