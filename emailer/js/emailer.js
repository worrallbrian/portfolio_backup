/* Sanitize strings */
function string_wash(v2) {
	return (((v2 != null) && (v2 != "")) ? v2.replace(/[^a-zA-Z0-9\-\.:_%@\, ]/g, "") : "");
}

/* Check for valid E-Mail address */
function validate_email(v2) {
	var ve = string_wash(v2),
	pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

	return pattern.test(ve);
}

jQuery(document).ready(function() {
	var sendHistory = [];

	function alertDialogIt(v) {
		var msg = string_wash(v);

		if (msg == "") {
			return;
		}

		jQuery(".msg-dialog .msg-dialog-body .msg-box .msg").text("" + msg);

		jQuery(".msg-dialog").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					jQuery(this).dialog("close");
				}
			}
		});
	}

	function closeAlertDialog() {
		if (jQuery(".msg-dialog").dialog("isOpen")) {
			jQuery(".msg-dialog").dialog("close");
		}
	}

	function showLoadingDialog() {
		jQuery(".loading-dialog").dialog({
			modal: true
		});
	}

	function closeLoadingDialog() {
		if (jQuery(".loading-dialog").dialog("isOpen")) {
			jQuery(".loading-dialog").dialog("close");
		}
	}

	function sendEmail() {
		var val = string_wash(jQuery(".emailer .form-box .email-box .email").val());

		if ((val == null) || (val == "")) {
			jQuery(".emailer .form-box .email-box .email").val("");
			alertDialogIt("E-Mail address cannot be empty.");
			return;
		}

		if ((val.length > 250) || (!validate_email(val))) {
			alertDialogIt("Invalid E-Mail address.");
			return;
		}

		if (sendHistory == null) {
			alertDialogIt("Internal Error: Please reload this page.");
			return;
		}

		if (jQuery.inArray(val, sendHistory) !== -1) {
			alertDialogIt("Warning: E-Mail address has already been used. Please try a different one.");
			return;
		}

		showLoadingDialog();

		sendHistory.push(val);

		jQuery.ajax({
			url: "ajax/sendEmail.ajax.php",
			type: "POST",
			data: {
				"email" : val,
				"message" : ""
			},
			cache: false,
			success: function(data) {
				var res = jQuery.parseJSON(data),
				rows = "";

				closeLoadingDialog();

				if ((data == null) || (res == null)) {
					alertDialogIt("Internal Error: Could not send E-Mail. Please try again tomorrow.");
				} else if ((res['error'] != null) && (res['error'] != "")) {
					alertDialogIt(string_wash(res['error']));
				} else if ((res['msg'] != null) && (res['msg'] != "")) {
					alertDialogIt(string_wash(res['msg']));
				} else {
					alertDialogIt("OK?! OK.");
				}
			}
		});
	}

	jQuery(".emailer .form-box .button-box .submit-button").click(function() {
		sendEmail();
	});
});
