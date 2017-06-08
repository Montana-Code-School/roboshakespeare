const WordFrequency = require('./WordFrequency')

class WeightedWordFrequency extends WordFrequency {
	_randomNumber(){
  		const wordsInObj = Object.keys(this.frequencies)
  		const num = wordsInObj.reduce((total,word) => total + this.frequencies[word],0)
  		const rand = Math.ceil(Math.random() * num)
  		return rand
	}

	randomWord(){
	  const getWord = (total,next) => {
	    const freq = this.frequencies[next];
	    const isString = typeof total === "string";
	    const newTotal = freq >= total ? next : total - freq ;
	    return isString ? total : newTotal

	  }
	  const keys=Object.keys(this.frequencies);
	  return keys.reduce(getWord, this._randomNumber());
	}

}

module.exports = WeightedWordFrequency
