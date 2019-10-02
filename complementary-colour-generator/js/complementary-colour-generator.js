function updateColour(picker) {
	if ((picker == null) || (picker == "") || (picker.rgb == null) || (picker.rgb[0] == null) || (picker.rgb[1] == null) || (picker.rgb[2] == null)) {
		return;
	}

	var originalcolour = picker.toHEXString().replace(/[^0-9a-f]/ig, ""),
	redval = 255,
	greenval = 255,
	blueval = 255,
	newcolour = "";

	if ((originalcolour == "") || (originalcolour.length != 6)) {
		return;
	}

	originalcolour = "#" + originalcolour;

	jQuery(".ccg .input-row .original-colour-box .original-colour").css("background", originalcolour);

	redval -= Math.round(picker.rgb[0]);
	greenval -= Math.round(picker.rgb[1]);
	blueval -= Math.round(picker.rgb[2]);

	redval = redval.toString(16).toUpperCase();
	if (redval.length == 1) {
		redval = "0" + redval;
	}

	greenval = greenval.toString(16).toUpperCase();
	if (greenval.length == 1) {
		greenval = "0" + greenval;
	}

	blueval = blueval.toString(16).toUpperCase();
	if (blueval.length == 1) {
		blueval = "0" + blueval;
	}

	newcolour = "#" + redval + greenval + blueval;

	jQuery(".ccg .output-row .complementary-value-box .complementary-value").text(newcolour);
	jQuery(".ccg .output-row .complementary-colour-box .complementary-colour").css("background", newcolour);

	jQuery(".ccg .together-row .together-box .together .together-text").css("color", originalcolour);
	jQuery(".ccg .together-row .together-box .together").css("background", newcolour);
}
