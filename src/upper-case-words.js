(function(text) {

	function upperCaseWords(words) {
	    var wordsArr = words.split(' ');
	    return wordsArr.map(function(word) { return word[0].toUpperCase() + word.slice(1); }).join(' ');
	}

	if (!text) {
		text = {};
	}

	text.upperCaseWords = upperCaseWords;

})(text);