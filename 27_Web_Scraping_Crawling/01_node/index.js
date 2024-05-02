import fs from "fs"

//https://https://www.proshop.dk/Baerbar-computer
//const response = await fetch ("https://www.proshop.dk/Baerbar-computer")
//const result = await response.text();
//fs.writeFileSync("index.html", result)

const htmlPageString = fs.readFileSync("index.html").toString();