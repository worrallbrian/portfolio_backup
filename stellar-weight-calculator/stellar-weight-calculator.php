<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="js/angular1.6.9.min.js"></script>
<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="../math-libraries/big.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/stellar-weight-calculator.css" />
<div data-ng-app="stellarWeightCalculator" data-ng-controller="swcControl" data-ng-init="nullBodies()">
  <div class="container swc-box ng-cloak">
    <div class="row inputs-box">
      <div class="col-sm-6"><input type="number" min="0" name="weightK" data-ng-model="weightKilograms" data-ng-change="computeWeightK()" /> <label for="weightK">kgs</label></div>
	  <div class="col-sm-6"><input type="number" min="0" name="weightP" data-ng-model="weightPounds" data-ng-change="computeWeightP()" /> <label for="weightP">lbs</label></div>
    </div>
	<div class="row stellar">
	  <div class="col-sm-6 odd">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name mercury">Mercury (0.3773G)</li>
          <li class="list-group-item">{{wMercuryK}} kgs</li>
	      <li class="list-group-item">{{wMercuryP}} lbs</li>
		</ul>
	  </div>
	  <div class="col-sm-6 even">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name venus">Venus (0.9045G)</li>
          <li class="list-group-item">{{wVenusK}} kgs</li>
	      <li class="list-group-item">{{wVenusP}} lbs</li>
		</ul>
	  </div>
    </div>
    <div class="row stellar">
	  <div class="col-sm-6 odd">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name earth">Earth (1G)</li>
          <li class="list-group-item">{{wEarthK}} kgs</li>
	      <li class="list-group-item">{{wEarthP}} lbs</li>
		</ul>
	  </div>
	  <div class="col-sm-6 even">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name moon">The Moon (0.1656G)</li>
          <li class="list-group-item">{{wMoonK}} kgs</li>
	      <li class="list-group-item">{{wMoonP}} lbs</li>
		</ul>
	  </div>
    </div>
	<div class="row stellar">
	  <div class="col-sm-6 odd">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name mars">Mars (0.3783G)</li>
          <li class="list-group-item">{{wMarsK}} kgs</li>
	      <li class="list-group-item">{{wMarsP}} lbs</li>
		</ul>
	  </div>
	  <div class="col-sm-6 even">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name jupiter">Jupiter (2.5279G)</li>
          <li class="list-group-item">{{wJupiterK}} kgs</li>
	      <li class="list-group-item">{{wJupiterP}} lbs</li>
		</ul>
	  </div>
    </div>
	<div class="row stellar">
	  <div class="col-sm-6 odd">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name saturn">Saturn (1.0605G)</li>
          <li class="list-group-item">{{wSaturnK}} kgs</li>
	      <li class="list-group-item">{{wSaturnP}} lbs</li>
		</ul>
	  </div>
	  <div class="col-sm-6 even">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name uranus">Uranus (0.9045G)</li>
          <li class="list-group-item">{{wUranusK}} kgs</li>
	      <li class="list-group-item">{{wUranusP}} lbs</li>
		</ul>
	  </div>
    </div>
	<div class="row stellar">
	  <div class="col-sm-6 odd">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name neptune">Neptune (1.137G)</li>
          <li class="list-group-item">{{wNeptuneK}} kgs</li>
	      <li class="list-group-item">{{wNeptuneP}} lbs</li>
		</ul>
	  </div>
	  <div class="col-sm-6 even">
	    <ul class="list-group">
	      <li class="list-group-item stellar-name pluto">Pluto (0.0673G)</li>
          <li class="list-group-item">{{wPlutoK}} kgs</li>
	      <li class="list-group-item">{{wPlutoP}} lbs</li>
		</ul>
	  </div>
    </div>
  </div>
</div>
<script type="text/javascript" src="js/swcControl.js"></script>
