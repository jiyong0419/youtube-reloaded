
import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';


const morganDev = morgan("dev")
const app = express();

app.set("view engine","pug")
app.set("views",process.cwd() + "/src/views")
app.use(morganDev)
app.use("/", globalRouter)
app.use(express.urlencoded({extended:true}))
app.use("/videos", videoRouter)
app.use("/users", userRouter)

export default app