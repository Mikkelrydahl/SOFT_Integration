import express from "express"
const app = express();

app.get("/synchronize-time", (req, res) =>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(()=> sendTimeToClient(res),1000);
});

function sendTimeToClient(res){
    const time = new Date().toISOString();
    res.write('date:' )
}