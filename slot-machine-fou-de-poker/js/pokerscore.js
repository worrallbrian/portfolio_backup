function sortNumber(a, b) {
	return ((a > b) ? 1 : ((a < b) ? -1 : 0));
}

function sortCards(a, b) {
	return ((a.value > b.value) ? 1 : ((a.value < b.value) ? -1 : 0));
}

function pairAnalysis(val2) {
	if (val2 == null) {
		return (null);
	}

	var pcv1 = [-1, -1, -1, -1, -1],
	val3 = [-1, -1, -1, -1, -1],
	pa = {},
	ij = 0;
	pa['pair_type'] = 0;
	pa['pair_high'] = "";
	pa['pair_low'] = "";

	for (ij = 0; ij < 5; ij++) {
		val3[ij] = val2[ij];
	}

	val3.sort(sortCards);

	for (ij = 0; ij < 5; ij++) {
		pcv1[ij] = (val3[ij]).value;
	}

	/*
	Pair Types:
	0 => Card High
	1 => Pair
	2 => 2 Pair
	3 => 3 of a Kind
	4 => Full House
	5 => 4 of a Kind
	6 => 5 of a Kind
	*/

	switch (true) {
		case (pcv1[0] == pcv1[1]):
			switch (true) {
				case (pcv1[0] == pcv1[2]):
					switch (true) {
						case (pcv1[0] == pcv1[3]):
							switch (true) {
								case (pcv1[0] == pcv1[4]):
									/* 1 == 2 == 3 == 4 == 5 */
									pa['pair_type'] = 6;

									break;
								default:
									/* 1 == 2 == 3 == 4 */
									pa['pair_type'] = 5;

									break;
							}

							break;
						case (pcv1[3] == pcv1[4]):
							/* 1 == 2 == 3, 4 == 5 */
							pa['pair_type'] = 4;
							pa['pair_low'] = (val3[3]).scoretext;

							break;
						default:
							/* 1 == 2 == 3 */
							pa['pair_type'] = 3;

							break;
					}

					pa['pair_high'] = (val3[0]).scoretext;

					break;
				case (pcv1[2] == pcv1[3]):
					switch (true) {
						case (pcv1[2] == pcv1[4]):
							/* 1 == 2, 3 == 4 == 5 */
							pa['pair_type'] = 4;
							pa['pair_high'] = (val3[2]).scoretext;
							pa['pair_low'] = (val3[0]).scoretext;

							break;
						default:
							/* 1 == 2, 3 == 4 */
							pa['pair_type'] = 2;
							pa['pair_high'] = ((pcv1[0] >= pcv1[2]) ? (val3[0]).scoretext : (val3[2]).scoretext);
							pa['pair_low'] = ((pcv1[0] < pcv1[2]) ? (val3[0]).scoretext : (val3[2]).scoretext);

							break;
					}

					break;
				case (pcv1[3] == pcv1[4]):
					/* 1 == 2, 4 == 5 */
					pa['pair_type'] = 2;
					pa['pair_high'] = ((pcv1[0] >= pcv1[3]) ? (val3[0]).scoretext : (val3[3]).scoretext);
					pa['pair_low'] = ((pcv1[0] < pcv1[3]) ? (val3[0]).scoretext : (val3[3]).scoretext);

					break;
				default:
					/* 1 == 2 */
					pa['pair_type'] = 1;
					pa['pair_high'] = (val3[0]).scoretext;

					break;
			}

			break;
		case (pcv1[1] == pcv1[2]):
			switch (true) {
				case (pcv1[1] == pcv1[3]):
					switch (true) {
						case (pcv1[1] == pcv1[4]):
							/* 2 == 3 == 4 == 5 */
							pa['pair_type'] = 5;

							break;
						default:
							/* 2 == 3 == 4 */
							pa['pair_type'] = 3;

							break;
					}

					pa['pair_high'] = (val3[1]).scoretext;

					break;
				case (pcv1[3] == pcv1[4]):
					/* 2 == 3, 4 == 5 */
					pa['pair_type'] = 2;
					pa['pair_high'] = ((pcv1[1] >= pcv1[3]) ? (val3[1]).scoretext : (val3[3]).scoretext);
					pa['pair_low'] = ((pcv1[1] < pcv1[3]) ? (val3[1]).scoretext : (val3[3]).scoretext);

					break;
				default:
					/* 2 == 3 */
					pa['pair_type'] = 1;
					pa['pair_high'] = (val3[1]).scoretext;

					break;
			}

			break;
		case ((pcv1[2] == pcv1[3])):
			switch (true) {
				case (pcv1[2] == pcv1[4]):
					/* 3 == 4 == 5 */
					pa['pair_type'] = 3;

					break;
				default:
					/* 3 == 4 */
					pa['pair_type'] = 1;

					break
			}

			pa['pair_high'] = (val3[2]).scoretext;

			break;
		case (pcv1[3] == pcv1[4]):
			/* 4 == 5 */
			pa['pair_type'] = 1;
			pa['pair_high'] = (val3[3]).scoretext;

			break;
	}

	pcv1 = null;
	val3 = null;

	return pa;
}

