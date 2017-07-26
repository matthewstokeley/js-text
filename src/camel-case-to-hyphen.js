(function(text) {

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

})(text);