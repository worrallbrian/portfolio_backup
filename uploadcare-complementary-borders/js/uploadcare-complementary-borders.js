jQuery(document).ready(function() {
	function setBackgroundColours() {
		jQuery(".uccb .bordered-image-box .image-box .b-flexor .b-flexed .bordered-image").each(function() {
			var temp3 = jQuery(this).data("colours");

			if ((temp3 != null) && (temp3 != "")) {
				jQuery(this).css("background", "RGB(" + temp3.replace(/[^\d,]/g, "") + ")");
			}
		});
	}

	function buildBorderedImages(json_colours1) {
		if ((json_colours1 != null) && (json_colours1 != "")) {
			var colours1 = JSON.parse(json_colours1);

			if ((colours1 != null) && (colours1 != "")) {
				var img_target2 = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/-/progressive/yes/",
				row = "",
				rowA = "",
				rowB = "",
				rowA_rgb = "",
				rowB_rgb = "",
				temp2 = 0,
				i = 0,
				j = 1,
				k = 0;

				jQuery.each(colours1, function(i, v) {
					if (Object.keys(v).length == 3) {
						row = "<div class=\"row image-row bordered-image-row\">";
						row += "<div class=\"col-sm-12 bordered-image-box\">";
						row += "<div class=\"image-box\">";
						row += "<div class=\"b-flexor\">";

						rowA = "<div class=\"b-flexed primary\">";
						rowA += "<img src=\"" + img_target2 + "\" class=\"uc-image bordered-image bordered-image" + j + "A\" alt=\"Bordered Image " + j + " Primary\" data-colours=\"";

						rowB = "<div class=\"b-flexed complementary\">";
						rowB += "<img src=\"" + img_target2 + "\" class=\"uc-image bordered-image bordered-image" + j + "B\" alt=\"Bordered Image " + j + " Complementary\" data-colours=\"";

						rowA_rgb = "";
						rowB_rgb = "";

						for (k = 0; k < 3; k++) {
							if (k != 0) {
								rowA_rgb += ", ";
								rowB_rgb += ", ";
							}

							temp2 = Math.abs(parseInt(v[k]));

							if (temp2 > 255) {
								temp2 = 255;
							}

							rowA_rgb += temp2;
							rowB_rgb += (255 - temp2);
						}

						rowA += rowA_rgb + "\" />";
						rowA += "<div class=\"bordered-image-rgb\">Primary<br /><span class=\"rgb-value\">RGB(" + rowA_rgb + ")</span></div>";
						rowA += "</div>";

						rowB += rowB_rgb + "\" />";
						rowB += "<div class=\"bordered-image-rgb\">Complementary<br /><span class=\"rgb-value\">RGB(" + rowB_rgb + ")</span></div>";
						rowB += "</div>";

						row += rowA;
						row += rowB;
						row += "</div></div></div></div>";

						jQuery(".uccb").append(row);

						j++;
					}
				});

				jQuery(function() {
					setBackgroundColours();
				});
			}
		}
	}

	function showBorderedImages(data1) {
		var img_target = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/-/progressive/yes/",
		colours = {};

		if ((data1 != null) && (data1 != "")) {
			var res = JSON.parse(data1);

			if ((res != null) && (res != "")) {
				if ((res['result'] != null) && (res['result']['main_colors'] != null) && (res['result']['main_colors'] != "")) {
					var i = 0,
					j = 0,
					numcolours = 0,
					temp = null;

					for (i = 0; i < (res['result']['main_colors']).length; i++) {
						temp = res['result']['main_colors'][i];

						if ((temp != null) && (temp.length == 3)) {
							colours[numcolours] = {};

							for (j = 0; j < 3; j++) {
								colours[numcolours][j] = parseInt(temp[j]);
							}

							numcolours++;
						}
					}

					temp = null;

					if (numcolours < 4) {
						for (i = (numcolours - 1); i < 4; i++) {
							colours[numcolours] = {};

							for (j = 0; j < 3; j++) {
								colours[numcolours][j] = 0;
							}

							numcolours++;
						}
					}
				} else if ((res['error'] != null) && (res['error'] != "")) {
					alert((res['error']).replace('"', "").replace(/((<([^>]+)>)&!(<br( )?(\/)?>))/ig, ""));
					return;
				}
			}

			res = null;
		}

		var row = "<div class=\"col-sm-12 orig-image-box\">";
		row += "<div class=\"image-box\">";
		row += "<img src=\"" + img_target + "\" class=\"uc-image orig-image\" alt=\"Original Image\" />";
		row += "</div></div>";

		jQuery(".uccb .orig-image-row").empty().append(row);

		jQuery(function() {
			var json_colours = JSON.stringify(colours);

			buildBorderedImages(json_colours);
		});
	}

	function getImageColours() {
		jQuery.ajax({
			url: "ajax/getColours.ajax.php",
			type: "POST",
			cache: false,
			success: function(data) {
				showBorderedImages(data);
			}
		});
	}

	getImageColours();
});