function checkHasFlush(pcr1) {
	return ((pcr1 != null) && (pcr1.length == 5) && (pcr1[0] == pcr1[1]) && (pcr1[0] == pcr1[2]) && (pcr1[0] == pcr1[3]) && (pcr1[0] == pcr1[4]));
}

function checkHasStraight(pcv1) {
	return ((pcv1 != null) && (pcv1.length == 5) && (parseInt(pcv1[1]) == (parseInt(pcv1[0]) + 1)) && (parseInt(pcv1[2]) == (parseInt(pcv1[0]) + 2)) && (parseInt(pcv1[3]) == (parseInt(pcv1[0]) + 3)) && (parseInt(pcv1[4]) == (parseInt(pcv1[0]) + 4)));
}

function getPokerStats(val1) {
	if (val1 == null) {
		return (null);
	}

	var pcv = [-1, -1, -1, -1, -1],
	pcr = [false, false, false, false, false],
	pairanalysis = null,
	stats1 = {},
	ij = 0;
	stats1['has_flush'] = 0;
	stats1['has_straight'] = 0;
	stats1['pair_type'] = 0;
	stats1['pair_high'] = "";
	stats1['pair_low'] = "";

	for (ij = 0; ij < 5; ij++) {
		pcv[ij] = (val1[ij]).value;
		pcr[ij] = (val1[ij]).decor;
	}

	if (checkHasFlush(pcr)) {
		stats1['has_flush'] = 1;
	}

	pcr = null;

	pcv.sort(sortNumber);

	if (checkHasStraight(pcv)) {
		stats1['has_straight'] = 1;
	}

	pcv = null;

	pairanalysis = pairAnalysis(val1);

	if (pairanalysis != null) {
		if ((pairanalysis['pair_type'] != null) && (pairanalysis['pair_type'] != "")) {
			stats1['pair_type'] = parseInt(pairanalysis['pair_type']);
		}

		if ((pairanalysis['pair_high'] != null) && (pairanalysis['pair_high'] != "")) {
			stats1['pair_high'] = "" + (pairanalysis['pair_high']).replace('"', "");
		}

		if ((pairanalysis['pair_low'] != null) && (pairanalysis['pair_low'] != "")) {
			stats1['pair_low'] = "" + (pairanalysis['pair_low']).replace('"', "");
		}
	}

	pairanalysis = null;

	return stats1;
}

