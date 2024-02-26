import express from "express"

const app = express();

let clinets =[]

app.get("/events/subscribe",(req, res =>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clinets.push(res);

    req.on("close", () =>{
   //     clinets = client.filter((clinet) => !== res);
    });
}))

app.get("/events/publish", (req,res) => {
    const newData = {data: "This is a new message"};

    clinets.forEach(client => {
        client.send(newData);
    });

    clinets = [];

    res.status(204).end();
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running", PORT ));