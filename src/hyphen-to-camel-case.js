(function(text) {

	function hyphenToCamelCase(word) {
		var wordsArr = word.split('-');
		return wordsArr.map(function(word, index) {
			if (index > 0) {
				return text.upperCaseWords(word);
			}
			return word;
		}).join('');
	}

	if (!text) {
		text = {};
	}

	text.hyphenToCamelCase = hyphenToCamelCase;

})(text);