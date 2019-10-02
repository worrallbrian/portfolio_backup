<?php
if (!isset($_SESSION)) {
	session_start();
}

$provinces = [];
$provinces[0] = [];
$provinces[0]['short'] = "AB";
$provinces[0]['long'] = "Alberta";
$provinces[1] = [];
$provinces[1]['short'] = "BC";
$provinces[1]['long'] = "British Columbia";
$provinces[2] = [];
$provinces[2]['short'] = "MB";
$provinces[2]['long'] = "Manitoba";
$provinces[3] = [];
$provinces[3]['short'] = "NB";
$provinces[3]['long'] = "New Brunswick";
$provinces[4] = [];
$provinces[4]['short'] = "NL";
$provinces[4]['long'] = "Newfoundland and Labrador";
$provinces[5] = [];
$provinces[5]['short'] = "NS";
$provinces[5]['long'] = "Nova Scotia";
$provinces[6] = [];
$provinces[6]['short'] = "NT";
$provinces[6]['long'] = "Northwest Territories";
$provinces[7] = [];
$provinces[7]['short'] = "NU";
$provinces[7]['long'] = "Nunavut";
$provinces[8] = [];
$provinces[8]['short'] = "ON";
$provinces[8]['long'] = "Ontario";
$provinces[9] = [];
$provinces[9]['short'] = "PE";
$provinces[9]['long'] = "Prince Edward Island";
$provinces[10] = [];
$provinces[10]['short'] = "QC";
$provinces[10]['long'] = "Quebec";
$provinces[11] = [];
$provinces[11]['short'] = "SK";
$provinces[11]['long'] = "Saskatchewan";
$provinces[12] = [];
$provinces[12]['short'] = "YT";
$provinces[12]['long'] = "Yukon";

$provinces[13] = [];
$provinces[13]['short'] = "AL";
$provinces[13]['long'] = "Alabama";
$provinces[14] = [];
$provinces[14]['short'] = "AK";
$provinces[14]['long'] = "Alaska";
$provinces[15] = [];
$provinces[15]['short'] = "AZ";
$provinces[15]['long'] = "Arizona";
$provinces[16] = [];
$provinces[16]['short'] = "AR";
$provinces[16]['long'] = "Arkansas";
$provinces[17] = [];
$provinces[17]['short'] = "CA";
$provinces[17]['long'] = "California";
$provinces[18] = [];
$provinces[18]['short'] = "CO";
$provinces[18]['long'] = "Colorado";
$provinces[19] = [];
$provinces[19]['short'] = "CT";
$provinces[19]['long'] = "Connecticut";
$provinces[20] = [];
$provinces[20]['short'] = "DE";
$provinces[20]['long'] = "Delaware";
$provinces[21] = [];
$provinces[21]['short'] = "DC";
$provinces[21]['long'] = "District of Columbia";
$provinces[22] = [];
$provinces[22]['short'] = "FL";
$provinces[22]['long'] = "Florida";
$provinces[23] = [];
$provinces[23]['short'] = "GA";
$provinces[23]['long'] = "Georgia";
$provinces[24] = [];
$provinces[24]['short'] = "HI";
$provinces[24]['long'] = "Hawaii";
$provinces[25] = [];
$provinces[25]['short'] = "ID";
$provinces[25]['long'] = "Idaho";
$provinces[26] = [];
$provinces[26]['short'] = "IL";
$provinces[26]['long'] = "Illinois";
$provinces[27] = [];
$provinces[27]['short'] = "IN";
$provinces[27]['long'] = "Indiana";
$provinces[28] = [];
$provinces[28]['short'] = "IA";
$provinces[28]['long'] = "Iowa";
$provinces[29] = [];
$provinces[29]['short'] = "KS";
$provinces[29]['long'] = "Kansas";
$provinces[30] = [];
$provinces[30]['short'] = "KY";
$provinces[30]['long'] = "Kentucky";
$provinces[31] = [];
$provinces[31]['short'] = "LA";
$provinces[31]['long'] = "Louisiana";
$provinces[32] = [];
$provinces[32]['short'] = "ME";
$provinces[32]['long'] = "Maine";
$provinces[33] = [];
$provinces[33]['short'] = "MD";
$provinces[33]['long'] = "Maryland";
$provinces[34] = [];
$provinces[34]['short'] = "MA";
$provinces[34]['long'] = "Massachusetts";
$provinces[35] = [];
$provinces[35]['short'] = "MI";
$provinces[35]['long'] = "Michigan";
$provinces[36] = [];
$provinces[36]['short'] = "MN";
$provinces[36]['long'] = "Minnesota";
$provinces[37] = [];
$provinces[37]['short'] = "MS";
$provinces[37]['long'] = "Mississippi";
$provinces[38] = [];
$provinces[38]['short'] = "MO";
$provinces[38]['long'] = "Missouri";
$provinces[39] = [];
$provinces[39]['short'] = "MT";
$provinces[39]['long'] = "Montana";
$provinces[40] = [];
$provinces[40]['short'] = "NE";
$provinces[40]['long'] = "Nebraska";
$provinces[41] = [];
$provinces[41]['short'] = "NV";
$provinces[41]['long'] = "Nevada";
$provinces[42] = [];
$provinces[42]['short'] = "NH";
$provinces[42]['long'] = "New Hampshire";
$provinces[43] = [];
$provinces[43]['short'] = "NJ";
$provinces[43]['long'] = "New Jersey";
$provinces[44] = [];
$provinces[44]['short'] = "NM";
$provinces[44]['long'] = "New Mexico";
$provinces[45] = [];
$provinces[45]['short'] = "NY";
$provinces[45]['long'] = "New York";
$provinces[46] = [];
$provinces[46]['short'] = "NC";
$provinces[46]['long'] = "North Carolina";
$provinces[47] = [];
$provinces[47]['short'] = "ND";
$provinces[47]['long'] = "North Dakota";
$provinces[48] = [];
$provinces[48]['short'] = "OH";
$provinces[48]['long'] = "Ohio";
$provinces[49] = [];
$provinces[49]['short'] = "OK";
$provinces[49]['long'] = "Oklahoma";
$provinces[50] = [];
$provinces[50]['short'] = "OR";
$provinces[50]['long'] = "Oregon";
$provinces[51] = [];
$provinces[51]['short'] = "PA";
$provinces[51]['long'] = "Pennsylvania";
$provinces[52] = [];
$provinces[52]['short'] = "RI";
$provinces[52]['long'] = "Rhode Island";
$provinces[53] = [];
$provinces[53]['short'] = "SC";
$provinces[53]['long'] = "South Carolina";
$provinces[54] = [];
$provinces[54]['short'] = "SD";
$provinces[54]['long'] = "South Dakota";
$provinces[55] = [];
$provinces[55]['short'] = "TN";
$provinces[55]['long'] = "Tennessee";
$provinces[56] = [];
$provinces[56]['short'] = "TX";
$provinces[56]['long'] = "Texas";
$provinces[57] = [];
$provinces[57]['short'] = "UT";
$provinces[57]['long'] = "Utah";
$provinces[58] = [];
$provinces[58]['short'] = "VT";
$provinces[58]['long'] = "Vermont";
$provinces[59] = [];
$provinces[59]['short'] = "VA";
$provinces[59]['long'] = "Virginia";
$provinces[60] = [];
$provinces[60]['short'] = "WA";
$provinces[60]['long'] = "Washington";
$provinces[61] = [];
$provinces[61]['short'] = "WV";
$provinces[61]['long'] = "West Virginia";
$provinces[62] = [];
$provinces[62]['short'] = "WI";
$provinces[62]['long'] = "Wisconsin";
$provinces[63] = [];
$provinces[63]['short'] = "WY";
$provinces[63]['long'] = "Wyoming";
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.structure.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/vador/jquery-ui.theme.min.css" />
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/opentable-city-searcher.css" />
<script type="text/javascript" src="js/opentable-city-searcher.js"></script>

