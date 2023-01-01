import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"

config()

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.json({msg: "Hello World"})
})

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
