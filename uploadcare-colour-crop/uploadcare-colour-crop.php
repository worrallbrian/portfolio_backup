<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/uploadcare-colour-crop.css" />
<script type="text/javascript" src="js/uploadcare-colour-crop.js"></script>
<?php
$page_message = "This page serves an uploaded image from UploadCare.com's content delivery network. It then queries UploadCare.com's colour recognition software to obtain the 4 dominate colours on said uploaded image, and finally inserts cropped images using UploadCare.com's cropping software, using the dominate colours as various spatial co-ordinates.";

$target = "https://ucarecdn.com/GetYourOwnUploadCareHostedImage/-/progressive/yes/-/preview/example.jpg";
?><div class="container uccc">
	<div class="row message-box">
		<div class="col-sm-12 message"><?php echo $page_message; ?></div>
	</div>

	<div class="row image-row orig-image-row">
		<div class="col-sm-12 descriptor">Original</div>

		<div class="col-sm-12 orig-image-box">
			<div class="image-box">
				<img src="<?php echo $target; ?>" class="uc-image orig-uc-image" alt="Uploaded Image" />
			</div>
		</div>
	</div>

	<div class="row image-row cropped-image-row1">
		<div class="col-sm-12 descriptor">Sums of Colour RGBs</div>

		<div class="col-sm-12 cropped-image-box1">
			<div class="image-box">
				<div class="text-center">
					<div class="spinner-border">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row image-row cropped-image-row2">
		<div class="col-sm-12 descriptor">Each Colour RGB</div>

		<div class="col-sm-12 cropped-image-box2">
			<div class="image-box">
				<div class="text-center">
					<div class="spinner-border">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row image-row cropped-image-row3">
		<div class="col-sm-12 descriptor">Each Colour RGB as X,Y,0</div>

		<div class="col-sm-12 cropped-image-box3">
			<div class="image-box">
				<div class="text-center">
					<div class="spinner-border">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row image-row cropped-image-row4">
		<div class="col-sm-12 descriptor">Each Colour RGB as 0,X,Y</div>

		<div class="col-sm-12 cropped-image-box4">
			<div class="image-box">
				<div class="text-center">
					<div class="spinner-border">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