function getPokerScoreText(val) {
	if (val == null) {
		return "--";
	}

	var val4 = [-1, -1, -1, -1, -1],
	stats = null,
	text = "",
	pairHigh = "",
	pairLow = "",
	pairType = 0,
	hasFlush = 0,
	hasStraight = 0,
	hasStraightFlush = 0,
	i = 0;

	stats = getPokerStats(val);

	if (stats != null) {
		if ((stats['pair_high'] != null) && (stats['pair_high'] != "")) {
			pairHigh = "" + (stats['pair_high']).replace('"', "");
		}

		if ((stats['pair_low'] != null) && (stats['pair_low'] != "")) {
			pairLow = "" + (stats['pair_low']).replace('"', "");
		}

		if ((stats['pair_type'] != null) && (stats['pair_type'] != "")) {
			pairType = parseInt(stats['pair_type']);
		}

		if ((stats['has_flush'] != null) && (parseInt(stats['has_flush']) == 1)) {
			hasFlush = 1;
		}

		if ((stats['has_straight'] != null) && (parseInt(stats['has_straight']) == 1)) {
			hasStraight = 1;
		}

		if ((hasStraight == 1) && (hasFlush == 1)) {
			hasStraightFlush = 1;
		}
	}

	stats = null;

	for (i = 0; i < 5; i++) {
		val4[i] = val[i];
	}

	val4.sort(sortCards);

	switch (true) {
		case (pairType == 6):
			text = "Cinq<br />" + pairHigh + "s";
			break;
		case (hasStraightFlush == 1):
			text = "Quinte<br />";
			text += (((val4[0] != null) && ((val4[0]).isTen) && (val4[4] != null) && ((val4[4]).isAce)) ? "Royale" : "Flush") + "<br />";
			text += ((val4[0] != null) ? ((val4[0]).scoretext).replace('"', "") : "?");
			text += " - " + ((val4[4] != null) ? ((val4[4]).scoretext).replace('"', "") : "?");
			text += " " + ((val4[0] != null) ? ((val4[0]).ascii).replace('"', "") : "?");
			break;
		case (pairType == 5):
			text = "Quatre<br />" + pairHigh + "s";
			break;
		case (pairType == 4):
			text = "Full House<br />" + pairHigh + "s & " + pairLow + "s";
			break;
		case (hasFlush == 1):
			text = "Flush<br />" + ((val4[0] != null) ? ((val4[0]).ascii).replace('"', "") : "?");
			break;
		case (hasStraight == 1):
			text = "Droit<br />" + ((val4[0] != null) ? ((val4[0]).scoretext).replace('"', "") : "?");
			text += " - " + ((val4[4] != null) ? ((val4[4]).scoretext).replace('"', "") : "?");
			break;
		case (pairType == 3):
			text = "Trois<br />" + pairHigh + "s";
			break;
		default:
			text = "Rien";
			break;
	}

	val4 = null;

	return text;
}

function getPokerScoreValue(val) {
	if (val == null) {
		return "--";
	}

	var val4 = [-1, -1, -1, -1, -1],
	stats = null,
	pairHigh = "",
	pairLow = "",
	pairType = 0,
	hasFlush = 0,
	hasStraight = 0,
	hasStraightFlush = 0,
	value = 0,
	i = 0;

	stats = getPokerStats(val);

	if (stats != null) {
		if ((stats['pair_high'] != null) && (stats['pair_high'] != "")) {
			pairHigh = "" + (stats['pair_high']).replace('"', "");
		}

		if ((stats['pair_low'] != null) && (stats['pair_low'] != "")) {
			pairLow = "" + (stats['pair_low']).replace('"', "");
		}

		if ((stats['pair_type'] != null) && (stats['pair_type'] != "")) {
			pairType = parseInt(stats['pair_type']);
		}

		if ((stats['has_flush'] != null) && (parseInt(stats['has_flush']) == 1)) {
			hasFlush = 1;
		}

		if ((stats['has_straight'] != null) && (parseInt(stats['has_straight']) == 1)) {
			hasStraight = 1;
		}

		if ((hasStraight == 1) && (hasFlush == 1)) {
			hasStraightFlush = 1;
		}
	}

	stats = null;

	for (i = 0; i < 5; i++) {
		val4[i] = val[i];
	}

	val4.sort(sortCards);

	switch (true) {
		case (pairType == 6):
			value = 25;
			break;
		case (hasStraightFlush == 1):
			value = (((val4[0] != null) && ((val4[0]).isTen) && (val4[4] != null) && ((val4[4]).isAce)) ? 20 : 15);
			break;
		case (pairType == 5):
			value = 10;
			break;
		case (pairType == 4):
			value = 7;
			break;
		case (hasFlush == 1):
			value = 5;
			break;
		case (hasStraight == 1):
			value = 3;
			break;
		case (pairType == 3):
			value = 2;
			break;
		default:
			value = 0;
			break;
	}

	val4 = null;

	return value;
}

function PokerScore(val) {
	this.orig = val;
	this.text = getPokerScoreText(val);
	this.value = getPokerScoreValue(val);

	this.getOrig = function() { return this.orig; };
	this.getText = function() { return this.text; };
	this.getValue = function() { return this.value; };
}
