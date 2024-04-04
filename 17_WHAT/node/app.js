import express from "express"
const app = express();

//allows CORS from all requests from all origins
import cors from "cors"
app.use(cors());

//allows cors måde 2
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.get("/timestamp", (req, res) => {
    res.send({time: new Date()    })
})

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Sever "))