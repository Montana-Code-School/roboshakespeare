/*
read in a text file and produce an object listing all the words with corresponding count of repetitions

*/

const fs = require('fs');


// purpose: throw an error if one occurs. Otherwise will run later code.
// parameters: err: any error caught by compiler. data: data stream from
//            the text document
// produce: nothing.
// preconditions: a .txt document is required, along with an fs module.
// postconditions: logs words with corresponding counts of the words correctly
//                  tabbed to the console.
//                  Logs total number of words to the console
const processFile = (err, data) => {
  if(err) {
    throw err;
  }

  //console.log(youFiend(data.toString()))
  //console.log(findWords(data.toString()))
  const wordFrequency = findWords(data.toString())

// purpose: generate a list of words and objects with corresponding counts
//        sort the list and print out the list
// parameters: sortfunc: a and b to organize and sort the list from high to low
//          forEach func: word print out word and word frequency
// produce: number to compare
// preconditions: needs an object with number values
// postconditions: N/A
  // //Object.keys(wordFrequency)
  // 		.sort((a, b) => wordFrequency[a]-wordFrequency[b])
  // 		.forEach(word => {
  // 			if(word.length <= 7){
  // 				console.log(word+"\t\t\t"+wordFrequency[word])
  // 			} else if (word.length > 7 && word.length < 16){
  // 				console.log(word+"\t\t"+wordFrequency[word])
  // 			} else {
  // 				console.log(word+"\t"+wordFrequency[word])
  // 			}
  // 		})
  // //console.log("total number of words: ", Object.keys(wordFrequency).reduce((word,next) => word+wordFrequency[next],0))
  console.log(randomWord(wordFrequency))
  //console.log(listRandomWords(wordFrequency, 100).join(" "))
  console.log(listWeightedWords(wordFrequency, 100).join(" "))
}



fs.readFile( __dirname + '/austen.txt', processFile);

console.log('Has the file been read yet')
// purpose: replacing everything other than letters with an empty string
//          replacing any apostrophe that is before or after a word with an
//          empty string
//parameters: requires a string, defined as str
//produces: the string stripped of special characters
//preconditions: none
//postconditions: none
const fiendCleaner = (str) => {
	return str.replace(/[^A-Za-z']+/g,"")
		        .replace(/^'/, "") //the carrot means strip any apostrophe that is
                              //at the end of a word
            .replace(/'$/,""); //strip any apostrophe that is at the beginning
                              // of a word
            //.replace(/[a-z]'+/g,"");


}
// no g no + : 'fiend-!!!!ahhH!!!!'
// g    no + : 'fiend-----ahhH----'
// no g    + : 'fiend-ahhH!!!!'
// g       + : 'fiend-ahhH-'

//purpose: count up the number of repetitions for each word
//parameters: total is the current running total, next is the next word in the array
//produces: Returns running tally of the word "fiend"
//preconditions: none
//postconditions: none
const fiendCount = (total, next) => {
	const count = next === "fiend"  ? 1 : 0
	return count + total
}
//purpose: convert a string into an array, clean it, and count the repetitions
//parameters: variable str which is a string
//produces: a total count of the repetitions of the word "fiend"
//preconditions: none, however it needs fiendCleaner and fiendCount defined
//postconditions: none
const youFiend = (str) => {
	return str.toLowerCase()
			  .split(/\s+/)
			  .map(fiendCleaner)
			  .reduce(fiendCount, 0)

}
//purpose: Generate an object, with words and the corresponding counts of repetitions
//parameters: wordObj is our object that lists the words and their counts
//            str should be a single word from an object of words
//produces: an object of words with the corresponding counts
//preconditions: none
//postconditions: none

const countWords = (wordObj, str) => {
	const hasWord = wordObj.hasOwnProperty(str)
	wordObj[str] = hasWord ? wordObj[str] + 1 : 1
	return wordObj
}

//purpose: take a string, put it into an array, seperated by white space and listed
//           special characters
//parameters: the string
//produces: an array that has been cleaned and filterd of special characters
//preconditions: none, define fiendCleaner and countWords
//postconditions: none

const findWords = (str) => {
	return str.toLowerCase()
			  .split(/[\s;.-]+/) // regular expressoin for matching a pattern in a set
			  .filter(word => word.length >0) // can use .filter(word => word)
			  .map(fiendCleaner)
			  .reduce(countWords, {})
}
//Purpose: To generate a random word from an object with words as keys, and values are numbers
//Parameters: An object 
//Produces: A random word of type String
//Preconditions: None
//Postconditions: None
const randomWord = (obj) => {
  const words = Object.keys(obj) // create an array of words
  const objLength = words.length // get the length of the array (words)
  const randNum = Math.floor(Math.random() * objLength) // create a random number between 0 and objLength
  const select = words[randNum] // select a random word
  return select 
}
//Purpose: Take a number (n) and generate a list of (n) random words in a array
//Parameters: Object (where the keys are words and the values are numbers), and a number
//Produce: A new array of random words
//Preconditions: None. But it does use randomWord and wordFrequency
//Postconditions: None.
const listRandomWords = (obj, n) =>{
  const wordz = [...Array(n).keys()] // create an array of length n
  const list = wordz.map(()=>randomWord(obj))
  return list;
}



// purpose: To get a number between one and the number of words. 
// Parameter: A frequency object that has words as keys and counts as values
// produces: A number between 1 and the total number of words
// Preconditions: none
// Postconditions: none 
const randomNumber = (freqObj) => {
  const wordsInObj = Object.keys(freqObj)
  const num = wordsInObj.reduce((total,word) => total + freqObj[word],0)
  const rand = Math.ceil(Math.random() * num)
  return rand
}

const listWeightedWords = (obj, n) => {
  const words = [...Array(n).keys()]
  const list = words.map(()=>getWeightedWord(obj, randomNumber(obj)))
  return list;
}

const getWeightedWord =(obj, randomNumber)=> {
  const getWord = (total,next) => {
    const freq = obj[next];
    const isString = typeof total === "string";
    const newTotal = freq >= total ? next : total - freq ;
    return isString ? total : newTotal

  }
  const keys=Object.keys(obj);
  return keys.reduce(getWord, randomNumber);
}











