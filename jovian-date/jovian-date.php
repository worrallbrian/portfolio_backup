<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.theme.min.css" />
<link rel="stylesheet" type="text/css" href="css/jovian-date.css" />
<script type="text/javascript" src="js/jovian-date.js"></script>
<div class="container jovian-date">
  <div class="col-sm-12 preamble-box">
    <span class="preamble">Selecting a date in the datepicker will compute the number of days elapsed in the given year.</span>
  </div>

  <div class="form-box">
	<div class="form-group">
      <div class="input-group">
        <label for="regulardate">Date</label><input type="text" class="form-input regulardate" name="regulardate" id="regulardate" value="" />
	  </div>
    </div>
  </div>

  <div class="col-sm-12 stage-box">
    <div class="stage"><label for="jovian-value">Jovian Equivalent:</label> <span class="jovian-value">0</span></div>
  </div>
</div>
