import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8800, ()=>{
    console.log("connected! to backend")
})