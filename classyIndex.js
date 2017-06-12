const fs = require('fs');
const WordFrequency = require('./WordFrequency');
const RandomWordFrequency = require('./RandomWordFrequency')
const WeightedWordFrequency = require('./WeightedWordFrequency')
const MysteryWordFrequency = require('./MysteryWordFrequency')
const range = (n) => [...Array(n).keys()]

const processFile = (err, stream) => {
	if (err){
		throw err;
	}
	const completeText = stream.toString();
	const classes = [WordFrequency, RandomWordFrequency, WeightedWordFrequency, MysteryWordFrequency]
	classes.map(WfClass =>{
		const janerator = new WfClass(completeText);
		const randWords = range(100).map((x) => janerator.randomWord(x))
		console.log(randWords.join(' '));
		console.log('\n')
	})

}

fs.readFile( __dirname + '/shakespeare.txt', processFile);
