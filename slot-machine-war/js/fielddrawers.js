function drawCard(card_no, is_house) {
	var v = "",
	card_isred = false,
	card_decor = "",
	card_text = "",
	card_ascii = "",
	card_type = (((is_house != null) && (parseInt(is_house) == 1)) ? "house" : "player"),
	this_card = null;

	if ((card_no != null) && (parseInt(card_no) > -1)) {
		this_card = new Card(card_no);
	}

	if ((this_card != null) && (this_card != "")) {
		card_isred = ((this_card.checkIsRed()) ? true : false);
		card_decor = this_card.getDecor();
		card_text = this_card.getText();
		card_ascii = this_card.getAscii();

		v = "<div class=\"slot-con slot-con-" + card_type + "\">";
		v += "<div class=\"img-box\">";
		v += "<div class=\"slot-image slot-" + card_type + " play " + ((card_isred) ? "red-card" : "black-card") + " " + card_decor + " " + card_text + "\" data-isred=\"" + ((card_isred) ? "1" : "0") + "\" data-decor=\"" + card_decor + "\" data-text=\"" + card_text + "\" data-ascii=\"" + card_ascii + "\">";
		v += "</div></div>";
	}

	this_card = null;

	return v;
}

function drawVR() {
	return ("<div class=\"slots-vr\"></div>");
}
