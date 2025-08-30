import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import {route} from "./routes/routes";
const app = express()
dotenv.config()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(route)
app.get("/", (req, res) => {
  res.send("Welcome to library management system");
});

app.listen(port,()=>{
    console.log(`App is currently running on port ${port}`)
})
export default app;