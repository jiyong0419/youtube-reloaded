import express from 'express';
import morgan from 'morgan';

const PORT = 4000

const morganDev = morgan("dev")
const app = express();

const logger = (req,res,next) => {
    if(req.url === "/login"){
        return res.send(`<h1>You successed login!<h1>`)
    }
    console.log(`logger Passing`);
    next()
}
const handleHome = (req,res,next) => {
    console.log(`hondleHome Passing http://localhost:${PORT}${req.url} ⏩${req.method} `);
    next()
}
const handleHome2 = (req,res) => {
    console.log(`handleHome2 Passing`);
    res.send(`<h1> handleHome2 exits request! <h1>`)
}

app.use(morganDev)
app.use(logger)
app.get("/",handleHome,handleHome2)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT,handleListening)