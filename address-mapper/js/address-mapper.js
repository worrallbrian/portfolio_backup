jQuery(document).ready(function() {
	if ((jQuery(".address-mapper .form-box .address").length > 0) && (jQuery(".address-mapper .form-box .maptype").length > 0) && (jQuery(".address-mapper .form-box .zoomlevel").length > 0) && (jQuery(".address-mapper .form-box .find-button").length > 0) && (jQuery(".address-mapper .stage-box .stage").length > 0)) {
		var maptypes = ["hybrid", "roadmap", "satellite", "terrain"];

		function loadAddress(addr, mtype, mzoom) {
			if ((addr != null) && (addr != "")) {
				var rows = "",
				maptype = "roadmap",
				mapzoom = 14,
				address = encodeURIComponent(addr.replace(/"|'|`/ig, "").replace(/(<([^>]+)>)/ig, ""));

				if (address == "") {
					alert("Address cannot be empty, please enter an Address.");
					jQuery(".address-mapper .form-box .address").focus();
					return;
				}

				if ((mtype != null) && (mtype != "") && (jQuery.inArray(mtype, maptypes) != -1)) {
					maptype = encodeURIComponent(mtype.replace(/"|'|`/ig, "").replace(/(<([^>]+)>)/ig, ""));
				}

				if ((mzoom != null) && (mzoom != "")) {
					mapzoom = parseInt(mzoom);

					if ((mapzoom < 1) || (mapzoom > 20)) {
						mapzoom = 14;
					}
				}

				if (!jQuery(".address-mapper .form-box .find-button").hasClass("disabled")) {
					jQuery(".address-mapper .form-box .find-button").addClass("disabled");
				}

				jQuery(".address-mapper .stage-box .stage").empty().append("<div class=\"program-loading\"></div>");

				rows = "<img src=\"https://maps.googleapis.com/maps/api/staticmap?center=" + address + "&zoom=" + mapzoom + "&maptype=" + maptype + "&size=350x350&markers=color:blue%7Clabel:H%7C" + address + "&sensor=false&key=GetYourOwnGoogleAPIKey\" class=\"map-img\" />";

				jQuery(".address-mapper .stage-box .stage").empty().append(rows);

				if (jQuery(".address-mapper .form-box .find-button").hasClass("disabled")) {
					jQuery(".address-mapper .form-box .find-button").removeClass("disabled");
				}
			} else {
				alert("Address cannot be empty, please enter an Address.");
				jQuery(".address-mapper .form-box .address").focus();
			}
		}

		jQuery(".address-mapper .form-box .find-button").click(function() {
			loadAddress(jQuery(".address-mapper .form-box .address").val(), jQuery(".address-mapper .form-box .maptype").val(), jQuery(".address-mapper .form-box .zoomlevel").val());
		});
	}
});
