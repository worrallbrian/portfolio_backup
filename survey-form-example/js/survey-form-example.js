jQuery(document).ready(function() {
	var prevData = null;
	var canvas = document.getElementById("drawPad");
	var drawPad = new SignaturePad(canvas, {
		backgroundColor: "rgb(255, 255, 255)",
		onEnd: saveDrawing
	});

	/* Get any persisted drawing from localStorage */
	try {
		prevData = localStorage.getItem("example_surveyformexample_drawPad");

		if ((prevData != null) && (prevData != "")) {
			prevData = JSON.parse(prevData);

			if ((prevData != null) && (prevData.length != 0)) {
				drawPad.fromData(prevData);
			}
		} else {
			prevData = null;
		}
	} catch (e) {
		/* Ignore */
	}

	function clearDrawPad() {
		drawPad.clear();

		try {
			localStorage.setItem("example_surveyformexample_drawPad", "");
		} catch (e) {
			/* Ignore */
		}
	}

	/* Persist drawing in localStorage */
	function saveDrawing() {
		prevData = JSON.stringify(drawPad.toData());

		try {
			localStorage.setItem("example_surveyformexample_drawPad", prevData);
		} catch (e) {
			/* Ignore */
		}
	}

	if ((prevData != null) && (prevData != "")) {
		drawPad.fromData(prevData);
	}

	jQuery(".sfe .sfe-form .pandemonium-row .clear-button-box .clear-button").click(function() {
		clearDrawPad();
	});

	function resizeCanvas() {
		prevData = drawPad.toData();

		var ratio =  Math.max(window.devicePixelRatio || 1, 1);

		canvas.width = canvas.offsetWidth * ratio;
		canvas.height = canvas.offsetHeight * ratio;
		canvas.getContext("2d").scale(ratio, ratio);

		drawPad.clear();

		jQuery(function() {
			drawPad.fromData(prevData);
		});
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	jQuery(".sfe .forget-box .forget-button").on("click", function() {
		 jQuery(".sfe .sfe-form input[type=text], .sfe .sfe-form input[type=email], .sfe .sfe-form input[type=number], .sfe .sfe-form select, .sfe .sfe-form textarea").each(function() {
			 jQuery(this).garlic("destroy");
			 jQuery(this).val("");
		 });

		jQuery(".sfe .sfe-form input[type=radio], .sfe .sfe-form .consent-row .consent-box .consent").each(function() {
			 jQuery(this).garlic("destroy");
			 jQuery(this).attr("checked", false);
		 });

		 jQuery(".sfe .sfe-form input[type=range]").each(function() {
			 jQuery(this).garlic("destroy");
			 jQuery(this).val(null);
		 });

		 clearDrawPad();
	});

	jQuery(".sfe .sfe-form .formdate-age-row .formdate-box .formdate").datepicker({
		dateFormat: "yy-mm-dd"
	});

	function showSpecifyGender(me) {
		if (me == null) {
			return;
		}

		if (parseInt(jQuery(me).val()) == 3) {
			if (jQuery(".sfe .sfe-form .gender-row .gender-specify-box").css("display") != "block") {
				jQuery(".sfe .sfe-form .gender-row .gender-specify-box").css("display", "block");
			}
		} else if (jQuery(".sfe .sfe-form .gender-row .gender-specify-box").css("display") != "none") {
			jQuery(".sfe .sfe-form .gender-row .gender-specify-box").css("display", "none");
		}
	}

	jQuery(".sfe .sfe-form .gender-row .gender-box .gender").garlic({
		onPersist: function (me, val) {
			showSpecifyGender(me);
		}
	});

	jQuery(".sfe .sfe-form .gender-row .gender-box .gender").on("change", function() {
		showSpecifyGender(this);
	});

	jQuery(".sfe .sfe-form").parsley().on("form:submit", function() {
		if (jQuery(".sfe .sfe-form .pandemonium-row .draw-error").css("display") != "none") {
			jQuery(".sfe .sfe-form .pandemonium-row .draw-error").css("display", "none");
		}

		if (drawPad.isEmpty()) {
			jQuery(".sfe .sfe-form .pandemonium-row .draw-error").css("display", "block");
			jQuery(window).scrollTop(jQuery(".sfe .sfe-form .pandemonium-row").offset().top);
			return false;
		}

		/* Unpersist drawing in localStorage */
		try {
			localStorage.setItem("example_surveyformexample_drawPad", "");
		} catch (e) {
			/* Ignore */
		}

		return true;
	});
});
