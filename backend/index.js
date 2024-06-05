const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db');
const router = require('./routes')

const app = express()



app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }))   // Increase the limit for JSON payloads (adjust the limit as needed)
app.use("/api", router)
const PORT = 3001  || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connect to DB")
        console.log(`Server is running at port: ${PORT}`)
})
})