jQuery(document).ready(function() {
	jQuery(".qr-code .canvas-box .qr-code_canvas").qrcode({
		text: "https://brianworrallportfolio.000webhostapp.com/?utm_src_url=qr-code",
		width: 250,
		height: 250,
		foreground: "#000000",
		background: "#FFFFFF"
	});
});
