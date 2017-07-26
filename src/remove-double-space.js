(function(text) {

	function removeDoubleSpace(words) {
		return words.replace('  ', '');
	}

	if (!text) {
		text = {};
	}

	text.removeDoubleSpace = removeDoubleSpace;

})(text);