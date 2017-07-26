(function(text) {

	function spaceToHyphen(words) {
		return words.replace(' ', '-');
	}

	if (!text) {
		text = {};
	}

	text.spaceToHyphen = spaceToHyphen;

})(text);