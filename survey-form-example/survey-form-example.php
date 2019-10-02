<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="../jqueryui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jqueryui/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jqueryui/jquery-ui.theme.min.css" />
<link rel="stylesheet" type="text/css" href="../font-awesome/all.min.css" />
<link rel="stylesheet" type="text/css" href="css/survey-form-example.css" />
<script type="text/javascript" src="js/garlic.min.js"></script>
<script type="text/javascript" src="js/parsley.min.js"></script>
<script type="text/javascript" src="js/signature_pad.min.js"></script>
<script type="text/javascript" src="js/survey-form-example.js"></script>
<?php
$form_message = "This survey uses garlic.js and parsley.js to persist form fields using localStorage and validate form fields respectively. No data is saved, stored, nor parsed using PHP or other back-end processors. Refreshing the page will show persisted fields. Submitting the form will erase persisted fields.";

$music_genres = ["African",
"Arabic",
"Asian",
"Avant-garde",
"Ballroom",
"Blues",
"Caribbean",
"Classical",
"Comedy",
"Country",
"Easy Listening",
"Electronic",
"Folk",
"Hip Hop",
"Jazz",
"Latin",
"Marches",
"Pop",
"R&B",
"Religious",
"Rock",
"Showtunes",
"Soul",
"Zydeco"];
?><div class="container sfe">
	<div class="row message-box">
		<div class="col-sm-12 message"><?php echo $form_message; ?></div>

		<div class="col-sm-12 hr-box">
			<hr class="section-hr" />
		</div>

		<div class="col-sm-12 form-group button-box forget-box">
			<button type="button" class="btn btn-warning forget-button forget-button-1"><span class="button-icon-box"><i class="fas fa-exclamation-triangle button-icon submit-button-icon"></i></span> <span class="button-text forget-button-text">Clear Form</span></button>
		</div>

		<div class="col-sm-12 hr-box">
			<hr class="section-hr" />
		</div>
	</div>

	<form method="post" action="survey-form-example.php" class="form sfe-form" name="sfe-form" id="sfe-form" data-persist="garlic" data-parsley-validate="">
		<input type="hidden" name="fakeInput" id="fakeInput" value="" />

		<div class="row sfe-form-row names-row">
			<div class="col-xs-12 col-sm-6 form-group firstname-box">
				<label class="field-label" for="firstname">First Name</label>
				<input type="text" name="firstname" id="firstname" value="" class="form-input text_input firstname" data-parsley-trigger="change" required />
			</div>

			<div class="col-xs-12 col-sm-6 form-group lastname-box">
				<label class="field-label" for="lastname">Last Name</label>
				<input type="text" name="lastname" id="lastname" value="" class="form-input text_input lastname" data-parsley-trigger="change" required />
			</div>

			<div class="col-xs-12 col-sm-8 form-group nickname-box">
				<label class="field-label" for="nickname">Nickname</label>
				<input type="text" name="nickname" id="nickname" value="" class="form-input text_input nickname" />
			</div>
		</div>

		<div class="row sfe-form-row formdate-age-row">
			<div class="col-sm-6 form-group formdate-box">
				<label class="field-label" for="formdate">Select a date.</label>
				<input type="text" name="formdate" id="formdate" class="form-input date_input formdate" pattern="\d{4}-\d{2}-\d{2}" data-parsley-pattern="\d{4}-\d{2}-\d{2}" required />
			</div>

			<div class="col-xs-12 col-sm-6 form-group age-box">
				<label class="field-label" for="age">Age</label>
				<input type="number" name="age" id="age" value="" class="form-input text_input age" data-parsley-trigger="change" data-parsley-type="digits" required />
			</div>
		</div>

		<div class="row sfe-form-row email-row">
			<div class="col-sm-12 form-group email-box">
				<label class="field-label" for="email">E-Mail</label>
				<input type="email" name="email" id="email" value="" class="form-input text_input email" data-parsley-trigger="change" data-parsley-type="email" required />
			</div>
		</div>

		<div class="row sfe-form-row iq-smoke-row">
			<div class="col-xs-12 col-sm-6 form-group iq-box">
				<label class="field-label" for="iq">IQ</label>
				<select name="iq" id="iq" class="form-control iq" data-parsley-type="alphanum" data-parsley-trigger="change" required>
					<option value="">-</option>
					<option value="0">&lt; 69</option>
					<option value="1">69–79</option>
					<option value="2">80–89</option>
					<option value="3">90–109</option>
					<option value="4">110–119</option>
					<option value="5">120–130</option>
					<option value="6">&gt; 130</option>
				</select>
			</div>

			<div class="col-xs-12 col-sm-6 form-group smoke-box">
				<label class="field-label" for="smoke">Smoker</label>
				<select name="smoke" id="smoke" class="form-control smoke" data-parsley-trigger="change" required>
					<option value="">-</option>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</div>
		</div>

		<div class="row sfe-form-row gender-row">
			<div class="col-xs-12 col-sm-6 form-group gender-box">
				<label class="field-label" for="gender">Gender</label>
				<select name="gender" id="gender" class="form-control gender" data-parsley-trigger="change" required>
					<option value="">-</option>
					<option value="0">Female</option>
					<option value="1">Male</option>
					<option value="2">Trans</option>
					<option value="3">Other, please specify</option>
					<option value="4">Do not wish to specify</option>
				</select>
			</div>

			<div class="col-xs-12 col-sm-6 form-group gender-specify-box">
				<label class="field-label" for="gender-specify">Specify Gender</label>
				<input type="text" name="gender-specify" id="gender-specify" value="" class="form-input text_input gender-specify" />
			</div>
		</div>

		<div class="row sfe-form-row occupation-row">
			<div class="col-sm-12 form-group occupation-box">
				<label class="field-label" for="occupation">Occupation</label>
				<input type="text" name="occupation" id="occupation" value="" class="form-input text_input occupation" data-parsley-trigger="change" required />
			</div>
		</div>

		<div class="row sfe-form-row pets-music-row">
			<div class="col-sm-6 form-group pets-box">
				<label class="field-label" for="pets">Number of Pets</label>
				<select name="pets" id="pets" class="form-control pets" data-parsley-trigger="change" required>
					<option value="">-</option>
					<?php for ($i = 0; $i < 6; $i++) { ?>
					<option value="<?php echo $i; ?>"><?php echo $i; ?></option>
					<?php } ?>
					<option value="6">&gt; 5</option>
				</select>
			</div>

			<div class="col-sm-6 form-group music-box">
				<label class="field-label" for="music">Music Preference</label>
				<select name="music" id="music" class="form-control music" data-parsley-trigger="change" required>
					<option value="">-</option>
					<?php for ($i = 0; $i < count($music_genres); $i++) { ?>
					<option value="<?php echo $music_genres[$i]; ?>"><?php echo $music_genres[$i]; ?></option>
					<?php }
					unset($music_genres);
					?>
				</select>
			</div>
		</div>

		<div class="row sfe-form-row feeling-row">
			<div class="col-sm-12 form-group subheading-box feeling-message-box"><span class="subheading feeling-message">How are you feeling today?</span></div>

			<div class="col-sm-12 form-group subsubheading-box"><span class="subsubheading">* Overall</span></div>

			<div class="col-sm-3 form-check form-group overall-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="overall-feeling" id="overall-feeling" value="0" required /> <span class="feeling-span overall-feeling-span">Good</span></label>
			</div>

			<div class="col-sm-3 form-check form-group overall-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="overall-feeling" id="overall-feeling" value="1" /> <span class="feeling-span overall-feeling-span">OK</span></label>
			</div>

			<div class="col-sm-3 form-check form-group overall-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="overall-feeling" id="overall-feeling" value="2" /> <span class="feeling-span overall-feeling-span">Bad</span></label>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>

			<div class="col-sm-12 form-group subsubheading-box"><span class="subsubheading">* Energy</span></div>

			<div class="col-sm-3 form-check form-group energy-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="energy-feeling" id="energy-feeling" value="0" required /> <span class="feeling-span energy-feeling-span">High</span></label>
			</div>

			<div class="col-sm-3 form-check form-group energy-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="energy-feeling" id="energy-feeling" value="1" /> <span class="feeling-span energy-feeling-span">Normal</span></label>
			</div>

			<div class="col-sm-3 form-check form-group energy-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="energy-feeling" id="energy-feeling" value="2" /> <span class="feeling-span energy-feeling-span">Low</span></label>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>

			<div class="col-sm-12 form-group subsubheading-box"><span class="subsubheading">* Mood</span></div>

			<div class="col-sm-3 form-check form-group mood-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="mood-feeling" id="mood-feeling" value="0" required /> <span class="feeling-span mood-feeling-span">Good</span></label>
			</div>

			<div class="col-sm-3 form-check form-group mood-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="mood-feeling" id="mood-feeling" value="1" /> <span class="feeling-span mood-feeling-span">Average</span></label>
			</div>

			<div class="col-sm-3 form-check form-group mood-feeling-radio-box">
				<label class="form-check-label"><input class="form-check-input" type="radio" name="mood-feeling" id="mood-feeling" value="2" /> <span class="feeling-span mood-feeling-span">Bad</span></label>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>
		</div>

		<div class="row sfe-form-row feeling-why-row">
			<div class="col-sm-12 form-group feeling-why-box">
				<label class="field-label" for="feeling-wby">Why?</label>
				<input type="text" name="feeling-why" id="feeling-why" value="" class="form-input text_input feeling-why" />
			</div>
		</div>

		<div class="row sfe-form-row coffee-row">
			<div class="col-sm-12 form-group subheading-box coffee-message-box"><span class="subheading coffee-message">How much coffee do you drink on a regular day?</span></div>

			<div class="col-sm-12 form-check form-group coffee-box coffee-box0">
				<label class="form-check-label"><input type="radio" class="form-check-input coffee" name="coffee" id="coffee" value="0" required /><span class="coffee-choice">None</span></label>
			</div>

			<div class="col-sm-12 form-check form-group coffee-box coffee-box1">
				<label class="form-check-label"><input type="radio" class="form-check-input coffee" name="coffee" id="coffee" value="1" /><span class="coffee-choice">Small Amount</span></label>
			</div>

			<div class="col-sm-12 form-check form-group coffeee-box coffee-box2">
				<label class="form-check-label"><input type="radio" class="form-check-input coffee" name="coffee" id="coffee" value="2" /><span class="coffee-choice">Moderate Amount</span></label>
			</div>

			<div class="col-sm-12 form-check form-group coffeee-box coffee-box3">
				<label class="form-check-label"><input type="radio" class="form-check-input coffee" name="coffee" id="coffee" value="3" /><span class="coffee-choice">Large Amount</span></label>
			</div>

			<div class="col-sm-12 form-check form-group coffeee-box coffee-box4">
				<label class="form-check-label"><input type="radio" class="form-check-input coffee" name="coffee" id="coffee" value="4" /><span class="coffee-choice">Too Much</span></label>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>
		</div>

		<div class="row sfe-form-row diet-row">
			<div class="col-sm-12 form-group diet-box">
				<label class="field-label" for="diet">Diet</label>
				<input type="range" class="form-control-range diet" name="diet" id="diet" required />

				<div class="diet-range-values">
					<div class="diet-range-value diet-range-value-first">Herbivore</div>
					<div class="diet-range-value">Omnivore</div>
					<div class="diet-range-value diet-range-value-last">Carnivore</div>
				</div>
			</div>
		</div>

		<div class="row sfe-form-row superhero-row">
			<div class="col-sm-12 form-group superhero-box">
				<label class="field-label" for="superhero">If you could obtain superpowers, what would they be and what would be the first thing you'd do with them?</label>
				<textarea name="superhero" id="superhero" class="superhero" rows="5" minlength="5" data-parsley-minlength="5" data-parsley-trigger="change" required></textarea>
			</div>
		</div>

		<div class="row sfe-form-row pandemonium-row">
			<div class="col-sm-12 form-group subheading-box pandemonium-box"><span class="subheading pandemonium-message">Draw "Pandemonium".</span></div>
			<div class="col-sm-12 alert alert-light draw-error"><ul class="draw-error-ul"><li class="draw-error-li">This value is required.</li></ul></div>

			<div id="draw-pad-box" class="col-sm-12 form-group draw-pad-box">
				<div class="draw-pad--body">
					<canvas class="draw-pad" id="drawPad"></canvas>
				</div>
			</div>

			<div class="col-sm-12 form-group clear-button-box">
				<button type="button" class="btn btn-danger clear-button"><span class="button-icon-box"><i class="fas fa-eraser button-icon clear-button-icon"></i></span> <span class="button-text clear-button-text">Clear Draw Pad</span></button>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>
		</div>

		<div class="row sfe-form-row consent-row">
			<div class="col-sm-12 form-check consent-box">
				<label class="form-check-label"><input type="checkbox" class="form-check-input consent" name="consent" id="consent" value="1" required /><span class="consent-span">I Acknowledge I Exist.</span></label>
			</div>

			<div class="col-sm-12 hr-box">
				<hr class="section-hr" />
			</div>
		</div>

		<div class="row submit-row">
			<div class="col-sm-12 form-group button-box submit-box">
				<button type="submit" name="submitButton" id="submitButton" class="btn btn-success submit-button"><span class="button-icon-box"><i class="fas fa-certificate button-icon submit-button-icon"></i></span> <span class="button-text submit-button-text">Complete Survey!</span></button>
			</div>

			<div class="col-sm-12 form-group button-box forget-box">
				<button type="button" class="btn btn-warning forget-button forget-button-2"><span class="button-icon-box"><i class="fas fa-exclamation-triangle button-icon submit-button-icon"></i></span> <span class="button-text forget-button-text">Clear Form</span></button>
			</div>
		</div>
	</form>
</div>
