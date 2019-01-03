(function(text) {

	function removeTwoSpaces(words) {
		return words.replace('  ', '');
	}

	text.removeTwoSpaces = removeTwoSpaces;

})(text);
