import mongoose from "mongoose"

const UserModel = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    created_at: {
        type: String,
        default: Date.now
    }
})

const User = mongoose.model("User", UserModel)
export default User;