import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from 'helmet'
import connectDB from "./config/connectDB.js"
import userRouter from './route/user.route.js'

const app = express()
// app.use(cors({
//     credentials: true,
//     origin : process.env.FRONTEND_URL
// }))
const allowedOrigin = "http://localhost:5173/"
// app.use(cors({
//     origin : allowedOrigin,
//     method : ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials : true
// }))
app.use(cors({
    origin: allowedOrigin, // Set the allowed origin (no wildcards here)
    credentials: true, // Allow credentials like cookies or HTTP authentication
  }));

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = 8080 || process.env.PORT

app.get('/',(request, response)=>{
    //server to client
    response.json({
        message: "Server is runnning " + PORT
    })
})

app.use('/api/user',userRouter)

connectDB()

app.listen(PORT, ()=>{
    console.log("Server is running", PORT)
})