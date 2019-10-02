/* Sanitize inputs */
function string_wash(v2) {
	return (((v2 != null) && (v2 != "")) ? v2.replace(/[^a-zA-Z0-9\-]/g, "") : "");
}

/* Generate random alpha-numeric string */
function makeNewProgressID() {
	var new_progress_id = "",
	c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
	len = c.length,
	k = 0;

	for (k = 0; k < 23; k++) {
		new_progress_id += c.charAt(Math.floor(Math.random() * len));
	}

	return new_progress_id;
}
