(function(text) {

	function hyphenToSpace(words) {
	    return words.replace('-', ' ');
	}

	if (!text) {
		text = {};
	}

	text.hyphenToSpace = hyphenToSpace;

})(text);