<div class="container otcs">
	<div class="row message-row">
		<div class="col-sm-12 message-box">
			<div class="logo"><img src="img/logo.png" alt="Open Table" class="logo-img" /></div>
			<div class="message">This program queries an Open Table API for restaurants based on user inputted locations.</div>
		</div>
	</div>

	<div class="row form-row">
		<div class="col-sm-12 city-box">
			<label for="city">City</label>
			<input type="text" value="" name="city" id="city" class="form-input city" placeholder="EG) Toronto" aria-label="Enter city" />
		</div>

		<div class="col-sm-12 province-box">
			<label for="province">Province / State</label>
			<select name="province" id="province" class="form-input province" aria-label="Enter province or state">
				<option value="" selected="selected">-</option>
				<optgroup label="Canada">
				<?php for ($i = 0; $i < 13; $i++) { ?>
				<option value="<?php echo $provinces[$i]['short']; ?>"><?php echo $provinces[$i]['long']; ?></option>
				<?php }	?>
				</optgroup>
				<optgroup label="United States">
				<?php for ($i = 13; $i < 64; $i++) { ?>
				<option value="<?php echo $provinces[$i]['short']; ?>"><?php echo $provinces[$i]['long']; ?></option>
				<?php }
				unset($provinces);
				?>
				</optgroup>
			</select>
		</div>

		<div class="col-sm-12 country-box">
			<label for="country">Country</label>
			<select name="country" id="country" class="form-control country" aria-label="Enter country">
				<option value="" selected="selected">-</option>
				<option value="CA">Canada</option>
				<option value="US">United States</option>
			</select>
		</div>

		<div class="col-sm-12 submitButton-box">
			<button type="button" class="btn btn-success submitButton" aria-label="Search by city">Search</button>
			<hr class="form-separator" />
		</div>
	</div>

	<div class="row result-row">
		<div class="col-sm-12 result-box">
			<span class="no-results">[ Ready ]</span>
		</div>

		<div class="col-sm-12 pager-box">
			<button type="button" class="btn btn-danger pagerButton" data-currentpage="1" aria-label="Load more restaurants">LOAD PAGE <span class="pageno-text">2</span></button>
		</div>
	</div>
</div>

<div class="error-dialog" title="Error" aria-label="Error dialog">
	<div class="error-dialog-body">
		<div class="container error-con">
			<div class="row error-row">
				<div class="col-sm-12 error-box">
					<div class="error" aria-label="City, province or state, and country cannot not all be empty">City, Province / State, and Country cannot not all be empty.</div>
				</div>
			</div>
		</div>
	</div>
</div>
