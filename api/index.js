import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
import multer from "multer"



const app = express()

app.use(express.json())
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/upload')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const upload =multer({storage})
app.post('/upload', upload.single('file'), function (req,res){
    const file = req.file
    res.status(200).json(file.filename)
})
app.use("/posts", postRoutes)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)

const PORT = 8800
app.listen(process.env.PORT || PORT  , ()=>{
    console.log(`server running on ${PORT}`)
})