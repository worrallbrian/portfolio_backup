var delim_regex = /^\/\/(.+)(\r)?((\n)|(\\n)).+/ig,
delim_regex_2 = /^\/\/(.+)(\r)?((\n)|(\\n))/ig,
delim_regex_3 = /((\n)|(\\n)|(\r))/ig,
ere_regex = /[.*+?^${}()|[\]\\]/g;

function escapeRegExp(string) {
	return string.replace(ere_regex, "\\$&");
}

function Add(numbers) {
	if ((numbers == null) || (numbers == "")) {
		return(0);
	}

	var total = 0,
	i = 0,
	hasError = 0,
	temp = "",
	delim = ",",
	error_msg = [],
	parts = null;

	if (numbers.match(delim_regex)) {
		delim = escapeRegExp(numbers.replace(delim_regex, "$1"));
		parts = numbers.replace(delim_regex_2, "").split(new RegExp("[" + delim.replace('"', '\"') + "]", "g"));
	} else {
		parts = numbers.split(delim);
	}

	if (parts != null) {
		for (i = 0; i < parts.length; i++) {
			if ((parts[i] != null) && (parts[i] != "")) {
				temp = jQuery.trim((parts[i]).replace(delim_regex_3, ""));

				if (!isNaN(temp)) {
					temp = parseFloat(temp);

					if (temp >= 0) {
						if (temp <= 1000) {
							total += temp;
						}
					} else {
						hasError = 1;
						error_msg.push(temp);
					}
				}
			}
		}
	}

	if (hasError == 0) {
		return(((total.toString().indexOf(".") != -1) ? Math.round(total) : parseInt(total)));
	} else {
		temp = "Negatives not allowed: ";
		for (i = 0; i < error_msg.length; i++) {
			if (i != 0) {
				temp += ", ";
			}

			temp += error_msg[i];
		}

		return(temp);
	}
}

jQuery(document).ready(function() {
	jQuery(".sevenshifts .test9-row .test-submit-box .submit-button").click(function() {
		var output = "",
		val = jQuery(".sevenshifts .test9-row .test-input-box .test-input").val();

		if ((val != null) && (val != "")) {
			output = Add(val);
		} else {
			output = "--";
		}

		jQuery(".sevenshifts .test9-row .test9-result").text(output);
	});
});
