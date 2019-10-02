/* Keep only integers */
function int_wash(val) {
	return (((val != null) && (val != "")) ? parseInt(val) : 0);
}

/* Keep only letters, numbers, commas, slashes, and spaces */
function string_wash(val) {
	return (((val != null) && (val != "")) ? val.replace(/[^a-zA-Z0-9,\/ ]/g, "") : "");
}

/* Compute all factors of a number */
function getAllFactors(val) {
	if ((val == null) || (val == "")) {
		return [];
	}

	var num = int_wash(val),
	factors = [],
	i = 1,
	j = Math.floor(num / 2);

	for (i = 1; i <= j; i++) {
		if ((num % i) == 0) {
			factors.push(i);
		}
	}

	factors.push(num);

	return factors;
}

/* Generically collect all common factors from shorter array, bigger array */
function computeCommonFactors(f1, f2, len) {
	if ((f1 == null) || (f1 == "") || (f2 == null) || (f2 == "") || (len == null) || (len == "")) {
		return [];
	}

	var cf = [],
	j = int_wash(len),
	i = 0,
	temp = 0;

	for (i = 0; i < j; i++) {
		if ((f1[i] != null) && (f1[i] != "")) {
			temp = int_wash(f1[i]);

			if (jQuery.inArray(temp, f2) !== -1) {
				cf.push("" + temp);
			}
		}
	}

	return cf;
}

/* Disable / Enable Compute button, toggle betweeen Spinner and Results */
function toggleSpinner(doIt) {
	if (int_wash(doIt) == 1) {
		if (!jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").hasClass("disabled")) {
			jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").addClass("disabled")
		}

		if (jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .spinner-box").css("display") != "block") {
			jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .spinner-box").css("display", "block");
		}

		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .result-box-row").each(function() {
			if (jQuery(this).css("display") != "none") {
				jQuery(this).css("display", "none");
			}
		});
	} else {
		if (jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").hasClass("disabled")) {
			jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").removeClass("disabled")
		}

		if (jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .spinner-box").css("display") != "none") {
			jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .spinner-box").css("display", "none");
		}

		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .result-box-row").each(function() {
			if (jQuery(this).css("display") != "block") {
				jQuery(this).css("display", "block");
			}
		});
	}
}

jQuery(document).ready(function() {
	/* Collect inputs, calculate factors, show results */
	function doComputation() {
		var input1 = int_wash(jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .input1-box .input1").val()),
		input2 = int_wash(jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .input2-box .input2").val()),
		allfactors1 = [],
		allfactors2 = [],
		commonfactors = [],
		gcf = "1",
		len1 = 1,
		len2 = 1;

		if (input1 < 0) {
			input1 = 0;
		}

		if (input1 > 1000000) {
			input1 = 1000000;
		}

		if (input2 < 0) {
			input2 = 0;
		}

		if (input2 > 1000000) {
			input2 = 1000000;
		}

		if ((input1 == 1) && (input2 == 1)) {
			allfactors1.push("1");
			allfactors2.push("1");
			commonfactors.push("1");
		} else {
			if (input1 != 0) {
				allfactors1 = getAllFactors(input1);
				len1 = ((allfactors1 != null) ? allfactors1.length : 0);
			} else {
				allfactors1.push("N/A");
			}

			if (input2 != 0) {
				allfactors2 = ((input1 != input2) ? getAllFactors(input2) : allfactors1);
				len2 = ((allfactors2 != null) ? allfactors2.length : 0);
			} else {
				allfactors2.push("N/A");
			}

			if ((input1 != 0) && (input2 != 0)) {
				commonfactors = ((len1 <= len2) ? computeCommonFactors(allfactors1, allfactors2, len1) : computeCommonFactors(allfactors2, allfactors1, len2));

				if (commonfactors != null) {
					len1 = commonfactors.length;

					if (len1 > 0) {
						gcf = "" + string_wash(commonfactors[(len1 - 1)]);
					} else {
						gcf = "N/A";
					}
				} else {
					gcf = "N/A";
				}
			} else {
				commonfactors.push("N/A");
				gcf = "N/A";
			}
		}

		toggleSpinner(0);

		jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .input1-box .input1").val(input1);
		jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .input2-box .input2").val(input2);

		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .input1-factors-box .input1-factors").text("" + string_wash(allfactors1.join(", ")));
		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .input2-factors-box .input2-factors").text("" + string_wash(allfactors2.join(", ")));
		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .common-factors-box .common-factors").text("" + string_wash(commonfactors.join(", ")));
		jQuery(".factor-solver .result-fieldset .result-box .result-box-inner .gcf-box .gcf").text("" + gcf);
	}

	/* Show spinner, wait 2 seconds before doing computation */
	function computeFactors() {
		if (jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").hasClass("disabled")) {
			return;
		}

		toggleSpinner(1);

		setTimeout(function() {
			doComputation();
		}, 2000);
	}

	/* Compute button handler */
	jQuery(".factor-solver .fs-form .fs-fieldset .fs-form-box .fs-form-box-inner .computeButton-box .computeButton").click(function() {
		computeFactors();
	});

	/* Activate foundation components */
	jQuery(document).foundation();
});
