//Server til at vise tid
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send({ time: currentTime });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
