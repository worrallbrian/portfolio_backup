<?php
if (!isset($_SESSION)) {
	session_start();
}

$zip_img_src = "img/Z.png";
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.theme.min.css" />
<link rel="stylesheet" type="text/css" href="../jquery-ui/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/slot-machine.css" />
<script type="text/javascript" src="js/slot-machine.js"></script>
<div class="container slots">
	<div class="row buttons-row">
		<div class="col-sm-12 bet-message-box">
			<div class="message">PLACE YOUR BET</div>
		</div>
		<div class="col-sm-12 buttons-box">
			<div class="row">
				<div class="col-sm-12">
					<button type="button" class="btn btn-success op-button bet-button disabled" data-bet="5">5</button>
					<button type="button" class="btn btn-success op-button bet-button disabled" data-bet="10">10</button>
					<button type="button" class="btn btn-primary op-button bet-button disabled" data-bet="25">25</button>
					<button type="button" class="btn btn-primary op-button bet-button disabled" data-bet="50">50</button>
					<button type="button" class="btn btn-warning op-button bet-button disabled" data-bet="100">100</button>
					<button type="button" class="btn btn-warning op-button bet-button disabled" data-bet="250">250</button>
					<button type="button" class="btn btn-warning op-button bet-button disabled" data-bet="500">500</button>
					<button type="button" class="btn btn-danger op-button bet-button disabled" data-bet="1000">1000</button>
					<button type="button" class="btn btn-danger op-button bet-button disabled" data-bet="2500">2500</button>
					<button type="button" class="btn btn-danger op-button bet-button disabled" data-bet="5000">5000</button>
					<button type="button" class="btn btn-info op-button bet-button disabled" data-bet="10000">10000</button>
				</div>
			</div>

			<div class="col-sm-12">
				<div class="bet-custom-box">
					<input type="number" name="bet-custom" id="bet-custom" value="250" class="form-input op-button bet-custom" />
				</div>

				<div class="op-buttons-box">
					<button type="button" class="btn btn-danger op-button go-button disabled">SPIN!</button>
					<button type="button" class="btn btn-dark op-button rand-button disabled">RAND%</button>
					<button type="button" class="btn btn-secondary score-button disabled">Top Score</button>
				</div>
			</div>
		</div>
	</div>

	<div class="row stage-row">
		<div class="col-sm-12 stage-box">
			<div class="stage">
				<div class="slots-result"><div class="slots-con"><div class="slot-con"><img src="<?php echo $zip_img_src; ?>" alt="BLANK" class="slot-image blank" /></div><div class="slot-con"><img alt="BLANK" src="<?php echo $zip_img_src; ?>" class="slot-image blank" /></div><div class="slot-con"><img alt="BLANK" src="<?php echo $zip_img_src; ?>" class="slot-image blank" /></div></div></div>
				<hr class="slots-separator" />
				<div class="slots-winner">WINNER! <span class="plus-sign">+</span><span class="winnings">0</span></div>
				<div class="avail-credits-box">Available Credits: <span class="credits">500</span></div>
				<div class="num-plays-box">Number of Plays: <span class="num-plays">0</span></div>
			</div>
		</div>
	</div>
</div>

<div class="score-dialog" title="Top Score">
	<div class="score-dialog-body">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 high-score-local-box">
					<div class="high-score-local">Score: <span class="score">N/A</span></div>
				</div>

				<div class="col-sm-12 numspins-local-box">
					<div class="spins-local">Spins: <span class="spins">N/A</span></div>
				</div>
			</div>
		</div>
	</div>
</div>
