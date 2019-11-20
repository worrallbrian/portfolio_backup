<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="../math-libraries/decimal.min.js"></script>
<script type="text/javascript" src="js/jquery.canvasjs.min.js"></script>
<script type="text/javascript" src="js/compound-interest-solver.js"></script>
<link rel="stylesheet" type="text/css" href="css/compound-interest-solver.css" />

<div class="container cis">
	<div class="row form-row">
		<div class="col-sm-12 form-group principal-box">
			<label class="field-label" for="principal">Principal ($)</label>
			<input type="number" name="principal" id="principal" value="" class="form-input text_input principal" />
		</div>

		<div class="col-xs-12 col-sm-6 form-group interest-box">
			<label class="field-label" for="interest">Interest Rate (%)</label>
			<input type="number" name="interest" id="interest" value="" class="form-input text_input interest" />
		</div>

		<div class="col-xs-12 col-sm-6 form-group years-box">
			<label class="field-label" for="years">Number of Years</label>
			<select name="years" id="years" class="form-control years">
			<?php for ($i = 1; $i < 26; $i++) { ?>
				<option value="<?php echo $i; ?>"><?php echo $i; ?></option>
			<?php } ?>
			</select>
		</div>
		
		<div class="col-sm-12 form-group calc-type-msg-box"><span class="calc-type-msg">Calculation Type</span></div>

		<div class="col-sm-12 form-check form-group calc-type-box">
			<label class="form-check-label"><input class="form-check-input" type="radio" name="calc-type" id="calc-type" value="1" checked="checked" /> <span class="calc-type-span">Currency (Minified formula in whole cents)</span></label>
		</div>
		
		<div class="col-sm-12 form-check form-group calc-type-box">
			<label class="form-check-label"><input class="form-check-input" type="radio" name="calc-type" id="calc-type" value="0" /> <span class="calc-type-span">Verbose (Minified formula)</span></label>
		</div>

		<div class="col-sm-12 form-group submit-box">
			<button type="submit" name="submitButton" id="submitButton" class="btn btn-success submit-button">Calculate</button>
		</div>
	</div>

	<div class="row chart-row">
		<div class="col-sm-12 chart-box">
			<div class="ready-box">[ Bar Chart ready ]</div>
		</div>
	</div>

	<div class="row results-box-row results-box-row-total">
		<div class="col-xs-12 col-sm-7 header-box total">
			<span class="results-box-row-header">Total Amount</span>
		</div>

		<div class="col-xs-12 col-sm-5 value-box total-value">
			<span class="results-box-row-value">N/A</span>
		</div>
	</div>

	<div class="row results-box-row results-box-row-accumulated">
		<div class="col-xs-12 col-sm-7 header-box accumulated">
			<span class="results-box-row-header">Interest Accumulated</span>
		</div>

		<div class="col-xs-12 col-sm-5 value-box accumulated-value">
			<span class="results-box-row-value">N/A</span>
		</div>
	</div>
</div>
