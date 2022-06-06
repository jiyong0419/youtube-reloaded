export const trending = (req,res) => {
    const videos = [1,2,3,4,5,6,7,8,9,10]
    res.render("home", {pageTitle:"Home",videos:videos})
}
export const search = (req,res) => res.send("Search Video")
export const see = (req,res) => res.render("watch")
export const edit = (req,res) => res.render("editVideo")
export const remove = (req,res) => res.send("Remove Video")
export const upload = (req,res) => res.send("Upload Video")


