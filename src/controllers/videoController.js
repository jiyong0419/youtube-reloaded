import videoModel from "../models/Video"

export const home = async(req,res) => {
    try{
        console.log("start");
        const videos = await videoModel.find({})
        console.log("finish");
        console.log(videos);
        return res.render("home",{ pageTitle:"Home",videos })
    } catch(error) {
        return res.render("server-error",error)
    }
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
export const upload = (req,res) => res.send("Upload Video")
export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload Video"})
}
export const postUpload = (req,res) => {
    return res.redirect("/")
}

