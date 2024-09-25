const express = require("express")
const  router1 = require("./directory/teacher.js")
const router = require("./directory/students.js")
const path = require("path")

const middlware=(req,_res,next)=>{
    req.name="babul";
    console.log('i am middleware')
    next()
}
const app = express()

app.use(middlware)
app.use("/teachers",router1)
app.use("/students",router)
app.use(express.static("./public"))


app.get("/",(req,res)=>{
    // res.json({msg:"app is ready"})?
    res.sendFile(path.join(process.cwd(),"./public/index.html"))
    res.end()
})

app.listen(3000,()=>{
    console.log("app is running on  port no 3000")
})