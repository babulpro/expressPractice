const  express = require("express")
const router = express.Router()

router.get("/all",(req,res)=>{
    res.end('I am all students')
})
router.post("/add",(req,res)=>{
    res.end('I am add student')
})

module.exports = router;