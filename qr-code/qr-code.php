<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="js/jquery.qrcode.min.js"></script>
<script type="text/javascript" src="js/qr-code.js"></script>
<link rel="stylesheet" type="text/css" href="css/qr-code.css" />
<div class="qr-code">
  <div class="preamble">When scanned with a QR Code Reader, this image will link to my professional portfolio.</div>
  <div class="canvas-box"><div class="qr-code_canvas"></div></div>
</div>
