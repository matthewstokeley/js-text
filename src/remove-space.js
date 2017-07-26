(function(text) {

	function removeSpace(words) {
		return words.replace(' ', '');
	}

	if (!text) {
		text = {};
	}

	text.removeSpace = removeSpace;

})(text);