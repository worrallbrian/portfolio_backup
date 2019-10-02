var app = angular.module('stellarWeightCalculator', []);
app.controller('swcControl', function($scope) {
	$scope.weightKilograms = "";
	$scope.weightPounds = "";

	$scope.setMercury = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wMercuryK = parseFloat(kilograms.times(0.3773).toString());
			$scope.wMercuryP = parseFloat(pounds.times(0.3773).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wMercuryK = "0";
			$scope.wMercuryP = "0";
		}
	}

	$scope.setVenus = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wVenusK = parseFloat(kilograms.times(0.9045).toString());
			$scope.wVenusP = parseFloat(pounds.times(0.9045).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wVenusK = "0";
			$scope.wVenusP = "0";
		}
	}

	$scope.setEarth = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wEarthK = parseFloat(kilograms.toString());
			$scope.wEarthP = parseFloat(pounds.toString());
			$scope.wMoonK = parseFloat(kilograms.times(0.1656).toString());
			$scope.wMoonP = parseFloat(pounds.times(0.1656).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wEarthK = "0";
			$scope.wEarthP = "0";
			$scope.wMoonK = "0";
			$scope.wMoonP = "0";
		}
	}

	$scope.setMars = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wMarsK = parseFloat(kilograms.times(0.3783).toString());
			$scope.wMarsP = parseFloat(pounds.times(0.3783).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wMarsK = "0";
			$scope.wMarsP = "0";
		}
	}

	$scope.setJupiter = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wJupiterK = parseFloat(kilograms.times(2.5279).toString());
			$scope.wJupiterP = parseFloat(pounds.times(2.5279).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wJupiterK = "0";
			$scope.wJupiterP = "0";
		}
	}

	$scope.setSaturn = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wSaturnK = parseFloat(kilograms.times(1.0605).toString());
			$scope.wSaturnP = parseFloat(pounds.times(1.0605).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wSaturnK = "0";
			$scope.wSaturnP = "0";
		}
	}

	$scope.setUranus = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wUranusK = parseFloat(kilograms.times(0.9045).toString());
			$scope.wUranusP = parseFloat(pounds.times(0.9045).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wUranusK = "0";
			$scope.wUranusP = "0";
		}
	}

	$scope.setNeptune = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wNeptuneK = parseFloat(kilograms.times(1.137).toString());
			$scope.wNeptuneP = parseFloat(pounds.times(1.137).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wNeptuneK = "0";
			$scope.wNeptuneP = "0";
		}
	}

	$scope.setPluto = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			$scope.wPlutoK = parseFloat(kilograms.times(0.0673).toString());
			$scope.wPlutoP = parseFloat(pounds.times(0.0673).toString());

			kilograms = null;
			pounds = null;
		} else {
			$scope.wPlutoK = "0";
			$scope.wPlutoP = "0";
		}
	}

	$scope.nullBodies = function() {
		$scope.setMercury(null, null);
		$scope.setVenus(null, null);
		$scope.setEarth(null, null);
		$scope.setMars(null, null);
		$scope.setJupiter(null, null);
		$scope.setSaturn(null, null);
		$scope.setUranus(null, null);
		$scope.setNeptune(null, null);
		$scope.setPluto(null, null);
	}

	$scope.nullKilograms = function() {
		$scope.weightKilograms = "";
		$scope.nullBodies();
	}

	$scope.nullPounds = function() {
		$scope.weightPounds = "";
		$scope.nullBodies();
	}

	$scope.setBodies = function(kgs, lbs) {
		if ((kgs != null) && (kgs != "") && (lbs != null) && (lbs != "")) {
			var kilograms = null,
			pounds = null;

			try {
				kilograms = new Big(kgs);
				pounds = new Big(lbs);
			} catch(e) {
				kilograms = new Big(0);
				pounds = new Big(0);
			}

			kilograms = kilograms.toString();
			pounds = pounds.toString();

			$scope.setMercury(kilograms, pounds);
			$scope.setVenus(kilograms, pounds);
			$scope.setEarth(kilograms, pounds);
			$scope.setMars(kilograms, pounds);
			$scope.setJupiter(kilograms, pounds);
			$scope.setSaturn(kilograms, pounds);
			$scope.setUranus(kilograms, pounds);
			$scope.setNeptune(kilograms, pounds);
			$scope.setPluto(kilograms, pounds);

			kilograms = null;
			pounds = null;
		}
	}

	$scope.computeWeight = function(weight, source) {
		if ((weight != null) && (weight != "") && (source != null) && (source != "")) {
			var w = null,
			kilograms = "",
			pounds = "",
			so = "";

			try {
				w = new Big(weight);
			} catch(e) {
				w = new Big(0);
			}

			if (angular.isNumber(parseFloat(w.toString()))) {
				so = source.replace(/"/g, "").replace(/(<([^>]+)>)/ig, "");
				kilograms = ((so == "lbs") ? w.div(2.20462).toString() : w.toString());
				pounds = ((so == "kgs") ? w.times(2.20462).toString() : w.toString());

				if (so == "kgs") {
					$scope.weightPounds = parseFloat(pounds);
				} else if (so == "lbs") {
					$scope.weightKilograms = parseFloat(kilograms);
				}

				$scope.setBodies(kilograms, pounds);
			}

			w = null;
		} else {
			$scope.nullBodies();
		}
	}

	$scope.computeWeightK = function() {
		if (($scope.weightKilograms != null) && ($scope.weightKilograms != "")) {
			$scope.computeWeight(parseFloat($scope.weightKilograms), "kgs");
		} else {
			$scope.nullPounds();
		}
    }

	$scope.computeWeightP = function() {
		if (($scope.weightPounds != null) && ($scope.weightPounds != "")) {
			$scope.computeWeight(parseFloat($scope.weightPounds), "lbs");
		} else {
			$scope.nullKilograms();
		}
    }
});
