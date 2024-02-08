import express from 'express'

console.log(express)

const app = express();

app.get("/",(req, res)=>{
     //request, response
      res.send({message: "Hello"});
});

app.get("otherRoute",(req, res)=>{
    res.send({message: "This is the other route"})
})

app.listen(8080);