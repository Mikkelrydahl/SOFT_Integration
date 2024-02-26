console.log(new Date())

console.log(Date())

console.log(Date.now())

// 150 8601

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate)

//const