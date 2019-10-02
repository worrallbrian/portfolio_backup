<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="../math-libraries/decimal.min.js"></script>
<script type="text/javascript" src="js/jquery.canvasjs.min.js"></script>
<script type="text/javascript" src="js/statistical-lookup.js"></script>
<link rel="stylesheet" type="text/css" href="css/statistical-lookup.css" />
<div class="container statistical-lookup">
  <div class="values-box">
    <input type="hidden" name="entry-counter" id="entry-counter" value="3" />
	<div class="row values-row">
      <div class="col-sm-6 entry-row">
        <div class="form-group">
	      <label class="entry-label" for="entry1">Entry 1:</label><input type="number" class="form-input entry-input" name="entry1" value="" /><button type="button" class="btn btn-error remove-button">Remove</button>
	    </div>
      </div>
	  <div class="col-sm-6 entry-row">
        <div class="form-group">
	      <label class="entry-label" for="entry2">Entry 2:</label><input type="number" class="form-input entry-input" name="entry2" value="" /><button type="button" class="btn btn-error remove-button">Remove</button>
	    </div>
      </div>
	  <div class="col-sm-6 entry-row">
        <div class="form-group">
	      <label class="entry-label" for="entry3">Entry 3:</label><input type="number" class="form-input entry-input" name="entry3" value="" /><button type="button" class="btn btn-error remove-button">Remove</button>
	    </div>
      </div>
	</div>
  </div>
  <div class="buttons-box">
    <div class="btn-toolbar">
      <div class="btn-group mr-2">
	    <button type="button" class="btn btn-success compute-button">Compute</button>
	  </div>
	  <div class="btn-group">
	    <button type="button" class="btn btn-info addmore-button">Add More</button>
	  </div>
	</div>
  </div>
  <div class="barchart-box">
    <div class="ready-box">[ Bar Chart ready ]</div>
  </div>
  <div class="sheet-box">
	<div class="row">
	  <div class="col-sm-6">
	    <div class="sheet-field">Population</div>
	    <div class="population-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Sum</div>
	    <div class="sum-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Mean</div>
	    <div class="mean-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Median</div>
	    <div class="median-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Minimum</div>
	    <div class="minimum-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Maximum</div>
	    <div class="maximum-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Range</div>
	    <div class="range-value">N/A</div>
      </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Mode</div>
	    <div class="mode-value">N/A</div>
      </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Variance</div>
	    <div class="variance-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Standard Deviation</div>
	    <div class="sd-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Coefficient of Variation</div>
	    <div class="cov-value">N/A</div>
	  </div>
	  <div class="col-sm-6">
	    <div class="sheet-field">Standard Error of the Mean</div>
	    <div class="seotm-value">N/A</div>
	  </div>
	</div>
  </div>
</div>
