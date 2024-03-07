import express from 'express';

const app = express();

app.post("/githubwebhookjson", (req, res) => {
    console.log(req.body);
    res.status(204).send();
});

app.listen(8080, () => console.log('Server is running on port 8080'));