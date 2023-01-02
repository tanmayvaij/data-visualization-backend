import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"
import cors from "cors"


config()


const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())


import DataRouter from "./routes/Data"


app.use("/api/data/", DataRouter)


const start = () => {

    try {

        connectDB()

        app.listen(PORT, () => {
            console.log("Server started at port 5000")
        })      
          
    }

    catch (err) {
        console.log(err)
    }

}

start()
