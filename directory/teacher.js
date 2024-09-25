
const express = require("express")
const router1= express.Router()

router1.get("/all",(req,res)=>{
    res.end("i am all student")
})

router1.post("/add",(req,res)=>{
    res.end("i am  add Student")
})

router1.put("/update",(req,res)=>{
    res.end("i am  update Student")
})

 module.exports = router1;
