module.exports = function initOptions(options, defaults) {
	options || (options = {});

	if (defaults) {
		for (var i in defaults) {
			if (typeof options[i] === 'undefined') {
				options[i] = defaults[i];
			}
		}
	}

	return options;
};

