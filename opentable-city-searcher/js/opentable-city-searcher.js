/* Keep only numbers */
function digit_wash(val) {
	return (((val != null) && (val != "")) ? val.toString().replace(/[^\d]/g, "") : "");
}

/* Keep only letters, numbers, periods, commas, single quotes, spaces, and certain accented letters */
function string_wash(val) {
	return (((val != null) && (val != "")) ? val.replace(/[^a-zA-Z0-9.,' ÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜŸäëïöüÿ]/g, "") : "");
}

/* Strip tags, remove double quotes */
function name_wash(val) {
	return (((val != null) && (val != "")) ? val.replace(/(<([^>]+)>)/ig, "").replace('"', "") : "");
}

/* Format phone number into 123-4567 or 123-456-7890 */
function phone_format(val) {
	if ((val == null) || (val == "")) {
		return "N/A";
	}

	var v = digit_wash(val);

	if (v.length == 7) {
		v = v.replace(/(\d{3})(\d{4})/, "$1-$2");
	} else if (v.length == 10) {
		v = v.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	}

	return v;
}

jQuery(document).ready(function() {
	/* Show error dialog */
	function showErrorDialog() {
		jQuery(".error-dialog").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					jQuery(this).dialog("close");
				}
			}
		});
	}

	/* Gather inputs, get data from endpoint, parse data into restaurants, show pager if necessary */
	function searchOpenTable(val) {
		var rows = "<img src=\"../img/loading.gif\" class=\"loading-img\" alt=\"Loading\" />",
		target_url = "https://opentable.herokuapp.com/api/restaurants?",
		city = string_wash(jQuery(".otcs .form-row .city-box .city").val()),
		province = string_wash(jQuery(".otcs .form-row .province-box .province").val()),
		country = string_wash(jQuery(".otcs .form-row .country-box .country").val()),
		pageno = parseInt(jQuery(".otcs .result-row .pager-box .pagerButton").data("currentpage")),
		doEmpty = parseInt(val);

		if ((city == "") && ((province == "") || (province.length != 2)) && ((country == "") || (country.length != 2))) {
			jQuery(".otcs .form-row .city-box .city").val("");
			jQuery(".otcs .form-row .province-box .province").val("");
			jQuery(".otcs .form-row .country-box .country").val("");
			showErrorDialog();
			return;
		}

		if (pageno <= 0) {
			pageno = 1;
		}

		if (jQuery(".otcs .result-row .pager-box").css("display") != "none") {
			jQuery(".otcs .result-row .pager-box").css("display", "none");
		}

		if (doEmpty == 1) {
			jQuery(".otcs .result-row .result-box").empty();
		}

		jQuery(".otcs .result-row .result-box").append(rows);

		if (city != "") {
			target_url += "city=" + city;
		}

		if ((province != "") && (province.length == 2)) {
			if (city != "") {
				target_url += "&amp;";
			}
			target_url += "state=" + province;
		}

		if ((country != "") && (country.length == 2)) {
			if ((city != "") || (province != "")) {
				target_url += "&amp;";
			}
			target_url += "country=" + country;
		}

		target_url += "&page=" + pageno;

		try {
			jQuery.get(target_url, function(d) {
				var rows2 = "<span class=\"no-results\">No Results.</span>",
				i = 0,
				j = 0,
				current_page = 1,
				per_page = 25,
				total_entries = 0,
				price = 0;

				if ((d != null) && (d != "")) {
					if ((d['current_page'] != null) && (d['current_page'] != "")) {
						current_page = parseInt(d['current_page']);
					}

					if ((d['per_page'] != null) && (d['per_page'] != "")) {
						per_page = parseInt(d['per_page']);
					}

					if ((d['total_entries'] != null) && (d['total_entries'] != "")) {
						total_entries = parseInt(d['total_entries']);
					}

					if ((d['restaurants'] != null) && (d['restaurants'] != "")) {
						rows2 = "";

						for (i = 0; i < (d['restaurants']).length; i++) {
							rows2 += "<div class=\"row restaurant\" aria-label=\"Restaurant\">";

							rows2 += "<div class=\"col-sm-12 name\">";
							rows2 += "<span class=\"name-value\">";
							if ((d['restaurants'][i]['name'] != null) && (d['restaurants'][i]['name'] != "")) {
								if ((d['restaurants'][i]['id'] != null) && (d['restaurants'][i]['id'] != "")) {
									rows2 += "<a href=\"http://www.opentable.com/single.aspx?rid=" + parseInt(d['restaurants'][i]['id']) + "\" target=\"_blank\" class=\"name-anchor\">" + name_wash(d['restaurants'][i]['name']) + "</a>";
								} else {
									rows2 += name_wash(d['restaurants'][i]['name']);
								}
							} else {
								rows2 += "N/A";
							}
							rows2 += "</span></div>";

							rows2 += "<div class=\"col-sm-12 address\">";
							rows2 += "<span class=\"address-value\">";
							if ((d['restaurants'][i]['address'] != null) && (d['restaurants'][i]['address'] != "")) {
								rows2 += name_wash(d['restaurants'][i]['address']);

								if ((d['restaurants'][i]['city'] != null) && (d['restaurants'][i]['city'] != "")) {
									rows2 += ", " + name_wash(d['restaurants'][i]['city']);

									if ((d['restaurants'][i]['state'] != null) && (d['restaurants'][i]['state'] != "")) {
										rows2 += ", " + name_wash(d['restaurants'][i]['state']);

										if ((d['restaurants'][i]['country'] != null) && (d['restaurants'][i]['country'] != "")) {
											rows2 += ", " + name_wash(d['restaurants'][i]['country']);
										}
									}
								}
							} else {
								rows2 += "N/A";
							}
							rows2 += "</span></div>";

							if ((d['restaurants'][i]['phone'] != null) && (d['restaurants'][i]['phone'] != "")) {
								rows2 += "<div class=\"col-sm-12 phone\">";
								rows2 += "<span class=\"phone-value\">";
								rows2 += phone_format(d['restaurants'][i]['phone']);
								rows2 += "</span></div>";
							}

							rows2 += "<div class=\"col-xs-6 col-sm-6 price\">";
							rows2 += "<span class=\"price-value\">";
							if ((d['restaurants'][i]['price'] != null) && (d['restaurants'][i]['price'] != "")) {
								price = parseInt(d['restaurants'][i]['price']);

								if (price > 0) {
									for (j = 0; j < price; j++) {
										rows2 += "$";
									}
								}
							} else {
								rows2 += "N/A";
							}
							rows2 += "</span></div>";

							rows2 += "<div class=\"col-xs-6 col-sm-6 counter\">";
							rows2 += "<span class=\"counter-value\">" + (i + 1 + ((current_page - 1) * per_page)) + " / " + total_entries + "</span>";
							rows2 += "</div>";

							rows2 += "</div>";
						}
					}

					if ((current_page * per_page) < total_entries) {
						if (jQuery(".otcs .result-row .pager-box").css("display") != "block") {
							jQuery(".otcs .result-row .pager-box").css("display", "block");
						}
					}

					current_page++;

					jQuery(".otcs .result-row .pager-box .pagerButton").data("currentpage", ("" + current_page));
					jQuery(".otcs .result-row .pager-box .pagerButton .pageno-text").text("" + current_page);
				}

				if (jQuery(".otcs .result-row .result-box .loading-img").length > 0) {
					jQuery(".otcs .result-row .result-box .loading-img").remove();
				}

				jQuery(".otcs .result-row .result-box").append(rows2);
			});
		} catch(e) {
			if (jQuery(".otcs .result-row .result-box .loading-img").length > 0) {
				jQuery(".otcs .result-row .result-box .loading-img").remove();
			}

			jQuery(".otcs .result-row .result-box").append("<span class=\"no-results\">No Results.</span>");
		}
	}

	/* Submit button handler */
	jQuery(".otcs .form-row .submitButton-box .submitButton").click(function() {
		jQuery(".otcs .result-row .pager-box .pagerButton").data("currentpage", "1");
		jQuery(".otcs .result-row .pager-box .pagerButton .pageno-text").text("1");

		searchOpenTable(1);
	});

	/* Pager button handler */
	jQuery(".otcs .result-row .pager-box .pagerButton").click(function() {
		searchOpenTable(0);
	});
});
