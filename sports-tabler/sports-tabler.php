<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../foundation/js/what-input.js"></script>
<script type="text/javascript" src="../foundation/js/foundation.min.js"></script>
<link rel="stylesheet" type="text/css" href="../foundation/css/foundation.min.css" />
<script type="text/javascript" src="../jqueryui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jqueryui/vador/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jqueryui/vador/jquery-ui.structure.min.css" />
<link rel="stylesheet" type="text/css" href="../jqueryui/vador/jquery-ui.theme.min.css" />
<script type="text/javascript" src="../jtable/jquery.jtable.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jtable/themes/metro/blue/jtable.min.css" />
<link rel="stylesheet" type="text/css" href="css/sports-tabler.css" />
<script type="text/javascript" src="js/sports-tabler.js"></script>

<div class="grid-container sports-tabler">
	<div class="filterOptionsButton-box">
		<button type="button" class="dropdown button alert filterOptionsButton" data-toggle="filter-options-pane">+ FILTER OPTIONS</button>
	</div>

	<div class="dropdown-pane filter-options-pane" id="filter-options-pane" data-dropdown data-position="bottom" data-alignment="center" data-auto-focus="true">
		<div class="grid-x grid-padding-x controls-row">
			<div class="large-12 cell controls-row-inner">
				<div class="grid-x grid-padding-x team-box">
					<div class="large-12 cell team-box-inner">
						<label>Team</label>
						<input type="text" class="team" name="team" id="team" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x sport-box">
					<div class="large-12 cell sport-box-inner">
						<label>Sport</label>
						<input type="text" class="sport" name="sport" id="sport" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x league-box">
					<div class="large-12 cell league-box-inner">
						<label>League</label>
						<input type="text" class="league" name="league" id="league" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x section-box">
					<div class="large-12 cell section-box-inner">
						<label>Section</label>
						<input type="text" class="section" name="section" id="section" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x division-box">
					<div class="large-12 cell division-box-inner">
						<label>Division</label>
						<input type="text" class="division" name="division" id="division" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x city-box">
					<div class="large-12 cell city-box-inner">
						<label>City</label>
						<input type="text" class="city" name="city" id="city" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x province-box">
					<div class="large-12 cell province-box-inner">
						<label>State / Province</label>
						<input type="text" class="province" name="province" id="province" value="" />
					</div>
				</div>

				<div class="grid-x grid-padding-x country-box">
					<div class="large-12 cell country-box-inner">
						<label>Country</label>
						<select name="country" id="country" class="country">
							<option value="">-</option>
							<option value="CAN">Canada</option>
							<option value="USA">United States</option>
						</select>
					</div>
				</div>

				<div class="large-12 cell filter-button-box">
					<button type="button" class="button success filterButton">FILTER</button>
				</div>
			</div>
		</div>
	</div>

	<div class="grid-x grid-padding-x thetable-row">
		<div class="large-12 cell thetable-row-inner">
			<div class="thetable" id="thetable">
			</div>
		</div>
	</div>
</div>

<div class="small reveal details-dialog" id="details-dialog" data-reveal data-animation-in="scale-in-up" data-animation-out="scale-out-down">
	<div class="details-dialog-body">
		<div class="grid-container details-dialog-body-inner">
			<div class="grid-x grid-padding-x details-row">
				<div class="large-12 cell details-row-inner">
					<div class="details-title-box">
						<div class="details-title">Details</div>

						<hr class="dialog-hr" />
					</div>

					<table class="hover details-dialog-table">
						<thead>
							<tr>
								<th class="details-dialog-table-th details-dialog-table-th-former">Field</th>
								<th class="details-dialog-table-th details-dialog-table-th-latter">Value</th>
							</tr>
						</thead>
						<tbody>
							<tr class="dialog-key-value id-value">
								<td class="former">ID</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value team-value">
								<td class="former">Team</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value sport-value">
								<td class="former">Sport</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value league-value">
								<td class="former">League</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value section-value">
								<td class="former">Section</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value division-value">
								<td class="former">Division</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value city-value">
								<td class="former">City</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value province-value">
								<td class="former">State / Province</td>
								<td class="latter">N/A</td>
							</tr>

							<tr class="dialog-key-value country-value">
								<td class="former">Country</td>
								<td class="latter">N/A</td>
							</tr>
						</tbody>
					</table>

					<div class="close-button-box">
						<hr class="dialog-hr" />

						<button type="button" class="button secondary dialogCloseButton" data-close>Close</button>
					</div>
				</div>
			</div>
		</div>

		<button type="button" class="close-button dialogXButton" data-close>
			<span>&times;</span>
		</button>
	</div>
</div>
