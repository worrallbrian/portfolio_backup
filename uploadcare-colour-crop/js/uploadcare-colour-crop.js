function numBounds(a, b) {
	return ((a < b) ? a : b);
}

function buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight) {
	return ("-/crop/" + numBounds(dimwidth, resultwidth) + "x" + numBounds(dimheight, resultheight) + "/" + numBounds(xcoord, resultwidth) + "," + numBounds(ycoord, resultheight) + "/");
}

jQuery(document).ready(function() {
	function showCroppedImages(data1) {
		var img_target = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/",
		img_url1 = "" + img_target,
		img_url2a = "" + img_target,
		img_url2b = "" + img_target,
		img_url2c = "" + img_target,
		img_url3 = "" + img_target,
		img_url4 = "" + img_target;

		if ((data1 != null) && (data1 != "")) {
			var res = JSON.parse(data1);

			if ((res != null) && (res != "")) {
				if ((res['result'] != null) && (res['result']['main_colors'] != null) && (res['result']['main_colors'] != "")) {
					var coords = {},
					allvals = [],
					sums = {},
					i = 0,
					j = 0,
					tempsum = 0,
					cval = 0,
					numcoords = 0,
					resultwidth = 400,
					resultheight = 400,
					temp = null;

					if ((res['result']['width'] != null) && (res['result']['width'] != "")) {
						resultwidth = parseInt(res['result']['width']);
					}

					if ((res['result']['height'] != null) && (res['result']['height'] != "")) {
						resultheight = parseInt(res['result']['height']);
					}

					var	widthratio = resultwidth / 255,
					heightratio = resultheight / 255,
					negwidthratio = 1 + (255 / ((resultwidth != 0) ? resultwidth : 1)),
					negheightratio = 1 + (255 / ((resultheight != 0) ? resultheight : 1));

					for (i = 0; i < (res['result']['main_colors']).length; i++) {
						temp = res['result']['main_colors'][i];

						if ((temp != null) && (temp.length == 3)) {
							coords[numcoords] = {};
							tempsum = 0;

							for (j = 0; j < 3; j++) {
								cval = parseInt(temp[j]);

								coords[numcoords][j] = cval;
								allvals.push(cval);
								tempsum += cval;
							}

							sums[numcoords] = tempsum;

							numcoords++;
						}
					}

					temp = null;

					if (numcoords < 4) {
						for (i = (numcoords - 1); i < 4; i++) {
							coords[numcoords] = {};

							for (j = 0; j < 3; j++) {
								coords[numcoords][j] = 0;
								allvals.push(0);
							}

							sums[numcoords] = 0;

							numcoords++;
						}
					}

					/* Sums of Colour RGBs */
					var xcoord = Math.round(sums[2] * negwidthratio),
					ycoord = Math.round(sums[3] * negheightratio),
					dimwidth = Math.round(sums[0] * widthratio),
					dimheight = Math.round(sums[1] * heightratio);

					img_url1 += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					/* Each Colour RGB */
					xcoord = Math.round(allvals[2] * negwidthratio);
					ycoord = Math.round(allvals[3] * negheightratio);
					dimwidth = Math.round(allvals[0] * widthratio);
					dimheight = Math.round(allvals[1] * heightratio);

					img_url2a += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					xcoord = Math.round(allvals[6] * negwidthratio);
					ycoord = Math.round(allvals[7] * negheightratio);
					dimwidth = Math.round(allvals[4] * widthratio);
					dimheight = Math.round(allvals[5] * heightratio);

					img_url2b += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					xcoord = Math.round(allvals[10] * negwidthratio);
					ycoord = Math.round(allvals[11] * negheightratio);
					dimwidth = Math.round(allvals[8] * widthratio);
					dimheight = Math.round(allvals[9] * heightratio);

					img_url2c += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					/* Each Colour RGB as X,Y,0 */
					xcoord = Math.min(coords[0][0], coords[1][0], coords[2][0], coords[3][0]);
					ycoord = Math.min(coords[0][1], coords[1][1], coords[2][1], coords[3][1]);
					dimwidth = Math.max(coords[0][0], coords[1][0], coords[2][0], coords[3][0]) - xcoord;
					dimheight = Math.max(coords[0][1], coords[1][1], coords[2][1], coords[3][1]) - ycoord;

					xcoord = Math.round(xcoord * negwidthratio);
					ycoord = Math.round(ycoord * negheightratio);
					dimwidth = Math.round(dimwidth * widthratio);
					dimheight = Math.round(dimheight * heightratio);

					img_url3 += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					/* Each Colour RGB as 0,X,Y */
					xcoord = Math.min(coords[0][1], coords[1][1], coords[2][1], coords[3][1]);
					ycoord = Math.min(coords[0][2], coords[1][2], coords[2][2], coords[3][2]);
					dimwidth = Math.max(coords[0][1], coords[1][1], coords[2][1], coords[3][1]) - xcoord;
					dimheight = Math.max(coords[0][2], coords[1][2], coords[2][2], coords[3][2]) - ycoord;

					xcoord = Math.round(xcoord * negwidthratio);
					ycoord = Math.round(ycoord * negheightratio);
					dimwidth = Math.round(dimwidth * widthratio);
					dimheight = Math.round(dimheight * heightratio);

					img_url4 += buildCropString(dimwidth, dimheight, xcoord, ycoord, resultwidth, resultheight);

					coords = null;
					allvals = null;
					sums = null;
				} else if ((res['error'] != null) && (res['error'] != "")) {
					alert((res['error']).replace('"', "").replace(/((<([^>]+)>)&!(<br( )?(\/)?>))/ig, ""));
					return;
				}
			}

			res = null;
		}

		img_url1 += "-/progressive/yes/-/preview/colour-cropped-image1.jpg";
		img_url2a += "-/progressive/yes/-/preview/colour-cropped-image2A.jpg";
		img_url2b += "-/progressive/yes/-/preview/colour-cropped-image2B.jpg";
		img_url2c += "-/progressive/yes/-/preview/colour-cropped-image2C.jpg";
		img_url3 += "-/progressive/yes/-/preview/colour-cropped-image3.jpg";
		img_url4 += "-/progressive/yes/-/preview/colour-cropped-image4.jpg";

		var row = "<img src=\"" + img_url1 + "\" class=\"uc-image cropped-uc-image1\" alt=\"Colour Cropped Image 1\" />";
		jQuery(".uccc .cropped-image-row1 .cropped-image-box1 .image-box").empty().append(row);

		row = "<div class=\"cropped-flexor\">";
		row += "<div class=\"cropped-flexed\"><img src=\"" + img_url2a + "\" class=\"uc-image cropped-uc-image2 cropped-uc-image2a\" alt=\"Colour Cropped Image 2A\" /></div>";
		row += "<div class=\"cropped-flexed\"><img src=\"" + img_url2b + "\" class=\"uc-image cropped-uc-image2 cropped-uc-image2b\" alt=\"Colour Cropped Image 2B\" /></div>";
		row += "<div class=\"cropped-flexed\"><img src=\"" + img_url2c + "\" class=\"uc-image cropped-uc-image2 cropped-uc-image2c\" alt=\"Colour Cropped Image 2C\" /></div>";
		row += "</div>";
		jQuery(".uccc .cropped-image-row2 .cropped-image-box2 .image-box").empty().append(row);

		row = "<img src=\"" + img_url3 + "\" class=\"uc-image cropped-uc-image3\" alt=\"Colour Cropped Image 3\" />";
		jQuery(".uccc .cropped-image-row3 .cropped-image-box3 .image-box").empty().append(row);

		row = "<img src=\"" + img_url4 + "\" class=\"uc-image cropped-uc-image4\" alt=\"Colour Cropped Image 4\" />";
		jQuery(".uccc .cropped-image-row4 .cropped-image-box4 .image-box").empty().append(row);
	}

	function getImageColours() {
		jQuery.ajax({
			url: "ajax/getColours.ajax.php",
			type: "POST",
			cache: false,
			success: function(data) {
				showCroppedImages(data);
			}
		});
	}

	getImageColours();
});
