import mongoose from "mongoose";


mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("DB connected successfully")
})
.catch((error) => {
    console.log("Failed to connnect the db", error)
})
