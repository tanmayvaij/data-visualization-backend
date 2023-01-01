import { connect, set } from "mongoose"

set('strictQuery', true)

export const connectDB = () => {

    connect(process.env.MONGO_URI as string, (err) => {
        err? console.log(err): console.log("Connected to database successfully")
    })

}
