const fs = require('fs');


const processFile = (err, data) => {
  if(err) {
    throw err; 
  }
  console.log(youFiend(data.toString().toLowerCase()))
}


fs.readFile( __dirname + '/shakespeare.txt', processFile);

console.log('Has the file been read yet')

const fiendCleaner = (str) => {
	return str.replace(/[^A-Za-z]+/g, "")
}

const fiendCount = (total, next) => {
	const count = next === "romeo"  ? 1 : 0
	return count + total
}

const youFiend = (str) => {
	const arrayShakes = str.split(" ").map(fiendCleaner)
	return arrayShakes.reduce(fiendCount, 0)
}



