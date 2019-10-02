function drawCard(card_no, to_hide, is_house) {
	var v = "",
	card_isred = false,
	card_decor = "",
	card_text = "",
	card_ascii = "",
	to_h = (((to_hide != null) && (parseInt(to_hide) == 1)) ? 1 : 0),
	turnover_type = ((to_hide != null) ? parseInt(to_hide) : 0);
	var card_type = (((is_house != null) && (parseInt(is_house) == 1)) ? ((turnover_type == 3) ? "house houseflipdelay" : ((turnover_type == 2) ? "house houseflip" : "house")) : "player"),
	this_card = null;
	if ((card_no != null) && (parseInt(card_no) > -1)) {
		this_card = new Card(card_no);
	}

	if ((this_card != null) && (this_card != "")) {
		card_isred = ((to_h == 0) ? ((this_card.checkIsRed()) ? true : false) : false);
		card_decor = ((to_h == 0) ? this_card.getDecor() : "neutral");
		card_text = ((to_h == 0) ? this_card.getText() : "basics");
		card_ascii = ((to_h == 0) ? this_card.getAscii() : "\u2048");

		v = "<div class=\"img-box\">";
		v += "<div class=\"slot-image play slot-" + card_type + " " + ((to_h == 1) ? "neutral-card" : ((card_isred) ? "red-card" : "black-card")) + " " + card_decor + " " + card_text + "\" data-isred=\"" + ((to_h == 1) ? "-1" : ((card_isred) ? "1" : "0")) + "\" data-decor=\"" + card_decor + "\" data-text=\"" + card_text + "\" data-ascii=\"" + card_ascii + "\">";
		v += "</div></div>";
	}

	this_card = null;

	return v;
}

function drawVR() {
	var row = "<div class=\"slots-vr\">";
	row += "<div class=\"game-name-box\">";
	row += "<div class=\"game-title\">Blackjack</div>";
	row += "<div class=\"game-origin\">@</div>";
	row += "<div class=\"game-host\">Basics Resort</div>";
	row += "</div></div>";
	return row;
}
