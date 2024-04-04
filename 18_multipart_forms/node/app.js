import express  from "express";
const app = express();

app.use(express.urlencoded({extended: false}));

app.post("/form", (req, res) =>{
    res.send(req.body);
})

const PORT = process.env.PORT ?? 8080;
app.listen(PORT,() => console.log("Sever is running", PORT));