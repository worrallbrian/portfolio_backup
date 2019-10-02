<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.structure.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.theme.min.css" />
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/emailer.css" />
<script type="text/javascript" src="js/emailer.js"></script>
<div class="container emailer">
	<div class="col-sm-12 preamble-box">
		<span class="preamble">Please enter your <span class="nowrap">E-Mail</span> address, click the Submit button, and a Fake Sales Receipt <span class="nowrap">E-Mail</span> will be delivered.</span>
	</div>

	<div class="form-box">
		<div class="form-group email-box">
			<div class="input-group">
				<label for="email"><span class="nowrap">E-Mail</span> address</label><input type="email" class="form-input email" name="email" value="" placeholder="EG) example@example.com" />
			</div>
		</div>

		<div class="form-group button-box">
			<div class="input-group">
				<button type="button" class="btn btn-success submit-button">Submit</button>
			</div>
		</div>
	</div>
</div>

<div class="msg-dialog" title="Message">
	<div class="msg-dialog-body">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 msg-box">
					<div class="msg"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="loading-dialog" title="Working...">
	<div class="loading-dialog-body">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 loading-box">
					<div class="spinner-border text-info" role="status">
						<span class="sr-only">Processing...</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
