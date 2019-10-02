<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/uploadcare-complementary-borders.css" />
<script type="text/javascript" src="js/uploadcare-complementary-borders.js"></script>
<?php
$page_message = "This page serves variations of an uploaded image from UploadCare.com's content delivery network. Primary border colours are determined by querying the dominate colours of said image via UploadCare.com's colour recognition software. Complementary border colours are calculated programmatically.";
?><div class="container uccb">
	<div class="row message-box">
		<div class="col-sm-12 message"><?php echo $page_message; ?></div>
	</div>

	<div class="row image-row orig-image-row">
		<div class="col-sm-12 loading-box">
			<div class="text-center">
				<div class="spinner-border">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	</div>
</div>
