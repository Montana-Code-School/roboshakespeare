
const WordFrequency = require('./WordFrequency');

class RandomWordFrequency extends WordFrequency {

	randomWord(){
  		const words = Object.keys(this.frequencies) // create an array of words
  		const freqLength = words.length // get the length of the array (words)
  		const randNum = Math.floor(Math.random() * freqLength) // create a random number between 0 and objLength
  		const select = words[randNum] // select a random word
  		return select 
	}

}

module.exports = RandomWordFrequency;
