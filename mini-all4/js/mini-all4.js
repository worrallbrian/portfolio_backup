jQuery(document).ready(function() {
	function lazyLoadImages() {
		if (jQuery(".mini-all4 .video-box .video-image-box .video-image-con").length > 0) {
			jQuery(".mini-all4 .video-box .video-image-box .video-image-con").empty().append("<img src=\"img/car-1.png\" class=\"video-image\" />");
		}

		if (jQuery(".mini-all4 .featured-box .feature .img-con-1").length > 0) {
			jQuery(".mini-all4 .featured-box .feature .img-con-1").empty().append("<img src=\"img/car-2.png\" class=\"car-img\" alt=\"MINI COUNTRYMAN ALL4\" />");
		}

		if (jQuery(".mini-all4 .featured-box .feature .img-con-2").length > 0) {
			jQuery(".mini-all4 .featured-box .feature .img-con-2").empty().append("<img src=\"img/car-3.png\" class=\"car-img\" alt=\"MINI CLUBMAN ALL4\" />");
		}
	}

	function getForSale() {
		/* Get cars for sale from json */
		jQuery.getJSON("js/test.json", function(data) {
			if ((data != null) && (data.length > 0)) {
				var i = 0,
				drivetrain = "",
				exterior = "",
				interior = "",
				kilometres = "",
				modelname = "",
				photosrc = "",
				price = "",
				retailer = "",
				transmission = "",
				vin = "",
				rows = "";

				/* Parse json object */
				for (i = 0; i < data.length; i++) {
					modelname = ((data[i]['Name'] != null) && (data[i]['Name'] != "")) ? (data[i]['Name']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					price = ((data[i]['Price'] != null) && (data[i]['Price'] != "")) ? (data[i]['Price']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					retailer = ((data[i]['Retailer'] != null) && (data[i]['Retailer'] != "")) ? (data[i]['Retailer']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					kilometres = ((data[i]['Kilometres'] != null) && (data[i]['Kilometres'] != "")) ? (data[i]['Kilometres']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					transmission = ((data[i]['Transmission'] != null) && (data[i]['Transmission'] != "")) ? (data[i]['Transmission']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					exterior = ((data[i]['Exterior'] != null) && (data[i]['Exterior'] != "")) ? (data[i]['Exterior']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					interior = ((data[i]['Interior'] != null) && (data[i]['Interior'] != "")) ? (data[i]['Interior']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					vin = ((data[i]['VIN'] != null) && (data[i]['VIN'] != "")) ? (data[i]['VIN']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					drivetrain = ((data[i]['DriveTrain'] != null) && (data[i]['DriveTrain'] != "")) ? (data[i]['DriveTrain']).replace(/"/g, "").replace(/(<([^>]+)>)/ig, "") : "N/A";
					photosrc = ((data[i]['Photo'] != null) && (data[i]['Photo'] != "")) ? (data[i]['Photo']).replace(/"|\.\./g, "").replace(/(<([^>]+)>)/ig, "") : "";

					/* Trim folder, file extension */
					if (photosrc.length > 8) {
						photosrc = photosrc.substring(3, photosrc.length);
						photosrc = photosrc.substring(0, (photosrc.length - 4));
					}

					rows += "<div class=\"col-sm-6 forsale\">";

					/* Split model name with a breakline */
					rows += "<div class=\"model-name\">" + modelname.substring(0, 16) + "<br />" + modelname.substring(17, modelname.length) + "</div>";

					rows += "<div class=\"price\">" + price + "</div>";

					rows += "<div class=\"car-img-box\">";
					if (photosrc != "") {
						rows += "<img src=\"img/" + photosrc + ".jpg\" class=\"car-img\" alt=\"" + modelname + "\" onerror=\"javascript:this.onerror='';this.src='img/unknown.png';\" />";
					} else {
						rows += "<img src=\"img/unknown.png\" class=\"car-img\" alt=\"" + modelname + "\" />";
					}
					rows += "</div>";

					rows += "<div class=\"car-details-tbl\">";

					rows += "<div class=\"car-details-tr retailer\">";
					rows += "<div class=\"car-details-td1\">Retailer:</div>";
					rows += "<div class=\"car-details-td2\">" + retailer + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr kilometres\">";
					rows += "<div class=\"car-details-td1\">Kilometres:</div>";
					rows += "<div class=\"car-details-td2\">" + kilometres + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr transmission\">";
					rows += "<div class=\"car-details-td1\">Transmission:</div>";
					rows += "<div class=\"car-details-td2\">" + transmission + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr exterior\">";
					rows += "<div class=\"car-details-td1\">Exterior:</div>";
					rows += "<div class=\"car-details-td2\">" + exterior + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr interior\">";
					rows += "<div class=\"car-details-td1\">Interior:</div>";
					rows += "<div class=\"car-details-td2\">" + interior + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr vin\">";
					rows += "<div class=\"car-details-td1\">VIN:</div>";
					rows += "<div class=\"car-details-td2\">" + vin + "</div>";
					rows += "</div>";

					rows += "<div class=\"car-details-tr drivetrain\">";
					rows += "<div class=\"car-details-td1\">Drive Train:</div>";
					rows += "<div class=\"car-details-td2\">" + drivetrain + "</div>";
					rows += "</div>";

					rows += "</div>";

					rows += "<div class=\"buttons-box\">";
					rows += "<div class=\"button-box\"><button class=\"view-details\">VIEW DETAILS</button></div>";
					rows += "<div class=\"button-box\"><button class=\"book-test-drive\">BOOK A TEST DRIVE</button></div>";
					rows += "</div>";

					rows += "</div>";
				}

				/* Remove spinner, add cars for sale */
				if (jQuery(".mini-all4 .forsale-box").length > 0) {
					jQuery(".mini-all4 .forsale-box").empty().append(rows);
				}
			}
		});
	}

	/* Play button converts parents to iframed Youtube video */
	jQuery(".mini-all4 .video-box .video-image-box .inner-text .play-button-box .play-button").click(function() {
		if (jQuery(".mini-all4 .video-box").length > 0) {
			jQuery(this).off("click");

			jQuery(".mini-all4 .video-box").empty().append("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/Ldjmb15Jsx0?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
		}
	});

	/* Load images after initial load */
	lazyLoadImages();

	/* Load cars for sale */
	getForSale();
});
