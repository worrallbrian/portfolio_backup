jQuery(document).ready(function() {
	if ((jQuery(".infinite-z .form-box .numwords").length > 0) && (jQuery(".infinite-z .form-box .activate-button").length > 0) && (jQuery(".infinite-z .stage-box .stage").length > 0)) {
		jQuery(".infinite-z .stage-box .stage").on("click", "span.ape-word", function() {
			if (jQuery(this).hasClass("slashed")) {
				jQuery(this).removeClass("slashed");
			} else {
				jQuery(this).addClass("slashed");
			}
		});

		function loadWords (wordcount) {
			if ((wordcount != null) && (wordcount != "")) {
				var wc = parseInt(wordcount);

				if ((wc < 3) || (wc > 19)) {
					wc = 3;
				}

				jQuery(".infinite-z .stage-box .stage").empty().append("<div class=\"program-loading\"></div>");
				
				if (!jQuery(".infinite-z .form-box .activate-button").hasClass("disabled")) {
					jQuery(".infinite-z .form-box .activate-button").addClass("disabled");
				}

				jQuery.ajax({
					url: "ajax/getWords.ajax.php",
					type: "POST",
					data: {
						"wordcount" : wc
					},
					cache: false,
					success: function(data) {
						var res = jQuery.parseJSON(data),
						rows = "";

						if (jQuery(".infinite-z .stage-box .stage .program-loading").length > 0) {
							jQuery(".infinite-z .stage-box .stage .program-loading").remove();
						}

						if ((data == null) || (res == null)) {
							rows = "<div class=\"no-results\">Program Error: Database query failed.</div>";
						} else if ((res['error'] != null) && (res['error'] != "")) {
							rows = "<div class=\"no-results\">Error: " + ((res['error']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "")) + "</div>";
						} 

						if (rows != "") {
							jQuery(".infinite-z .stage-box .stage").empty().append(rows);
						} else {
							var i = 0,
							rword = "",
							arrlength = 0;
							
							if ((res['words'] != null) && (res['words'].length > 0)) {
								arrlength = res['words'].length;
							
								rows += "<div class=\"results\">";

								for (i = 0; i < arrlength; i++) {
									rword = ((res['words'][i] != null) && (res['words'][i] != "")) ? (res['words'][i]).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "";
									
									if (rword != "") {
										rows += "<span class=\"ape-word\">" + rword + "</span>";
										
										if ((i + 1) < arrlength) {
											rows += " ";
										}
									}
								}

								rows += "</div>";
							}
							
							if (rows.length > 0) {
								jQuery(".infinite-z .stage-box .stage").empty().append(rows);

								if (jQuery(".infinite-z .form-box .activate-button").hasClass("disabled")) {
									jQuery(".infinite-z .form-box .activate-button").removeClass("disabled");
								}
							} else {
								rows = "<div class=\"no-results\">No results found.</div>";

								jQuery(".infinite-z .stage-box .stage").empty().append(rows);
							}
						}
					}
				});
			}
		}

		jQuery(".infinite-z .form-box .activate-button").click(function() {
			loadWords(jQuery(".infinite-z .form-box .numwords").val());
		});
	}
});