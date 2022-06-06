const fakeUser = {
    userName:"Nicolas",
    loggedIn: false ,
}


export const trending = (req,res) => res.render("home", {pageTitle:"Home",fakeUser:fakeUser})
export const search = (req,res) => res.send("Search Video")
export const see = (req,res) => res.render("watch")
export const edit = (req,res) => res.render("editVideo")
export const remove = (req,res) => res.send("Remove Video")
export const upload = (req,res) => res.send("Upload Video")


