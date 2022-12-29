import express from "express"

const app = express()

app.use(express.json())
 app.get("/", (req,res)=> {
    res.json("hello this the backend" )
 })
app.listen(8800, ()=>{
    console.log("connected! to backend")
})