(function(text) {

	function isCharacterUpperCase(character) {
		return character === character.toUpperCase() ? true : false;
	}

	if (!text) {
		text = {};
	}

	text.isCharacterUpperCase = isCharacterUpperCase;

})(text);