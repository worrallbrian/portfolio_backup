<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../foundation/js/what-input.js"></script>
<script type="text/javascript" src="../foundation/js/foundation.min.js"></script>
<link rel="stylesheet" type="text/css" href="../foundation/css/foundation.min.css" />
<link rel="stylesheet" type="text/css" href="../foundation/css/foundation-icons.css" />
<link rel="stylesheet" type="text/css" href="css/factor-solver.css" />
<script type="text/javascript" src="js/factor-solver.js"></script>

<div class="grid-container factor-solver">
	<div class="grid-container instructions-box">
		<div class="grid-x grid-padding-x instructions-box-inner">
			<div class="medium-12 cell instructions-text">This program takes 2 inputted whole numbers (between 0 and 1,000,000) and computes all individual factors, common factors, and the greatest common factor.</div>
		</div>
	</div>

	<form class="fs-form">
		<fieldset class="fieldset fs-fieldset">
			<div class="grid-container fs-form-box">
				<div class="grid-x grid-padding-x fs-form-box-inner">
					<div class="medium-6 small-12 cell input1-box">
						<label>Number 1
						<input type="number" class="input1" placeholder="250" min="0" max="1000000" value="" />
						</label>
					</div>

					<div class="medium-6 small-12 cell input2-box">
						<label>Number 2
						<input type="number" class="input2" placeholder="500" min="0" max="1000000" value="" />
						</label>
					</div>

					<div class="medium-12 cell computeButton-box">
						<button type="button" class="button success computeButton"><i class="fi-play buttonIcon computeButtonIcon"></i> Compute</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>

	<hr class="form-separator" />

	<fieldset class="fieldset result-fieldset">
		<legend class="result-fieldset-legend">Results</legend>

		<div class="grid-container result-box">
			<div class="grid-x grid-padding-x result-box-inner">
				<div class="medium-12 cell spinner-box">
					<div class="spinner-box-inner"><img class="spinner-img" src="../img/loading.gif" alt="Loading" /></div>
				</div>

				<div class="medium-12 cell result-box-row input1-factors-box">
					<div class="result-name">Number 1's Factors</div>
					<div class="result-value input1-factors">N/A</div>
					<hr class="result-separator" />
				</div>

				<div class="medium-12 cell result-box-row input2-factors-box">
					<div class="result-name">Number 2's Factors</div>
					<div class="result-value input2-factors">N/A</div>
					<hr class="result-separator" />
				</div>

				<div class="medium-12 cell result-box-row common-factors-box">
					<div class="result-name">Common Factors</div>
					<div class="result-value common-factors">N/A</div>
					<hr class="result-separator" />
				</div>

				<div class="medium-12 cell result-box-row gcf-box">
					<div class="result-name">Greatest Common Factor</div>
					<div class="result-value gcf">N/A</div>
				</div>
			</div>
		</div>
	</fieldset>
</div>
