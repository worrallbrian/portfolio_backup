jQuery(document).ready(function() {
	function showOverlayImages(data1) {
		var img_target = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/",
		img_url1 = "" + img_target,
		img_url2 = "" + img_target,
		img_url3 = "" + img_target,
		overlay_uuid1 = "GetYourOwnUploadCareHostedOverlayImage1",
		overlay_uuid2 = "GetYourOwnUploadCareHostedOverlayImage2",
		overlay_uuid3 = "GetYourOwnUploadCareHostedOverlayImage3";

		if ((data1 != null) && (data1 != "")) {
			var res = JSON.parse(data1);

			if ((res != null) && (res != "")) {
				if ((res['result'] != null) && (res['result']['faces'] != null) && (res['result']['faces'] != "")) {
					var i = 0,
					xcoord = 0,
					ycoord = 0,
					dimwidth = 0,
					dimheight = 0,
					temp = null;

					for (i = 0; i < (res['result']['faces']).length; i++) {
						temp = res['result']['faces'][i];

						if ((temp != null) && (temp.length == 4)) {
							xcoord = parseInt(temp[0]);
							ycoord = parseInt(temp[1]);
							dimwidth = parseInt(temp[2]);
							dimheight = parseInt(temp[3]);

							img_url1 += "-/overlay/" + overlay_uuid1 + "/" + dimwidth + "x" + dimheight + "/" + xcoord + "," + ycoord + "/95p/";
							img_url2 += "-/overlay/" + overlay_uuid2 + "/" + dimwidth + "x" + dimheight + "/" + xcoord + "," + ycoord + "/100p/";
							img_url3 += "-/overlay/" + overlay_uuid3 + "/" + dimwidth + "x" + dimheight + "/" + xcoord + "," + ycoord + "/75p/";
						}
					}

					temp = null;
				} else if ((res['error'] != null) && (res['error'] != "")) {
					alert((res['error']).replace('"', "").replace(/((<([^>]+)>)&!(<br( )?(\/)?>))/ig, ""));
					return;
				}
			}

			res = null;
		}

		img_url1 += "-/preview/facial-blurred-image1.jpg";
		img_url2 += "-/preview/facial-blurred-image2.jpg";
		img_url3 += "-/preview/facial-blurred-image3.jpg";

		var row = "<img src=\"" + img_url1 + "\" class=\"uc-image blurred-uc-image1\" alt=\"Facial Blurred Image 1\" />";
		jQuery(".ucfb .blurred-image-row1 .blurred-image-box1 .image-box").empty().append(row);

		row = "<img src=\"" + img_url2 + "\" class=\"uc-image blurred-uc-image2\" alt=\"Facial Blurred Image 2\" />";
		jQuery(".ucfb .blurred-image-row2 .blurred-image-box2 .image-box").empty().append(row);

		row = "<img src=\"" + img_url3 + "\" class=\"uc-image blurred-uc-image3\" alt=\"Facial Blurred Image 3\" />";
		jQuery(".ucfb .blurred-image-row3 .blurred-image-box3 .image-box").empty().append(row);
	}

	function getFacialCoords() {
		jQuery.ajax({
			url: "ajax/getFacialCoords.ajax.php",
			type: "POST",
			cache: false,
			success: function(data) {
				showOverlayImages(data);
			}
		});
	}

	getFacialCoords();
});
