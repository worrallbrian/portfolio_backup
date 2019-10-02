jQuery(document).ready(function() {
	if ((jQuery(".jovian-date #regulardate").length > 0) && (jQuery(".jovian-date .stage-box .stage .jovian-value").length > 0)) {
		function loadJD(dates) {
			if ((dates == null) || (dates == "") || (dates.length < 7)) {
				return;
			}

			var year = parseInt(dates.substr(6, 4)),
			month = parseInt(dates.substr(0, 2)),
			day = parseInt(dates.substr(3, 2)),
			total = "",
			ifleap = 0;

			if ((year % 4) == 0) {
				if ((year % 100) == 0) {
					if ((year % 400) == 0) {
						ifleap = 1;
					}
				} else {
					ifleap = 1;
				}
			}

			if (month == 1) {
				total = "" + day;
			} else if (month == 2) {
				total = "" + (day + 31);
			} else if (month == 3) {
				total = "" + (day + 59 + ifleap);
			} else if (month == 4) {
				total = "" + (day + 90 + ifleap);
			} else if (month == 5) {
				total = "" + (day + 120 + ifleap);
			} else if (month == 6) {
				total = "" + (day + 151 + ifleap);
			} else if (month == 7) {
				total = "" + (day + 181 + ifleap);
			} else if (month == 8) {
				total = "" + (day + 212 + ifleap);
			} else if (month == 9) {
				total = "" + (day + 243 + ifleap);
			} else if (month == 10) {
				total = "" + (day + 273 + ifleap);
			} else if (month == 11) {
				total = "" + (day + 304 + ifleap);
			} else if (month == 12) {
				total = "" + (day + 334 + ifleap);
			} else {
				total = "ERROR OCCURRED";
			}

			jQuery(".jovian-date .stage-box .stage .jovian-value").empty().append(total);
		}

		jQuery(".jovian-date #regulardate").datepicker({
			onClose: function(dates) {
				loadJD(dates);
			},
			showTrigger: '#calImg'
		});
	}
});
