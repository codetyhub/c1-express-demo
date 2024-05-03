import "dotenv/config"
import express from 'express';
import usersRoutes from "./routes/users.js"
import "./config/db.config.js"



const app = express();
const PORT = process.env.PORT || 3000;
const API_PREFIX = "/api/v1"

app.use(express.json());

app.use(`${API_PREFIX}/users`, usersRoutes)

app.use("/" , (req, res) => {
  return res.status(200).json({message: "Welcome to Express Demo"})
})  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});