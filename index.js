const fs = require('fs');


const processFile = (err, data) => {
  if(err) {
    throw err; 
  }
  //console.log(youFiend(data.toString()))
  //console.log(findWords(data.toString()))
  const wordFrequency = findWords(data.toString())
  Object.keys(wordFrequency)
  		.sort((a, b) => wordFrequency[b]-wordFrequency[a])
  		.forEach(word => console.log(word+"\t"+wordFrequency[word]))
}


fs.readFile( __dirname + '/shakespeare.txt', processFile);

console.log('Has the file been read yet')

const fiendCleaner = (str) => {
	return str.replace(/[^A-Za-z]+/g, "")
}
// no g no + : 'fiend-!!!!ahhH!!!!'
// g    no + : 'fiend-----ahhH----'
// no g    + : 'fiend-ahhH!!!!'
// g       + : 'fiend-ahhH-'

const fiendCount = (total, next) => {
	const count = next === "fiend"  ? 1 : 0
	return count + total
}

const youFiend = (str) => {
	return str.toLowerCase()
			  .split(" ")
			  .map(fiendCleaner)
			  .reduce(fiendCount, 0)

}

const romeo = 'Romeo, Romeo wherefore art thou Romeo?'
console.log('our string', youFiend(romeo))



const countWords = (wordObj, str) => {
	const hasWord = wordObj.hasOwnProperty(str)
	wordObj[str] = hasWord ? wordObj[str] + 1 : 1
	return wordObj
}

const findWords = (str) => {
	return str.toLowerCase()
			  .split(" ")
			  .map(fiendCleaner)
			  .reduce(countWords, {})
}

