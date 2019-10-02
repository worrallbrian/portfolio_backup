jQuery(document).ready(function() {
	/* Check needed elements exist */
	if ((jQuery(".flickr-imager").length > 0) && (jQuery(".flickr-pager").length > 0)) {
		function loadFlickrPics(perpage, pageno, firstrun) {
		    if ((perpage != null) && (perpage != "") && (pageno != null) && (pageno != "") && (firstrun != null)) {
				var pp = parseInt(perpage),
				pn = parseInt(pageno),
				fr = parseInt(firstrun);

				/* Insert and show loading spinner when appropriate */
				if (fr != 1) {
					jQuery(".flickr-imager").append("<div class=\"flickr-loading\"></div>");
				}

				/* Hide pager */
				if (jQuery(".flickr-pager").css("display") != "none") {
					jQuery(".flickr-pager").css("display", "none");
				}

				jQuery.ajax({
					url: "ajax/getFlickr.ajax.php",
					type: "POST",
					data: {
						"perpage" : pp,
						"pageno" : pn
					},
					cache: false,
					success: function(data) {
						var res = jQuery.parseJSON(data),
						rows = "";

						/* Remove loading spinner */
						if (jQuery(".flickr-imager .flickr-loading").length > 0) {
							jQuery(".flickr-imager .flickr-loading").remove();
						}

						if ((data == null) || (res == null)) {
							rows = "<div class=\"no-results\">Program Error: Flickr account pull failed.</div>";
						} else if ((res['error'] != null) && (res['error'] != "")) {
							rows = "<div class=\"no-results\">Flickr Error: " + ((res['error']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "")) + "</div>";
						} 

						if (rows != "") {
							jQuery(".flickr-imager").append(rows);
						} else {
							/* No errors */

							var i = 0,
							id = "",
							farm = "",
							serveid = "",
							secret = "",
							title = "",
							imgsrc = "",
							total = 0,
							imagediff = 0,
							islastpage = 0,
							nextpage = pn + 1;

							/* Check if photos exist */
							if ((res['photos'] != null) && (res['photos'].length > 0)) {
								/* Total count of photos for user */
								if ((res['total'] != null) && (res['total'] != "")) {
									total = parseInt(res['total']);
								}

								/* Parse photos */
								for (i = 0; i < res['photos'].length; i++) {
									id = ((res['photos'][i]['id'] != null) && (res['photos'][i]['id'] != "")) ? (res['photos'][i]['id']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "";
									farm = ((res['photos'][i]['farm'] != null) && (res['photos'][i]['farm'] != "")) ? (res['photos'][i]['farm']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "";
									serveid = ((res['photos'][i]['serveid'] != null) && (res['photos'][i]['serveid'] != "")) ? (res['photos'][i]['serveid']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "";
									secret = ((res['photos'][i]['secret'] != null) && (res['photos'][i]['secret'] != "")) ? (res['photos'][i]['secret']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "";
									title = ((res['photos'][i]['title'] != null) && (res['photos'][i]['title'] != "")) ? (res['photos'][i]['title']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";

									if ((id != "") && (farm != "") && (serveid != "") && (secret != "")) {
										imgsrc = "https://farm" + farm + ".staticflickr.com/" + serveid + "/" + id + "_" + secret + ".jpg";

										rows += "<div class=\"nasa-box\">";
										rows += "<div class=\"nasa-image-box\">";
										rows += "<img class=\"nasa-image\" src=\"" + imgsrc + "\" alt=\"NASA image " + id + "\" />";
										rows += "</div>";
										rows += "<div class=\"nasa-title\">";
										rows += "<a class=\"title-anchor\" href=\"https://www.flickr.com/photos/24662369@N07/" + id + "\" target=\"_blank\">" + title + "</a>";
										rows += "</div>";

										if (total > 0) {
											imagediff = (i + 1) + ((pn - 1) * pp);

											rows += "<div class=\"image-counter\">" + imagediff + " / " + total + "</div>";

											if (imagediff >= total) {
												islastpage = 1;
											}
										}

										rows += "</div>";
									}
								}
							}

							if (rows.length > 0) {
								/* Add content */
								jQuery(".flickr-imager").append(rows);

								if (islastpage == 0) {
									/* Update pager data, pager text */
									jQuery(".flickr-pager").data("pageno", nextpage);
									jQuery(".flickr-pager .flickr-pager-text .pageno-text").text("" + nextpage);

									/* Show pager */
									jQuery(".flickr-pager").css("display", "flex");
								}
							} else if (fr == 1) {
								/* No results, first run */
								rows = "<div class=\"no-results\">No results found.</div>";

								jQuery(".flickr-imager").append(rows);
							}
						}
					}
				});
			}
		}

		/* Pager on-click */
		jQuery(".flickr-pager").click(function() {
			loadFlickrPics(jQuery(".flickr-pager").data("perpage"), jQuery(".flickr-pager").data("pageno"), 0);
		});

		/* Initial load */
		loadFlickrPics(jQuery(".flickr-pager").data("perpage"), jQuery(".flickr-pager").data("pageno"), 1);
	}
});
