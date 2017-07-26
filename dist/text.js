var text = {};;(function(text) {

	function camelCaseToHyphen(string) {

		string.split('');

		function formatHyphen(index) {
			string[index].toLowerCase();
			if (string[index - 1]) { string.splice(index - 1, '-'); }
		}

		for (var i = 0; i < string.length; i++) {
			if (text.isCharacterUpperCase(string[i])) { formatHyphen(i); }
		}

		return string.join(' ');	
	}

	if (!text) {
		text = {};
	}

	text.camelCaseToHyphen = camelCaseToHyphen;

})(text);;(function(text) {

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

})(text);;(function(text) {

	function hyphenToSpace(words) {
	    return words.replace('-', ' ');
	}

	if (!text) {
		text = {};
	}

	text.hyphenToSpace = hyphenToSpace;

})(text);;(function(text) {

	function isCharacterUpperCase(character) {
		return character === character.toUpperCase() ? true : false;
	}

	if (!text) {
		text = {};
	}

	text.isCharacterUpperCase = isCharacterUpperCase;

})(text);;(function(text) {

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

})(text);;(function(text) {

	function removeDoubleSpace(words) {
		return words.replace('  ', '');
	}

	if (!text) {
		text = {};
	}

	text.removeDoubleSpace = removeDoubleSpace;

})(text);;(function(text) {

	function removeSpace(words) {
		return words.replace(' ', '');
	}

	if (!text) {
		text = {};
	}

	text.removeSpace = removeSpace;

})(text);;(function(text) {

	function spaceToHyphen(words) {
		return words.replace(' ', '-');
	}

	if (!text) {
		text = {};
	}

	text.spaceToHyphen = spaceToHyphen;

})(text);;(function(text) {

	function upperCaseWords(words) {
	    var wordsArr = words.split(' ');
	    return wordsArr.map(function(word) { return word[0].toUpperCase() + word.slice(1); }).join(' ');
	}

	if (!text) {
		text = {};
	}

	text.upperCaseWords = upperCaseWords;

})(text);