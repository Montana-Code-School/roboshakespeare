
class WordFrequency {
	// Takes a string of text
	constructor(text){
		this.frequencies = this._findWords(text)
	}


	_findWords(str){
		return str.toLowerCase()
			  .split(/[\s;.-]+/) // regular expressoin for matching a pattern in a set
			  .filter(word => word.length >0) // can use .filter(word => word)
			  .map(this._fiendCleaner)
			  .reduce(this._countWords, {})
	}

	_countWords(wordObj, str){
		const hasWord = wordObj.hasOwnProperty(str)
		wordObj[str] = hasWord ? wordObj[str] + 1 : 1
		return wordObj
	}

	_fiendCleaner(str){
		return str.replace(/[^A-Za-z']+/g,"")
		          .replace(/^'/, "") //the carrot means strip any apostrophe that is
                              //at the end of a word
             	  .replace(/'$/,""); //strip any apostrophe that is at the beginning
                              // of a word
            					//.replace(/[a-z]'+/g,"");
	}

	// return all words used in the text
	// array of strings
	words(){
		return Object.keys(this.frequencies)
	}

	// frequency of a given word in the text
	// return number
	count(word){
		return this.frequencies[word]
	} 

	// a random word generated from text
	// returns: a string
	randomWord(){
	 return 'the'
	}

}

module.exports = WordFrequency