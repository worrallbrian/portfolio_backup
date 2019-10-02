<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/uploadcare-facial-blur.css" />
<script type="text/javascript" src="js/uploadcare-facial-blur.js"></script>
<?php
$page_message = "This page serves an uploaded image from UploadCare.com's content delivery network. It then queries UploadCare's facial recognition software to obtain co-ordinates of any faces on said uploaded image, and finally inserts images with blurs over any detected faces using UploadCare's overlay software.";

$target = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/test-faces.jpg";
?><div class="container ucfb">
	<div class="row message-box">
		<div class="col-sm-12 message"><?php echo $page_message; ?></div>
	</div>

	<div class="row image-row orig-image-row">
		<div class="col-sm-12 orig-image-box">
			<div class="image-box">
				<img src="<?php echo $target; ?>" class="uc-image orig-uc-image" alt="Uploaded Image" />
			</div>
		</div>
	</div>

<?php for ($i = 1; $i < 4; $i++) { ?>
	<div class="row image-row blurred-image-row<?php echo $i; ?>">
		<div class="col-sm-12 blurred-image-box<?php echo $i; ?>">
			<div class="image-box">
				<div class="text-center">
					<div class="spinner-border">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php } ?>
</div>
