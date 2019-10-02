var aces = [0, 13, 26, 39],
twos = [1, 14, 27, 40],
threes = [2, 15, 28, 41],
fours = [3, 16, 29, 42],
fives = [4, 17, 30, 43],
sixes = [5, 18, 31, 44],
sevens = [6, 19, 32, 45],
eights = [7, 20, 33, 46],
nines = [8, 21, 34, 47],
tens = [9, 22, 35, 48],
jacks = [10, 23, 36, 49],
queens = [11, 24, 37, 50],
kings = [12, 25, 38, 51],
hearts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
clubs = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
spades = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
diamonds = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
reds = hearts.concat(diamonds);

function getCardValue(val) {
	var sum = 0,
	v = parseInt(val);

	switch (true) {
		case (jQuery.inArray(v, twos) !== -1):
			sum = 1;
			break;
		case (jQuery.inArray(v, threes) !== -1):
			sum = 2;
			break;
		case (jQuery.inArray(v, fours) !== -1):
			sum = 3;
			break;
		case (jQuery.inArray(v, fives) !== -1):
			sum = 4;
			break;
		case (jQuery.inArray(v, sixes) !== -1):
			sum = 5;
			break;
		case (jQuery.inArray(v, sevens) !== -1):
			sum = 6;
			break;
		case (jQuery.inArray(v, eights) !== -1):
			sum = 7;
			break;
		case (jQuery.inArray(v, nines) !== -1):
			sum = 8;
			break;
		case (jQuery.inArray(v, tens) !== -1):
			sum = 9;
			break;
		case (jQuery.inArray(v, jacks) !== -1):
			sum = 10;
			break;
		case (jQuery.inArray(v, queens) !== -1):
			sum = 11;
			break;
		case (jQuery.inArray(v, kings) !== -1):
			sum = 12;
			break;
		case (jQuery.inArray(v, aces) !== -1):
			sum = 13;
			break;
		default:
			sum = 0;
			break;
	}

	return(sum);
}

function getCardText(val) {
	var text = "",
	v = parseInt(val);

	switch (true) {
		case (v == -1):
			text = "basics";
			break;
		case (jQuery.inArray(v, aces) !== -1):
			text = "ace";
			break;
		case (jQuery.inArray(v, jacks) !== -1):
			text = "jack";
			break;
		case (jQuery.inArray(v, queens) !== -1):
			text = "queen";
			break;
		case (jQuery.inArray(v, kings) !== -1):
			text = "king";
			break;
		default:
			text = "number" + ((v % 13) + 1);
			break;
	}

	return(text);
}

function getCardIsRed(val) {
	return (jQuery.inArray(parseInt(val), reds) !== -1);
}

function getCardDecor(val) {
	var decor = "",
	v = parseInt(val);

	if (jQuery.inArray(v, hearts) !== -1) {
		decor = "heart";
	} else if (jQuery.inArray(v, clubs) !== -1) {
		decor = "club";
	} else if (jQuery.inArray(v, spades) !== -1) {
		decor = "spade";
	} else if (jQuery.inArray(v, diamonds) !== -1) {
		decor = "diamond";
	}

	return(decor);
}

function getCardAscii(val) {
	var ascii = "",
	v = parseInt(val);

	if (jQuery.inArray(v, hearts) !== -1) {
		ascii = "\u2665";
	} else if (jQuery.inArray(v, clubs) !== -1) {
		ascii = "\u2663";
	} else if (jQuery.inArray(v, spades) !== -1) {
		ascii = "\u2660";
	} else if (jQuery.inArray(v, diamonds) !== -1) {
		ascii = "\u25C6";
	}

	return(ascii);
}

function getCardIsAce(val) {
	return (jQuery.inArray(parseInt(val), aces) !== -1);
}

function getCardIsTen(val) {
	return (jQuery.inArray(parseInt(val), tens) !== -1);
}

function getCardScoreText(val) {
	var text = "",
	v = parseInt(val);

	switch (true) {
		case (v == -1):
			text = "-";
			break;
		case (jQuery.inArray(v, aces) !== -1):
			text = "A";
			break;
		case (jQuery.inArray(v, jacks) !== -1):
			text = "J";
			break;
		case (jQuery.inArray(v, queens) !== -1):
			text = "Q";
			break;
		case (jQuery.inArray(v, kings) !== -1):
			text = "K";
			break;
		default:
			text = "" + ((v % 13) + 1);
			break;
	}

	return(text);
}

function Card(val) {
	this.orig = parseInt(val);
	this.value = getCardValue(val);
	this.text = getCardText(val);
	this.isRed = getCardIsRed(val);
	this.decor = getCardDecor(val);
	this.ascii = getCardAscii(val);
	this.isAce = getCardIsAce(val);
	this.isTen = getCardIsTen(val);
	this.scoretext = getCardScoreText(val);

	this.getOrig = function() { return this.orig; };
	this.getValue = function() { return this.value; };
	this.getText = function() { return this.text; };
	this.checkIsRed = function() { return this.isRed; };
	this.getDecor = function() { return this.decor; };
	this.getAscii = function() { return this.ascii; };
	this.checkIsAce = function() { return this.isAce; };
	this.checkIsTen = function() { return this.isTen; };
	this.getScoreText = function() { return this.scoretext; };
}
