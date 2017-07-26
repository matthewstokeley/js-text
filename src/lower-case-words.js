(function(text) {

	function lowerCaseWords(words) {
		var wordsArr = words.split(' ');
		return wordsArr.map(function(word) {
			return word[0].toLowerCase() + word.slice(1);
		}.bind(this)).join(' ');
	}

	if (!text) {
		text = {};
	}

	text.lowerCaseWords = lowerCaseWords;

})(text);