const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.post("/add",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num1,num2<-1000000){
        return res.status(400).json({
            status:"Error",
            message:"Underflow"
        })
    }
    if(num1,num2>1000000){
        return res.status(400).json({
            status:"Error",
            message:"Overflow"
        })
    }
    else if(isNaN(num1)|| isNaN(num2)){
        return res.status(400).json({
            status:"error",
            message:"Invalid data types"
        })
    }
    res.json({ status: "success",
    message: "the sum of given two numbers", 
   sum: num1+num2 })
})
app.post("/sub",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num1,num2<-1000000){
        return res.status(400).json({
            status:"Error",
            message:"Underflow"
        })
    }
    if(num1,num2>1000000){
        return res.status(400).json({
            status:"Error",
            message:"Overflow"
        })
    }
    else if(isNaN(num1)|| isNaN(num2)){
        return res.status(400).json({
            status:"error",
            message:"Invalid data types"
        })
    }
    res.json({ status: "success",
    message: "the difference of given two numbers", 
   sum: num1-num2 })
})
app.post("/multiply",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num1,num2<-1000000){
        return res.status(400).json({
            status:"Error",
            message:"Underflow"
        })
    }
    if(num1,num2>1000000){
        return res.status(400).json({
            status:"Error",
            message:"Overflow"
        })
    }
    else if(isNaN(num1)|| isNaN(num2)){
        return res.status(400).json({
            status:"error",
            message:"Invalid data types"
        })
    }
    res.json({ status: "success",
    message: "The productof given two numbers", 
   sum: num1*num2 })
})
app.post("/divide",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num1,num2<-1000000){
        return res.status(400).json({
            status:"Error",
            message:"Underflow"
        })
    }
    if(num1,num2>1000000){
        return res.status(400).json({
            status:"Error",
            message:"Overflow"
        })
    }
    else if(num2==0){
        return res.status(400).json({
            status:"Error",
            message:"Cannot divide by zero"
        })
    }
    else if(isNaN(num1)|| isNaN(num2)){
        return res.status(400).json({
            status:"error",
            message:"Invalid data types"
        })
    }
    res.json({ status: "success",
    message: "The divison of given two numbers", 
   sum: num1/num2 })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;