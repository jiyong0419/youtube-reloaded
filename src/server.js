import express from 'express';

const PORT = 4000

const app = express();

const handleHome = (req,res,next) => {
    console.log(`hondleHome : Somebody request http://localhost:${PORT}${req.url} `);
    next()
}
const handleHome2 = (req,res) => {
    res.send(`<h1> handleHome2 exits request! <h1>`)
}

app.get("/",handleHome,handleHome2)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT,handleListening)